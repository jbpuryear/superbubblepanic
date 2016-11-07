module.exports = Player;

var TEXTURE = 'player';
var DEFAULT_WEAPON = 'pistol';
// Animation frames and their frame:
var WALK = [0, 1, 2, 3];
var WALK_RATE = 25;
var FLY = [10, 11];
var FLY_RATE = 100;


function Player(state, data) {
    var game = state.game;
    var x = data.x || 0;
    var y = data.y || 0;
    var texture = data.texture || TEXTURE;
    var weapon = state.parseDrop(data.properties.weapon || DEFAULT_WEAPON);

    // This three-part sprite shenanigans lets us control
    // whether the gun is rendered above or below the character.
    Phaser.Sprite.call(this, game, x, y);

    // Make our character sprite.
    var character = new Phaser.Sprite(game, 0, 0, texture);
    this.character = character;
    character.anchor.setTo(0.5);
    this.character.animations.add('walk', WALK, WALK_RATE, true);
    this.character.animations.add('fly', FLY, FLY_RATE, true);

    game.physics.p2.enable(this)
    this.body.fixedRotation = true;
    this.body.setRectangle(character.width/2, character.height);

    var groundSensor = this.body.addRectangle(character.width*2/3, 2, 0, character.height/2);
    groundSensor.sensor = true;
    this.standing = 0;
    this.body.onBeginContact.add(function(){ if(arguments[2] === groundSensor) this.standing++ }, this);
    this.body.onEndContact.add(function(){ if(arguments[2] === groundSensor) this.standing-- }, this);

    this.addChild(character);
    this.equip(weapon);

    this.fuel = this.maxFuel;
    this.speedBonus = 1;

    this.body.setMaterial(state.playerMaterial);
    this.body.setCollisionGroup(state.playersCG);
    this.body.collides(state.enemiesCG, this.die, this);
    this.body.collides([state.itemsCG, state.platformsCG]);

    state.players.add(this);
}


Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.maxFuel = 2000;

Object.defineProperty(Player.prototype, 'speed', {get: function() {return this.speedBonus * 100}});


Player.prototype.equip = function(weapon) {
    if (this.weapon instanceof Phaser.Sprite) this.weapon.destroy();
    if (weapon.body) weapon.body.destroy();
    weapon.anchor.setTo(0, 0.5);
    // abs because character is flipped by setting scale to -1.
    weapon.pivot.setTo(-Math.abs(this.character.width/8), 0);
    weapon.reset(0, 0);
    weapon.lifespan = 0;
    this.weapon = weapon;
    this.addChild(weapon);
}


Player.prototype.goLeft = function() {
    this.body.velocity.x = -this.speed;
}


Player.prototype.goRight = function() {
    this.body.velocity.x = this.speed;
}


Player.prototype.fly = function() {
    if (this.fuel > 0) {
        this.body.thrust(this.game.physics.p2.gravity.y * 2.5 * this.speedBonus);
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
    if (this.standing) {
        this.fuel = Math.min(this.maxFuel, this.fuel + this.game.time.physicsElapsedMS / 2);
        var velx = this.body.velocity.x;
        var friction = velx/20 * this.speedBonus;
        this.body.velocity.x = velx < 0 ?
            Math.min(velx - friction, 0) : Math.max(velx - friction, 0);
    }
    
    // TODO This should work even if a weapon isn't equipped
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
    } else if (Math.abs(this.body.velocity.x) >= this.speed/2) {
        this.character.animations.play('walk');
    } else {
        this.character.animations.stop();
        this.character.frame = 0;
    }
    this.flying = false;
}
