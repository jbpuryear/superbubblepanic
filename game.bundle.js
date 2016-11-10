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

},{}],4:[function(require,module,exports){
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

},{"../Item.js":16}],5:[function(require,module,exports){
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

},{"./Buff.js":4}],6:[function(require,module,exports){
module.exports = Repel;


var Buff = require('./Buff.js');
var dotGravity =  require('../../magic/dotGravity.js');


var TEXTURE = 'gun';


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

},{"../../magic/dotGravity.js":21,"./Buff.js":4}],7:[function(require,module,exports){
module.exports = Slomo;


var Buff = require('./Buff.js');


var TEXTURE = 'gun';


function Slomo(state, data) {
    data.texture = TEXTURE;
    Buff.call(this, state, data);
}


Slomo.prototype = Object.create(Buff.prototype);


Slomo.prototype.buffProto = {
    duration: 6500,
    rate: 4,
    start: function() {
        var rate = this.rate;
        this.state.enemies.recurse(function(enemy) {
            enemy.body.mass *= rate;
            enemy.body.velocity.x /= rate;
            enemy.body.velocity.y /= rate;
            enemy.body.data.gravityScale /= rate * rate;
        });
    },
    stop: function() {
        this.rate = 1/this.rate;
        this.start();
    }
}

},{"./Buff.js":4}],8:[function(require,module,exports){
module.exports = Bullet;


var BULLET_SPEED = 300;
var DEFAULT_TEXTURE = 'bullet';


function Bullet(state, x, y, texture) {
    texture = texture || DEFAULT_TEXTURE;
    Phaser.Sprite.call(this, state.game, x, y, texture);
    this.kill();

    this.speed = BULLET_SPEED;

    state.game.physics.p2.enable(this);
    this.body.setCircle(this.width/2);
    this.body.data.gravityScale = 0;
    this.body.collideWorldBounds = false;
    this.body.mass = 5;
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this.body.setCollisionGroup(state.bulletsCG);
    this.body.collides([state.enemiesCG, state.platformsCG], this.hit, this);
}


Bullet.prototype = Object.create(Phaser.Sprite.prototype);


Bullet.prototype.hit = function() {
    this.kill();
}


Bullet.prototype.fire = function(x, y, theta, speedBonus) {
    speedBonus = speedBonus || 1;
    var speed = this.speed * speedBonus;
    this.reset(x, y);
    this.body.rotation = theta;
    this.body.velocity.x = Math.cos(theta) * speed;
    this.body.velocity.y = Math.sin(theta) * speed;
} 

},{}],9:[function(require,module,exports){
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

},{"../../magic/dotGravity.js":21,"../../magic/explode.js":22,"./Bullet.js":8}],10:[function(require,module,exports){
module.exports = Enemy;


var TEXTURE = 'enemy';
var MAX_HEALTH = 1;


function Enemy(state, data, drop) {
    data.texture = data.texture || TEXTURE;
    Phaser.Sprite.call(this, state.game, data.x, data.y, data.texture);
    state.physics.p2.enable(this);
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
    // TODO: Yech, this so Hydroid can set spawn velocities. Gotta
    // be a better way.
    var theta = Math.atan2(bullet.velocity.y, bullet.velocity.x);
    this.damage(1, theta);
}


Enemy.prototype.kill = function() {
    if (this.drop && typeof this.drop.reset === 'function') {
        this.drop.reset(this.x, this.y);
        this.drop = null;
    }
    Phaser.Sprite.prototype.kill.call(this);
}


Enemy.prototype.damage = function(amnt, angle) {
    amnt = amnt || 1;
    if (Number.isNaN(angle)) throw 'No angle given.';
    this.killTheta = angle;
    Phaser.Sprite.prototype.damage.call(this, amnt);
}

},{}],11:[function(require,module,exports){
module.exports = Hex;

var Enemy = require('./Enemy.js');


var TEXTURE = 'enemy';


function Hex(state, data, drop) {
    Enemy.call(this, state, data, drop);
    this.body.data.gravityScale = 0;
    this.tint = 0x00FFFF;
}


Hex.prototype = Object.create(Enemy.prototype);

},{"./Enemy.js":10}],12:[function(require,module,exports){
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
    this.callAll('kill');
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
    var width = enemy.width / 2;
    var x = enemy.x;
    var y = enemy.y;

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

    var vx = enemy.body.velocity.x;
    var vy = enemy.body.velocity.y;
    // TODO: See Enemy.prototype.getHit.
    var theta = enemy.killTheta;
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

},{}],13:[function(require,module,exports){
module.exports = Seeker;


var Enemy = require('./Enemy.js');

var TEXTURE = 'enemy';
var ACCEL = 2;
var MAX_SPEED = 50;


function Seeker(state, data, drop) {
    data.texture = data.texture || TEXTURE;
    Enemy.call(this, state, data, drop);
    this.targets = state.players;
    this.accel = ACCEL;
    this.maxSpeed = MAX_SPEED;
    this.body.data.gravityScale = 0;
    this.body.mass = 0.5;
    this.body.removeCollisionGroup(state.platformsCG);
}


Seeker.prototype = Object.create(Enemy.prototype);


Seeker.prototype.update = function() {
    Enemy.prototype.update.apply(this, arguments);
    var target = this.targets.getClosestTo(this);
    if (!target) return;
    var goRight = target.world.x >= this.world.x ? true : false;
    var goDown = target.world.y >= this.world.y ? true : false;
    var vel = this.body.velocity;
    var max = this.maxSpeed;
    // TODO: SRSLY!!! Do we need all this?
    if (goRight === true) {
        if (vel.x > this.maxSpeed) {
            vel.x -= this.accel;
        } else {
            vel.x = Math.min(vel.x + this.accel, this.maxSpeed);
        }
    } else {
        if (vel.x < -this.maxSpeed) {
            vel.x += this.accel;
        } else {
            vel.x = Math.max(vel.x - this.accel, -this.maxSpeed);
        }
    }
    if (goDown === true) {
        if (vel.y > this.maxSpeed) {
            vel.y -= this.accel;
        } else {
            vel.y = Math.min(vel.y + this.accel, this.maxSpeed);
        }
    } else {
        if (vel.y < -this.maxSpeed) {
            vel.y += this.accel;
        } else {
            vel.y = Math.max(vel.y - this.accel, -this.maxSpeed);
        }
    }
}

},{"./Enemy.js":10}],14:[function(require,module,exports){
module.exports = Gun;


var Item = require('./Item.js');
var Bullet = require('./Bullets/Bullet.js');


function Gun(state, data, BulletClass) {
    Item.call(this, state, data);

    this.rate = data.rate || 100;
    this.auto = data.auto || false;
    this.spread = data.spread || 0;
    this.accuracy = data.accuracy || 0;
    this.speedMul = data.speedMul || 1;
    this.speedVar = data.speedVar || 0;

    this.clips = [];
    this.lastShot = 0;

    var clips = data.clips || 1;
    var clipSize = data.clipSize || 3;
    var bulletTexture = data.bulletTexture;

    for (var i=0; i<clips; i++) {
        var clip = new Phaser.Group(state.game);

        for (var j=0; j<clipSize; j++) {
            var bullet = new BulletClass(state, 0, 0, bulletTexture);
            clip.add(bullet);
        }

        this.clips.push(clip);
    }
}


Gun.prototype = Object.create(Item.prototype);


Gun.prototype.pickUp = function(_, playerBody) {
    this.lifespan = 0;
    playerBody.sprite.equip(this);
}


Gun.prototype.fire = function(newShot) {
    if (this.auto || newShot) {

        var now = this.game.time.now;
        if (now - this.lastShot < this.rate) return;

        var bullets = this.clips.map(function(clip) { return clip.getFirstDead(); });

        if (!bullets.every(function(bullet) { return bullet; })) return;

        this.lastShot = now;

        var x = this.worldPosition.x;
        var y = this.worldPosition.y;
        var theta = this.rotation;

        bullets.forEach(function(bullet, i) {
            var speedBonus = this.speedMul * (1 + (Math.random()*2 - 1)*this.speedVar);
            var bulletTheta = theta + (this.spread/this.clips.length *i - this.spread/2) + (Math.random()*2 - 1)*this.accuracy;
            bullet.fire(x, y, bulletTheta, speedBonus);
        }, this);
    }
}

},{"./Bullets/Bullet.js":8,"./Item.js":16}],15:[function(require,module,exports){
module.exports = Player;

var TEXTURE = 'player';
var DEFAULT_WEAPON = 'pistol';
var SPEED = 100;
// Animation frames and their frame:
var WALK = [0, 1, 2, 3];
var WALK_RATE = 25;
var FLY = [10, 11];
var FLY_RATE = 100;


function Player(state, data) {
    var game = state.game;
    var x = data.x || 0;
    var y = data.y || 0;
    var texture = data.texture || TEXTURE;
    var weapon = state.parseDrop(data.properties.weapon || DEFAULT_WEAPON);

    // This three-part sprite shenanigans lets us control
    // whether the gun is rendered above or below the character.
    Phaser.Sprite.call(this, game, x, y);

    // Make our character sprite.
    var character = new Phaser.Sprite(game, 0, 0, texture);
    this.character = character;
    character.anchor.setTo(0.5);
    this.character.animations.add('walk', WALK, WALK_RATE, true);
    this.character.animations.add('fly', FLY, FLY_RATE, true);

    game.physics.p2.enable(this)
    this.body.fixedRotation = true;
    this.body.setRectangle(character.width/2, character.height);

    var groundSensor = this.body.addRectangle(character.width*2/3, 2, 0, character.height/2);
    groundSensor.sensor = true;
    this.standing = 0;
    this.body.onBeginContact.add(function(){ if(arguments[2] === groundSensor) this.standing++ }, this);
    this.body.onEndContact.add(function(){ if(arguments[2] === groundSensor) this.standing-- }, this);

    this.addChild(character);
    this.equip(weapon);

    this.fuel = this.maxFuel;
    this.speedBonus = 1;

    this.body.setMaterial(state.playerMaterial);
    this.body.setCollisionGroup(state.playersCG);
    this.body.collides(state.enemiesCG, this.die, this);
    this.body.collides([state.itemsCG, state.platformsCG]);

    state.players.add(this);
}


Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.maxFuel = 2000;

Object.defineProperty(Player.prototype, 'speed', {get: function() {return this.speedBonus * SPEED}});


Player.prototype.equip = function(weapon) {
    if (this.weapon instanceof Phaser.Sprite) this.weapon.destroy();
    if (weapon.body) weapon.body.destroy();
    weapon.anchor.setTo(0, 0.5);
    // abs because character is flipped by setting scale to -1.
    weapon.pivot.setTo(-Math.abs(this.character.width/8), 0);
    weapon.reset(0, 0);
    weapon.lifespan = 0;
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
    if (this.standing) {
        this.fuel = Math.min(this.maxFuel, this.fuel + this.game.time.physicsElapsedMS / 2);
        var velx = this.body.velocity.x;
        var friction = velx/20 * this.speedBonus;
        this.body.velocity.x = velx < 0 ?
            Math.min(velx - friction, 0) : Math.max(velx - friction, 0);
    }
    
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
    } else if (Math.abs(this.body.velocity.x) >= this.speed/2) {
        this.character.animations.play('walk');
    } else {
        this.character.animations.stop();
        this.character.frame = 0;
    }
    this.flying = false;
}

},{}],16:[function(require,module,exports){
// Time in ms before item disappears.
var LIFESPAN = 5000;

module.exports = Item;


function Item(state, data) {
    var x = data.x || 0;
    var y = data.y || 0;
    var texture = data.texture;
    if (!texture) console.warn('Creating Item with no texture.');

    Phaser.Sprite.call(this, state.game, x, y, texture);
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
    console.warn("This item doesn't do anything when it's picked up.");
}


Item.prototype.revive = function(health) {
    Phaser.Sprite.prototype.reset.call(this, this.x, this.y,health);
    this.lifespan = this._lifespan;
}

Item.prototype.reset = function(x, y, health) {
    this.x = x;
    this.y = y;
    this.revive(health);
}

},{}],17:[function(require,module,exports){
var Hydroid = require('./Enemies/Hydroid.js');
var Enemy = require('./Enemies/Enemy.js');
var Hex = require('./Enemies/Hex.js');
var Seeker = require('./Enemies/Seeker.js');

var Gun = require('./Gun.js');
var Bullet = require('./Bullets/Bullet.js');
var Gravity = require('./Bullets/Gravity.js');


module.exports = {

    player1: require('./Heroes/Player.js'),


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
    

    // Buffs
    repel: require('./Buffs/Repel.js'),
    slomo: require('./Buffs/Slomo.js'),
    ears: require('./Buffs/Ears.js'),


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
            texture: 'gun',
            rate: 300,
            spread: Math.PI/8,
            accuracy: Math.PI/8,
            clips: 8,
            clipSize: 3,
            speedVar: 0.05,
        }, Bullet);
    },

    gravgun: function(state, data) {
        return new Gun(state, {
            x: data.x,
            y: data.y,
            texture: 'gun',
            clips: 1,
            clipSize: 1,
        }, Gravity);
    },
}

},{"./Buffs/Ears.js":5,"./Buffs/Repel.js":6,"./Buffs/Slomo.js":7,"./Bullets/Bullet.js":8,"./Bullets/Gravity.js":9,"./Enemies/Enemy.js":10,"./Enemies/Hex.js":11,"./Enemies/Hydroid.js":12,"./Enemies/Seeker.js":13,"./Gun.js":14,"./Heroes/Player.js":15}],18:[function(require,module,exports){
module.exports = Game;


var Boot = require('./boot.js');
var Load = require('./load.js');
var Level = require('./level.js');


function Game(parent) {
    require('./phaserPatch.js')();

    var game = new Phaser.Game(800, 600);
    game.state.add('Boot', new Boot);
    game.state.add('Load', new Load);
    game.state.add('Level', new Level);
    
    game.state.start('Boot');
    return game;
}

},{"./boot.js":2,"./level.js":19,"./load.js":20,"./phaserPatch.js":23}],19:[function(require,module,exports){
module.exports = Level;


var entities = require('./entities/entities.js');
var BrkPlat = require('./entities/BrkPlat.js');


function Level() {
    return this;
}


Level.prototype = {

    entities: entities,


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
            friction: 0
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
        plats.forEach(function(platform, i) {
            var data = this.map.objects.platform[i];
            platform.setCollisionGroup(this.platformsCG);
            platform.collides([this.enemiesCG, this.playersCG, this.itemsCG]);
            if (data.properties && data.properties.breakable) {
                var drop = this.parseDrop(data.properties.drop);
                var brkplat = new BrkPlat(this, data, platform, drop);
                platform.collides(this.bulletsCG, brkplat.break, brkplat);
            } else {
                platform.collides(this.bulletsCG);
            }
            platform.setMaterial(this.platformMaterial);
        }, this);
        this.map.objects.object.forEach(this.addEntity, this);
        // TODO Change if we ever have more than one player.
        this.p1 = this.players.getChildAt(0);
    },


    update: function() {
        // TODO: move all this to the player class.
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


    addEntity: function(data) {
        data.properties = data.properties || {};
        var type = data.type;
        var drop = this.parseDrop(data.properties.drop);
        // Tiled uses different coordinates than Phaser.
        var x = data.x + data.width / 2;
        var y = data.y + data.height / 2;
        console.log('Creating ' + type + '...');
        if (!this.entities.hasOwnProperty(type)) {
            throw "Failed to read Tiled map, no game object of type '" + type + ".'";
        }
        if (data.drop) drop = this.parseDrop(data.drop);
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

        // Someone left the drop field blank in their map.
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


},{"./entities/BrkPlat.js":3,"./entities/entities.js":17}],20:[function(require,module,exports){
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

},{"../assets/assets.json":1}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
module.exports = explode;


var dotGravity = require('./dotGravity.js');

var DAMAGE = 3;


function explode(target, source, radius, damage, blast, blastRadius, invert) {
    damage = damage || DAMAGE;

    target.forInReach(source, radius, function(enemy) {
        enemy.damage(damage, source.world.angle(enemy));
    });
    dotGravity(target, source, -blast, blastRadius, invert);
}

},{"./dotGravity.js":21}],23:[function(require,module,exports){
module.exports = function() {

    Object.defineProperty(Phaser.Group.prototype, 'alive', {
        get: function() { return !!this.getFirstAlive(); }
    });


    Phaser.Group.prototype.recurse = function(fn, ctx) {
        var args = [null];
        for (var i = 2; i < arguments.length; i++) args.push(arguments[i]);

        for (i = 0; i < this.children.length; i++) {
            var child = this.children[i];
            if (child instanceof Phaser.Group) {
                child.recurse.apply(child, arguments);
            } else {
                args[0] = child;
                fn.apply(ctx, args);
            }

        }
    }


    Phaser.Group.prototype.recurseAlive = function(fn, ctx) {
        var args = [null];
        for (var i = 2; i < arguments.length; i++) args.push(arguments[i]);

        var alive = [];
        for (i = 0; i < this.children.length; i++) {
            var child = this.children[i];
            if (!child.alive) continue;

            if (child instanceof Phaser.Group) {
                child.recurseAlive.apply(child, arguments);
            } else {
                alive.push(child);
            }
        }

        for (i=0; i<alive.length; i++) {
            args[0] = alive[i];
            fn.apply(ctx, args);
        }
    }


    Phaser.Group.prototype.forInReach  = function(obj, range, fn, ctx) {
        var args = [null];
        for (var i = 4; i < arguments.length; i++) args.push(arguments[i]);

        var alive = [];
        for (i = 0; i < this.children.length; i++) {
            var child = this.children[i];
            if (!child.alive) continue;

            if (child instanceof Phaser.Group) {
                child.forInReach.apply(child, arguments);
            } else if (obj.world.distance(child) <= range) {
                alive.push(child);
            }
        }

        for (i=0; i<alive.length; i++) {
            args[0] = alive[i];
            fn.apply(ctx, args);
        }
    }
}

},{}]},{},[18])(18)
});