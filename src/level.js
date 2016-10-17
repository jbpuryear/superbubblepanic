var entities = require('./entities/entities.js');
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
            this.map.objects.object.forEach(function(objData) {
                objData.x += objData.width / 2;
                objData.y += objData.width / 2;
                if (this['add' + objData.type]) this['add' + objData.type](objData);
                else console.log("Skipping invalid object type '" + objData.type + "' in Tiled map object layer.");
            }, this)
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

        parseDrop: function(drop) {
            /*
            if (Array.isArray(drop)) { return drop.map(this.parseDrop, this); }
            if (typeof drop === 'string') {
                try {
                    var dropOb = JSON.parse(drop);
                    return this.parseDrop(dropOb);
                } catch (e) {
                    if (e instanceof SyntaxError) {
                        console.log('"' + drop + '" is not JSON, calling method add' + drop + '.');
                        try {
                            var item = this['add' + drop]();
                            item.kill();
                            return item;
                        } catch (e) {
                            if (e instanceof TypeError) {
                                console.log('SBP: "' + drop 
                                            + '" in Tiled object data is not a valid value for the drop field');
                                throw e;
                            }
                        }
                    }
                }
            }
            */
            return null;
        },

        addPlayer: function(data) {
            var player = new entities.Player(this, data.x, data.y, 'player');

            player.character.animations.add('walk', [0, 1, 2, 3], 25, true);
            player.character.animations.add('fly', [10, 11], 100, true);

            player.body.setCollisionGroup(this.playersCG);
            if (data.gun) {
                if (!this['add'+data.gun]) {
                    console.log(data.gun + ' in player description is not a valid weapon type. Defaulting to "Pistol".');
                    player.swapGun(this.addPistol({x: 0, y: 0}));
                } else {
                    player.swapGun(this['add'+data.gun]({x: 0, y: 0}));
                }
            } else {
                player.swapGun(this.addPistol({x: 0, y: 0}));
            }

            player.body.setMaterial(this.playerMaterial);
            player.body.setCollisionGroup(this.playersCG);
            player.body.collides(this.enemiesCG, player.die, player);
            player.body.collides([this.itemsCG, this.platformsCG]);

            this.players.add(player);
            this.p1 = player;
            return player;
        },

        _addItem: function(item) {
            item.body.setCollisionGroup(this.itemsCG);
            item.body.collides(this.platformsCG);
            item.body.collides(this.playersCG, item.pickUp, item);
            this.items.add(item);
            return item;
        },

        _addGun: function(gun) {
            this._addItem(gun);
            gun.clips.forEach(function(clip) {
                clip.forEach(function(bullet) {
                    bullet.body.setCollisionGroup(this.bulletsCG);
                    bullet.body.collides([this.platformsCG, this.enemiesCG], bullet.die, bullet);
                }, this);
            }, this);
            return gun;
        },

        addPistol: function(data) {
            data = data || {};
            var x = data.x || 0;
            var y = data.y || 0;
            // return this._addGun(new entities.Pistol(this, x, y, 'gun', 'bullet'));
            return new entities.Gun(this);;
        },

        addEnemy: function(data) {
            var drop = this.parseDrop(data.properties.drop);
            var enemy = new entities.Enemy(this, data.x, data.y, 'enemy', data.width,
                                              data.properties.velx, data.properties.vely, drop);
            enemy.forEach(function(enemy) {
                enemy.body.setCollisionGroup(this.enemiesCG);
                enemy.body.setMaterial(this.enemyMaterial);
                enemy.body.collides([this.playersCG, this.platformsCG]);
                enemy.body.collides(this.bulletsCG, enemy.kill, enemy);
            }, this);
            this.enemies.add(enemy);
            return enemy;
        }
    }

    return Level;
})();
