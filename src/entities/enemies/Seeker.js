module.exports = Seeker;


var Enemy = require('./Enemy.js');

var ACCEL = 140;
var ACCEL_SQR = ACCEL*ACCEL
var PREFER_SPEED = 80;


function Seeker(state, data, drop) {
    Enemy.call(this, state, data, drop);
    this.targets = state.players;
    this.body.data.gravityScale = 0;
    this.body.mass = 0.5;
    // Tying speed to mass makes slowmo work.
    this._preferSpeed = this.body.mass*PREFER_SPEED;
}


Seeker.prototype = Object.create(Enemy.prototype);

Object.defineProperty(Seeker.prototype, 'preferSpeed', {get: function() { return this._preferSpeed/this.body.mass; }});

Seeker.prototype.defaultFrame = 'seeker';


Seeker.prototype.update = function() {
    Enemy.prototype.update.apply(this, arguments);

    var target = this.targets.getClosestTo(this);
    if (!target) return;

    var theta = this.world.angle(target.world)
    var vel = this.body.velocity;
    var max = this.preferSpeed;
    var desired = {
        x: max * Math.cos(theta),
        y: max * Math.sin(theta)
    };
    var steer = {
        x: desired.x - vel.x,
        y: desired.y - vel.y
    };
    var steerSqr = steer.x*steer.x + steer.y*steer.y;
    if (steerSqr > ACCEL_SQR) {
        var scale = ACCEL/Math.sqrt(steerSqr)
        steer.x *= scale;
        steer.y *= scale;
    }
    this.body.data.applyForce([
        this.body.world.pxm(-steer.x * this.body.mass),
        this.body.world.pxm(-steer.y * this.body.mass)
    ]);
}
