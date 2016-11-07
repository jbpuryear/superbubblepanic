module.exports = Enemy;


var TEXTURE = 'enemy';
var MAX_HEALTH = 1;


function Enemy(state, data, drop) {
    data.texture = data.texture || TEXTURE;
    Phaser.Sprite.call(this, state.game, data.x, data.y, data.texture);
    state.physics.p2.enable(this);
    this._circle = this.body.setCircle(1);
    this.body.setCollisionGroup(state.enemiesCG);
    this.body.collides(state.platformsCG);
    this.body.collides([state.playersCG, state.bulletsCG], this.getHit, this);
    this.body.setMaterial(state.enemyMaterial);
    this.body.fixedRotation = true;
    this.spawn(this.x, this.y, data.width, data.properties.velx,
            data.properties.vely, drop);
}


Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.maxHealth = MAX_HEALTH;


Enemy.prototype.spawn = function(x, y, width, velx, vely, drop) {
    this.reset(x, y, this.maxHealth);
    this.drop = drop || null;
    this.width = width;
    this.height = width;
    this._circle.radius = this.game.physics.p2.pxm(width / 2);
    this.body.velocity.x = velx || 0;
    this.body.velocity.y = vely || 0;
    return this;
}


Enemy.prototype.getHit = function() {
    this.damage(1);
}

Enemy.prototype.kill = function() {
    if (this.drop && typeof this.drop.reset === 'function') {
        this.drop.reset(this.x, this.y);
        this.drop = null;
    }
    Phaser.Sprite.prototype.kill.call(this);
}
