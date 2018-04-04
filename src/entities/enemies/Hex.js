module.exports = Hex

var Enemy = require('./Enemy.js')


function Hex(state, data, drop) {
  Enemy.call(this, state, data, drop)
  this.body.data.gravityScale = 0
}


Hex.prototype = Object.create(Enemy.prototype)

Hex.prototype.defaultFrame = 'hex'
Hex.prototype.bloodColor = 0x6daab3

