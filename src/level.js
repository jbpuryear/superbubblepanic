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

            this.buffs = [];
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
        },
    }

    return Level;
})();
