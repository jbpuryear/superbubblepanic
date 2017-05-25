module.exports = Level;


var entities = require('./entities/entities.js');
var BrkPlat = require('./entities/BrkPlat.js');


function Level() {
    return this;
}


Level.prototype = {

    entities: entities,


    init: function(map) {
        this.mapName = map;
        this.map = this.add.tilemap(map);
        this.physics.p2.updateBoundsCollisionGroup();
        this.physics.p2.setImpactEvents(true);
        this.physics.p2.gravity.y = 400;
        this.physics.p2.applyGravity = true;
        this.physics.p2.applyDamping = false;

        this.players = this.add.group();
        this.enemies = this.add.group();
        this.items = this.add.group();
        this.platforms = this.add.group();

        this.itemsCG = this.physics.p2.createCollisionGroup();
        this.playersCG = this.physics.p2.createCollisionGroup();
        this.enemiesCG = this.physics.p2.createCollisionGroup();
        this.platformsCG = this.physics.p2.createCollisionGroup();
        this.bulletsCG = this.physics.p2.createCollisionGroup();

        this.worldMaterial = this.physics.p2.createMaterial('worldMaterial');
        this.physics.p2.setWorldMaterial(this.worldMaterial);
        this.playerMaterial = this.physics.p2.createMaterial('playerMaterial');
        this.platformMaterial = this.physics.p2.createMaterial('platformMaterial');
        this.enemyMaterial = this.physics.p2.createMaterial('enemyMaterial');

        this.physics.p2.createContactMaterial(this.platformMaterial, this.enemyMaterial, {
            restitution: 1,
            friction: 0
        })
        this.physics.p2.createContactMaterial(this.enemyMaterial, this.worldMaterial, {
            restitution: 1,
            friction: 0
        })
        this.physics.p2.createContactMaterial(this.playerMaterial, this.platformMaterial, {
            restitution: 0,
            friction: 0
        })

        this.buffs = [];
        this.bulletTime = 1;


    },

    
    create: function() {
        this.scale.setGameSize(this.map.widthInPixels, this.map.heightInPixels);
        this.map.addTilesetImage('tiles', 'tiles', 8, 8);
        this.map.createLayer('background');
        var plats = this.physics.p2.convertCollisionObjects(this.map, 'platform', true);
        plats.forEach(function(platform, i) {
            var data = this.map.objects.platform[i];
            platform.setCollisionGroup(this.platformsCG);
            platform.collides([this.enemiesCG, this.playersCG, this.itemsCG]);
            if (data.properties && data.properties.breakable) {
                var drop = this.parseDrop(data.properties.drop);
                var brkplat = new BrkPlat(this, data, platform, drop);
                platform.collides(this.bulletsCG, brkplat.break, brkplat);
            } else if (data.properties && data.properties.passable) {
                // TODO: Passables should be their own thing.
                // new BrkPlat(this, data, platform);
            } else {
                platform.collides(this.bulletsCG);
            }
            platform.setMaterial(this.platformMaterial);
        }, this);
        this.map.objects.object.forEach(this.addEntity, this);
        // TODO Change if we ever have more than one player.
        this.p1 = this.players.getChildAt(0);

        var GOtext = this.make.retroFont('font-small', 8, 8, Phaser.RetroFont.TEXT_SET2);
        GOtext.text = 'x: retry c: menu';
        var gameOverScreen = this.make.graphics();
        gameOverScreen.beginFill(0x000000);
        gameOverScreen.drawRect(0, 0, this.world.width, this.world.height);
        gameOverScreen.endFill();
        this.gameOverScreen = this.make.image(0, 0, gameOverScreen.generateTexture());
        var t = this.make.image(16, this.world.height-16, GOtext);
        t.anchor.setTo(0, 1);
        this.gameOverScreen.addChild(t);
        this.gameOverScreen.alpha = 0;
        this.world.addChild(this.gameOverScreen);

        this.world.addChild(this.players);
    },


    update: function() {
        for (var i=this.buffs.length-1; i>=0; i--) {
            var buff = this.buffs[i];
            buff.timeLeft -= this.time.elapsed;
            if (buff.timeLeft >= 0) {
                if (typeof buff.update === 'function') buff.update();
            } else {
                if (typeof buff.stop === 'function') buff.stop();
                this.buffs.splice(i, 1);
            }
        }

        if (!this.p1.alive) { this.gameOver(); }
    },


    gameOver: function() {
        var self = this;
        this.input.keyboard.addKey(Phaser.Keyboard.X).onDown.addOnce(function() {
            self.state.start(self.key, true, false, self.mapName);
        });
        this.input.keyboard.addKey(Phaser.Keyboard.C).onDown.addOnce(this.exit.bind(this));
        this.add.tween(this.gameOverScreen).to({alpha: 0.8}, 100).start();
        this.time.slowMotion = 6;
    },


    exit: function() {
        this.state.start('Menu');
    },


    shutdown: function() {
        this.stage.removeChild(this.gameOverScreen);
        this.time.slowMotion = 1;
    },


    addEntity: function(data) {
        data.properties = data.properties || {};
        var type = data.type;
        var drop = this.parseDrop(data.properties.drop);
        // Tiled uses different coordinates than Phaser.
        data.x = data.x + data.width / 2;
        data.y = data.y + data.height / 2;
        console.log('Creating ' + type + '...');
        if (!this.entities.hasOwnProperty(type)) {
            throw "Failed to read Tiled map, no game object of type '" + type + ".'";
        }
        return new this.entities[type](this, data, drop);
    },


    /*
    * The tiled representation of enemies have a recursive JSON list
    * of what they drop. It looks like:
    *      [
    *          item_this_enemy_drops,
    *          [
    *              left_child's_list,
    *              right_child's_list
    *          ]
    *      ]
    * This function parses that list and creates the appropriate nested
    * array of game entities.
    */
    parseDrop: function(drop) {
        if (drop === '') return null;

        if (Array.isArray(drop)) return drop.map(this.parseDrop, this);

        if (typeof drop === 'string') {
            // Hack. Only objects are valid JSON, so an
            // error lets us know we've hit an item name.
            try {
                var dropOb = JSON.parse(drop);
                return this.parseDrop(dropOb);
            } catch (e) {
                if (e instanceof SyntaxError) {
                    console.log('Processing Tiled object drop, ' + drop + '...');
                    var item = this.addEntity({x: 0, y: 0, type: drop});
                    item.kill();
                    return item;
                } else {
                    throw e;
                }
            }
        }
        return null;
    }
}
