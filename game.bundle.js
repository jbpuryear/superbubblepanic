(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SBP = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
    "images": [
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
            "key": "shotgun",
            "urls": ["assets/audio/shotgun.ogg"],
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

var MAX_ENEMY_WIDTH = 100;
var ENEMIES = [
    {
        type: 'enemy',
        chance: 6,
        velx: 90,
        vely: 0
    },
    {
        type: 'hex',
        chance: 4,
        velx: 90,
        vely: 90
    },
    {
        type: 'seeker',
        chance: 2,
        velx: 0,
        vely: 0
    }
];
var ENEMIES_SUM = ENEMIES.reduce(function(sum, item) { return sum + item.chance; }, 0);
var DROPS = [
    {
        type: 'repel',
        chance: 2
    },
    {
        type: 'slomo',
        chance: 8,
    },
    {
        type: 'shotgun',
        chance: 1
    },
];
var DROP_CHANCE = 0.05;
var CHANCE_SUM = DROPS.reduce(function(sum, item) { return sum + item.chance; }, 0);

var Level = require('./level/Level.js');
var Hydroid = require('./entities/enemies/Hydroid.js');

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
    for (var i = 0; i < ENEMIES.length; i++) {
        var eType = ENEMIES[i].type;
        enemyData.type = eType;
        var pool = this.addEntity(enemyData);
        this.enemyPools[eType] = pool;
        pool.setAll('alive', false);
        pool.forEach(function(enemy) {
            enemy.events.onKilled.add(this.getDrop, this);
        }, this);
    }
    this.spawnEnemy();
}


Arcade.prototype.update = function() {
    Level.prototype.update.call(this);

    this.timer -= this.time.physicsElapsedMS;
    if (this.timer < 0) this.spawnEnemy();
    var noEnemy = true;
    for (var i = 0; i < ENEMIES.length; i++) {
        if (this.enemyPools[ENEMIES[i].type].getFirstAlive()) {
            noEnemy = false
            break;
        }
    }
    if (noEnemy) { this.timer = Math.min(this.timer, 1000); }
}


Arcade.prototype.spawnEnemy = function() {
    var width = (Math.random() * MAX_ENEMY_WIDTH + MAX_ENEMY_WIDTH)/2;
    var x = Math.random() * (this.world.width - width - 10) + width/2 + 5;
    var y = -width/2;
    var roll = Math.floor(Math.random() * (Math.min(this.level, ENEMIES_SUM)));
    for (var i = 0, acc = 0; i < ENEMIES.length; i++) {
        acc += ENEMIES[i].chance;
        if (roll < acc) {
            var spawnData = ENEMIES[i];
            break;
        }
    }
    var enemy = this.enemyPools[spawnData.type].spawn(x, y, width);

    if (!enemy) return;

    enemy.body.velocity.x = spawnData.velx * this.bulletTime;
    enemy.body.velocity.y = spawnData.vely * this.bulletTime;

    this.maxTime *= 0.95;
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
    if (Math.random() > DROP_CHANCE) { return null; }

    var roll = Math.floor(Math.random() * CHANCE_SUM);
    for (var i = 0, acc = 0; i < DROPS.length; i++) {
        acc += DROPS[i].chance;
        if (roll < acc) {
            var drop = this.addEntity({x: 0, y: 0, type: DROPS[i].type});
            drop.reset(enemy.x, enemy.y);
            return drop;
        }
    }
}

},{"./entities/enemies/Hydroid.js":17,"./level/Level.js":23}],3:[function(require,module,exports){
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

        this.game.camera.bounds = null
    },

    create: function() {
        this.state.start('Load')
    }
}

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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
    this.shotSound = state.add.sound(data.sound || 'gunshot')


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


Gun.prototype.pickUp = function(_, playerBody) {
    this.lifespan = 0
    Item.prototype.pickup.call(this)
    playerBody.sprite.equip(this)
}


