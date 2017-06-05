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
