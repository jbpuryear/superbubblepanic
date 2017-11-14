module.exports = Reticule


function Reticule(game, x, y) {
  Phaser.Image.call(this, game, game.world.width/2, game.world.height/2, 'sprites', 'reticule')
  this.anchor.setTo(0.5)
  this.animations.add('die',
      Phaser.Animation.generateFrameNames('reticule', 1, 5), 38, false)

  this._follow = null
  this._xClamp = 0
  this._yClamp = 0
  this._xRel = 0
  this._yRel = 0
}


Reticule.prototype = Object.create(Phaser.Image.prototype)


Reticule.prototype.follow = function(target, xDistance, yDistance) {
  this._follow = target
  this._xClamp = xDistance
  this._yClamp = yDistance
}


Reticule.prototype.update = function() {
  if (this._follow) return this.updateFollow()
  return this.updateNormal()
}


Reticule.prototype.updateFollow = function() {
  var ret = this
  var p1 = this._follow
  var xClamp = this._xClamp
  var yClamp = this._yClamp
  var game = this.game
  var clamp = Phaser.Math.clamp
  if (game.input.mouse.locked) {
      var x = this._xRel
      var y = this._yRel
      x += game.input.mousePointer.movementX * game.scale.scaleFactor.x
      y += game.input.mousePointer.movementY * game.scale.scaleFactor.y
      x = clamp(x, -xClamp, xClamp)
      y = clamp(y, -yClamp, yClamp)
      this.x = clamp(p1.world.x + x, 0, game.world.width)
      this.y = clamp(p1.world.y + y, 0, game.world.height)
      this._xRel = this.x - p1.world.x
      this._yRel = this.y - p1.world.y
      game.input.mousePointer.resetMovement()
  } else {
      if (!game.retFlag) {
          this.exists = game.input.mousePointer.withinGame
          game.retFlag = game.input.mousePointer.withinGame
      }
      this.x = game.input.mousePointer.x + game.camera.x
      this.y = game.input.mousePointer.y + game.camera.y
  }
}


Reticule.prototype.updateNormal = function() {
  var game = this.game
  var clamp = Phaser.Math.clamp
  if (game.input.mouse.locked) {
      var x = this.x
      var y = this.y
      x += game.input.mousePointer.movementX * game.scale.scaleFactor.x
      y += game.input.mousePointer.movementY * game.scale.scaleFactor.y
      x = clamp(x, 0, game.world.width)
      y = clamp(y, 0, game.world.height)
      this.x = x
      this.y = y
      game.input.mousePointer.resetMovement()
  } else {
      if (!game.retFlag) {
          this.exists = game.input.mousePointer.withinGame
          game.retFlag = game.input.mousePointer.withinGame
      }
      this.x = game.input.mousePointer.x
      this.y = game.input.mousePointer.y
  }
}
