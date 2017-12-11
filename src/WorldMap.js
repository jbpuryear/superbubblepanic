module.exports = WorldMap


function WorldMap(game) {
  Phaser.Group.call(this, game)
  this.radius = 266*2
  this.xMid = 72*2
  this.yMid = 281*2
  this.walkPoints = []
  this.walkDirection = 1
  this.characterAt = null

  this.map = this.create(0, 0, 'world-map')
  this.map.scale.setTo(2)

  this.ocean = this.addChild(game.make.tileSprite(0, 0, this.width, this.height, 'sprites', 'ocean1'))
  this.ocean.animations.add('wave', Phaser.Animation.generateFrameNames('ocean', 1, 5))
  this.ocean.animations.play('wave', 2, true)

  this.ocean.mask = this.addChild(game.make.graphics())
  this.ocean.mask.beginFill(0xffffff)
  this.ocean.mask.drawCircle(this.xMid, this.yMid, this.radius*2-2)

  this.bringToTop(this.map)

  this.eye = this.create(410, 10, 'sprites', 'floating-eye')
  this.eye.scale.setTo(2)

  function rotate() {
    this.rotation += Math.PI * 0.01 / this.pivot.y
  }
  this.clouds = this.addChild(game.make.group())
  this.clouds.createMultiple(20, 'sprites', ['cloud1', 'cloud2'], true)
  this.clouds.forEach(function(cloud) {
    var r = 0.99 * (this.radius * 2/3 * Math.random() + this.radius/3)
    cloud.anchor.setTo(0.5)
    cloud.x = this.xMid
    cloud.y = this.yMid
    cloud.pivot.setTo(0, r)
    cloud.rotation = Math.random() * 2*Math.PI
    cloud.update = rotate
  }, this)
}


WorldMap.prototype = Object.create(Phaser.Group.prototype)

