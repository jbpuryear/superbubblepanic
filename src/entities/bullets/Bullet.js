module.exports = Bullet;


var SPEED = 500;
var BODY_RADIUS = 4;
var TEXTURE = 'bullet';


function Bullet(state, x, y, texture) {
    Phaser.Sprite.call(this, state.game, x, y, 'sprites');
    if (texture) this.defaultFrame = texture;
    this.frameName = this.defaultFrame;
    Phaser.Sprite.prototype.kill.call(this);

    this.state = state;

    state.game.physics.p2.enable(this);
    this.body.setCircle(BODY_RADIUS);
    this.body.data.gravityScale = 0;
    this.body.collideWorldBounds = false;
    this.body.mass = 0.6;
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this.body.setCollisionGroup(state.bulletsCG);
    this.body.collides([state.enemiesCG, state.platformsCG], this.hit, this);
}


Bullet.prototype = Object.create(Phaser.Sprite.prototype);

Bullet.prototype.attack = 1;
Bullet.prototype.defaultFrame = 'bullet';
Bullet.prototype.speed = SPEED;


Bullet.prototype.hit = function(_, target) {
    this.kill();
    this.state.frag.x = this.x;
    this.state.frag.y = this.y;
    this.state.frag.explode(40, 5);
}


Bullet.prototype.fire = function(x, y, theta, speedBonus) {
    this.frameName = 'muzzle-flare';
    this.game.time.events.add(40, function() {
        this.frameName = this.defaultFrame;
    }, this);
    speedBonus = speedBonus || 1;
    var speed = this.speed * speedBonus;
    this.reset(x, y);
    this.body.rotation = theta;
    this.body.velocity.x = Math.cos(theta) * speed;
    this.body.velocity.y = Math.sin(theta) * speed;
} 
