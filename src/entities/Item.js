// Time in ms before item disappears.
var LIFESPAN = 5000;

module.exports = Item;


function Item(state, data) {
    var x = data.x || 0;
    var y = data.y || 0;
    var texture = data.texture;
    if (!texture) console.warn('Creating Item with no texture.');

    Phaser.Sprite.call(this, state.game, x, y, texture);
    state.physics.p2.enable(this);
    this.body.setCollisionGroup(state.itemsCG);
    this.body.collides(state.platformsCG);
    this.body.collides(state.playersCG, this.pickUp, this);
    this.lifespan = this._lifespan;
    state.items.add(this);
}


Item.prototype = Object.create(Phaser.Sprite.prototype);

Item.prototype._lifespan = LIFESPAN;


Item.prototype.pickup = function(thisBody, heroBody) {
    console.warn("This item doesn't do anything when it's picked up.");
}


Item.prototype.revive = function(health) {
    Phaser.Sprite.prototype.reset.call(this, this.x, this.y,health);
    this.lifespan = this._lifespan;
}

Item.prototype.reset = function(x, y, health) {
    this.x = x;
    this.y = y;
    this.revive(health);
}
