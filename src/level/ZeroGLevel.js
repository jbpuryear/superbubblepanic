module.exports = ZeroGLevel


var Level = require('./Level.js')


function ZeroGLevel() {
  Level.call(this)
}


ZeroGLevel.prototype = Object.create(Level.prototype)

ZeroGLevel.prototype.gravity = 0


ZeroGLevel.prototype.create = function() {
  Level.prototype.create.call(this)
  this.physics.p2.gravity.x = 0
  this.physics.p2.gravity.y = 0
  this.p1.playerState.change('floating')
}


ZeroGLevel.prototype.playSound = function() {}

