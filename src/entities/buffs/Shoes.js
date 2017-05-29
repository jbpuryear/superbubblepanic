module.exports = Shoes;


var Buff = require('./Buff.js');


function Shoes(state, data) {
    data.texture = 'shoes';
    Buff.call(this, state, data);

    this.sounds.pickup = this.state.add.sound('shoe-pickup');
}


Shoes.prototype = Object.create(Buff.prototype);


Shoes.prototype.buffProto = {
    start: function() {
        this.target.speedBonus *= 1.35;
    }
}
