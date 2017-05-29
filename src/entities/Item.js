// Time in ms before item disappears.
var LIFESPAN = 5000;

module.exports = Item;


function Item(state, data) {
    this.state = state;
    var x = data.x || 0;
    var y = data.y || 0;
    var texture = data.texture;
    if (!texture) console.warn('Creating Item with no texture.');

    Phaser.Sprite.call(this, state.game, x, y, texture);

    this.pulse = state.add.tween(this)
    this.sounds = {}

    this.pulse.to({alpha: 0.2}, 100, null, false, this._lifespan - 750, null, true)

    state.physics.p2.enable(this);
    this.body.setCollisionGroup(state.itemsCG);
    this.body.collides(state.platformsCG);
    this.body.collides(state.playersCG, this.pickup, this);
    this.lifespan = this._lifespan;

    state.items.add(this);
}


Item.prototype = Object.create(Phaser.Sprite.prototype);

Item.prototype._lifespan = LIFESPAN;


Item.prototype.pickup = function(thisBody, heroBody) {
    if (this.sounds.pickup) this.state.playSound(this.sounds.pickup)
    this.pulse.stop()
    this.alpha = 1
    this.body.destroy()
    this.x = 0
    this.y = 0
}


Item.prototype.reset = function(x, y, health) {
    this.lifespan = this._lifespan
    this.pulse.start()
    this.x = x;
    this.y = y;
    Phaser.Sprite.prototype.reset.call(this, this.x, this.y,health);
}
