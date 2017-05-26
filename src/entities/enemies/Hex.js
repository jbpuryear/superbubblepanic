module.exports = Hex;

var Enemy = require('./Enemy.js');


var TEXTURE = 'hex';


function Hex(state, data, drop) {
    data.texture = TEXTURE;
    Enemy.call(this, state, data, drop);
    this.body.data.gravityScale = 0;
}


Hex.prototype = Object.create(Enemy.prototype);
