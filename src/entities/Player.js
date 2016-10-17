module.exports = (function() {

    function Player(state, x, y, spritesheet) {
        // This three-part sprite shenanigans lets us control
        // whether the gun is rendered above or below the character.
        x = x || 0;
        y = y || 0;
        Phaser.Sprite.call(this, state.game, x, y);
        this.character = state.make.sprite(0, 0, 'player');
        this.character.anchor.setTo(0.5);
        state.physics.p2.enable(this)
        this.body.fixedRotation = true;
        this.body.setRectangle(this.character.width/2, this.character.height);
        var groundSensor = this.body.addRectangle(this.character.width*2/3, 2, 0, this.character.height/2);
        groundSensor.sensor = true;
        this.standing = 0;
        this.body.onBeginContact.add(function(){ if(arguments[2] === groundSensor) this.standing++ }, this);
        this.body.onEndContact.add(function(){ if(arguments[2] === groundSensor) this.standing-- }, this);

        this.addChild(this.character);

        this.maxFuel = 2000;
        this.fuel = this.maxFuel;
        this.speed = 100;

        state.players.add(this);
    }

    Player.prototype = Object.create(Phaser.Sprite.prototype);

    Player.prototype.swapGun = function(weapon) {
        if (this.weapon instanceof Phaser.Sprite) this.weapon.destroy();
        if (weapon.body) weapon.body.destroy();
        weapon.anchor.setTo(0, 0.5);
        weapon.pivot.setTo(-Math.abs(this.character.width/8), 0);
        weapon.x = 0;
        weapon.y = 0;
        this.weapon = weapon;
        this.addChild(weapon);
    }

    Player.prototype.goLeft = function() {
        this.body.moveLeft(this.speed);
    }

    Player.prototype.goRight = function() {
        this.body.moveRight(this.speed);
    }

    Player.prototype.fly = function() {
        if (this.fuel > 0) {
            this.body.thrust(this.game.physics.p2.gravity.y * 2.5);
            this.fuel = Math.max(this.fuel - this.game.time.physicsElapsedMS, 0);
            this.flying = true;
        }
    }

    Player.prototype.shoot = function(isNew) {
        if (this.alive && this.weapon && typeof this.weapon.fire === 'function') {
            this.weapon.fire(isNew);
        }
    }

    Player.prototype.die = function() {
        //TODO: Add death animation.
        this.alive = false;
        this.kill();
    }

    Player.prototype.update = function() {
        if (this.standing) this.fuel = Math.min(this.maxFuel, this.fuel + this.game.time.physicsElapsedMS / 2);
        
        if (this.weapon) {
            var theta = Phaser.Point.angle(this.game.input.mousePointer.position, this.position);
            this.weapon.rotation = theta;
            if (theta > Math.PI/2 || theta < -Math.PI/2) {
                this.character.scale.x = -1;
                this.weapon.scale.y = -1;
                this.removeChild(this.weapon);
                this.addChild(this.weapon);
            } else {
                this.character.scale.x = 1;
                this.weapon.scale.y = 1;
                this.removeChild(this.character);
                this.addChild(this.character);
            }
        }

        if (this.flying) {
            this.character.animations.play('fly');
        } else if (!this.standing) {
            this.character.animations.stop();
            this.character.frame = 12;
        } else if (Math.abs(this.body.velocity.x) >= this.speed) {
            this.character.animations.play('walk');
        } else {
            this.character.animations.stop();
            this.character.frame = 0;
        }
        this.flying = false;
    }

    return Player;
})();
