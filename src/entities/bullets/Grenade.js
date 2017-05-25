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
