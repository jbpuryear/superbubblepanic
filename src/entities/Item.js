// Time in ms before item disappears.
var LIFESPAN = 5000

module.exports = Item


function Item(state, data) {
  this.state = state
  var x = data.x || 0
  var y = data.y || 0
  var texture = data.texture

  Phaser.Sprite.call(this, state.game, x, y, 'sprites')
  this.frameName = texture

  this.pulse = state.add.tween(this)
  this.throb = state.add.tween(this.scale)
  this.sounds = {}

  this.pulse.to({alpha: 0.2}, 100, null, false, this._lifespan - 750, null, true)
  this.throb.to({x: 1.15, y: 1.15}, 850, Phaser.Easing.Quadratic.In, false, null, -1)

  state.physics.p2.enable(this)

  this.body.clearShapes()
  var s = this.body.addRectangle(this.width, this.height)
  this.playerSensor = this.body.addRectangle(this.width/2, this.height/2)
  this.playerSensor.sensor = true
  this.body.collideWorldBounds = false

  this.body.onBeginContact.add(this.shouldPickup, this)

  this.body.setCollisionGroup(state.itemsCG)
  this.body.setMaterial(state.itemMaterial)

  // Collide with enemies so space boss will blink if items touch it's eye
  this.body.collides(state.playersCG, null, null, this.playerSensor)
  this.body.collides([state.platformsCG, state.enemiesCG,
    state.physics.p2.boundsCollisionGroup], null, null, s)

  // Necessary, maybe a bug in Phaser.
  this.body.removeCollisionGroup(state.playersCG, null, s)

  this.lifespan = this._lifespan

  state.items.add(this)
}


Item.prototype = Object.create(Phaser.Sprite.prototype)

Item.prototype._lifespan = LIFESPAN


Item.prototype.pickup = function() {
  if (this.sounds.pickup) this.state.playSound(this.sounds.pickup)
  this.pulse.stop()
  this.throb.stop()
  this.alpha = 1
  this.scale.setTo(1)
  this.body.destroy()
  this.x = 0
  this.y = 0
}


Item.prototype.reset = function(x, y, health) {
  this.lifespan = this._lifespan
  this.pulse.start()
  this.throb.start()
  Phaser.Sprite.prototype.reset.call(this, x, y, health)
}


Item.prototype.shouldPickup = function(targetBody, __, shape) {
  if (shape === this.playerSensor) this.pickup(shape, targetBody)
}
