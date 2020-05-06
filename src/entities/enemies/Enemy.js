module.exports = Enemy


var Bullet = require('../Bullet.js')


var MAX_HEALTH = 1


function Enemy(state, data) {
  Phaser.Sprite.call(this, state.game, data.x, data.y, 'sprites')

  if (data.texture) this.defaultFrame = data.texture

  this.state = state
  this.sounds = {
    pop: 'pop',
    bounce: 'bounce'
  }
  this.lastBounce = 0

  this.frameName = this.defaultFrame

  this.exists = false
  this.alive = false
  this.visible = false

  state.physics.p2.enable(this)
  state.enemies.add(this)
  this._circle = this.body.setCircle(1)
  this.body.setCollisionGroup(state.enemiesCG)
  this.body.collideWorldBounds = false
  this.body.collides([state.platformsCG, state.physics.p2.boundsCollisionGroup], this.bounce, this)
  this.body.collides([state.playersCG, state.bulletsCG], this.damage, this)
  this.body.setMaterial(state.enemyMaterial)
  this.body.fixedRotation = true

  this.animations.add('flash', Phaser.Animation.generateFrameNames('explosion', 1, 4))
    .onComplete.add(function() {this.frameName = this.defaultFrame}, this)
}


Enemy.prototype = Object.create(Phaser.Sprite.prototype)

Enemy.prototype.maxHealth = MAX_HEALTH
Enemy.prototype.maxSpeed = 500
Enemy.prototype.defaultFrame = 'enemy'
Enemy.prototype.bloodColor = 0xacc7479


Enemy.prototype.bounce = function() {
  var oldBounce = this.lastBounce
  this.lastBounce = this.state.time.now
  if (this.state.time.now - oldBounce < 250
      || Math.abs(this.state.p1.x - this.x) > 600
      || Math.abs(this.state.p1.y - this.y) > 600) {
    return
  }
  var snd = this.state.playSound(this.sounds.bounce)
  if (snd && snd.isPlaying && snd.usingWebAudio) {
    var scale = 128/this.width
    snd._sound.detune.value = scale * 400
    snd.volume = Math.min(0.5+0.5/scale, 1)
  }
}


Enemy.prototype.damage = function(_, src) {
  if (src.sprite instanceof Bullet)
    this.killTheta = src.rotation
  else
    this.killTheta = src.sprite.world.angle(this.world)
  this.state.bleed(this.x, this.y, this.killTheta, this.bloodColor)
  Phaser.Sprite.prototype.damage.call(this, src.attack || 1)
}


Enemy.prototype.kill = function() {
  if (this.pendingDoom) return
  this.pendingDoom = true

  this.state.playSound(this.sounds.pop, 400)
  this.state.camera.shake(0.005, 100)

  this.body.removeCollisionGroup(this.state.playersCG, false)

  var tween = this.game.add.tween(this)
  tween.to({width: this.width*1.5, height: this.height*2, alpha: 0.6}, 40)
  tween.onComplete.addOnce(function() {
    if (this.drop && typeof this.drop.reset === 'function') {
      this.drop.reset(this.x, this.y)
      this.drop = null
    }
    this.pendingDoom = false
    this.height /= 1.5
    this.width /= 1.5
    this.alpha = 1
    this.animations.stop()
    this.frameName = this.defaultFrame
    Phaser.Sprite.prototype.kill.call(this)
    this.body.collides(this.state.playersCG)
  }, this)

  tween.start()
}


Enemy.prototype.spawn = function(x, y, width, velx, vely, drop) {
  this.reset(x, y, this.maxHealth)
  this.drop = drop || null
  this.width = width
  this.height = width
  this._circle.radius = this.game.physics.p2.pxm(width / 2)
  this.body.velocity.x = velx || 0
  this.body.velocity.y = vely || 0
  this.killTheta = Math.PI/4
  return this
}


Enemy.prototype.update = function() {
  var vx = this.body.velocity.x
  var vy = this.body.velocity.y
  var msSq = this.maxSpeed*this.maxSpeed
  var speedSq = vx*vx + vy*vy
  if (speedSq < msSq) return
  var speed = Math.sqrt(speedSq)
  this.body.velocity.x = this.maxSpeed * vx/speed
  this.body.velocity.y = this.maxSpeed * vy/speed
}
