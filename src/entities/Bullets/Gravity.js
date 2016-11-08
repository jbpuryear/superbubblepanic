module.exports = Gravity;


var Bullet = require('./Bullet.js');
var dotGravity = require('../../magic/dotGravity.js');

var TEXTURE = 'bullet';
var SPEED = 340;
var RANGE = 100;
var MAGNITUDE = 80;
var LIFESPAN = 2000;
var KILL_RANGE = 50;
var EXPLOSION = -1500;
var EXP_RANGE = 800;
var DAMPING = 0.94;
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
    var living = [];
    this.enemies.forInReach(this, KILL_RANGE, function(enemy) { living.push(enemy); });
    for (var i = 0; i < living.length; i++) living[i].damage(1);
    this.enemies.forInReach(this, EXP_RANGE, dotGravity, null, this, EXPLOSION);
}


Gravity.prototype.update = function() {
    if (!this.alive) return;
    this.body.velocity.x *= SELF_DAMP;
    this.body.velocity.y *= SELF_DAMP;
    this.enemies.forInReach(this, RANGE, function(enemy) {
        dotGravity(enemy, this, MAGNITUDE);
        enemy.body.velocity.x *= DAMPING;
        enemy.body.velocity.y *= DAMPING;
    }, this);
}


Gravity.prototype.reset = function(x, y, health) {
    Bullet.prototype.reset.call(this, x, y, health);
    this.lifespan = LIFESPAN;
}
