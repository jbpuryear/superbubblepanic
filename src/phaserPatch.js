module.exports = function() {

    Phaser.SoundManager.prototype.reset = function() {
        this.stopAll();

        for (var i = 0; i < this._sounds.length; i++) {
            if (this._sounds[i]) {
                this._sounds[i].destroy();
            }
        }

        this._sounds = [];

        this.onSoundDecode.dispose();
    }

    Phaser.StateManager.prototype.clearCurrentState = function() {
        if (this.current) {
            if (this.onShutDownCallback) {
                this.onShutDownCallback.call(this.callbackContext, this.game);
            }

            this.game.tweens.removeAll();
            this.game.camera.reset();
            this.game.input.reset(true);
            this.game.physics.clear();
            this.game.time.removeAll();
            this.game.scale.reset(this._clearWorld);
            this.game.sound.reset();

            if (this.game.debug) {
                this.game.debug.reset();
            }

            if (this._clearWorld) {
                this.game.world.shutdown();

                if (this._clearCache) {
                    this.game.cache.destroy();
                }
            }
        }
    }


    Object.defineProperty(Phaser.Group.prototype, 'alive', {
        get: function() { return !!this.getFirstAlive() }
    })


    Phaser.Group.prototype.recurse = function(fn, ctx) {
        var args = [null]
        for (var i = 2; i < arguments.length; i++) args.push(arguments[i])

        for (i = 0; i < this.children.length; i++) {
            var child = this.children[i]
            if (child instanceof Phaser.Group) {
                child.recurse.apply(child, arguments)
            } else {
                args[0] = child
                fn.apply(ctx, args)
            }

        }
    }


    Phaser.Group.prototype.recurseAlive = function(fn, ctx) {
        var args = [null]
        for (var i = 2; i < arguments.length; i++) args.push(arguments[i])

        var alive = []
        for (i = 0; i < this.children.length; i++) {
            var child = this.children[i]
            if (!child.alive) continue

            if (child instanceof Phaser.Group) {
                child.recurseAlive.apply(child, arguments)
            } else {
                alive.push(child)
            }
        }

        for (i=0; i<alive.length; i++) {
            args[0] = alive[i]
            fn.apply(ctx, args)
        }
    }


    Phaser.Group.prototype.forInReach  = function(obj, range, fn, ctx) {
        var args = [null]
        for (var i = 4; i < arguments.length; i++) args.push(arguments[i])

        var alive = []
        for (i = 0; i < this.children.length; i++) {
            var child = this.children[i]
            if (!child.alive) continue

            if (child instanceof Phaser.Group) {
                child.forInReach.apply(child, arguments)
            } else if (obj.world.distance(child) <= range) {
                alive.push(child)
            }
        }

        for (i=0; i<alive.length; i++) {
            args[0] = alive[i]
            fn.apply(ctx, args)
        }
    }
}
