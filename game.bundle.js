(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SBP = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
    "images": [
        {
            "type": "audio",
            "key": "block",
            "urls": ["assets/audio/block.ogg"],
            "autoDecode": true
	},
        {
            "type": "audio",
            "key": "bounce",
            "urls": ["assets/audio/bounce.ogg"],
            "autoDecode": true
	},
        {
            "type": "audio",
            "key": "clock",
            "urls": ["assets/audio/clock.ogg"],
            "autoDecode": true
	},
        {
            "type": "audio",
            "key": "death",
            "urls": ["assets/audio/death.ogg"],
            "autoDecode": true
	},
        {
            "type": "audio",
            "key": "explode",
            "urls": ["assets/audio/explode.ogg"],
            "autoDecode": true
	},
        {
            "type": "audio",
            "key": "gunshot",
            "urls": ["assets/audio/pistol.ogg"],
            "autoDecode": true
	},
        {
            "type": "audio",
            "key": "hit",
            "urls": ["assets/audio/hit.ogg"],
            "autoDecode": true
	},
        {
            "type": "audio",
            "key": "jetpack",
            "urls": ["assets/audio/jetpack.ogg"],
            "autoDecode": true
	},
        {
            "type": "audio",
            "key": "land",
            "urls": ["assets/audio/land.ogg"],
            "autoDecode": true
	},
        {
            "type": "audio",
            "key": "launch",
            "urls": ["assets/audio/launch.ogg"],
            "autoDecode": true
	},
        {
            "type": "audio",
            "key": "pop",
            "urls": ["assets/audio/pop.ogg"],
            "autoDecode": true
	},
        {
            "type": "audio",
            "key": "reload",
            "urls": ["assets/audio/reload.ogg"],
            "autoDecode": true
	},
        {
            "type": "audio",
            "key": "repel-pickup",
            "urls": ["assets/audio/repel-pickup.ogg"],
            "autoDecode": true
	},
        {
            "type": "audio",
            "key": "repel-stop",
            "urls": ["assets/audio/repel-stop.ogg"],
            "autoDecode": true
	},
        {
            "type": "audio",
            "key": "shield-pickup",
            "urls": ["assets/audio/shield-pickup.ogg"],
            "autoDecode": true
	},
        {
            "type": "audio",
            "key": "shoe-pickup",
            "urls": ["assets/audio/shoe-pickup.ogg"],
            "autoDecode": true
	},
        {
            "type": "audio",
            "key": "shotgun",
            "urls": ["assets/audio/shotgun.ogg"],
            "autoDecode": true
	},
        {
            "type": "audio",
            "key": "speedup",
            "urls": ["assets/audio/speedup.ogg"],
            "autoDecode": true
	},
        {
            "type": "audio",
            "key": "slowdown",
            "urls": ["assets/audio/slowdown.ogg"],
            "autoDecode": true
	},
        {
            "type": "audio",
            "key": "step",
            "urls": ["assets/audio/step.ogg"],
            "autoDecode": true
	},
        {
            "type": "spritesheet",
            "key": "bullet",
            "url": "assets/images/bullet.png",
            "frameWidth": 16,
            "frameHeight": 16
        },
        {
            "type": "spritesheet",
            "key": "dust",
            "url": "assets/images/dust.png",
            "frameWidth": 4,
            "frameHeight": 4
        },
        {
            "type": "spritesheet",
            "key": "enemies",
            "url": "assets/images/enemies.png",
            "frameWidth": 64,
            "frameHeight": 64
        },
        {
            "type": "spritesheet",
            "key": "explosion",
            "url": "assets/images/explosion.png",
            "frameWidth": 64,
            "frameHeight": 64
        },
        {
            "type": "spritesheet",
            "key": "flame",
            "url": "assets/images/flame.png",
            "frameWidth": 4,
            "frameHeight": 4
        },
        {
            "type": "spritesheet",
            "key": "frag",
            "url": "assets/images/frag.png",
            "frameWidth": 4,
            "frameHeight": 4
        },
        {
            "type": "spritesheet",
            "key": "grenade",
            "url": "assets/images/grenade.png",
            "frameWidth": 16,
            "frameHeight": 16
        },
        {
            "type": "spritesheet",
            "key": "pellet",
            "url": "assets/images/pellet.png",
            "frameWidth": 16,
            "frameHeight": 16
        },
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
            "key": "city",
            "url": "assets/images/city.png"
        },
        {
            "type": "image",
            "key": "enemy",
            "url": "assets/images/enemy.png"
        },
        {
            "type": "image",
            "key": "font-small",
            "url": "assets/images/font-small.png"
        },
        {
            "type": "image",
            "key": "gravgun",
            "url": "assets/images/gravgun.png"
        },
        {
            "type": "image",
            "key": "grenade-launcher",
            "url": "assets/images/grenade-launcher.png"
        },
        {
            "type": "image",
            "key": "gun",
            "url": "assets/images/gun.png"
        },
        {
            "type": "image",
            "key": "hex",
            "url": "assets/images/hex.png"
        },
        {
            "type": "image",
            "key": "repel",
            "url": "assets/images/repel.png"
        },
        {
            "type": "image",
            "key": "shell",
            "url": "assets/images/shell.png"
        },
        {
            "type": "image",
            "key": "shield",
            "url": "assets/images/shield.png"
        },
        {
            "type": "image",
            "key": "shoes",
            "url": "assets/images/shoes.png"
        },
        {
            "type": "image",
            "key": "shotgun",
            "url": "assets/images/shotgun.png"
        },
        {
            "type": "image",
            "key": "slomo",
            "url": "assets/images/slomo.png"
        },
        {
            "type": "image",
            "key": "smg",
            "url": "assets/images/smg.png"
        }
    ],
    
    "levels": [
        {
            "type": "tilemap",
            "key": "level1",
            "url": "assets/levels/level1.json",
            "format": "TILED_JSON"
        },
        
        {
            "type": "tilemap",
            "key": "seeker",
            "url": "assets/levels/seeker.json",
            "format": "TILED_JSON"
        },
        
        {
            "type": "tilemap",
            "key": "grid",
            "url": "assets/levels/grid.json",
            "format": "TILED_JSON"
        },
        
        {
            "type": "tilemap",
            "key": "_arcade",
            "url": "assets/levels/blank.json",
            "format": "TILED_JSON"
        },

        {
            "type": "tilemap",
            "key": "placement test",
            "url": "assets/levels/placement-test.json",
            "format": "TILED_JSON"
        }

    ]
}

},{}],2:[function(require,module,exports){
module.exports = Arcade;


var Level = require('../level/Level.js');
var Hydroid = require('../entities/enemies/Hydroid.js');

function Arcade() {
    return Level.call(this);
}


Arcade.prototype = Object.create(Level.prototype);

Arcade.prototype.init = function() {
    Level.prototype.init.call(this, '_arcade');
}

Arcade.prototype.create = function() {
    Level.prototype.create.call(this);

    this.maxTime = 20000;
    this.timer = this.maxTime;
    this.level = 1;
    this.maxEnemyWidth = 100
    this.nextDrop = 5 + Math.floor(Math.random() * 20)

    this.enemyConfig = require('./enemyConfig.js')()
    this.enemyChance = this.enemyConfig.reduce(function(sum, item) {
        return sum + item.chance;
    }, 0)
    this.itemConfig = require('./itemConfig.js')()
    this.itemChance = this.itemConfig.reduce(function(sum, item) {
        return sum + item.chance
    }, 0)

    this.font = this.make.retroFont('font-small', 8, 8, Phaser.RetroFont.TEXT_SET2);
    this.font.text = '0';
    this.score = this.add.image(16, 16, this.font);
    this._score = 0;

    this.enemyPools = {};
    var enemyData = {
        x: 20,
        y: 20,
        width: 40 * Hydroid.prototype.minWidth,
        properties: {}
    }
    for (var i = 0; i < this.enemyConfig.length; i++) {
        var eType = this.enemyConfig[i].type;
        enemyData.type = eType;
        var pool = this.addEntity(enemyData);
        this.enemyPools[eType] = pool;
        pool.forEach(function(enemy) {
            enemy.events.onKilled.add(this.getDrop, this);
        }, this);
        pool.setAll('alive', false)
        pool.setAll('exists', false)
        pool.setAll('visible', false)
    }
    this.spawnEnemy();
}


Arcade.prototype.update = function() {
    Level.prototype.update.call(this);

    this.timer -= this.time.physicsElapsedMS;
    if (this.timer < 0) this.spawnEnemy();
    var noEnemy = true;
    for (var i = 0; i < this.enemyConfig.length; i++) {
        if (this.enemyPools[this.enemyConfig[i].type].getFirstAlive()) {
            noEnemy = false
            break;
        }
    }
    if (noEnemy) { this.timer = Math.min(this.timer, 400); }
}


Arcade.prototype.spawnEnemy = function() {
    var width = (Math.random() * this.maxEnemyWidth + this.maxEnemyWidth)/2;
    var x = Math.random() * (this.world.width - width - 10) + width/2 + 5;
    var y = -width/2;
    var roll = Math.floor(Math.random() * (Math.min(this.level, this.enemyChance)));
    for (var i = 0, acc = 0; i < this.enemyConfig.length; i++) {
        acc += this.enemyConfig[i].chance;
        if (roll < acc) {
            var spawnData = this.enemyConfig[i];
            break;
        }
    }
    var enemy = this.enemyPools[spawnData.type].spawn(x, y, width);

    if (!enemy) return;

    this.maxEnemyWidth = Math.min(this.maxEnemyWidth + 4, 256)

    enemy.body.velocity.x = spawnData.velx * this.bulletTime;
    enemy.body.velocity.y = spawnData.vely * this.bulletTime;

    this.maxTime *= 0.98;
    this.timer = this.maxTime;
    this.level++;

    enemy.alpha = 0.7;
    var body = this.physics.p2.removeBody(enemy.body);
    var self = this;
    this.add.tween(body).to( {y: enemy.height/2 + 2}, 1500, "Back.easeInOut", true)
        .onComplete.addOnce(function() {
            self.physics.p2.addBody(body);
            enemy.alpha = 1;
        });
}

Arcade.prototype.getDrop = function(enemy) {
    this._score += Math.ceil(enemy.width) * 10;
    this.font.text = this._score + '';

    if (--this.nextDrop !== 0) return null
    this.nextDrop = 5 + Math.floor(Math.random() * 20)

    var roll = Math.floor(Math.random() * this.itemChance);
    for (var i = 0, acc = 0; i < this.itemConfig.length; i++) {
        acc += this.itemConfig[i].chance;
        if (roll < acc) {
            var type = this.itemConfig[i].type
            var drop = this.addEntity({x: 0, y: 0, type: type});
            if (type === 'shoes') {
                this.itemChance -= this.itemConfig[i].chance
                this.itemConfig[i].chance = 0
            }
            drop.reset(enemy.x, enemy.y);
            return drop;
        }
    }
}

},{"../entities/enemies/Hydroid.js":20,"../level/Level.js":32,"./enemyConfig.js":3,"./itemConfig.js":4}],3:[function(require,module,exports){
module.exports = function() {
    return [
        {
            "type": "enemy",
            "chance": 6,
            "velx": 90,
            "vely": 0
        },
        {
            "type": "hex",
            "chance": 4,
            "velx": 120,
            "vely": 120
        },
        {
            "type": "seeker",
            "chance": 2,
            "velx": 0,
            "vely": 0
        }
    ]
}

},{}],4:[function(require,module,exports){
module.exports = function() {
    return [
        {
            type: 'repel',
            chance: 2
        },
        {
            type: 'slomo',
            chance: 8,
        },
        {
            type: 'shield',
            chance: 2
        },
        {
            type: 'shoes',
            chance: 2
        },
        {
            type: 'shotgun',
            chance: 1
        },
        {
            type: 'grenade',
            chance: 1
        },
    ]
}

},{}],5:[function(require,module,exports){
module.exports = Boot


function Boot() {
    return this
}


Boot.prototype = {
    init: function() {
        this.game.scale.pageAlignHorizontally = true
        this.game.scale.pageAlignVertically = true
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        Phaser.Canvas.setImageRenderingCrisp(this.game.canvas)
        this.game.physics.startSystem(Phaser.Physics.P2JS)
        this.game.physics.p2.setBounds(0, 0, 0, 0, false, false, false, false)

        this.game.camera.bounds = null

        if (this.sound.usingWebAudio) {
            this.sound.masterGain.disconnect(this.sound.context.destination)
            var filter = this.sound.context.createBiquadFilter()
            this.sound.masterGain.connect(filter)
            filter.connect(this.sound.context.destination)
            filter.type = 'highpass'
            filter.frequency.value = 60;
        }
    },

    create: function() {
        this.state.start('Load')
    }
}

},{}],6:[function(require,module,exports){
module.exports = BrkPlat;

// TODO: This is a hack to let us draw a Tiled polyline to the
// world and link it to a P2.Body. A better way would be to make a
// sprite and enable pysics on it and add give it the body made by
// P2.converCollisionObjects, but the body ends up offset from the
// sprite and I don't know how to fix it. So for now we take the body
// and an image, stuff them in a wrapper and add them to the world
// seperatele.


function BrkPlat(state, data, body, drop) {
    this._body = body;
    this.drop = drop;

    var xMin=0, xMax=0, yMin=0, yMax=0;
    var poly = data.polyline;
    for (var i=0; i<poly.length; i++) {
        // P2.converCollisionObjects converts the tilemap data to P2 units
        // so change them back.
        var x = poly[i][0] = state.physics.p2.mpxi(poly[i][0]);
        var y = poly[i][1] = state.physics.p2.mpxi(poly[i][1]);
        if (x < xMin) xMin = x;
        if (x > xMax) xMax = x;
        if (y < yMin) yMin = y;
        if (y > yMax) yMax = y;
    }
    var width = xMax - xMin;
    var height = yMax - yMin;

    var points = [];
    for (i=0; i<poly.length; i++) {
        var x = poly[i][0] - xMin;
        var y = poly[i][1] - yMin;
        points.push([x, y]);
    }

    var texture = new Phaser.Graphics(state.game);
    texture.beginFill(0xFFFFFF, 1);
    texture.drawPolygon(points);
    texture.endFill();
    
    Phaser.Image.call(this, state.game, x, y, texture.generateTexture());
    texture.destroy();

    this.anchor.setTo(0.5);

    this.x = width/2 + data.x + data.polyline[0][0] + xMin;
    this.y = height/2 + data.y + data.polyline[0][1] + yMin; 
    state.add.existing(this);
}


BrkPlat.prototype = Object.create(Phaser.Image.prototype);


BrkPlat.prototype.break = function() {
    if (this.drop instanceof Phaser.Sprite) {
        this.drop.reset(this.x, this.y);
    }
    this.destroy();
    this._body.destroy();
}

},{}],7:[function(require,module,exports){
module.exports = Gun


var Item = require('./Item.js')
var Bullet = require('./bullets/Bullet.js')


function Gun(state, data, BulletClass) {
    Item.call(this, state, data)

    this.rate = data.rate || 100
    this.auto = data.auto || false
    this.spread = data.spread || 0
    this.accuracy = data.accuracy || 0
    this.speedMul = data.speedMul || 1
    this.speedVar = data.speedVar || 0
    this.sounds.pickup = state.add.sound(data.equipSound || 'reload')
    this.sounds.shot = state.add.sound(data.shotSound || 'gunshot')

    this.clips = []
    this.lastShot = 0

    var clips = data.clips || 1
    var clipSize = data.clipSize || 3
    var bulletTexture = data.bulletTexture

    for (var i=0; i<clips; i++) {
        var clip = new Phaser.Group(state.game)

        for (var j=0; j<clipSize; j++) {
            var bullet = new BulletClass(state, 0, 0, bulletTexture)
            clip.add(bullet)
        }

        this.clips.push(clip)
    }
}


Gun.prototype = Object.create(Item.prototype)


Gun.prototype.pickup = function(_, playerBody) {
    this.lifespan = 0
    Item.prototype.pickup.call(this)
    playerBody.sprite.equip(this)
}


Gun.prototype.fire = function(newShot) {
    if (this.auto || newShot) {

        var now = this.game.time.now
        if (now - this.lastShot < this.rate) return false

        // TODO: Not the best way to do this. Maybe ask bullets
        // if they're ready instead of dead?
        var bullets = this.clips.map(function(clip) { return clip.getFirstDead() })

        if (!bullets.every(function(bullet) { return bullet })) return false

        this.lastShot = now

        var theta = this.rotation
        var x = this.worldPosition.x + (this.width/2 * Math.cos(theta))
        var y = this.worldPosition.y + (this.width/2 * Math.sin(theta))

        bullets.forEach(function(bullet, i) {
            var speedBonus = this.speedMul * (1 + (Math.random()*2 - 1)*this.speedVar)
            var bulletTheta = theta + (this.spread/this.clips.length *i - this.spread/2) + (Math.random()*2 - 1)*this.accuracy
            bullet.fire(x, y, bulletTheta, speedBonus)
        }, this)

        var dir = theta > Math.PI/2 || theta < -Math.PI/2 ? 2 : -2
        this.state.throwShell(this.world.x, this.world.y, dir)

        this.state.playSound(this.sounds.shot, 400)
        this.game.camera.shake(0.01, 70)
        return true
    }
    return false
}

},{"./Item.js":8,"./bullets/Bullet.js":15}],8:[function(require,module,exports){
// Time in ms before item disappears.
var LIFESPAN = 5000;

module.exports = Item;


function Item(state, data) {
    this.state = state;
    var x = data.x || 0;
    var y = data.y || 0;
    var texture = data.texture;
    if (!texture) console.warn('Creating Item with no texture.');

    Phaser.Sprite.call(this, state.game, x, y, texture);

    this.pulse = state.add.tween(this)
    this.sounds = {}

    this.pulse.to({alpha: 0.2}, 100, null, false, this._lifespan - 750, null, true)

    state.physics.p2.enable(this);
    this.body.setCollisionGroup(state.itemsCG);
    this.body.collides(state.platformsCG);
    this.body.collides(state.playersCG, this.pickup, this);
    this.lifespan = this._lifespan;

    state.items.add(this);
}


Item.prototype = Object.create(Phaser.Sprite.prototype);

Item.prototype._lifespan = LIFESPAN;


Item.prototype.pickup = function(thisBody, heroBody) {
    if (this.sounds.pickup) this.state.playSound(this.sounds.pickup)
    this.pulse.stop()
    this.alpha = 1
    this.body.destroy()
    this.x = 0
    this.y = 0
}


Item.prototype.reset = function(x, y, health) {
    this.lifespan = this._lifespan
    this.pulse.start()
    this.x = x;
    this.y = y;
    Phaser.Sprite.prototype.reset.call(this, this.x, this.y,health);
}

},{}],9:[function(require,module,exports){
var Item = require('../Item.js');

module.exports = Buff;


function Buff(state, data) {
    Item.call(this, state, data);
    // We will pass to our Level's  buff array which is updated each loop.
    this.buff = Object.create(this.buffProto);
    this.buff.sprite = this;
    this.buff.state = state;
    this.lifespan = this._lifespan;
}


Buff.prototype = Object.create(Item.prototype);

Buff.prototype.buffProto = {
    duration: 0,
    start: function(target) {},
    update: function() {},
    stop: function() {}
}


Buff.prototype.pickup = function(_, playerBody) {
    Item.prototype.pickup.call(this);
    var buff = this.buff;
    buff.target = playerBody.sprite;

    if (buff.duration !== 0) {
        buff.timeLeft = buff.duration;
        buff.state.buffs.push(buff);
    }

    if (typeof buff.start === 'function') buff.start(buff.target);

    buff.sounds = this.sounds;
    return buff;
}

},{"../Item.js":8}],10:[function(require,module,exports){
module.exports = Repel


var Buff = require('./Buff.js')
var dotGravity =  require('../../magic/dotGravity.js')


var TEXTURE = 'repel'


function Repel(state, data) {
    data.texture = TEXTURE
    Buff.call(this, state, data)
    this.sounds.pickup = state.add.sound('repel-pickup')
    this.sounds.stop = state.add.sound('repel-stop')
}


Repel.prototype = Object.create(Buff.prototype)


Repel.prototype.buffProto = {
    duration: 15000,

    start: function() {
        this.targets = []
        this.state.physics.p2.enable(this.sprite)
        this.sprite.lifespan = -1
        var body = this.sprite.body
        var r = this.target.height*3
        this.r = r
        this.rInner = this.target.height
        var shape = body.setCircle(r)
        body.setCollisionGroup(this.state.platformsCG)
        body.collides(this.state.enemiesCG)
        body.fixedRotation = true
        body.static = true
        shape.sensor = true
        body.onBeginContact.add(this.addTarget, this)
        body.onEndContact.add(this.removeTarget, this)
        this.sprite.height = 2
        this.sprite.width = 2
        this.sprite.alpha = .6
        this.state.add.tween(this.sprite)
            .to({width: r, height: r}, 500, null, true)
            .loop()
        this.overFlag = false
    },

    stop: function() {
        this.sprite.destroy()
    },

    update: function() {
        if (this.timeLeft < 800 && !this.overFlag) {
            this.sounds.stop.play()
            this.overFlag = true
        }
        this.sprite.body.x = this.target.world.x
        this.sprite.body.y = this.target.world.y

        this.targets.forEach(function(trgt) {
            var dist = this.sprite.world.distance(trgt.world)
            var angle = this.sprite.world.angle(trgt.world)
            normDist = (dist - trgt.width/2 - this.rInner) / (this.r - this.rInner)
            normDist = Math.max(normDist, 0.0001)
            var mag = 1 / (normDist)
            trgt.body.thrustRight(mag * Math.cos(angle))
            trgt.body.thrust(-mag * Math.sin(angle))
        }, this)
    },

    addTarget: function(body) {
        var sprite = body.sprite
        for (var i = 0; i < this.targets.length; i++)
            if (sprite === this.targets[i]) return
        this.targets.push(sprite)
    },

    removeTarget: function(body) {
        var sprite = body.sprite
        for (var i = this.targets.length-1; i >= 0; i--)
            if (sprite === this.targets[i]) this.targets.splice(i, 1)
    }
}

},{"../../magic/dotGravity.js":38,"./Buff.js":9}],11:[function(require,module,exports){
module.exports = Shield


var Buff = require('./Buff.js')


function Shield(state, data) {
    data.texture = 'shield'
    Buff.call(this, state, data)
    this.sounds.pickup = state.add.sound('shield-pickup')
    this.alpha = 0.8
}


Shield.prototype = Object.create(Buff.prototype)


Shield.prototype.buffProto = {
    duration: -1,

    start: function(target) {
        this.sprite.destroy()

        if (target.health > 1) {
            this.timeLeft = 0
            return
        }

        target.health = 2
        this.block = this.state.add.sound('block')

        this.sprite = this.state.add.sprite(0, 0, target.character.texture)

        this.alpha = 0.3
        this.scale = 1.2

        this.sprite.anchor.setTo(0.5)
        this.sprite.tint = 0x62cade
        this.sprite.frame = target.character.frame
        this.sprite.width = target.character.width * 1.2
        this.sprite.height = target.character.height * 1.2
        this.state.items.addChild(this.sprite)
        this.sprite.shader = new Phaser.Filter(this.state.game, {alpha: {type: '1f', value: this.alpha}}, [
            'precision mediump float;',
            'uniform sampler2D uSampler;',
            'uniform float alpha;',
            'varying vec2 vTextureCoord;',
            'void main(void) {',
            'gl_FragColor = texture2D(uSampler, vTextureCoord);',
            'if (gl_FragColor.a == 0.0) return;',
            'gl_FragColor = vec4(0.3843137254901961 * alpha, 0.792156862745098 * alpha, 0.8705882352941177 * alpha, alpha);',
            '}'
        ])
        this.state.add.tween(this).to({scale: 1.5, alpha: 0.8}, 500, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true)
        target.addChildAt(this.sprite, 0)
    },

    update: function() {
        if (this.target.health <= 1) {
            this.state.playSound(this.block)
            this.sprite.destroy()
            this.timeLeft = 0
            return
        }
        this.sprite.width = this.target.character.width * this.scale
        this.sprite.height = this.target.character.height * this.scale
        this.sprite.alpha = this.alpha
        //this.sprite.shader.uniforms.alpha.value = this.alpha
    }
}

},{"./Buff.js":9}],12:[function(require,module,exports){
module.exports = Shoes;


var Buff = require('./Buff.js');


function Shoes(state, data) {
    data.texture = 'shoes';
    Buff.call(this, state, data);

    this.sounds.pickup = this.state.add.sound('shoe-pickup');
}


Shoes.prototype = Object.create(Buff.prototype);


Shoes.prototype.buffProto = {
    start: function() {
        this.sprite.destroy();
        this.target.speedBonus *= 1.35;
    }
}

},{"./Buff.js":9}],13:[function(require,module,exports){
module.exports = Slomo;


var Buff = require('./Buff.js');


function Slomo(state, data) {
    data.texture = 'slomo';
    Buff.call(this, state, data);
}


Slomo.prototype = Object.create(Buff.prototype);


Slomo.prototype.buffProto = {
    duration: 6500,
    rate: 0.25,
    start: function() {
        this.sprite.destroy()
        this.speedUp = this.state.sound.play('slowdown')
        this.tick = this.state.sound.play('clock', 1, true)
        this.slowDown = this.state.add.sound('speedup')
        this.state.changeTime(this.rate)
    },
    stop: function() {
        this.tick.stop()
        this.slowDown.onStop.addOnce(function() {
            this.state.changeTime(1/this.rate)
        }, this)
        this.slowDown.play();
    }
}

},{"./Buff.js":9}],14:[function(require,module,exports){
module.exports = Bouncy;


var Bullet = require('./Bullet.js');

var TEXTURE = 'bullet';
var LIFESPAN = 3000;


function Bouncy(state, x, y, texture) {
    texture = texture || TEXTURE;
    Bullet.apply(this, arguments);
    this._lifespan = LIFESPAN;
}


Bouncy.prototype = Object.create(Bullet.prototype);


Bouncy.prototype.hit = function(_, target) {
    if (target.sprite) {
        var theta = Math.atan2(this.body.velocity.y, this.body.velocity.x);
        target.sprite.damage(this.attack, theta);
    }
}


Bouncy.prototype.fire = function(x, y, theta, speedBonus) {
    Bullet.prototype.fire.apply(this, arguments);
    this.lifespan = this._lifespan;
}

},{"./Bullet.js":15}],15:[function(require,module,exports){
module.exports = Bullet;


var SPEED = 500;
var BODY_RADIUS = 4;
var TEXTURE = 'bullet';
var FLARE = 0;
var BULLET = 1;

function Bullet(state, x, y, texture) {
    texture = texture || TEXTURE;
    Phaser.Sprite.call(this, state.game, x, y, texture);
    Phaser.Sprite.prototype.kill.call(this);

    this.state = state;

    state.game.physics.p2.enable(this);
    this.body.setCircle(BODY_RADIUS);
    this.body.data.gravityScale = 0;
    this.body.collideWorldBounds = false;
    this.body.mass = 0.6;
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this.body.setCollisionGroup(state.bulletsCG);
    this.body.collides([state.enemiesCG, state.platformsCG], this.hit, this);
}


Bullet.prototype = Object.create(Phaser.Sprite.prototype);

Bullet.prototype.attack = 1;
Bullet.prototype.speed = SPEED;


Bullet.prototype.hit = function(_, target) {
    this.kill();
    this.state.frag.x = this.x;
    this.state.frag.y = this.y;
    this.state.frag.explode(40, 5);
}


Bullet.prototype.fire = function(x, y, theta, speedBonus) {
    this.frame = FLARE;
    this.game.time.events.add(40, function() {
        this.frame = BULLET;
    }, this);
    speedBonus = speedBonus || 1;
    var speed = this.speed * speedBonus;
    this.reset(x, y);
    this.body.rotation = theta;
    this.body.velocity.x = Math.cos(theta) * speed;
    this.body.velocity.y = Math.sin(theta) * speed;
} 

},{}],16:[function(require,module,exports){
module.exports = Gravity;


var Bullet = require('./Bullet.js');
var dotGravity = require('../../magic/dotGravity.js');
var explode = require('../../magic/explode.js');


var TEXTURE = 'bullet';
var SPEED = 340;
var RANGE = 80;
var MAGNITUDE = 250;
var LIFESPAN = 1600;
var KILL_RANGE = 20;
var EXPLOSION = 700;
var DAMPING = 1;
var SELF_DAMP = 0.97;


function Gravity(state, x, y, texture) {
    texture = texture || TEXTURE;
    Bullet.call(this, state, x, y, texture);

    this.speed = SPEED;
    this.lifespan = LIFESPAN;
    this.enemies = state.enemies;
    this.body.clearCollision();
}


Gravity.prototype = Object.create(Bullet.prototype);


Gravity.prototype.kill = function() {
    Bullet.prototype.kill.call(this);
    if (!this.enemies) return;
    explode(this.enemies, this, KILL_RANGE, null, EXPLOSION, 0, true);
}


Gravity.prototype.update = function() {
    if (!this.alive) return;
    this.body.velocity.x *= SELF_DAMP;
    this.body.velocity.y *= SELF_DAMP;
    this.enemies.forInReach(this, RANGE, function(enemy) {
        var dist = this.world.distance(enemy);
        dist = Phaser.Physics.P2.prototype.pxm(dist);
        dist = dist < 1 ? 1 : dist*dist;
        var damp = 1 - 1/dist;
        enemy.body.velocity.x *= damp;
        enemy.body.velocity.y *= damp;
    }, this);
    dotGravity(this.enemies, this, MAGNITUDE, RANGE);
}


Gravity.prototype.reset = function(x, y, health) {
    Bullet.prototype.reset.call(this, x, y, health);
    this.lifespan = LIFESPAN;
}

},{"../../magic/dotGravity.js":38,"../../magic/explode.js":39,"./Bullet.js":15}],17:[function(require,module,exports){
module.exports = Grenade;


var Bullet = require('./Bullet.js');

var TEXTURE = 'grenade';
var SPEED = 400;
var MASS = 0.5;
var RADIUS = 60;
var LIFE = 2500;
var DAMAGE = 5;
var BLAST = 800;


function Grenade(state, x, y, texture) {
    Phaser.Group.call(this, state.game);
    texture = texture || TEXTURE;
    this.addChild(new Round(state, x, y, texture));
}


Grenade.prototype = Object.create(Phaser.Group.prototype);

// TODO: This is to get around how guns fire their bullets, which
// which needs to be fixed.
Object.defineProperty(Grenade.prototype, 'alive', {get: function() {return false}});


Grenade.prototype.fire = function(x, y, theta, speedBonus) {
    var round = this.children[0];
    console.log(round);
    if (round.exists) round.kill();
    else round.fire(x, y, theta, speedBonus);
}


function Round(state, x, y, texture) {
    Bullet.call(this, state, x, y, texture);
    if (!Round.prototype.material) {
        Round.prototype.material = state.physics.p2.createMaterial('grenade');
        state.physics.p2.createContactMaterial(this.material, state.platformMaterial, {
            friction: 0.4,
            restitution: 0.7
        });
        state.physics.p2.createContactMaterial(this.material, state.worldMaterial, {
            friction: 0.4,
            restitution: 0.7
        });
    }
    this.body.setMaterial(Round.prototype.material);
    this.body.data.gravityScale = 1;
    this.body.mass = MASS;
    this.body.removeCollisionGroup(state.platformsCG);
    this.body.collides(state.platformsCG);
    this.body.collideWorldBounds = true;
}


Round.prototype = Object.create(Bullet.prototype);

Round.prototype.speed = SPEED;


Round.prototype.kill = function() {
    this.state.explode(this.x, this.y);
    Bullet.prototype.kill.apply(this, arguments);
}


Round.prototype.fire = function(x, y, theta, speedBonus) {
    this.lifespan = LIFE;
    Bullet.prototype.fire.apply(this, arguments);
    this.body.angularVelocity = (this.body.rotation > Math.PI/2 || this.body.rotation < -Math.PI/2) ?
        Math.PI : -Math.PI;
}


Round.prototype.hit = function(_, target) {
    this.kill();
}

},{"./Bullet.js":15}],18:[function(require,module,exports){
module.exports = Enemy


var Bullet = require('../bullets/Bullet.js')


var TEXTURE = 'enemies'
var MAX_HEALTH = 1


function Enemy(state, data, drop) {
    data.texture = data.texture || TEXTURE
    Phaser.Sprite.call(this, state.game, data.x, data.y, data.texture)

    this.state = state
    this.sounds = {
        pop: state.add.sound('pop'),
        bounce: state.add.sound('bounce')
    }

    this.frame = this.defaultFrame

    this.exists = false
    this.alive = false
    this.visible = false

    state.physics.p2.enable(this)
    state.enemies.add(this)
    this._circle = this.body.setCircle(1)
    this.body.setCollisionGroup(state.enemiesCG)
    this.body.collideWorldBounds = false;
    this.body.collides([state.platformsCG, state.physics.p2.boundsCollisionGroup], function() {
        state.playSound(this.sounds.bounce)
        if (this.sounds.bounce.usingWebAudio) {
            this.sounds.bounce._sound.detune.value = 128/this.width * 400
        }
    }, this)
    this.body.collides([state.playersCG, state.bulletsCG], this.damage, this)
    this.body.setMaterial(state.enemyMaterial)
    this.body.fixedRotation = true

    this.animations.add('flash', [5, 7])
        .onComplete.add(function() {this.frame = this.defaultFrame}, this)
}


Enemy.prototype = Object.create(Phaser.Sprite.prototype)

Enemy.prototype.maxHealth = MAX_HEALTH

Enemy.prototype.maxSpeed = 600

Enemy.prototype.defaultFrame = 0


Enemy.prototype.damage = function(_, src) {
    if (src.sprite instanceof Bullet)
        this.killTheta = src.rotation
    else
        this.killTheta = src.sprite.world.angle(this.world)
    this.animations.play('flash')
    Phaser.Sprite.prototype.damage.call(this, src.attack || 1)
}


Enemy.prototype.kill = function() {
    if (this.pendingDoom) return
    this.pendingDoom = true

    this.state.playSound(this.sounds.pop, 400)
    this.state.camera.shake(0.005, 100)

    var tween = this.game.add.tween(this)
    tween.to({width: this.width*2, height: this.height*2, alpha: 0.8}, 60)
    tween.onComplete.addOnce(function() {
            if (this.drop && typeof this.drop.reset === 'function') {
                this.drop.reset(this.x, this.y)
                this.drop = null
            }
            this.pendingDoom = false
            this.height /= 2
            this.width /= 2
            this.alpha = 1
            this.animations.stop()
            this.frame = this.defaultFrame
            Phaser.Sprite.prototype.kill.call(this)
        }, this)

    tween.start()
}


Enemy.prototype.spawn = function(x, y, width, velx, vely, drop) {
    this.reset(x, y, this.maxHealth)
    this.drop = drop || null
    this.width = width
    this.height = width
    this._circle.radius = this.game.physics.p2.pxm(width / 2)
    this.body.velocity.x = velx || 0
    this.body.velocity.y = vely || 0
    this.killTheta = Math.PI/4
    return this
}


Enemy.prototype.update = function() {
    var vx = this.body.velocity.x
    var vy = this.body.velocity.y
    var msSq = this.maxSpeed*this.maxSpeed
    var speedSq = vx*vx + vy*vy
    if (speedSq < msSq) return
    var speed = Math.sqrt(speedSq)
    this.body.velocity.x = this.maxSpeed * vx/speed
    this.body.velocity.y = this.maxSpeed * vy/speed
}

},{"../bullets/Bullet.js":15}],19:[function(require,module,exports){
module.exports = Hex;

var Enemy = require('./Enemy.js');


function Hex(state, data, drop) {
    Enemy.call(this, state, data, drop);
    this.body.data.gravityScale = 0;
}


Hex.prototype = Object.create(Enemy.prototype);

Hex.prototype.defaultFrame = 1

},{"./Enemy.js":18}],20:[function(require,module,exports){
module.exports = Hydroid


var MIN_WIDTH = 10


function Hydroid(state, data, drop, EnemyClass) {
    Phaser.Group.call(this, state.game)
    state.enemies.add(this)

    var w = data.width
    if (w < MIN_WIDTH) return

    var i = Math.ceil(w/MIN_WIDTH) + 1
    for (; i>0; i--) this.add(new EnemyClass(state, data))

    this.forEach(function(enemy) {
        enemy.events.onKilled.add(this.childDeath, this)
    }, this)

    this.spawn(data.x, data.y, data.width, data.properties.velx,
            data.properties.vely, drop)
}


Hydroid.prototype = Object.create(Phaser.Group.prototype)

Hydroid.prototype.minWidth = MIN_WIDTH


Hydroid.prototype.childDeath = function(enemy) {
    var drop = enemy.drop
    enemy.drop = null
    var dropL = null, dropR = null
    if (Array.isArray(drop)) {
        dropL = drop[1] || null
        dropR = drop[2] || null
        drop = drop[0] || null
    }
    if (drop && typeof drop.reset === 'function') {
        drop.reset(x, y)
    }

    var width = enemy.width / 2
    var x = enemy.x
    var y = enemy.y
    var vx = enemy.body.velocity.x
    var vy = enemy.body.velocity.y
    var theta = enemy.killTheta

    var mag = Math.sqrt( vx*vx + vy*vy )
    var xOff = Math.cos(theta + Math.PI/2) * width/2
    var yOff = Math.sin(theta + Math.PI/2) * width/2
    var velx = Math.cos(theta + Math.PI/4) * mag
    var vely = Math.sin(theta + Math.PI/4) * mag

    this.spawn(x + xOff, y + yOff, width, velx, vely, dropL)
    this.spawn(x - xOff, y - yOff, width, vely, -velx, dropL)
}


Hydroid.prototype.spawn = function(x, y, width, velx, vely, drop) {
    var enemy = this.getFirstDead()
    if (!enemy || width < MIN_WIDTH) return null
    return enemy.spawn(x, y, width, velx, vely, drop)
}

},{}],21:[function(require,module,exports){
module.exports = SeekBoss;


var Seeker = require('./Seeker.js');

var HEALTH = 20;
var POOL_SIZE = 120;
var CHILD_WIDTH = 30;
var CHILD_VEL = 100;


function SeekBoss(state, data) {
    Seeker.call(this, state, data);
    this.childPool = state.add.group();
    state.enemies.add(this.childPool);
    var childData = {
        type: 'seeker',
        x: 0,
        y: 0,
        width: CHILD_WIDTH,
        properties: {}
    };
    for (var i=0; i<POOL_SIZE; i++) {
        var seek = state.addEntity(childData);
        seek.recurse(function(enemy) {
            enemy.alive = false;
            enemy.visible = false;
            enemy.exists = false;
        });
        this.childPool.add(seek);
    }
    this.drops = [];
    for (i=0; i<3; i++) {
        var prize = state.addEntity({type: 'slomo'});
        prize.kill();
        this.drops.push(prize);
    }

    this.spawn(data.x, data.y, data.width)
}


SeekBoss.prototype = Object.create(Seeker.prototype);

SeekBoss.prototype.maxHealth = HEALTH;


SeekBoss.prototype.damage = function(_, bullet) {
    if (this.health % 10 === 1) {
        this.drops.pop().reset(this.x, this.y);
        this.width *= 2/3;
        this.height *= 2/3;
        this._circle *= 2/3;
    }
    Seeker.prototype.damage.apply(this, arguments);
    var v = this.body.velocity;
    this.childPool.getFirstDead().getFirstDead().spawn(this.x, this.y, CHILD_WIDTH, v.x + CHILD_VEL, v.y + CHILD_VEL);
    this.childPool.getFirstDead().getFirstDead().spawn(this.x, this.y, CHILD_WIDTH, v.x + CHILD_VEL, v.y + -CHILD_VEL);
    this.childPool.getFirstDead().getFirstDead().spawn(this.x, this.y, CHILD_WIDTH, v.x - CHILD_VEL, v.y + CHILD_VEL);
    this.childPool.getFirstDead().getFirstDead().spawn(this.x, this.y, CHILD_WIDTH, v.x - CHILD_VEL, v.y + -CHILD_VEL);
}

},{"./Seeker.js":22}],22:[function(require,module,exports){
module.exports = Seeker;


var Enemy = require('./Enemy.js');

var ACCEL = 2;
var PREFER_SPEED = 80;


function Seeker(state, data, drop) {
    Enemy.call(this, state, data, drop);
    this.targets = state.players;
    this.accel = ACCEL;
    this.body.data.gravityScale = 0;
    this.body.mass = 0.5;
    // Tying speed to mass makes slowmo work.
    this._preferSpeed = this.body.mass*PREFER_SPEED;
    this.body.removeCollisionGroup(state.platformsCG);
}


Seeker.prototype = Object.create(Enemy.prototype);

Object.defineProperty(Seeker.prototype, 'preferSpeed', {get: function() { return this._preferSpeed/this.body.mass; }});

Seeker.prototype.defaultFrame = 2;


Seeker.prototype.update = function() {
    Enemy.prototype.update.apply(this, arguments);
    var target = this.targets.getClosestTo(this);
    if (!target) return;
    var goRight = target.world.x >= this.world.x ? true : false;
    var goDown = target.world.y >= this.world.y ? true : false;
    var vel = this.body.velocity;
    var max = this.preferSpeed;
    var accel = this.accel;
    // TODO: SRSLY!!! Do we need all this?
    if (goRight === true) {
        if (vel.x > max) {
            vel.x -= accel;
        } else {
            vel.x = Math.min(vel.x + accel, max);
        }
    } else {
        if (vel.x < -max) {
            vel.x += accel;
        } else {
            vel.x = Math.max(vel.x - accel, -max);
        }
    }
    if (goDown === true) {
        if (vel.y > max) {
            vel.y -= accel;
        } else {
            vel.y = Math.min(vel.y + accel, max);
        }
    } else {
        if (vel.y < -max) {
            vel.y += accel;
        } else {
            vel.y = Math.max(vel.y - accel, -max);
        }
    }
}

},{"./Enemy.js":18}],23:[function(require,module,exports){
var Player = require('./heroes/Player.js');
var DefaultCtlr = require('./heroes/DefaultCtlr');

var Hydroid = require('./enemies/Hydroid.js');
var Enemy = require('./enemies/Enemy.js');
var Hex = require('./enemies/Hex.js');
var Seeker = require('./enemies/Seeker.js');
var SeekBoss = require('./enemies/SeekBoss.js');

var Gun = require('./Gun.js');
var Bullet = require('./bullets/Bullet.js');
var Gravity = require('./bullets/Gravity.js');
var Grenade = require('./bullets/Grenade.js');
var Bouncy = require('./bullets/Bouncy');


module.exports = {

    player1: function(state, data) {
        var ctlr = new DefaultCtlr(state);
        return new Player(state, data, ctlr);
    },


    // Enemies
    enemy: function(state, data, drop) {
        return new Hydroid(state, data, drop, Enemy);
    },

    hex: function(state, data, drop) {
        return new Hydroid(state, data, drop, Hex);
    },

    seeker: function(state, data, drop) {
        return new Hydroid(state, data, drop, Seeker);
    },
    
    seekboss: SeekBoss,


    // Buffs
    repel: require('./buffs/Repel.js'),
    shield: require('./buffs/Shield.js'),
    shoes: require('./buffs/Shoes.js'),
    slomo: require('./buffs/Slomo.js'),


    // Guns
    pistol: function(state, data) {
        return new Gun(state, {
            x: data.x,
            y: data.y,
            texture: 'gun',
            rate: 100,
            clips: 1,
            clipSize: 3,
        }, Bullet);
    },

    spread: function(state, data) {
        return new Gun(state, {
            x: data.x,
            y: data.y,
            texture: 'gun',
            rate: 500,
            spread: Math.PI/4,
            clips: 6,
            clipSize: 3
        }, Bullet);
    }, 

    shotgun: function(state, data) {
        return new Gun(state, {
            x: data.x,
            y: data.y,
            texture: 'shotgun',
            rate: 1000,
            spread: Math.PI/18,
            accuracy: Math.PI/54,
            bulletTexture: 'pellet',
            clips: 5,
            clipSize: 3,
            speedVar: 0.1,
            shotSound: 'shotgun'
        }, Bullet);
    },

    smg: function(state, data) {
        return new Gun(state, {
            x: data.x,
            y: data.y,
            texture: 'smg',
            auto: true,
            rate: 100,
            accuracy: Math.PI/16,
            clips: 1,
            clipSize: 30,
        }, Bullet);
    },


    gravgun: function(state, data) {
        return new Gun(state, {
            x: data.x,
            y: data.y,
            texture: 'gravgun',
            clips: 1,
            clipSize: 1,
        }, Gravity);
    },

    grenade: function(state, data) {
        return new Gun(state, {
            x: data.x,
            y: data.y,
            texture: 'grenade-launcher',
            clips: 1,
            clipSize: 1,
            shotSound: 'launch'
        }, Grenade);
    },

    shotgrenade: function(state, data) {
        return new Gun(state, {
            x: data.x,
            y: data.y,
            texture: 'gun',
            rate: 1000,
            spread: Math.PI/8,
            accuracy: Math.PI/8,
            clips: 8,
            clipSize: 3,
            speedVar: 0.05,
        }, Grenade);
    },

    bouncy: function(state, data) {
        return new Gun(state, {
            x: data.x,
            y: data.y,
            texture: 'gun',
            rate: 100,
            clips: 1,
            clipSize: 3,
        }, Bouncy);
    },
}

},{"./Gun.js":7,"./buffs/Repel.js":10,"./buffs/Shield.js":11,"./buffs/Shoes.js":12,"./buffs/Slomo.js":13,"./bullets/Bouncy":14,"./bullets/Bullet.js":15,"./bullets/Gravity.js":16,"./bullets/Grenade.js":17,"./enemies/Enemy.js":18,"./enemies/Hex.js":19,"./enemies/Hydroid.js":20,"./enemies/SeekBoss.js":21,"./enemies/Seeker.js":22,"./heroes/DefaultCtlr":25,"./heroes/Player.js":26}],24:[function(require,module,exports){
module.exports = Character


var WALK = [0, 1, 2, 3]
var WALK_RATE = 15
var FLY = [10, 11]
var FLY_RATE = 100
var FALL = [12, 13]
var FALL_RATE = 10
var DIE = [22, 23]
var DIE_RATE = 4


function Character(state) {
    var character = new Phaser.Sprite(state.game, 0, 0, 'player')

    character.anchor.setTo(0.5)

    character.animations.add('walk', WALK, WALK_RATE, true)
    character.animations.add('fall', FALL, FALL_RATE, true)
    character.animations.add('fly', FLY, FLY_RATE, true)
    character.animations.add('die', DIE, DIE_RATE, true)

    return character
}

},{}],25:[function(require,module,exports){
module.exports = DefaultCtlr


function DefaultCtlr(state) {
    var k = state.input.keyboard
    var keys = Phaser.Keyboard

    this._w = k.addKey(keys.W)
    this._a = k.addKey(keys.A)
    this._d = k.addKey(keys.D)
    this._left = k.addKey(keys.LEFT)
    this._right = k.addKey(keys.RIGHT)
    this._up = k.addKey(keys.UP)
    this.position = state.input.mousePointer.position
    this.newShot = true

    this._wasDown = false
    this._pointer = state.input.mousePointer
}


DefaultCtlr.prototype = {
    get left() {
        return this._a.isDown || this._left.isDown
    },
    get up() {
        return this._w.isDown || this._up.isDown
    },
    get right() {
        return this._d.isDown || this._right.isDown
    },
    get shoot() {
        return this._pointer.leftButton.isDown
    },

    update: function() {
        if (!this.shoot) {
            this._wasDown = false
            return
        }

        if (this._wasDown)
            this.newShot = false
        else
            this.newShot = true

        this._wasDown = true
    }
}

},{}],26:[function(require,module,exports){
module.exports = Player


var PlayerStateMachine = require('./PlayerStateMachine.js')
var PlayerSounds = require('./PlayerSounds.js')
var PlayerFX = require('./PlayerFX.js')
var Character = require('./Character.js')
var setPhysics = require('./setPhysics.js')

var DEFAULT_WEAPON = 'pistol'
var SPEED = 100


function Player(state, data, ctlr) {
    var game = state.game
    var x = data.x || 0
    var y = data.y || 0
    var weapon = state.parseDrop(data.properties.weapon || DEFAULT_WEAPON)

    Phaser.Sprite.call(this, game, x, y)

    this.state = state

    this.speedBonus = 1
    this.standing = 0

    this.character = new Character(state)
    this.playerState = new PlayerStateMachine(this, ctlr)
    this.sounds = new PlayerSounds(state)
    this.fx = new PlayerFX(state)

    setPhysics(this)

    this.addChild(this.character)

    weapon.exists = true
    weapon.pickup(null, this.body)

    state.players.add(this)
}


Player.prototype = Object.create(Phaser.Sprite.prototype)

Player.prototype.maxFuel = 2000

Object.defineProperty(Player.prototype, 'speed', {
    get: function() {
        return this.speedBonus * SPEED
    }
})


Object.defineProperty(Player.prototype, 'facing', {
    set: function(dir) {
        this.character.scale.x = dir
        if (this.weapon) {
            if (dir === -1) {
                this.weapon.scale.y = -1
                this.removeChild(this.weapon)
                this.addChild(this.weapon)
            } else {
                this.weapon.scale.y = 1
                this.removeChild(this.character)
                this.addChild(this.character)
            }
        }
    },

    get: function () {
        return this.character.scale.x > 0 ? 1 : -1
    }
})


Player.prototype.damage = function(_, enemy) {
    var theta = this.world.angle(enemy.sprite)
    this.facing = theta > Math.PI/2 || theta < -Math.PI/2 ? -1 : 1
    this.health -= 1
    if (this.health <= 0) this.kill()
    else this.playerState.change('stunned')
}


Player.prototype.equip = function(weapon) {
    if (this.weapon instanceof Phaser.Sprite) this.weapon.destroy()
    weapon.anchor.setTo(0, 0.5)
    // abs because character is flipped by setting scale to -1.
    weapon.pivot.setTo(-Math.abs(this.character.width/8), 0)
    this.weapon = weapon
    this.addChild(weapon)
}


Player.prototype.kill = function(_, enemy) {
    this.playerState.change('dead')
}


Player.prototype.update = function() {
    this.playerState.update()
}

},{"./Character.js":24,"./PlayerFX.js":27,"./PlayerSounds.js":28,"./PlayerStateMachine.js":29,"./setPhysics.js":30}],27:[function(require,module,exports){
module.exports = PlayerFX


function PlayerFX(state) {
    this.dust = state.add.emitter(0, 0, 10)
    this.flame = state.add.emitter(0, 0, 30)

    this.dust.makeParticles('dust', [0, 1, 2, 3])
    this.dust.setScale(0.5, 2, 0.5, 2, 400)
    this.dust.setRotation(0)
    this.dust.setXSpeed(-100, 100)
    this.dust.setYSpeed(-20, -80)
    this.dust.setAlpha(1, 0.2, 400)
    this.dust.setScale(0.25, 1, 0.25, 1, 200)

    this.flame.makeParticles('flame', [0, 1, 2, 3])
    this.flame.setScale(0.25, 1, 0.25, 1, 200)
    this.flame.setAlpha(1, 0.2, 400)
    this.flame.setRotation(0)
    this.flame.setXSpeed(-40, 40)
    this.flame.setYSpeed(60, 80)
    this.flame.lifespan = 400
}

},{}],28:[function(require,module,exports){
module.exports = PlayerSounds


function PlayerSounds(state) {
    return {
        death: state.add.sound('death'),
        jetpack: state.add.sound('jetpack'),
        land: state.add.sound('land'),
        step: state.add.sound('step')
    }
}

},{}],29:[function(require,module,exports){
module.exports = PlayerStateMachine


var DEATH_FRAME = 23
var SHOOTING_FRAME = 5
var STANDING_FRAME = 0
var STUN_FRAME = 20


function PlayerStateMachine(player, ctlr) {
    this.player = player
    this.ctlr = ctlr

    this.fuel = this.maxFuel
    this.states = {
        dead: new Dead(this),
        falling: new Falling(this),
        flying: new Flying(this),
        standing: new Standing(this),
        stunned: new Stunned(this)
    }

    this.current = this.states.standing
}


PlayerStateMachine.prototype = {
    maxFuel: 2000,

    change: function(key){
        this.current.exit()
        this.current = this.states[key]
        this.current.enter()
    },

    update: function() {
        this.ctlr.update()
        this.current.update()
    }
}


function PlayerState(machine) {
    this.machine = machine
    this.player = machine.player
    this.ctlr = machine.ctlr
}

PlayerState.prototype = {
    enter: function() {},
    exit: function() {},

    update: function() {
        var plyr = this.player
        var ctlr = this.ctlr

        if (this.machine.shooting) {
            plyr.character.animations.stop()
            plyr.character.frame = SHOOTING_FRAME
        }

        var theta = Phaser.Point.angle(ctlr.position, plyr.position)
        if (plyr.weapon) {
            plyr.weapon.rotation = theta
        }
        plyr.facing = theta > Math.PI/2 || theta < -Math.PI/2 ? -1 : 1

        if (ctlr.left) this.onLeft()
        if (ctlr.right) this.onRight()
        if (ctlr.up) this.onUp()
        if (ctlr.shoot) this.onShoot()
    },

    onUp: function() {
        if (this.machine.fuel > 0) this.machine.change('flying')
    },

    onLeft: function() {
        if (!this.ctlr.right) this.player.body.velocity.x = -this.player.speed
        else this.player.body.velocity.x = 0
    },

    onRight: function() {
        if (!this.ctlr.left) this.player.body.velocity.x = this.player.speed
        else this.player.body.velocity.x = 0
    },

    onShoot: function() {
        var plyr = this.player
        if (!plyr.weapon) return
        if (plyr.weapon.fire(this.ctlr.newShot)) {
            plyr.character.animations.stop()
            plyr.character.frame = SHOOTING_FRAME
            var direction = plyr.facing
            plyr.body.x -= 3 * direction
            plyr.weapon.x = -2
            plyr.game.time.events.add(80, function() {
                this.machine.shooting = false
                plyr.weapon.x = 0
            }, this)
        }
    }
}


function Dead(machine) {
    PlayerState.call(this, machine)
    this.wasStanding = false
}


Dead.prototype = {
    exit: function() {},

    enter: function() {
        var plyr = this.player

        plyr.state.playSound(plyr.sounds.death)
        plyr.state.camera.flash(0xf6eeee, 500)
        plyr.alive = false
        plyr.body.removeCollisionGroup([
            plyr.state.enemiesCG, plyr.state.itemsCG
        ])
        plyr.character.animations.stop()
        plyr.character.frame = DEATH_FRAME - 2
        plyr.body.velocity.x = -100 * plyr.facing
        plyr.body.velocity.y = -150
        if (plyr.weapon) {
            var x = plyr.weapon.world.x
            var y = plyr.weapon.world.y
            plyr.weapon.scale.y = 1
            plyr.game.world.add(plyr.weapon)
            plyr.weapon.x = x
            plyr.weapon.y = y
            plyr.state.physics.p2.enableBody(plyr.weapon)
            plyr.weapon.body.collideWorldBounds = false
            plyr.weapon.body.angularVelocity = 4
            plyr.weapon.body.velocity.x = 60 * plyr.facing
            plyr.weapon.body.velocity.y = -100
        }
    },

    update: function() {
        if (!this.player.standing) {
            this.player.character.frame = DEATH_FRAME - 2
            this.wasStanding = false
            return
        }
        velx = this.player.body.velocity.x
        if (velx > 0)
            this.player.body.velocity.x = Math.max(velx - 2, 0)
        else if (velx < 0)
            this.player.body.velocity.x = Math.min(velx + 2, 0)
        if (!this.wasStanding) {
            this.player.character.animations.play('die', null, false)
            this.wasStanding = true
        }
    }
}


function Falling(machine) {
    PlayerState.call(this, machine)
}


Falling.prototype = Object.create(PlayerState.prototype)


Falling.prototype.exit = function() {
    this.player.weapon.y = 0
}


Falling.prototype.update = function() {
    var plyr = this.player

    if (plyr.standing) {
        plyr.state.playSound(plyr.sounds.land)
        plyr.fx.dust.x = plyr.x
        plyr.fx.dust.y = plyr.y + plyr.character.height/2
        plyr.fx.dust.explode(100, 6)

        this.machine.change('standing')
        return
    }

    if (plyr.body.velocity.y > 30) {
        plyr.character.animations.play('fall')
        plyr.weapon.y = -2
    } else {
        plyr.character.frame = 12
    }

    PlayerState.prototype.update.call(this)
}


function Flying(machine) {
    PlayerState.call(this, machine)
}


Flying.prototype = Object.create(PlayerState.prototype)


Flying.prototype.enter = function() {
    this.player.state.playSound(this.player.sounds.jetpack)
}

Flying.prototype.exit = function() {
    this.player.sounds.jetpack.stop()
    this.player.weapon.y = 0
}

Flying.prototype.update = function() {
    var plyr = this.player
    var mchn = this.machine

    if (mchn.fuel <= 0 || !this.ctlr.up) {
        mchn.change('falling')
        return
    }

    plyr.character.animations.play('fly')

    plyr.weapon.y = plyr.body.velocity.y < -30 ? 2 : 0

    plyr.body.thrust(plyr.game.physics.p2.gravity.y * 2.5)
    mchn.fuel = Math.max(mchn.fuel - plyr.game.time.physicsElapsedMS, 0)

    plyr.fx.flame.x = plyr.x
    plyr.fx.flame.y = plyr.y
    plyr.fx.flame.emitParticle()

    PlayerState.prototype.update.call(this)
}


Flying.prototype.onUp = function() {
    return
}


function Standing(machine) {
    PlayerState.call(this, machine)
}


Standing.prototype = Object.create(PlayerState.prototype)


Standing.prototype.update = function() {
    var plyr = this.player
    var mchn = this.machine
    var velx = plyr.body.velocity.x

    if (mchn.fuel < mchn.maxFuel) {
        var fuel = mchn.fuel + plyr.game.time.physicsElapsedMS / 2
        mchn.fuel = Math.min(mchn.maxFuel, fuel)
    }

    if (velx !== 0) {
        var friction = velx/20 * plyr.speedBonus
        plyr.body.velocity.x = velx < 0 ?
            Math.min(velx - friction, 0) :
            Math.max(velx - friction, 0)
    }

    if (Math.abs(velx) >= plyr.speed/2) {
        plyr.character.animations.play('walk')
        if (this.lastStep < plyr.state.time.now - 200) {
            plyr.state.playSound(plyr.sounds.step, 200)
            this.lastStep = plyr.state.time.now
        }
    } else {
        plyr.character.animations.stop()
        plyr.character.frame = STANDING_FRAME
    }

    PlayerState.prototype.update.call(this)
}


function Stunned(machine) {
    PlayerState.call(this, machine)
}


Stunned.prototype = {
    exit: function() {},
    update: function() {
        this.player.character.frame = STUN_FRAME
    },

    enter: function() {
        var plyr = this.player
        var lvl = plyr.state

        plyr.body.removeCollisionGroup(lvl.enemiesCG, false)

        if (plyr.weapon)
            plyr.weapon.rotation = plyr.facing === 1 ? 0 : Math.PI
        plyr.body.velocity.x = 40 * -plyr.facing

        this.tween = this.player.state.add.tween(this.player.character)
        this.tween.to({alpha: 0.2}, 75, null, false, 0, -1, true)
        this.tween.start()

        lvl.time.events.add(800, this.endStun, this)
    },

    end: function() {
        this.tween.pause()
        this.player.character.alpha = 1
        this.player.body.collides(this.player.state.enemiesCG)
    },

    endStun: function() {
        this.player.state.time.events.add(1600, this.end, this)
        if (this.ctlr.up && this.machine.fuel > 0) {
            this.machine.change('flying')
            return
        }
        if (!this.player.standing) {
            this.machine.change('falling')
            return
        }
        this.machine.change('standing')
    }
}

},{}],30:[function(require,module,exports){
module.exports = function setPhysics(player) {
    var state = player.state

    player.game.physics.p2.enable(player)
    player.body.setRectangle(player.character.width/2, player.character.height)

    var groundSensor = player.body.addRectangle(
        player.character.width*2/3, 2, 0, player.character.height/2
    )
    groundSensor.sensor = true

    player.body.onBeginContact.add(function(){
        if(arguments[2] === groundSensor) player.standing++
    }, player)
    player.body.onEndContact.add(function(){
        if(arguments[2] === groundSensor) player.standing--
    }, player)

    player.body.setMaterial(state.playerMaterial);
    player.body.setCollisionGroup(state.playersCG);
    player.body.collides(state.enemiesCG, player.damage, player);
    player.body.collides([state.itemsCG, state.platformsCG]);

    player.body.fixedRotation = true
}

},{}],31:[function(require,module,exports){
module.exports = Game;


var Boot = require('./boot.js');
var Load = require('./load.js');
var Level = require('./level/Level.js');
var Arcade = require('./arcade/arcade.js');


function Game(parent) {
    require('./phaserPatch.js')();

    var game = new Phaser.Game(800, 600);
    game.state.add('Boot', new Boot);
    game.state.add('Load', new Load);
    game.state.add('Level', new Level);
    game.state.add('Arcade', new Arcade);
    
    game.state.start('Boot');
    return game;
}

},{"./arcade/arcade.js":2,"./boot.js":5,"./level/Level.js":32,"./load.js":36,"./phaserPatch.js":40}],32:[function(require,module,exports){
module.exports = Level


function Level() {
    return this
}


Level.prototype = {

    create: require('./create.js'),
    entities: require('../entities/entities.js'),
    init: require('./init.js'),
    parseDrop: require('./parseDrop.js'),


    addEntity: function(data) {
        data.properties = data.properties || {}
        var type = data.type
        var drop = this.parseDrop(data.properties.drop)
        // Tiled uses different coordinates than Phaser.
        data.x = data.x + data.width / 2
        data.y = data.y + data.height / 2
        console.log('Creating ' + type + '...')
        if (!this.entities.hasOwnProperty(type)) {
            throw "Failed to read Tiled map, no game object of type '" + type + ".'"
        }
        return new this.entities[type](this, data, drop)
    },


    changeTime: function(factor) {
        if (factor === 0 || isNaN(factor)) return
        this.bulletTime *= factor;
        this.enemies.recurse(function(enemy) {
            enemy.body.mass /= factor;
            enemy.body.velocity.x *= factor;
            enemy.body.velocity.y *= factor;
            enemy.body.data.gravityScale *= factor * factor;
        });
        if (this.sound.usingWebAudio) {
            this.sound._sounds.forEach(function(snd) {
                if (snd._snd) snd._snd.playbackRate *= factor
            });
        }
    },


    exit: function() {
        this.state.start('Menu')
    },


    explode: function(x, y, width) {
        this.explosionPool.getFirstDead(true).reset(x, y, width)
    },


    gameOver: function() {
        var self = this
        this.input.keyboard.addKey(Phaser.Keyboard.R).onDown.addOnce(function() {
            self.state.start(self.key, true, false, self.mapName)
        })
        this.input.keyboard.addKey(Phaser.Keyboard.X).onDown.addOnce(this.exit.bind(this))
        this.add.tween(this.gameOverScreen).to({alpha: 0.8}, 100).start()
        this.gameOverScreen.exists = true
        this.time.slowMotion = 6
        this.world.add(this.p1)
    },


    playSound: function(sound, randomize) {
        sound.play()
        if (sound._sound && sound.usingWebAudio)
            sound._sound.playbackRate.value = this.bulletTime
            if (randomize)
                sound._sound.detune.value = Math.random() * -randomize
        return sound
    },


    throwShell: function(x, y, dir) {
        var shell = this.shellPool.getFirstDead() || this.shellPool.getRandom()
        shell.reset(x, y)
        shell.body.angularVelocity = Math.random() * 8
        shell.body.velocity.x = (Math.random() * 40 + 20) * dir
        shell.body.velocity.y = -120
    },


    update: function() {
        for (var i=this.buffs.length-1; i>=0; i--) {
            var buff = this.buffs[i]
            if (buff.timeLeft !== -1)
                buff.timeLeft = Math.max(buff.timeLeft - this.time.elapsed, 0)
            if (buff.timeLeft !== 0) {
                if (typeof buff.update === 'function') buff.update()
            } else {
                if (typeof buff.stop === 'function') buff.stop()
                this.buffs.splice(i, 1)
            }
        }

        if (!this.p1.alive) { this.gameOver() }
    },


    shutdown: function() {
        this.stage.removeChild(this.gameOverScreen)
        this.time.slowMotion = 1
    }
}

},{"../entities/entities.js":23,"./create.js":33,"./init.js":34,"./parseDrop.js":35}],33:[function(require,module,exports){
var BrkPlat = require('../entities/BrkPlat.js')
var Explosion = require('../magic/Explosion.js')


module.exports = function create() {
    this.scale.setGameSize(this.map.widthInPixels, this.map.heightInPixels)

    if (this.map.properties && this.map.properties.bgImage) 
        paintBackground(this)
    makeParticles(this)
    makeMap(this)
    makeExplosions(this)
    makeGameOverScreen(this)

    // TODO Change if we ever have more than one player.
    this.p1 = this.players.getChildAt(0)
    //this.world.addChild(this.players)
}


function makeExplosions(state) {
    state.explosionPool = state.add.group()
    state.explosionPool.classType = Explosion
    state.explosionPool.createMultiple(10)
}


function makeGameOverScreen(state) {
    var gameOverScreen = state.make.graphics()
    gameOverScreen.beginFill(0x000000)
    gameOverScreen.drawRect(
        0, 0, state.world.width, state.world.height)
    gameOverScreen.endFill()
    state.gameOverScreen = state.make.image(
        0, 0, gameOverScreen.generateTexture())

    var GOtext = state.make.retroFont(
        'font-small', 8, 8, Phaser.RetroFont.TEXT_SET2)
    GOtext.text = 'r: retry x: menu'
    var t = state.make.image(16, state.world.height-16, GOtext)
    t.anchor.setTo(0, 1)

    state.gameOverScreen.addChild(t)
    state.gameOverScreen.alpha = 0
    state.gameOverScreen.exists = false
    state.world.addChild(state.gameOverScreen)
}


function paintBackground(state) {
    var bg = state.add.image( state.world.width/2, state.world.height/2,
        state.map.properties.bgImage)
    var wWidth = state.world.width
    var wHeight = state.world.height
    bg.anchor.setTo(0.5)
    bg.x = wWidth/2
    bg.y = wHeight/2
    var scale = Math.max(wWidth/bg.width, wHeight/bg.height)
    bg.width *= scale
    bg.height *= scale
}


function makeMap(state) {
    state.map.addTilesetImage('tiles', 'tiles', 8, 8)
    var plats = state.physics.p2
        .convertCollisionObjects(state.map, 'platform', true)
    
    state.map.objects.object.forEach(state.addEntity, state)
    state.map.createLayer('background')
    plats.forEach(function(platform, i) {
        var data = state.map.objects.platform[i]

        platform.setCollisionGroup(state.platformsCG)
        platform.collides(
            [state.enemiesCG, state.playersCG, state.itemsCG, state.shellsCG]
        )

        if (data.properties && data.properties.breakable) {
            var drop = state.parseDrop(data.properties.drop)
            var brkplat = new BrkPlat(state, data, platform, drop)
            platform.collides(state.bulletsCG, brkplat.break, brkplat)
        } else if (data.properties && data.properties.passable) {
            // TODO: Passables should be their own thing.
            // new BrkPlat(state, data, platform)
        } else {
            platform.collides(state.bulletsCG)
        }

        platform.setMaterial(state.platformMaterial)
    }, state)

    var p2 = state.physics.p2
    var bounds = [
        p2.createBody(0, state.world.height, 0, true),
        p2.createBody(0, 0, 0, true),
        p2.createBody(0, 0, 0, true),
        p2.createBody(state.world.width, 0, 0, true)
    ]
    for (var i = 0; i < bounds.length; i++) {
        bounds[i].rotation = i * Math.PI/2
        bounds[i].addCircle(8)
        bounds[i].addPlane()
        bounds[i].setCollisionGroup(p2.boundsCollisionGroup)
        bounds[i].collides([
            state.enemiesCG, state.playersCG, state.itemsCG,
            state.shellsCG, state.bulletsCG
        ])
        bounds[i].setMaterial(state.platformMaterial)
    }

}


function makeParticles(state) {
    state.shellPool = state.add.group()
    state.players = state.add.group()
    state.enemies = state.add.group()
    state.items = state.add.group()
    state.platforms = state.add.group()

    state.shellPool.physicsBodyType = Phaser.Physics.P2JS
    state.shellPool.enableBody = true
    state.shellPool.createMultiple(30, 'shell')
    state.shellPool.forEach(function(shell) {
        shell.body.setRectangle(4, 2)
        shell.body.setCollisionGroup(state.shellsCG)
        shell.body.collides(state.platformsCG)
    }, state)

    state.frag = state.add.emitter(0, 0, 100)
    state.frag.makeParticles('flame', [0, 1, 2, 3])
    state.frag.setScale(0.5, 1, 0.5, 1.)
    state.frag.setRotation(0, 0)
    state.frag.gravity = 0
    state.frag.setXSpeed(-400, 400)
    state.frag.setYSpeed(-400, 400)
    state.frag.setAlpha(1, 0.2, 400)
    state.frag.lifespan = 200
}

},{"../entities/BrkPlat.js":6,"../magic/Explosion.js":37}],34:[function(require,module,exports){
module.exports = function init(map) {
    this.buffs = []
    this.bulletTime = 1
    this.map = this.add.tilemap(map)
    this.mapName = map

    this.stage.backgroundColor = 0x313839
    setPhysics(this)
}


function setPhysics(state) {
    var p2 = state.physics.p2
    p2.setImpactEvents(true)
    p2.gravity.y = 400
    p2.applyGravity = true
    p2.applyDamping = false

    state.itemsCG = p2.createCollisionGroup()
    state.playersCG = p2.createCollisionGroup()
    state.enemiesCG = p2.createCollisionGroup()
    state.platformsCG = p2.createCollisionGroup()
    state.bulletsCG = p2.createCollisionGroup()
    state.shellsCG = p2.createCollisionGroup()

    state.worldMaterial = p2.createMaterial('worldMaterial')
    p2.setWorldMaterial(state.worldMaterial)
    state.playerMaterial = p2.createMaterial('playerMaterial')
    state.platformMaterial = p2.createMaterial('platformMaterial')
    state.enemyMaterial = p2.createMaterial('enemyMaterial')

    p2.createContactMaterial(state.platformMaterial, state.enemyMaterial, {
        restitution: 1,
        friction: 0
    })
    p2.createContactMaterial(state.enemyMaterial, state.worldMaterial, {
        restitution: 1,
        friction: 0
    })
    p2.createContactMaterial(state.playerMaterial, state.platformMaterial, {
        restitution: 0,
        friction: 0
    })
}

},{}],35:[function(require,module,exports){
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
module.exports = function parseDrop(drop) {
    if (drop === '') return null

    if (Array.isArray(drop)) return drop.map(this.parseDrop, this)

    if (typeof drop === 'string') {
        // Hack. Only objects are valid JSON, so an
        // error lets us know we've hit an item name.
        try {
            var dropOb = JSON.parse(drop)
            return this.parseDrop(dropOb)
        } catch (e) {
            if (e instanceof SyntaxError) {
                console.log('Processing Tiled object drop, ' + drop + '...')
                var item = this.addEntity({x: 0, y: 0, type: drop})
                item.kill()
                return item
            } else {
                throw e
            }
        }
    }
    return null
}

},{}],36:[function(require,module,exports){
module.exports = Load
    
    
function Load() {
    return this
}


Load.prototype = {
    preload: function() {
        var assets = require('../assets/assets.json')
        for (var section in assets) {
            this.load.pack(section, null, assets)
        }
    },

    create: function() {
        this.state.start('Arcade', true, false, 'level1')
    }
}

},{"../assets/assets.json":1}],37:[function(require,module,exports){
var dotGravity = require('./dotGravity.js')


module.exports = Explosion


function Explosion(game, x, y, key, frame) {
    key = 'enemies'
    Phaser.Sprite.call(this, game, x, y, key, frame)

    this.state = game.state.getCurrentState()
    game.physics.p2.enable(this)

    this.sounds = {
        explode: this.state.add.sound('explode')
    }
    this.targets = []

    this.width = this.height = 160
    this.shape = this.body.setCircle(this.width/2)
    this.shape.sensor = true
    var ex = this.animations.add('explode', [4, 5, 6, 7], 60, false)
    ex.killOnComplete = true

    this.body.collideWorldBounds = false
    this.body.setCollisionGroup(this.state.bulletsCG)
    this.body.collides(this.state.enemiesCG)
    this.body.onBeginContact.add(this.explode, this)
    game.physics.p2.removeBody(this.body)
}


Explosion.prototype = Object.create(Phaser.Sprite.prototype)


Explosion.prototype.explode = function(body) {
    for (var i = 0; i < this.targets.length; i++)
        if (body.sprite === this.targets[i]) return

    this.targets.push(body.sprite)
}


Explosion.prototype.kill = function() {
    Phaser.Sprite.prototype.kill.call(this)

    for (var i = 0; i < this.targets.length; i++)
        this.targets[i].damage(null, this.body)

    this.state.enemies.recurseAlive(function(enemy) {
        var distance = Math.max(this.world.distance(enemy.world), 1);
        var r = 512;
        if (distance > r) return
        var angle = this.world.angle(enemy.world);
        var d2 = distance*distance;
        var mag = 400 * (1 - distance/r) * this.state.bulletTime
        enemy.body.velocity.x += mag * Math.cos(angle)
        enemy.body.velocity.y += mag * Math.sin(angle)
    }, this)
}


Explosion.prototype.reset = function(x, y, radius) {
    this.targets = []
    if (radius > 0) {
        this.width = this.height = radius * 1.5
        this.shape.radius = radius
    }
    this.body.addToWorld()
    Phaser.Sprite.prototype.reset.call(this, x, y)
    this.animations.play('explode')
    this.state.playSound(this.sounds.explode)
    this.state.camera.shake(0.015, 400);
}

},{"./dotGravity.js":38}],38:[function(require,module,exports){
module.exports = function(subjects, source, magnitude, range, invert) {
    range = range || 0;

    var fn = function(subject) {
        var distance = source.world.distance(subject); 
        if (range > 0 && distance > range) return;

        distance = Phaser.Physics.P2.prototype.pxm(distance);
        var d2 = distance*distance;
        // Gaddamn singularities.
        d2 = d2 < 1 ? 1 : d2;

        var mag = invert ? magnitude * (1 - 1/d2) : magnitude / d2;
        var angle = source.world.angle(subject);
        var force = [
            mag * Math.cos(angle),
            mag * Math.sin(angle)
        ];

        subject.body.applyForce(force, subject.x, subject.y);
    }

    if (subjects instanceof Phaser.Group) {
        subjects.recurseAlive(fn);
    } else {
        fn(subjects);
    }
}

},{}],39:[function(require,module,exports){
module.exports = explode;


var dotGravity = require('./dotGravity.js');

var DAMAGE = 3;


function explode(target, source, radius, damage, blast, blastRadius, invert) {
    damage = damage || DAMAGE;

    target.forInReach(source, radius, function(enemy) {
        enemy.damage(damage, source.world.angle(enemy));
    });
    dotGravity(target, source, -blast, blastRadius, invert);
    target.game.camera.shake(0.01, 400);
}

},{"./dotGravity.js":38}],40:[function(require,module,exports){
module.exports = function() {

    Object.defineProperty(Phaser.Group.prototype, 'alive', {
        get: function() { return !!this.getFirstAlive() }
    })


    Phaser.Group.prototype.recurse = function(fn, ctx) {
        var args = [null]
        for (var i = 2; i < arguments.length; i++) args.push(arguments[i])

        for (i = 0; i < this.children.length; i++) {
            var child = this.children[i]
            if (child instanceof Phaser.Group) {
                child.recurse.apply(child, arguments)
            } else {
                args[0] = child
                fn.apply(ctx, args)
            }

        }
    }


    Phaser.Group.prototype.recurseAlive = function(fn, ctx) {
        var args = [null]
        for (var i = 2; i < arguments.length; i++) args.push(arguments[i])

        var alive = []
        for (i = 0; i < this.children.length; i++) {
            var child = this.children[i]
            if (!child.alive) continue

            if (child instanceof Phaser.Group) {
                child.recurseAlive.apply(child, arguments)
            } else {
                alive.push(child)
            }
        }

        for (i=0; i<alive.length; i++) {
            args[0] = alive[i]
            fn.apply(ctx, args)
        }
    }


    Phaser.Group.prototype.forInReach  = function(obj, range, fn, ctx) {
        var args = [null]
        for (var i = 4; i < arguments.length; i++) args.push(arguments[i])

        var alive = []
        for (i = 0; i < this.children.length; i++) {
            var child = this.children[i]
            if (!child.alive) continue

            if (child instanceof Phaser.Group) {
                child.forInReach.apply(child, arguments)
            } else if (obj.world.distance(child) <= range) {
                alive.push(child)
            }
        }

        for (i=0; i<alive.length; i++) {
            args[0] = alive[i]
            fn.apply(ctx, args)
        }
    }
}

},{}]},{},[31])(31)
});