Gun.prototype.fire = function(newShot) {
    if (this.auto || newShot) {

        var now = this.game.time.now
        if (now - this.lastShot < this.rate) return false

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

        this.state.playSound(this.shotSound, 400)
        this.game.camera.shake(0.015, 70)
        return true
    }
    return false
}

},{"./Item.js":6,"./bullets/Bullet.js":12}],6:[function(require,module,exports){
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
    this.pulse.to({alpha: 0.2}, 100, null, false, this._lifespan - 750, null, true)

    state.physics.p2.enable(this);
    this.body.setCollisionGroup(state.itemsCG);
    this.body.collides(state.platformsCG);
    this.body.collides(state.playersCG, this.pickUp, this);
    this.lifespan = this._lifespan;

    state.items.add(this);
}


Item.prototype = Object.create(Phaser.Sprite.prototype);

Item.prototype._lifespan = LIFESPAN;


Item.prototype.pickup = function(thisBody, heroBody) {
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

},{}],7:[function(require,module,exports){
var Item = require('../Item.js');

module.exports = Buff;


function Buff(state, data) {
    Item.call(this, state, data);
    // We will pass to our Level's  buff array which is updated each loop.
    this.buff = Object.create(this.buffProto);
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


Buff.prototype.pickUp = function(_, playerBody) {
    var buff = this.buff;
    buff.target = playerBody.sprite;
    if (typeof buff.start === 'function') buff.start(buff.target);

    if (buff.duration > 0) {
        buff.timeLeft = buff.duration;
        buff.state.buffs.push(buff);
    }
    this.destroy();
}

},{"../Item.js":6}],8:[function(require,module,exports){
module.exports = Ears;


var Buff = require('./Buff.js');

var TEXTURE = 'gun';


function Ears(state, data) {
    data.texture = TEXTURE;
    Buff.call(this, state, data);
}


Ears.prototype = Object.create(Buff.prototype);


Ears.prototype.buffProto = {
    start: function() {
        this.target.speedBonus *= 1.35;
    }
}

},{"./Buff.js":7}],9:[function(require,module,exports){
module.exports = Repel;


var Buff = require('./Buff.js');
var dotGravity =  require('../../magic/dotGravity.js');


var TEXTURE = 'repel';


function Repel(state, data) {
    data.texture = TEXTURE;
    Buff.call(this, state, data);
}


Repel.prototype = Object.create(Buff.prototype);


Repel.prototype.buffProto = {
    duration: 8000,
    update: function() {
        dotGravity(this.state.enemies, this.target, -90, 70);
    }
}

},{"../../magic/dotGravity.js":28,"./Buff.js":7}],10:[function(require,module,exports){
module.exports = Slomo;


var Buff = require('./Buff.js');


var TEXTURE = 'slomo';


function Slomo(state, data) {
    data.texture = TEXTURE;
    Buff.call(this, state, data);
}


Slomo.prototype = Object.create(Buff.prototype);


Slomo.prototype.buffProto = {
    duration: 6500,
    rate: 0.25,
    start: function() {
        this.state.changeTime(this.rate)
    },
    stop: function() {
        this.state.changeTime(1/this.rate)
    }
}

},{"./Buff.js":7}],11:[function(require,module,exports){
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

},{"./Bullet.js":12}],12:[function(require,module,exports){
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
    if (target.sprite) {
        var theta = this.body.rotation;
        target.sprite.damage(this.attack, theta);
    }
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

},{}],13:[function(require,module,exports){
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

},{"../../magic/dotGravity.js":28,"../../magic/explode.js":29,"./Bullet.js":12}],14:[function(require,module,exports){
module.exports = Grenade;


var Bullet = require('./Bullet.js');
var explode = require('../../magic/explode.js');

var TEXTURE = 'bullet';
var SPEED = 400;
var MASS = 0.5;
var RADIUS = 60;
var LIFE = 2500;
var DAMAGE = 5;
var BLAST = 800;


function Grenade(state, x, y, texture) {
    texture = texture || TEXTURE;
    Bullet.call(this, state, x, y, texture);
    if (!Grenade.prototype.material) {
        Grenade.prototype.material = state.physics.p2.createMaterial('grenade');
        state.physics.p2.createContactMaterial(this.material, state.platformMaterial, {
            friction: 0.4,
            restitution: 0.7
        });
        state.physics.p2.createContactMaterial(this.material, state.worldMaterial, {
            friction: 0.4,
            restitution: 0.7
        });
    }
    this.body.setMaterial(Grenade.prototype.material);
    this.body.data.gravityScale = 1;
    this.body.mass = MASS;
    this.target = state.enemies;
    this.body.removeCollisionGroup(state.platformsCG);
    this.body.collides(state.platformsCG);
    this.body.collideWorldBounds = true;
}


Grenade.prototype = Object.create(Bullet.prototype);

Grenade.prototype.speed = SPEED;


Grenade.prototype.kill = function() {
    if (!this.target) return;
    explode(this.target, this, RADIUS, DAMAGE, BLAST);
    Bullet.prototype.kill.apply(this, arguments);
}


Grenade.prototype.fire = function(x, y, theta, speedBonus) {
    Bullet.prototype.fire.apply(this, arguments);
    this.body.angularVelocity = (this.body.rotation > Math.PI/2 || this.body.rotation < -Math.PI/2) ?
        Math.PI : -Math.PI;
    this.lifespan = LIFE;
}


Grenade.prototype.hit = function(_, target) {
    this.kill();
}

},{"../../magic/explode.js":29,"./Bullet.js":12}],15:[function(require,module,exports){
module.exports = Enemy;


var TEXTURE = 'enemy';
var MAX_HEALTH = 1;


function Enemy(state, data, drop) {
    data.texture = data.texture || TEXTURE;
    Phaser.Sprite.call(this, state.game, data.x, data.y, data.texture);
    this.state = state;
    state.physics.p2.enable(this);
    state.enemies.add(this);
    this._circle = this.body.setCircle(1);
    this.body.setCollisionGroup(state.enemiesCG);
    this.body.collides(state.platformsCG);
    this.body.collides([state.playersCG, state.bulletsCG], this.getHit, this);
    this.body.setMaterial(state.enemyMaterial);
    this.body.fixedRotation = true;
    this.spawn(this.x, this.y, data.width, data.properties.velx,
            data.properties.vely, drop);
}


Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.maxHealth = MAX_HEALTH;


Enemy.prototype.spawn = function(x, y, width, velx, vely, drop) {
    this.reset(x, y, this.maxHealth);
    this.drop = drop || null;
    this.width = width;
    this.height = width;
    this._circle.radius = this.game.physics.p2.pxm(width / 2);
    this.body.velocity.x = velx || 0;
    this.body.velocity.y = vely || 0;
    this.killTheta = Math.PI/4;
    return this;
}


Enemy.prototype.getHit = function(_, bullet) {
}


Enemy.prototype.kill = function() {
    if (this.pendingDoom) return;
    this.pendingDoom = true;
    this.game.add.tween(this)
        .to({width: this.width*1.2, height: this.height*1.2, alpha: 0.8}, 60)
        .start()
        .onComplete.addOnce(function() {
            if (this.drop && typeof this.drop.reset === 'function') {
                this.drop.reset(this.x, this.y);
                this.drop = null;
            }
            this.pendingDoom = false;
            this.height /= 1.2;
            this.width /= 1.2;
            this.alpha = 1;
            Phaser.Sprite.prototype.kill.call(this);
        }, this);
}


Enemy.prototype.damage = function(amnt, angle) {
    amnt = amnt || 1;
    if (Number.isNaN(angle)) throw 'No angle given.';
    this.killTheta = angle;
    Phaser.Sprite.prototype.damage.call(this, amnt);
}

},{}],16:[function(require,module,exports){
module.exports = Hex;

var Enemy = require('./Enemy.js');


var TEXTURE = 'hex';


function Hex(state, data, drop) {
    data.texture = TEXTURE;
    Enemy.call(this, state, data, drop);
    this.body.data.gravityScale = 0;
}


Hex.prototype = Object.create(Enemy.prototype);

},{"./Enemy.js":15}],17:[function(require,module,exports){
module.exports = Hydroid;


var MIN_WIDTH = 8;


function Hydroid(state, data, drop, EnemyClass) {
    var w = data.width;
    Phaser.Group.call(this, state.game);
    state.enemies.add(this);
    if (w < this.minWidth) { return; }
    var i = 0;
    while (w >= this.minWidth) {
        w /= 2;
        i++;
    }
    i = Math.pow(2, i);
    for (; i>0; i--) this.add(new EnemyClass(state, data));
    this.setAll('alive', false);
    this.setAll('exists', false);
    this.setAll('visible', false);
    this.forEach(function(enemy) {
        enemy.events.onKilled.add(this.onChildDeath, this);
    }, this);
    this.spawn(data.x, data.y, data.width, data.properties.velx,
            data.properties.vely, drop);
}


Hydroid.prototype = Object.create(Phaser.Group.prototype);

Hydroid.prototype.minWidth = MIN_WIDTH;


Hydroid.prototype.spawn = function(x, y, width, velx, vely, drop) {
    var enemy = this.getFirstDead();
    if (!enemy || width < this.minWidth) { return null; }
    return enemy.spawn(x, y, width, velx, vely, drop);
}


Hydroid.prototype.onChildDeath = function(enemy) {
    var drop = enemy.drop;
    enemy.drop = null;
    var dropL = null, dropR = null;
    if (Array.isArray(drop)) {
        dropL = drop[1] || null;
        dropR = drop[2] || null;
        drop = drop[0] || null;
    }
    if (drop && typeof drop.reset === 'function') {
        drop.reset(x, y);
    }

    var width = enemy.width / 2;
    var x = enemy.x;
    var y = enemy.y;
    var vx = enemy.body.velocity.x;
    var vy = enemy.body.velocity.y;
    var theta;

    // TODO: This switch is weird and is gonna cause problems. 
    enemy.body.data.gravityScale === 0 ?
        theta = Math.atan2(vy, vx) :
        theta = enemy.killTheta;

    var mag = Math.sqrt( vx*vx + vy*vy );
    var xOff = Math.cos(theta + Math.PI/2) * width/2;
    var yOff = Math.sin(theta + Math.PI/2) * width/2;
    var velx = Math.cos(theta + Math.PI/4) * mag;
    var vely = Math.sin(theta + Math.PI/4) * mag;

    this.spawn(x + xOff, y + yOff, width, velx, vely, dropL);

    var velx = Math.cos(theta - Math.PI/4) * mag;
    var vely = Math.sin(theta - Math.PI/4) * mag;

    this.spawn(x - xOff, y - yOff, width, velx, vely, dropL);
}

},{}],18:[function(require,module,exports){
module.exports = SeekBoss;


var Seeker = require('./Seeker.js');

var TEXTURE = 'enemy';
var HEALTH = 20;
var POOL_SIZE = 120;
var CHILD_WIDTH = 30;
var CHILD_VEL = 100;


function SeekBoss(state, data) {
    data.texture = data.texture || TEXTURE;
    Seeker.call(this, state, data);
    this.health = HEALTH;
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
}


SeekBoss.prototype = Object.create(Seeker.prototype);


SeekBoss.prototype.getHit = function(_, bullet) {
    if (this.health % 10 === 1) {
        this.drops.pop().reset(this.x, this.y);
        this.width *= 2/3;
        this.height *= 2/3;
        this._circle *= 2/3;
    }
    Seeker.prototype.getHit.apply(this, arguments);
    var v = this.body.velocity;
    this.childPool.getFirstDead().getFirstDead().spawn(this.x, this.y, CHILD_WIDTH, v.x + CHILD_VEL, v.y + CHILD_VEL);
    this.childPool.getFirstDead().getFirstDead().spawn(this.x, this.y, CHILD_WIDTH, v.x + CHILD_VEL, v.y + -CHILD_VEL);
    this.childPool.getFirstDead().getFirstDead().spawn(this.x, this.y, CHILD_WIDTH, v.x - CHILD_VEL, v.y + CHILD_VEL);
    this.childPool.getFirstDead().getFirstDead().spawn(this.x, this.y, CHILD_WIDTH, v.x - CHILD_VEL, v.y + -CHILD_VEL);
}

},{"./Seeker.js":19}],19:[function(require,module,exports){
module.exports = Seeker;


var Enemy = require('./Enemy.js');

var TEXTURE = 'enemy';
var ACCEL = 2;
var MAX_SPEED = 80;


function Seeker(state, data, drop) {
    data.texture = data.texture || TEXTURE;
    Enemy.call(this, state, data, drop);
    this.targets = state.players;
    this.accel = ACCEL;
    this.body.data.gravityScale = 0;
    this.body.mass = 0.5;
    // Tying speed to mass makes slowmo work.
    this._maxSpeed = this.body.mass*MAX_SPEED;
    this.body.removeCollisionGroup(state.platformsCG);
}


Seeker.prototype = Object.create(Enemy.prototype);

Object.defineProperty(Seeker.prototype, 'maxSpeed', {get: function() { return this._maxSpeed/this.body.mass; }});


Seeker.prototype.update = function() {
    Enemy.prototype.update.apply(this, arguments);
    var target = this.targets.getClosestTo(this);
    if (!target) return;
    var goRight = target.world.x >= this.world.x ? true : false;
    var goDown = target.world.y >= this.world.y ? true : false;
    var vel = this.body.velocity;
    var max = this.maxSpeed;
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

},{"./Enemy.js":15}],20:[function(require,module,exports){
var Player = require('./heroes/Player.js');
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
        var k = state.input.keyboard;
        var keys = Phaser.Keyboard;
        var ctlr = {
            up: k.addKey(keys.W),
            left: k.addKey(keys.A),
            right: k.addKey(keys.D),
            shoot: state.input.mousePointer.leftButton,
            position: state.input.mousePointer.position
        };
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
    slomo: require('./buffs/Slomo.js'),
    ears: require('./buffs/Ears.js'),


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
            spread: Math.PI/8,
            accuracy: Math.PI/8,
            clips: 8,
            clipSize: 3,
            speedVar: 0.05,
            sound: 'shotgun'
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
            texture: 'gun',
            clips: 1,
            clipSize: 1,
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

},{"./Gun.js":5,"./buffs/Ears.js":8,"./buffs/Repel.js":9,"./buffs/Slomo.js":10,"./bullets/Bouncy":11,"./bullets/Bullet.js":12,"./bullets/Gravity.js":13,"./bullets/Grenade.js":14,"./enemies/Enemy.js":15,"./enemies/Hex.js":16,"./enemies/Hydroid.js":17,"./enemies/SeekBoss.js":18,"./enemies/Seeker.js":19,"./heroes/Player.js":21}],21:[function(require,module,exports){
module.exports = Player;

var TEXTURE = 'player';
var DEFAULT_WEAPON = 'pistol';
var SPEED = 100;
// Animations
var WALK = [0, 1, 2, 3];
var WALK_RATE = 15;
var FLY = [10, 11];
var FLY_RATE = 100;
var FALL = [12, 13];
var FALL_RATE = 10;
var DIE = [20, 21, 22, 23];
var DIE_RATE = 8;

var LEFT = -1;
var RIGHT = 1;


function Player(state, data, ctlr) {
    var game = state.game;
    var x = data.x || 0;
    var y = data.y || 0;
    var texture = data.texture || TEXTURE;
    var weapon = state.parseDrop(data.properties.weapon || DEFAULT_WEAPON);

    Phaser.Sprite.call(this, game, x, y);

    this.state = state;
    this.ctlr = ctlr;
    this.ctlr.enabled = true;
    this.shooting = false;
    this.flying = false;
    this.standing = 0;
    this.lastStep = 0;
    this.wasStanding = true;
    this.sounds = {
        step: state.add.sound('step'),
        hit: state.add.sound('hit')
    };
    this.fx = {
        dust: state.add.emitter(0, 0, 10),
        flame: state.add.emitter(0, 0, 30)
    };

    this.fx.dust.makeParticles('dust', [0, 1, 2, 3]);
    this.fx.dust.setScale(0.5, 2, 0.5, 2, 400);
    this.fx.dust.setRotation(0);
    this.fx.dust.setXSpeed(-100, 100);
    this.fx.dust.setYSpeed(-20, -80);
    this.fx.dust.setAlpha(1, 0.2, 400);
    this.fx.dust.setScale(0.25, 1, 0.25, 1, 200);

    this.fx.flame.makeParticles('flame', [0, 1, 2, 3]);
    this.fx.flame.setScale(0.25, 1, 0.25, 1, 200);
    this.fx.flame.setAlpha(1, 0.2, 400);
    this.fx.flame.setRotation(0);
    this.fx.flame.setXSpeed(-40, 40);
    this.fx.flame.setYSpeed(60, 80);
    this.fx.flame.lifespan = 400;

    // This three-part sprite shenanigans lets us control
    // whether the gun is rendered above or below the character.
    var character = new Phaser.Sprite(game, 0, 0, texture);
    this.character = character;
    character.anchor.setTo(0.5);
    this.character.animations.add('walk', WALK, WALK_RATE, true);
    this.character.animations.add('fall', FALL, FALL_RATE, true);
    this.character.animations.add('fly', FLY, FLY_RATE, true);
    this.character.animations.add('die', DIE, DIE_RATE, true);

    game.physics.p2.enable(this)
    this.body.fixedRotation = true;
    this.body.setRectangle(character.width/2, character.height);

    var groundSensor = this.body.addRectangle(character.width*2/3, 2, 0, character.height/2);
    groundSensor.sensor = true;
    this.body.onBeginContact.add(function(){ if(arguments[2] === groundSensor) this.standing++ }, this);
    this.body.onEndContact.add(function(){ if(arguments[2] === groundSensor) this.standing-- }, this);

    this.addChild(character);

    this.fuel = this.maxFuel;
    this.speedBonus = 1;

    this.body.setMaterial(state.playerMaterial);
    this.body.setCollisionGroup(state.playersCG);
    this.body.collides(state.enemiesCG, this.die, this);
    this.body.collides([state.itemsCG, state.platformsCG]);

    weapon.exists = true
    weapon.pickUp(null, this.body)
    state.players.add(this);
}


Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.maxFuel = 2000;

Object.defineProperty(Player.prototype, 'speed', {get: function() {return this.speedBonus * SPEED}});


Object.defineProperty(Player.prototype, 'facing', {
    set: function(dir) {
        this.character.scale.x = dir;
        if (this.weapon) {
            if (dir === LEFT) {
                this.weapon.scale.y = -1;
                this.removeChild(this.weapon);
                this.addChild(this.weapon);
            } else {
                this.weapon.scale.y = 1;
                this.removeChild(this.character);
                this.addChild(this.character);
            }
        }
    },
    get: function () { return this.character.scale.x > 0 ? RIGHT : LEFT }
});


Player.prototype.equip = function(weapon) {
    if (this.weapon instanceof Phaser.Sprite) this.weapon.destroy();
    weapon.anchor.setTo(0, 0.5);
    // abs because character is flipped by setting scale to -1.
    weapon.pivot.setTo(-Math.abs(this.character.width/8), 0);
    this.weapon = weapon;
    this.addChild(weapon);
}


Player.prototype.goLeft = function() {
    this.body.velocity.x = -this.speed;
}


Player.prototype.goRight = function() {
    this.body.velocity.x = this.speed;
}


Player.prototype.fly = function() {
    if (this.fuel > 0) {
        this.body.thrust(this.game.physics.p2.gravity.y * 2.5 * this.speedBonus);
        this.fuel = Math.max(this.fuel - this.game.time.physicsElapsedMS, 0);
        this.flying = true;
        this.fx.flame.x = this.x;
        this.fx.flame.y = this.y;
        this.fx.flame.emitParticle();
    }
}


Player.prototype.shoot = function(isNew) {
    var didShoot;
    if (this.alive && this.weapon && typeof this.weapon.fire === 'function') {
        didShoot = this.weapon.fire(isNew);
    }
    if (didShoot) {
        var direction = this.character.scale.x;
        this.body.x -= 3 * direction;
        this.shooting = true;
        this.weapon.x = -2;
        this.game.time.events.add(40, function() {
            this.shooting = false;
            this.weapon.x = 0;
        }, this);
    }
}


Player.prototype.die = function(_, enemy) {
    this.state.playSound(this.sounds.hit)
    this.state.camera.shake(0.02, 200);
    if (enemy.sprite && typeof enemy.sprite.damage === 'function') {
        var theta = this.world.angle(enemy.sprite);
        enemy.sprite.damage(1, theta);
        this.facing = theta > Math.PI/2 || theta < -Math.PI/2 ? LEFT : RIGHT;
    }
    this.alive = false;
    this.ctlr.enabled = false;
    this.body.removeCollisionGroup([this.state.enemiesCG, this.state.itemsCG]);
    this.animations.stop();
    this.character.animations.play('die', DIE_RATE, false);
    this.body.velocity.x = -100 * (this.facing === LEFT ? -1 : 1);
    this.body.velocity.y = -150;
    if (this.weapon) {
        var x = this.weapon.world.x;
        var y = this.weapon.world.y;
        this.weapon.scale.y = 1;
        this.state.physics.p2.enableBody(this.weapon);
        this.game.world.add(this.weapon);
        this.weapon.reset(x, y);
        this.weapon.body.angularVelocity = 4;
        this.weapon.body.velocity.x = 60 * (this.facing === LEFT ? -1 : 1);
        this.weapon.body.velocity.y = -100;
    }
}


Player.prototype.update = function() {
    // TODO: Time to make this a state machine.
    var standing = this.standing;
    if (standing) {
        this.fuel = Math.min(this.maxFuel, this.fuel + this.game.time.physicsElapsedMS / 2);
        var velx = this.body.velocity.x;
        var friction = velx/20 * this.speedBonus;
        this.body.velocity.x = velx < 0 ?
            Math.min(velx - friction, 0) : Math.max(velx - friction, 0);
    }

    if (!this.alive) return;

    if (this.shooting) {
        this.character.animations.stop();
        this.character.frame = 5;
    } else if (this.flying) {
        this.character.animations.play('fly');
        this.weapon.y = 2;
    } else if (!standing) {
        if (this.body.velocity.y > 30) {
            this.character.animations.play('fall');
            this.weapon.y = -2;
        } else {
            this.character.frame = 12;
        }
    } else if (!this.wasStanding) {
        this.fx.dust.x = this.x;
        this.fx.dust.y = this.y + this.character.height/2;
        this.fx.dust.explode(100, 6);
    } else if (Math.abs(this.body.velocity.x) >= this.speed/2) {
        this.character.animations.play('walk');
        if (this.lastStep < this.state.time.now - 200) {
            this.state.playSound(this.sounds.step, 200)
            this.lastStep = this.state.time.now
        }
    } else {
        this.character.animations.stop();
        this.character.frame = 0;
    }
    this.flying = false;
    this.wasStanding = standing;

    if (!this.ctlr.enabled) return;
    
    // TODO: move all this to the player class.
    if (this.ctlr.right.isDown) this.goRight(this.speed);
    if (this.ctlr.left.isDown) this.goLeft(this.speed);
    if (this.ctlr.up.isDown) this.fly();
    if (this.ctlr.shoot.isDown) {
        this.shoot(this.ctlr.isNewClick);
        this.ctlr.isNewClick = false;
    } else {
        this.ctlr.isNewClick = true;
    }

    // TODO This should work even if a weapon isn't equipped
    var theta = Phaser.Point.angle(this.ctlr.position, this.position);
    if (this.weapon) {
        this.weapon.y = 0;
        this.weapon.rotation = theta;
    }
    this.facing = theta > Math.PI/2 || theta < -Math.PI/2 ? LEFT : RIGHT;
}

},{}],22:[function(require,module,exports){
module.exports = Game;


var Boot = require('./boot.js');
var Load = require('./load.js');
var Level = require('./level/Level.js');
var Arcade = require('./arcade.js');


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

},{"./arcade.js":2,"./boot.js":3,"./level/Level.js":23,"./load.js":27,"./phaserPatch.js":30}],23:[function(require,module,exports){
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
    },


    exit: function() {
        this.state.start('Menu')
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
            buff.timeLeft -= this.time.elapsed
            if (buff.timeLeft >= 0) {
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

},{"../entities/entities.js":20,"./create.js":24,"./init.js":25,"./parseDrop.js":26}],24:[function(require,module,exports){
var BrkPlat = require('../entities/BrkPlat.js')


module.exports = function create() {
    this.scale.setGameSize(this.map.widthInPixels, this.map.heightInPixels)

    if (this.map.properties && this.map.properties.bgImage) 
        paintBackground(this)
    makeParticles(this)
    makeMap(this)
    makeGameOverScreen(this)

    // TODO Change if we ever have more than one player.
    this.p1 = this.players.getChildAt(0)
    this.world.addChild(this.players)
    console.log(this.sound._sounds)
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

    state.map.objects.object.forEach(state.addEntity, state)
}


function makeParticles(state) {
    state.shellPool = state.add.group()
    state.items = state.add.group()
    state.players = state.add.group()
    state.enemies = state.add.group()
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

},{"../entities/BrkPlat.js":4}],25:[function(require,module,exports){
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
    p2.updateBoundsCollisionGroup()
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

},{}],26:[function(require,module,exports){
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

},{}],27:[function(require,module,exports){
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

},{"../assets/assets.json":1}],28:[function(require,module,exports){
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

},{}],29:[function(require,module,exports){
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

},{"./dotGravity.js":28}],30:[function(require,module,exports){
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

},{}]},{},[22])(22)
});