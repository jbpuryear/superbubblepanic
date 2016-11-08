module.exports = Repel;


var Buff = require('./Buff.js');
var dotGravity =  require('../../magic/dotGravity.js');


var TEXTURE = 'gun';


function Repel(state, data) {
    data.texture = TEXTURE;
    Buff.call(this, state, data);
}


Repel.prototype = Object.create(Buff.prototype);


Repel.prototype.buffProto = {
    duration: 8000,
    update: function() {
        this.state.enemies.forInReach(this.target, 70, dotGravity, null, this.target, -90 );
    }
}
