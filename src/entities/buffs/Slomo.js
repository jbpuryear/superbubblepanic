module.exports = Slomo


var Buff = require('./Buff.js')


function Slomo(state, data) {
  data.texture = 'slomo'
  Buff.call(this, state, data)
}


Slomo.prototype = Object.create(Buff.prototype)


Slomo.prototype.buffProto = {
  duration: 6500,
  rate: 0.25,
  start: function() {
    this.sprite.destroy()
    this.state.playSound('slowdown', undefined, false)
    this.tick = this.state.playSound('clock', undefined, false, true, true)
    this.state.changeTime(this.rate)
  },
  stop: function() {
    if (this.tick && this.tick.isPlaying) this.tick.stop()

    this.state.playSound('speedup', undefined, false)
    this.state.time.events.add(900, function() {
      this.state.changeTime(1/this.rate)
    }, this)
  }
}
