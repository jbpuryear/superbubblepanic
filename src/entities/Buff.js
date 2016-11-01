module.exports = Buff;

function Buff(state, x, y, type) {
    Phaser.Sprite.call(this, state.game, x, y, type.texture);
    if (typeof type.start !== 'function') throw "Buffs must have a start function.";
    this.buff = Object.create(type);
    this.buff.state = state;
    state.physics.p2.enable(this);
    this.lifespan = this._lifespan;
}

Buff.prototype = Object.create(Phaser.Sprite.prototype);
Buff.prototype._lifespan = 3000;    // How long the player has to pick up.

Buff.prototype.revive = function() {
    this.prototype.prototype.revive.call(this);
    this.lifespan = this._lifespan;
}

Buff.prototype.pickUp = function(_, playerBody) {
    var buff = this.buff;
    buff.target = playerBody.sprite;
    buff.start();

    if (this.buff.time > 0) {
        this.buff.timeLeft = this.buff.time;
        buff.state.buffs.push(buff);
    this.destroy();
    }
}
