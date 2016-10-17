module.exports = (function() {

    // Helper class that weapons are extended from.
    Gun = function(state, x, y, texture, fireRate, auto) {
        Phaser.Sprite.call(this, state.game, x, y, texture);
        state.physics.p2.enable(this);

        this.clips = [];
        this.fireRate = fireRate || 100;
        this.lastShot = 0;
        this.auto = auto || false;
    }

    Gun.prototype = Object.create(Phaser.Sprite.prototype);

    Gun.prototype.pickUp = function(_, playerBody) {
        playerBody.sprite.swapGun(this);
    }


    // Helper class. The games weapons are collections of _Clips.
    Clip = function(state, size, BulletType, texture) {
        Phaser.Group.call(this, state.game);
        for (var i = 0; i < size; i++) {
            this.add(new BulletType(state, 0, 0, texture));
        }
        this.callAll('kill');
    }

    Clip.prototype = Object.create(Phaser.Group.prototype);


    Gun.prototype.fire = function(newShot) {
        if (this.auto || newShot) {
            var now = this.game.time.now;
            if (now - this.lastShot < this.fireRate) { return; }
            var x = this.worldPosition.x;
            var y = this.worldPosition.y;
            var theta = this.rotation;
            this.clips.forEach(function(clip) {
                var bullet = clip.getFirstDead();
                if (bullet) { bullet.fire(x, y, theta); }
            });
        }
    }


    Pistol = function(state, x, y, texture, bulletTexture) {
        Gun.call(this, state, x, y, texture);
        this.clips.push(new Clip(state, 3, Bullet, bulletTexture));
    }

    Pistol.prototype = Object.create(Gun.prototype);

    return Gun;
})();
