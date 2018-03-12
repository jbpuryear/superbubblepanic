module.exports = Gun


var Item = require('./Item.js')


function Gun(state, data, BulletClass) {
  Item.call(this, state, data)

  this.state = state
  this.rate = data.rate || 100
  this.throttle = data.throttle || 0
  this.auto = data.auto || false
  this.spread = data.spread || 0
  this.accuracy = data.accuracy || 0
  this.speedMul = data.speedMul || 1
  this.speedVar = data.speedVar || 0
  this.sounds.pickup = data.equipSound || 'reload'
  this.sounds.shot = data.shotSound || 'gunshot'
  this.sounds.dryFire = data.dryFire || 'dry-fire'
  this.clipSize = data.clipSize || 3
  this.bulletsPerShot = data.bulletsPerShot || 1
  this.bulletType = BulletClass
  this. bulletTexture = data.bulletTexture

  this._available = this.clipSize

  this.shotThrottle = 0

  this.clip = new Phaser.Group(state.game)
  state.bullets.add(this.clip)

  for (var i = 0; i < this.clipSize * this.bulletsPerShot; ++i) {
    var bullet = new BulletClass(state, 0, 0, this.bulletTexture)
    this.clip.add(bullet)
  }
}


Gun.prototype = Object.create(Item.prototype)


Object.defineProperty(Gun.prototype, 'available', {
  get: function() {
    return this._available
  }
})


Gun.prototype.pickup = function(_, playerBody) {
  this.lifespan = 0
  Item.prototype.pickup.call(this)
  playerBody.sprite.equip(this)
}


Gun.prototype.fire = function(newShot) {
  if (newShot && this._available < 1) {
    this.state.playSound('dry-fire', 400)
    return false
  }
  if (!newShot && (!this.auto || this.available < 1 || this.shotThrottle > 0)) {
    return false
  }


  this.shotThrottle = this.throttle
  this._available = Math.floor(this._available-1)

  var theta = this.rotation
  var x = this.world.x + (this.width/2 * Math.cos(theta))
  var y = this.world.y + (this.width/2 * Math.sin(theta))

  for (var i = 0; i < this.bulletsPerShot; ++i) {
    var bullet = this.clip.getFirstDead()
    if (!bullet) {
      bullet = new this.bulletType(this.state, 0, 0, this.bulletTexture)
      this.clip.addChild(bullet)
    }
    var speedBonus = this.speedMul * (1 + (Math.random()*2 - 1)*this.speedVar)
    var bulletTheta = theta + (this.spread/this.clipSize *i - this.spread/2)
    bulletTheta += (Math.random()*2 - 1)*this.accuracy
    var r = this.state.reticule
    bullet.fire(x, y, bulletTheta, speedBonus, r.x, r.y)
  }

  var dir = theta > Math.PI/2 || theta < -Math.PI/2 ? 2 : -2
  this.state.throwShell(this.world.x, this.world.y, dir)

  this.state.playSound(this.sounds.shot, 400)
  this.game.camera.shake(0.01, 70)
  return true
}


Gun.prototype.update = function() {
  var dt = this.game.time.physicsElapsedMS
  if (this.shotThrottle > 0) this.shotThrottle -= dt
  var old = Math.floor(this._available)
  this._available = Math.min(this._available + dt/this.rate, this.clipSize)
  if (old !== Math.floor(this._available)) {
    this.state.playSound('click')
  }
}

