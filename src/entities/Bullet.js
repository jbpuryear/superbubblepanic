module.exports = (function() {

    Bullet = function(state, x, y, texture) {
        Phaser.Sprite.call(this, state.game, x, y, texture);
        this.kill();
        state.physics.p2.enable(this);
        this.body.setCircle(this.width/2);
        this.body.data.gravityScale = 0;
        this.body.collideWorldBounds = false;
        this.body.mass = 1.25;
        this.checkWorldBounds = true;
        this.outOfBoundsKill = true;
        this.speed = 300;
    }

    Bullet.prototype = Object.create(Phaser.Sprite.prototype);

    Bullet.prototype.die = function() {
        this.kill();
    }

    Bullet.prototype.fire = function(x, y, theta) {
        this.reset(x, y);
        this.body.rotation = theta;
        this.body.velocity.x = Math.cos(theta) * this.speed;
        this.body.velocity.y = Math.sin(theta) * this.speed;
    } 

    return Bullet;
})();
