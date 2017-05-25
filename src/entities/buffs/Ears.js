module.exports = Ears;


var Buff = require('./Buff.js');

var TEXTURE = 'gun';


function Ears(state, data) {
    data.texture = TEXTURE;
    Buff.call(this, state, data);
}


Ears.prototype = Object.create(Buff.prototype);


Ears.prototype.buffProto = {
    start: function() {
        this.target.speedBonus *= 1.35;
    }
}
