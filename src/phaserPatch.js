module.exports = function() {

    Object.defineProperty(Phaser.Group.prototype, 'alive', {
        get: function() { return !!this.getFirstAlive(); }
    });


    Phaser.Group.prototype.recurse = function(fn, ctx) {
        var args = [null];
        for (var i = 2; i < arguments.length; i++) args.push(arguments[i]);

        for (i = 0; i < this.children.length; i++) {
            var child = this.children[i];
            if (child instanceof Phaser.Group) {
                child.recurse.apply(child, arguments);
            } else {
                args[0] = child;
                fn.apply(ctx, args);
            }

        }
    }


    Phaser.Group.prototype.recurseAlive = function(fn, ctx) {
        var args = [null];
        for (var i = 2; i < arguments.length; i++) args.push(arguments[i]);

        var alive = [];
        for (i = 0; i < this.children.length; i++) {
            var child = this.children[i];
            if (!child.alive) continue;

            if (child instanceof Phaser.Group) {
                child.recurseAlive.apply(child, arguments);
            } else {
                alive.push(child);
            }
        }

        for (i=0; i<alive.length; i++) {
            args[0] = alive[i];
            fn.apply(ctx, args);
        }
    }


    Phaser.Group.prototype.forInReach  = function(obj, range, fn, ctx) {
        var args = [null];
        for (var i = 4; i < arguments.length; i++) args.push(arguments[i]);

        var alive = [];
        for (i = 0; i < this.children.length; i++) {
            var child = this.children[i];
            if (!child.alive) continue;

            if (child instanceof Phaser.Group) {
                child.forInReach.apply(child, arguments);
            } else if (obj.world.distance(child) <= range) {
                alive.push(child);
            }
        }

        for (i=0; i<alive.length; i++) {
            args[0] = alive[i];
            fn.apply(ctx, args);
        }
    }
}
