//TODO: Change the way pickup works for items. Collision callbacks should be set in the state.
/**
 * Starts Super Bubble Panic!
 * @param {HTMLElement|string} [parent=document.body] The parent element
 *      to hold the game
 */
var SBP = SBP || function(parent) {
    var game = new Phaser.Game(800, 600, null, parent);
    game.state.add('Boot', new SBP.states.Boot);
    game.state.add('Load', new SBP.states.Load);
    game.state.add('Level', new SBP.states.Level);

    game.state.start('Boot');
    return game;
}


/**
 * Constructors for pre-fab game objects.
 * @namespace
 */
SBP.objects = {};


SBP.objects.Player = function(state, x, y, spritesheet) {
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

SBP.objects.Player.prototype = Object.create(Phaser.Sprite.prototype);

SBP.objects.Player.prototype.swapGun = function(weapon) {
    if (this.weapon instanceof Phaser.Sprite) this.weapon.destroy();
    if (weapon.body) weapon.body.destroy();
    weapon.anchor.setTo(0, 0.5);
    weapon.pivot.setTo(-Math.abs(this.character.width/8), 0);
    weapon.x = 0;
    weapon.y = 0;
    this.weapon = weapon;
    this.addChild(weapon);
}

SBP.objects.Player.prototype.goLeft = function() {
    this.body.moveLeft(this.speed);
}

SBP.objects.Player.prototype.goRight = function() {
    this.body.moveRight(this.speed);
}

SBP.objects.Player.prototype.fly = function() {
    if (this.fuel > 0) {
        this.body.thrust(this.game.physics.p2.gravity.y * 2.5);
        this.fuel = Math.max(this.fuel - this.game.time.physicsElapsedMS, 0);
        this.flying = true;
    }
}

SBP.objects.Player.prototype.shoot = function(isNew) {
    if (this.alive && this.weapon && typeof this.weapon.fire === 'function') {
        this.weapon.fire(isNew);
    }
}

SBP.objects.Player.prototype.die = function() {
    //TODO: Add death animation.
    this.alive = false;
    this.kill();
}

SBP.objects.Player.prototype.update = function() {
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


SBP.objects.Bullet = function(state, x, y, texture) {
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

SBP.objects.Bullet.prototype = Object.create(Phaser.Sprite.prototype);

SBP.objects.Bullet.prototype.die = function() {
    this.kill();
}

SBP.objects.Bullet.prototype.fire = function(x, y, theta) {
    this.reset(x, y);
    this.body.rotation = theta;
    this.body.velocity.x = Math.cos(theta) * this.speed;
    this.body.velocity.y = Math.sin(theta) * this.speed;
} 


// Helper class that weapons are extended from.
SBP.objects._Gun = function(state, x, y, texture, fireRate, auto) {
    Phaser.Sprite.call(this, state.game, x, y, texture);
    state.physics.p2.enable(this);

    this.clips = [];
    this.fireRate = fireRate || 100;
    this.lastShot = 0;
    this.auto = auto || false;
}

SBP.objects._Gun.prototype = Object.create(Phaser.Sprite.prototype);

SBP.objects._Gun.prototype.pickUp = function(_, playerBody) {
    playerBody.sprite.swapGun(this);
}


// Helper class. The games weapons are collections of _Clips.
SBP.objects._Clip = function(state, size, BulletType, texture) {
    Phaser.Group.call(this, state.game);
    for (var i = 0; i < size; i++) {
        this.add(new BulletType(state, 0, 0, texture));
    }
    this.callAll('kill');
}

SBP.objects._Clip.prototype = Object.create(Phaser.Group.prototype);


SBP.objects._Gun.prototype.fire = function(newShot) {
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


SBP.objects.Pistol = function(state, x, y, texture, bulletTexture) {
    SBP.objects._Gun.call(this, state, x, y, texture);
    this.clips.push(new SBP.objects._Clip(state, 3, SBP.objects.Bullet, bulletTexture));
}

SBP.objects.Pistol.prototype = Object.create(SBP.objects._Gun.prototype);


SBP.objects.Enemy = function(state, x, y, texture, width, velx, vely, drop) {
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

SBP.objects.Enemy.prototype = Object.create(Phaser.Group.prototype);

SBP.objects.Enemy.prototype.minWidth = 8;

SBP.objects.Enemy.prototype.spawn = function(x, y, width, velx, vely, drop) {
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

SBP.objects.Enemy.prototype.onDeath = function(enemy) {
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
