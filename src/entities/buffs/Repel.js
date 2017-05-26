module.exports = Repel;


var Buff = require('./Buff.js');
var dotGravity =  require('../../magic/dotGravity.js');


var TEXTURE = 'repel';


function Repel(state, data) {
    data.texture = TEXTURE;
    Buff.call(this, state, data);
}


Repel.prototype = Object.create(Buff.prototype);


Repel.prototype.buffProto = {
    duration: 8000,
    update: function() {
        dotGravity(this.state.enemies, this.target, -90, 70);
    }
}
