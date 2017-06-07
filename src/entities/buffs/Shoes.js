module.exports = Shoes;


var Buff = require('./Buff.js');


function Shoes(state, data) {
    data.texture = 'shoes';
    Buff.call(this, state, data);
    this.sounds.pickup = 'shoe-pickup';
}


Shoes.prototype = Object.create(Buff.prototype);


Shoes.prototype.buffProto = {
    start: function() {
        this.sprite.destroy();
        this.target.speedBonus *= 1.35;
    }
}
