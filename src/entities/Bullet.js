module.exports = (function() {

    Bullet = function(game, x, y, texture) {
        Phaser.Sprite.call(this, game, x, y, texture);
        this.kill();
        game.physics.p2.enable(this);
        this.body.setCircle(this.width/2);
        this.body.data.gravityScale = 0;
        this.body.collideWorldBounds = false;
        this.body.mass = 1.25;
        this.checkWorldBounds = true;
        this.outOfBoundsKill = true;
    }

    Bullet.prototype = Object.create(Phaser.Sprite.prototype);

    Bullet.prototype.die = function() {
        this.kill();
    }

    Bullet.prototype.fire = function(x, y, theta, speed) {
        this.reset(x, y);
        this.body.rotation = theta;
        this.body.velocity.x = Math.cos(theta) * speed;
        this.body.velocity.y = Math.sin(theta) * speed;
    } 

    return Bullet;
})();
