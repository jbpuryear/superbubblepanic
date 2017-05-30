var Item = require('../Item.js');

module.exports = Buff;


function Buff(state, data) {
    Item.call(this, state, data);
    // We will pass to our Level's  buff array which is updated each loop.
    this.buff = Object.create(this.buffProto);
    this.buff.sprite = this;
    this.buff.state = state;
    this.lifespan = this._lifespan;
}


Buff.prototype = Object.create(Item.prototype);

Buff.prototype.buffProto = {
    duration: 0,
    start: function(target) {},
    update: function() {},
    stop: function() {}
}


Buff.prototype.pickup = function(_, playerBody) {
    Item.prototype.pickup.call(this);
    var buff = this.buff;
    buff.target = playerBody.sprite;
    if (typeof buff.start === 'function') buff.start(buff.target);

    if (buff.duration > 0) {
        buff.timeLeft = buff.duration;
        buff.state.buffs.push(buff);
    }
    buff.sounds = this.sounds;
    return buff;
}
