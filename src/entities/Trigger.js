module.exports = Trigger


function Trigger(state, data) {
  Phaser.Rectangle.call(this, data.x - data.width/2, data.y - data.height/2, data.width, data.height)
  if (state.trigger) throw new Error('Only one trigger allowed per state')
  state.trigger = this
}


Trigger.prototype = Object.create(Phaser.Rectangle.prototype)

