module.exports = Reticule


function Reticule(game, x, y) {
  Phaser.Image.call(this, game, game.world.width/2, game.world.height/2, 'sprites', 'reticule')
  this.anchor.setTo(0.5)
  this.animations.add('die',
      Phaser.Animation.generateFrameNames('reticule', 1, 5), 38, false)
}


Reticule.prototype = Object.create(Phaser.Image.prototype)


Reticule.prototype.update = function() {
  var game = this.game
  if (game.input.mouse.locked) {
      var x = this.x
      var y = this.y
      x += game.input.mousePointer.movementX * game.scale.scaleFactor.x
      y += game.input.mousePointer.movementY * game.scale.scaleFactor.y
      x = Phaser.Math.clamp(x, 0, game.world.width)
      y = Phaser.Math.clamp(y, 0, game.world.height)
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
