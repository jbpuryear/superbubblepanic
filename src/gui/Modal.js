module.exports = Modal


function Modal(state, gui) {
  Phaser.Group.call(this, state.game)
  this.gui = gui
  this.x = 144
  this.y = 16
  this.exists = false
  this.visible = false
}


Modal.prototype = Object.create(Phaser.Group.prototype)


Modal.prototype.enter = function() {
  this.y = this.game.world.height/2 - this.height/2
  var tween = this.game.add.tween(this)
  tween.from({
    alpha: 0,
  }, 500, Phaser.Easing.Cubic.In)
  this.game.time.events.add(500, function() {
    this.visible = true
    this.exists = true
    tween.start()
  }, this)
}


Modal.prototype.exit = function() {
  var y = this.y
  var height = this.height
  var width = this.width
  var tween = this.game.add.tween(this)
  this.ignoreChildInput = true
  this.alpha = 0.99
  tween.to({
    alpha: 0
  }, 500, Phaser.Easing.Cubic.In)
  tween.onComplete.add(function() {
    this.visible = false
    this.exists = false
    this.y = y
    this.height = height
    this.width = width
    this.alpha = 1
    this.ignoreChildInput = false
  }, this)
  tween.start()
}
