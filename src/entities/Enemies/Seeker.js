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
