// Time in ms before item disappears.
var LIFESPAN = 5000;

module.exports = Item;


function Item(state, data) {
    this.state = state;
    var x = data.x || 0;
    var y = data.y || 0;
    var texture = data.texture;

    Phaser.Sprite.call(this, state.game, x, y, 'sprites');
    this.frameName = texture;

    this.pulse = state.add.tween(this)
    this.sounds = {}

    this.pulse.to({alpha: 0.2}, 100, null, false, this._lifespan - 750, null, true)

    state.physics.p2.enable(this);

    this.body.clearShapes();
    var s = this.body.addRectangle(this.width, this.height);
    this.playerSensor = this.body.addRectangle(this.width/3, this.height/3);
    this.playerSensor.sensor = true;
    this.body.collideWorldBounds = false;

    this.body.onBeginContact.add(this.shouldPickup, this);

    this.body.setCollisionGroup(state.itemsCG);

    this.body.collides(state.playersCG, null, null, this.playerSensor);
    this.body.collides([state.platformsCG,
        state.physics.p2.boundsCollisionGroup], null, null, s);

    // Necessary, maybe a bug in Phaser.
    this.body.removeCollisionGroup(state.playersCG, null, s);

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


Item.prototype.shouldPickup = function(targetBody, __, shape) {
    if (shape === this.playerSensor) this.pickup(shape, targetBody)
}
