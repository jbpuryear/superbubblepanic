module.exports = ZeroGPlayer


var Player = require('./Player.js')


function ZeroGPlayer(state, data, ctlr) {
  Player.call(this, state, data, ctlr)
  this.body.dynamic = true
  this.body.fixedRotation = false
}


ZeroGPlayer.prototype = Object.create(Player.prototype)


ZeroGPlayer.prototype.update = function() {
  var ctlr = this.playerState.ctlr
  if (ctlr.up) this.playerState.states.flying.update()
}
