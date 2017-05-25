module.exports = Hex;

var Enemy = require('./Enemy.js');


var TEXTURE = 'enemy';


function Hex(state, data, drop) {
    Enemy.call(this, state, data, drop);
    this.body.data.gravityScale = 0;
    this.tint = 0x00FFFF;
}


Hex.prototype = Object.create(Enemy.prototype);
