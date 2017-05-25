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

var Level = require('./level.js');
var Hydroid = require('./entities/Enemies/Hydroid.js');

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
