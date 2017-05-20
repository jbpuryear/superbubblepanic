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
