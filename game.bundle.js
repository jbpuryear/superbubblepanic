(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SBP = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
    "images": [
        {
            "type": "spritesheet",
            "key": "player",
            "url": "assets/images/player.png",
            "frameWidth": 16,
            "frameHeight": 16
        },
        {
            "type": "spritesheet",
            "key": "tiles",
            "url": "assets/images/tiles.png",
            "frameWidth": 8,
            "frameHeight": 8
        },
        {
            "type": "image",
            "key": "bullet",
            "url": "assets/images/bullet.png"
        },
        {
            "type": "image",
            "key": "gun",
            "url": "assets/images/gun.png"
        },
        {
            "type": "image",
            "key": "enemy",
            "url": "assets/images/enemy.png"
        }
    ],
    
    "levels": [
        {
            "type": "tilemap",
            "key": "level1",
            "url": "assets/levels/level1.json",
            "format": "TILED_JSON"
        }
    ]
}

},{}],2:[function(require,module,exports){
module.exports = (function() {
    Boot = function() {
        return this;
    };

    Boot.prototype = {
        init: function() {
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
            this.game.physics.startSystem(Phaser.Physics.P2JS);
        },

        create: function() {
            this.state.start('Load');
        }
    }

    return Boot;
})();

},{}],3:[function(require,module,exports){
module.exports = BrkPlat;

function BrkPlat(state, data) {
    var width = data.width;
    var height = data.height;
    var texture = new Phaser.BitmapData(state.game, width, height);
    texture.canvas.width = width;
    texture.canvas.height = height;
    var ctx = texture.ctx;
    var grd = ctx.createLinearGradient(0, 0, width, height);
    grd.addColorStop(.4, 'blue');
    grd.addColorStop(0.5, 'white');
    grd.addColorStop(.6, '#ADD8E6');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, width, height);
    
    Phaser.Sprite.call(this, state.game, data.x, data.y, texture.generateTexture());
    texture.destroy();

    state.physics.p2.enable(this);
    state.platforms.add(this);
    
    this.body.static = true;
    this.body.setCollisionGroup(state.platformsCG);
    this.body.collides([state.enemiesCG, state.playersCG, state.itemsCG]);
    this.body.collides(state.bulletsCG, this.break, this);
    this.body.setMaterial(state.platformMaterial);
}

BrkPlat.prototype = Object.create(Phaser.Sprite.prototype);

BrkPlat.prototype.break = function() {
    this.destroy();
}

},{}],4:[function(require,module,exports){
module.exports = (function() {

    Bullet = function(game, x, y, texture) {
        Phaser.Sprite.call(this, game, x, y, texture);
        this.kill();
        game.physics.p2.enable(this);
        this.body.setCircle(this.width/2);
        this.body.data.gravityScale = 0;
        this.body.collideWorldBounds = false;
        this.body.mass = 1.25;
        this.checkWorldBounds = true;
        this.outOfBoundsKill = true;
    }

    Bullet.prototype = Object.create(Phaser.Sprite.prototype);

    Bullet.prototype.die = function() {
        this.kill();
    }

    Bullet.prototype.fire = function(x, y, theta, speed) {
        this.reset(x, y);
        this.body.rotation = theta;
        this.body.velocity.x = Math.cos(theta) * speed;
        this.body.velocity.y = Math.sin(theta) * speed;
    } 

    return Bullet;
})();

},{}],5:[function(require,module,exports){
module.exports = (function() {

    Enemy = function(game, x, y, texture, width, velx, vely, drop) {
        Phaser.Group.call(this, game);
        if (width < this.minWidth) { return; }
        var i = 0;
        var w = width;
        while (w >= this.minWidth) {
            w /= 2;
            i++;
        }
        i = Math.pow(2, i);
        this.createMultiple(i, texture);
        this.forEach(function(enemy) {
            game.physics.p2.enable(enemy);
            enemy.cirkle = enemy.body.setCircle(10);
            enemy.body.fixedRotation = true;
            enemy.events.onKilled.add(this.onDeath, this);
        }, this);
        this.spawn(x, y, width, velx, vely, drop);
    }


    Enemy.prototype = Object.create(Phaser.Group.prototype);

    Enemy.prototype.minWidth = 8;

    Enemy.prototype.spawn = function(x, y, width, velx, vely, drop) {
        velx = velx || 0;
        vely = vely || 0;
        drop = drop || null;
        var enemy = this.getFirstDead();
        if (!enemy || width < this.minWidth) { return null; }
        enemy.width = width;
        enemy.height = width;
        enemy.drop = drop;
        enemy.cirkle.radius = enemy.game.physics.p2.pxm(width / 2);
        enemy.reset(x, y);
        enemy.body.velocity.x = velx;
        enemy.body.velocity.y = vely;
        return enemy;
    }

    Enemy.prototype.onDeath = function(enemy) {
        var width = enemy.width / 2;
        var x = enemy.x;
        var y = enemy.y;
        var velx = Math.abs(enemy.body.velocity.x);
        var vely = -Math.abs(enemy.body.velocity.y);
        var drop = dropL = dropR = null;
        if (Array.isArray(enemy.drop)) {
            drop = enemy.drop[0] || null;
            dropL = enemy.drop[1] || null;
            dropR = enemy.drop[2] || null;
        } else {
            drop = enemy.drop || null;
        }
        enemy.drop = null;
        if (drop && drop instanceof Phaser.Sprite) {
            drop.reset(x, y);
        }
        this.spawn(x - width/2, y, width, -velx, vely, dropL)
        this.spawn(x + width/2, y, width, velx, vely, dropR)
    }

    return Enemy;
})();

},{}],6:[function(require,module,exports){
var Bullet = require('./Bullet.js');

module.exports = (function() {

    Gun = function(game, x, y, options) {
        options = options || {};

        var texture = options.texture;
        Phaser.Sprite.call(this, game, x, y, texture);
        game.physics.p2.enable(this);

        this.rate = options.rate || 100;
        this.auto = options.auto || false;
        this.spread = options.spread || 0;
        this.accuracy = options.accuracy || 0;
        this.bulletSpeed = options.bulletSpeed || 300;
        this.speedVar = options.speedVar || 0;

        var clips = options.clips || 1;
        var clipSize = options.clipSize || 3;
        var bulletTexture = options.bulletTexture;
        
        this.clips = [];
        this.lastShot = 0;

        for (var i=0; i<clips; i++) {
            var clip = new Phaser.Group(game);
            for (var j=0; j<clipSize; j++) {
                var bullet = new Bullet(game, 0, 0, bulletTexture);
                clip.add(bullet);
            }
            this.clips.push(clip);
        }
    }

    Gun.prototype = Object.create(Phaser.Sprite.prototype);

    Gun.prototype.pickUp = function(_, playerBody) {
        playerBody.sprite.equip(this);
    }

    Gun.prototype.fire = function(newShot) {
        // TODO: should only fire if every clip can fire.
        if (this.auto || newShot) {
            var now = this.game.time.now;
            if (now - this.lastShot < this.fireRate) { return; }
            var x = this.worldPosition.x;
            var y = this.worldPosition.y;
            var theta = this.rotation;
            this.clips.forEach(function(clip, i) {
                var bullet = clip.getFirstDead();
                if (bullet) {
                    var speed = this.bulletSpeed + (Math.random()*2 - 1)*this.speedVar;
                    var bulletTheta = theta + (this.spread/this.clips.length *i - this.spread/2) + (Math.random()*2 - 1)*this.accuracy;
                    bullet.fire(x, y, bulletTheta, speed);
                }
            }, this);
        }
    }

    return Gun;
})();

},{"./Bullet.js":4}],7:[function(require,module,exports){
module.exports = (function() {

    function Player(game, x, y, sprite) {
        // This three-part sprite shenanigans lets us control
        // whether the gun is rendered above or below the character.
        x = x || 0;
        y = y || 0;
        Phaser.Sprite.call(this, game, x, y);
        this.character = new Phaser.Sprite(game, 0, 0, sprite);
        this.character.anchor.setTo(0.5);
        game.physics.p2.enable(this)
        this.body.fixedRotation = true;
        this.body.setRectangle(this.character.width/2, this.character.height);
        var groundSensor = this.body.addRectangle(this.character.width*2/3, 2, 0, this.character.height/2);
        groundSensor.sensor = true;
        this.standing = 0;
        this.body.onBeginContact.add(function(){ if(arguments[2] === groundSensor) this.standing++ }, this);
        this.body.onEndContact.add(function(){ if(arguments[2] === groundSensor) this.standing-- }, this);

        this.addChild(this.character);

        this.maxFuel = 2000;
        this.fuel = this.maxFuel;
        this.speed = 100;
    }

    Player.prototype = Object.create(Phaser.Sprite.prototype);

    Player.prototype.equip = function(weapon) {
        if (this.weapon instanceof Phaser.Sprite) this.weapon.destroy();
        if (weapon.body) weapon.body.destroy();
        weapon.anchor.setTo(0, 0.5);
        weapon.pivot.setTo(-Math.abs(this.character.width/8), 0);
        weapon.x = 0;
        weapon.y = 0;
        this.weapon = weapon;
        this.addChild(weapon);
    }

    Player.prototype.goLeft = function() {
        this.body.moveLeft(this.speed);
    }

    Player.prototype.goRight = function() {
        this.body.moveRight(this.speed);
    }

    Player.prototype.fly = function() {
        if (this.fuel > 0) {
            this.body.thrust(this.game.physics.p2.gravity.y * 2.5);
            this.fuel = Math.max(this.fuel - this.game.time.physicsElapsedMS, 0);
            this.flying = true;
        }
    }

    Player.prototype.shoot = function(isNew) {
        if (this.alive && this.weapon && typeof this.weapon.fire === 'function') {
            this.weapon.fire(isNew);
        }
    }

    Player.prototype.die = function() {
        //TODO: Add death animation.
        this.alive = false;
        this.kill();
    }

    Player.prototype.update = function() {
        if (this.standing) this.fuel = Math.min(this.maxFuel, this.fuel + this.game.time.physicsElapsedMS / 2);
        
        // TODO This should work even if a weapon isn't equipped
        if (this.weapon) {
            var theta = Phaser.Point.angle(this.game.input.mousePointer.position, this.position);
            this.weapon.rotation = theta;
            if (theta > Math.PI/2 || theta < -Math.PI/2) {
                this.character.scale.x = -1;
                this.weapon.scale.y = -1;
                this.removeChild(this.weapon);
                this.addChild(this.weapon);
            } else {
                this.character.scale.x = 1;
                this.weapon.scale.y = 1;
                this.removeChild(this.character);
                this.addChild(this.character);
            }
        }

        if (this.flying) {
            this.character.animations.play('fly');
        } else if (!this.standing) {
            this.character.animations.stop();
            this.character.frame = 12;
        } else if (Math.abs(this.body.velocity.x) >= this.speed) {
            this.character.animations.play('walk');
        } else {
            this.character.animations.stop();
            this.character.frame = 0;
        }
        this.flying = false;
    }

    return Player;
})();

},{}],8:[function(require,module,exports){
// Oh man, we're in the shit now. Most of the coupling problems between
// the different game entities have been shoved into this module. I'm not
// super happy with this solution, but for now at least my problems are all
// in one spot and I know where to find them.
var Bullet = require('./Bullet.js');
var Enemy = require('./Enemy.js');
var Gun = require('./Gun.js');
var Player = require('./Player.js');
var BrkPlat = require('./BrkPlat.js');
var mEntities = require('./mEntities.js');

/**
 * Takes a Tiled object, creates the appropriate game entity, adding it to the world.
 *
 * Assumes a bunch of things exist on state:
 *     groups - players, enemies, items
 *     collision groups - itemsCG, playersCG, enemiesCG, platformsCG, bulletsCG
 *     materials - worldMaterial, playerMaterial, platformMaterial, enemyMaterial
 */
module.exports = entity;

function entity(state, objData) {
    // Tiled uses different coordinates than Phaser.
    var x = objData.x += objData.width / 2;
    var y = objData.y += objData.height / 2;
    var type = objData.type;
    switch(true) {
        case mEntities.players.hasOwnProperty(type):
            return addPlayer(state, x, y, mEntities.players[type]);
        case mEntities.guns.hasOwnProperty(type):
            return addGun(state, x, y, mEntities.guns[type]);
        case mEntities.enemies.hasOwnProperty(type):
            return addEnemy(state, objData, mEntities.enemies[type]);
        case mEntities.items.hasOwnProperty(type):
            return addItem(state, x, y, mEntities.items[type]);
        case type === "brkplat":
            return new BrkPlat(state, objData);
        default:
            throw new TypeError('Cannot create entity of type ' + type
                    + ' in Tiled object list.');
    }
}

// These functions wire up all the physics/collision/sound/animation for each entity type.
function addPlayer(state, x, y, type) {
    var player = new Player(state.game, x, y, type.sprite);

    player.character.animations.add('walk', [0, 1, 2, 3], 25, true);
    player.character.animations.add('fly', [10, 11], 100, true);

    player.body.setCollisionGroup(state.playersCG);

    player.equip(addGun(state, 0, 0, mEntities.guns['pistol']));

    player.body.setMaterial(state.playerMaterial);
    player.body.setCollisionGroup(state.playersCG);
    player.body.collides(state.enemiesCG, player.die, player);
    player.body.collides([state.itemsCG, state.platformsCG]);

    state.players.add(player);
    return player;
}

function addEnemy(state, data, type) {
    var drop = parseDrop(state, data.properties.drop);
    var texture = type.texture;
    var enemy = new Enemy(state.game, data.x, data.y, texture, data.width,
                                      data.properties.velx, data.properties.vely, drop);
    enemy.forEach(function(enemy) {
        enemy.body.setCollisionGroup(state.enemiesCG);
        enemy.body.setMaterial(state.enemyMaterial);
        enemy.body.collides([state.playersCG, state.platformsCG]);
        enemy.body.collides(state.bulletsCG, enemy.kill, enemy);
    }, state);
    if (typeof type.setEach === 'object') {
        for (key in type.setEach) {
            enemy.setAll(key, type.setEach[key]);
        }
    }
    state.enemies.add(enemy);
    return enemy;
}

function addItem(state, item) {
    item.body.setCollisionGroup(state.itemsCG);
    item.body.collides(state.platformsCG);
    item.body.collides(state.playersCG, item.pickUp, item);
    state.items.add(item);
    return item;
}

function addGun(state, x, y, type) {
    var gun = new Gun(state.game, x, y, type);
    addItem(state, gun);
    gun.clips.forEach(function(clip) {
        clip.forEach(function(bullet) {
            bullet.body.setCollisionGroup(state.bulletsCG);
            bullet.body.collides([state.platformsCG, state.enemiesCG], bullet.die, bullet);
        }, state);
    }, state);
    return gun;
}

// The tiled representation of enemies has a recursive JSON representation
// of what they drop. It looks like [this_drops [left_child_drops, right_child_drops]]
// This function parses that list and creates the appropriate game entities.
function parseDrop(state, drop) {
    if (Array.isArray(drop)) { return drop.map(parseDrop.bind(null, state)); }
    if (typeof drop === 'string') {
        try {
            var dropOb = JSON.parse(drop);
            return parseDrop(state, dropOb);
        } catch (e) {
            if (e instanceof SyntaxError) {
                console.log('"' + drop + '" is not JSON, trying to add ' + drop + '.');
                try {
                    var item = entity(state, {x: 0, y: 0, width: 0, height: 0, type: drop});
                    item.kill();
                    return item;
                } catch (e) {
                    if (e instanceof TypeError) {
                        console.log(drop 
                                    + '" in Tiled object data is not a valid value for the drop field');
                        throw e;
                    }
                }
            }
        }
    }
    return null;
}

},{"./BrkPlat.js":3,"./Bullet.js":4,"./Enemy.js":5,"./Gun.js":6,"./Player.js":7,"./mEntities.js":9}],9:[function(require,module,exports){
// This file describes the different game entities
// TODO This should probably be a JSON file, but I wanted
// comments and to leave myself open for adding functions
// as properties.


// Right now we only have one player, but maybe
// we'll want multiplayer or NPCs later.
module.exports.players = {
    player1: {
        sprite: 'player'
    }
}

/**
 * Guns are described by:
 * {
 *   texture: String, texture to use
 *   rate: Num, ms between each shot
 *   auto: Bool, for auto vs semi-auto
 *   spread: Num, in radians
 *   accuracy: Num, bullet direction variance in radians
 *   clips: Num, how many bullets are fired at once
 *   clipSize: Num, size of the bullet pool for each clip
 *   bulletTexture: bullet sprite texture
 *   bulletSpeed: in pixels per second
 *   speedVar: bullet speed variance in pixels/second
 * }
 */ 
// TODO: change textures when we have them.
module.exports.guns = {
    pistol: {
        texture: 'gun',
        rate: 100,
        clips: 1,
        clipSize: 3,
        bulletTexture: 'bullet'
    },
    spread: {
        texture: 'gun',
        rate: 500,
        spread: Math.PI/4,
        clips: 8,
        clipSize: 3,
        bulletTexture: 'bullet'
    }, 
    shotgun: {
        texture: 'gun',
        rate: 300,
        spread: Math.PI/8,
        accuracy: Math.PI/8,
        clips: 8,
        clipSize: 3,
        speedVar: 50,
        bulletTexture: 'bullet'
    }
}

/*
 * Enemies get a texture and a "setEach" object. For each
 * key: value pair in setEach we will call enemy.setAll(key, value).
 */
module.exports.enemies = {
    orbo: {
        texture: 'enemy'
    },
    hex: {
        texture: 'enemy',
        setEach: {
            'body.data.gravityScale': 0,
            'tint': 0x00FF00
        }
    }
}

module.exports.items = {}

},{}],10:[function(require,module,exports){
var Boot = require('./boot.js');
var Load = require('./load.js');
var Level = require('./level.js');

//TODO: Change the way pickup works for items. Collision callbacks should be set in the state.
/**
 * Starts Super Bubble Panic!
 * @param {HTMLElement|string} [parent=document.body] The parent element
 *      to hold the game
 */
module.exports = (function() {
    function Game(parent) {
        var game = new Phaser.Game(800, 600, null, parent);
        game.state.add('Boot', new Boot);
        game.state.add('Load', new Load);
        game.state.add('Level', new Level);

        game.state.start('Boot');
        return game;
    }
    return Game;
})();

},{"./boot.js":2,"./level.js":11,"./load.js":12}],11:[function(require,module,exports){
var addEntity = require('./entities/entities.js');

module.exports = (function() {
    Level = function() {
        return this;
    }

    Level.prototype = {
        init: function(map) {
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
                friction: 0.9
            })

            this.keys = this.input.keyboard.addKeys({
                'up': Phaser.KeyCode.W, 'down': Phaser.KeyCode.S,
                'left': Phaser.KeyCode.A, 'right': Phaser.KeyCode.D
            });
        },

        create: function() {
            this.scale.setGameSize(this.map.widthInPixels, this.map.heightInPixels);
            this.map.addTilesetImage('tiles', 'tiles', 8, 8);
            this.map.createLayer('background');
            var plats = this.physics.p2.convertCollisionObjects(this.map, 'platform', true);
            plats.forEach(function(platform) {
                platform.setCollisionGroup(this.platformsCG);
                platform.collides([this.enemiesCG, this.playersCG, this.bulletsCG, this.itemsCG]);
                platform.setMaterial(this.platformMaterial);
            }, this);
            this.map.objects.object.forEach(addEntity.bind(null, this));
            // TODO Change if we ever have more than one player.
            this.p1 = this.players.getChildAt(0);
        },

        update: function() {
            if (this.keys.right.isDown) this.p1.goRight(this.p1.speed);
            if (this.keys.left.isDown) this.p1.goLeft(this.p1.speed);
            if (this.keys.up.isDown) this.p1.fly();
            if (this.input.mousePointer.leftButton.isDown) {
                this.p1.shoot(this.isNewClick);
                this.isNewClick = false;
            } else {
                this.isNewClick = true;
            }
        },
    }

    return Level;
})();

},{"./entities/entities.js":8}],12:[function(require,module,exports){
module.exports = (function() {

    Load = function() {
        return this;
    }

    Load.prototype = {
        preload: function() {
            var assets = require('../assets/assets.json');
            for (var section in assets) {
                this.load.pack(section, null, assets);
            }
        },

        create: function() {
            this.state.start('Level', true, false, 'level1');
        }
    }

    return Load;
})();

},{"../assets/assets.json":1}]},{},[10])(10)
});