module.exports = Bullet;


var BULLET_SPEED = 300;
var DEFAULT_TEXTURE = 'bullet';


function Bullet(state, x, y, texture) {
    texture = texture || DEFAULT_TEXTURE;
    Phaser.Sprite.call(this, state.game, x, y, texture);
    this.kill();

    this.speed = BULLET_SPEED;

    state.game.physics.p2.enable(this);
    this.body.setCircle(this.width/2);
    this.body.data.gravityScale = 0;
    this.body.collideWorldBounds = false;
    this.body.mass = 5;
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this.body.setCollisionGroup(state.bulletsCG);
    this.body.collides([state.enemiesCG, state.platformsCG], this.hit, this);
}


Bullet.prototype = Object.create(Phaser.Sprite.prototype);


Bullet.prototype.hit = function() {
    this.kill();
}


Bullet.prototype.fire = function(x, y, theta, speedBonus) {
    speedBonus = speedBonus || 1;
    var speed = this.speed * speedBonus;
    this.reset(x, y);
    this.body.rotation = theta;
    this.body.velocity.x = Math.cos(theta) * speed;
    this.body.velocity.y = Math.sin(theta) * speed;
} 
