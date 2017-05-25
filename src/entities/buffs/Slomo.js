module.exports = Slomo;


var Buff = require('./Buff.js');


var TEXTURE = 'gun';


function Slomo(state, data) {
    data.texture = TEXTURE;
    Buff.call(this, state, data);
}


Slomo.prototype = Object.create(Buff.prototype);


Slomo.prototype.buffProto = {
    duration: 6500,
    rate: 0.25,
    start: function() {
        this.state.changeTime(this.rate)
    },
    stop: function() {
        this.state.changeTime(1/this.rate)
    }
}
