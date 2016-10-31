var Bullet = require('./Bullet.js');

module.exports = (function() {

    Gun = function(game, x, y, options) {
        options = options || {};

        var texture = options.texture;
        Phaser.Sprite.call(this, game, x, y, texture);
        game.physics.p2.enable(this);

        this.rate = options.rate || 100;
        this.auto = options.auto || false;
        this.spread = options.spread || 0;
        this.accuracy = options.accuracy || 0;
        this.bulletSpeed = options.bulletSpeed || 300;
        this.speedVar = options.speedVar || 0;

        var clips = options.clips || 1;
        var clipSize = options.clipSize || 3;
        var bulletTexture = options.bulletTexture;
        
        this.clips = [];
        this.lastShot = 0;

        for (var i=0; i<clips; i++) {
            var clip = new Phaser.Group(game);
            for (var j=0; j<clipSize; j++) {
                var bullet = new Bullet(game, 0, 0, bulletTexture);
                clip.add(bullet);
            }
            this.clips.push(clip);
        }
    }

    Gun.prototype = Object.create(Phaser.Sprite.prototype);

    Gun.prototype.pickUp = function(_, playerBody) {
        playerBody.sprite.equip(this);
    }

    Gun.prototype.fire = function(newShot) {
        // TODO: should only fire if every clip can fire.
        if (this.auto || newShot) {
            var now = this.game.time.now;
            if (now - this.lastShot < this.fireRate) { return; }
            var x = this.worldPosition.x;
            var y = this.worldPosition.y;
            var theta = this.rotation;
            this.clips.forEach(function(clip, i) {
                var bullet = clip.getFirstDead();
                if (bullet) {
                    var speed = this.bulletSpeed + (Math.random()*2 - 1)*this.speedVar;
                    var bulletTheta = theta + (this.spread/this.clips.length *i - this.spread/2) + (Math.random()*2 - 1)*this.accuracy;
                    bullet.fire(x, y, bulletTheta, speed);
                }
            }, this);
        }
    }

    return Gun;
})();
