module.exports = (function() {

    Enemy = function(state, x, y, texture, width, velx, vely, drop) {
        Phaser.Group.call(this, state.game);
        if (width < this.minWidth) { return; }
        var i = 0;
        var w = width;
        while (w >= this.minWidth) {
            w /= 2;
            i++;
        }
        i = Math.pow(2, i);
        this.createMultiple(i, texture);
        this.forEach(function(enemy) {
            state.physics.p2.enable(enemy);
            enemy.cirkle = enemy.body.setCircle(10);
            enemy.body.fixedRotation = true;
            enemy.events.onKilled.add(this.onDeath, this);
        }, this);
        this.spawn(x, y, width, velx, vely, drop);
    }


    Enemy.prototype = Object.create(Phaser.Group.prototype);

    Enemy.prototype.minWidth = 8;

    Enemy.prototype.spawn = function(x, y, width, velx, vely, drop) {
        velx = velx || 0;
        vely = vely || 0;
        drop = drop || null;
        var enemy = this.getFirstDead();
        if (!enemy || width < this.minWidth) { return null; }
        enemy.width = width;
        enemy.height = width;
        enemy.drop = drop;
        enemy.cirkle.radius = enemy.game.physics.p2.pxm(width / 2);
        enemy.reset(x, y);
        enemy.body.velocity.x = velx;
        enemy.body.velocity.y = vely;
        return enemy;
    }

    Enemy.prototype.onDeath = function(enemy) {
        var width = enemy.width / 2;
        var x = enemy.x;
        var y = enemy.y;
        var velx = Math.abs(enemy.body.velocity.x);
        var vely = -Math.abs(enemy.body.velocity.y);
        var drop = dropL = dropR = null;
        if (Array.isArray(enemy.drop)) {
            drop = enemy.drop[0] || null;
            dropL = enemy.drop[1] || null;
            dropR = enemy.drop[2] || null;
        } else {
            drop = enemy.drop || null;
        }
        enemy.drop = null;
        if (drop && drop instanceof Phaser.Sprite) {
            drop.reset(x, y);
        }
        this.spawn(x - width/2, y, width, -velx, vely, dropL)
        this.spawn(x + width/2, y, width, velx, vely, dropR)
    }

    return Enemy;
})();
