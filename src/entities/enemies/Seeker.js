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

Seeker.prototype.defaultFrame = 'seeker';


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
