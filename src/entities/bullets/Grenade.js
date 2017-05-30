module.exports = Grenade;


var Bullet = require('./Bullet.js');

var TEXTURE = 'grenade';
var SPEED = 400;
var MASS = 0.5;
var RADIUS = 60;
var LIFE = 2500;
var DAMAGE = 5;
var BLAST = 800;


function Grenade(state, x, y, texture) {
    Phaser.Group.call(this, state.game);
    texture = texture || TEXTURE;
    this.addChild(new Round(state, x, y, texture));
}


Grenade.prototype = Object.create(Phaser.Group.prototype);

// TODO: This is to get around how guns fire their bullets, which
// which needs to be fixed.
Object.defineProperty(Grenade.prototype, 'alive', {get: function() {return false}});


Grenade.prototype.fire = function(x, y, theta, speedBonus) {
    var round = this.children[0];
    console.log(round);
    if (round.exists) round.kill();
    else round.fire(x, y, theta, speedBonus);
}


function Round(state, x, y, texture) {
    Bullet.call(this, state, x, y, texture);
    if (!Round.prototype.material) {
        Round.prototype.material = state.physics.p2.createMaterial('grenade');
        state.physics.p2.createContactMaterial(this.material, state.platformMaterial, {
            friction: 0.4,
            restitution: 0.7
        });
        state.physics.p2.createContactMaterial(this.material, state.worldMaterial, {
            friction: 0.4,
            restitution: 0.7
        });
    }
    this.body.setMaterial(Round.prototype.material);
    this.body.data.gravityScale = 1;
    this.body.mass = MASS;
    this.target = state.enemies;
    this.body.removeCollisionGroup(state.platformsCG);
    this.body.collides(state.platformsCG);
    this.body.collideWorldBounds = true;
}


Round.prototype = Object.create(Bullet.prototype);

Round.prototype.speed = SPEED;


Round.prototype.kill = function() {
    this.state.explode(this.x, this.y);
    Bullet.prototype.kill.apply(this, arguments);
}


Round.prototype.fire = function(x, y, theta, speedBonus) {
    this.lifespan = LIFE;
    Bullet.prototype.fire.apply(this, arguments);
    this.body.angularVelocity = (this.body.rotation > Math.PI/2 || this.body.rotation < -Math.PI/2) ?
        Math.PI : -Math.PI;
}


Round.prototype.hit = function(_, target) {
    this.kill();
}
