module.exports = Explosion


function Explosion(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'sprites', 'explosion2')

  this.state = game.state.getCurrentState()
  game.physics.p2.enable(this)

  this.width = this.height = 160
  this.shape = this.body.setCircle(this.width/2)
  this.shape.sensor = true
  var ex = this.animations.add('explode', 
    Phaser.Animation.generateFrameNames('explosion', 1, 4), 60, false)
  ex.killOnComplete = true

  this.body.collideWorldBounds = false
  this.body.setCollisionGroup(this.state.bulletsCG)
  this.body.collides(this.state.enemiesCG)
  this.body.onBeginContact.add(this.explode, this)
  game.physics.p2.removeBody(this.body)
}


Explosion.prototype = Object.create(Phaser.Sprite.prototype)


Explosion.prototype.explode = function(body) {
  for (var i = 0; i < this.targets.length; i++)
    if (body.sprite === this.targets[i]) return

  this.targets.push(body.sprite)
}


Explosion.prototype.kill = function() {
  this.alpha = 0.4
  this.frameName = 'burn'
  this.body.rotation = Math.random() * Math.PI * 2
  this.state.paintFX(this)
  this.alpha = 1
  Phaser.Sprite.prototype.kill.call(this)

  for (var i = 0; i < this.targets.length; i++)
    this.targets[i].damage(null, this.body)

  this.state.enemies.recurseAlive(function(enemy) {
    var distance = Math.max(this.world.distance(enemy.world), 1)
    var r = 512
    if (distance > r) return
    var angle = this.world.angle(enemy.world)
    var mag = 400 * (1 - distance/r) * this.state.bulletTime
    enemy.body.velocity.x += mag * Math.cos(angle)
    enemy.body.velocity.y += mag * Math.sin(angle)
  }, this)
}


Explosion.prototype.reset = function(x, y, radius) {
  this.targets = []
  if (radius > 0) {
    this.width = this.height = radius * 1.5
    this.shape.radius = radius
  }
  this.body.addToWorld()
  Phaser.Sprite.prototype.reset.call(this, x, y)
  this.animations.play('explode')
  this.state.playSound('explode')
  this.state.camera.shake(0.015, 400)
}
