module.exports = Rocket


var Bullet = require('./Bullet.js')

var SPEED = 1000
var ACCEL = SPEED / 0.5


function Rocket(state, x, y, texture) {
  texture = texture || 'bullet'
  Bullet.apply(this, arguments)
  this.target = { x: 0, y: 0 }
  this.animations.add('loop', Phaser.Animation.generateFrameNames('missile', 1, 3), 15, true)
  this.animations.play('loop')
}


Rocket.prototype = Object.create(Bullet.prototype)


Rocket.prototype.fire = function(x, y, theta, speedBonus, targetX, targetY) {
  Bullet.prototype.fire.apply(this, arguments)
  this.target.x = Math.abs(targetX - this.x)
  this.target.y = Math.abs(targetY - this.y)
  this.body.velocity.x = 0
  this.body.velocity.y = 0
  this.speed = 0
}


Rocket.prototype.hit = function() {
  this.kill()
  this.state.explode(this.x, this.y)
}


Rocket.prototype.update = function() {
  if (!this.exists) { return }
  var dt = this.state.time.physicsElapsed 
  this.target.x -= Math.abs(this.body.velocity.x * dt)
  this.target.y -= Math.abs(this.body.velocity.y * dt)
  if (this.target.x <= 0 && this.target.y <= 0) {
    this.hit()
    return
  }
  if (this.speed === SPEED) { return }
  var a = dt * ACCEL
  this.speed = Math.min(this.speed + a, SPEED)
  this.body.velocity.x = this.speed * Math.cos(this.body.rotation)
  this.body.velocity.y = this.speed * Math.sin(this.body.rotation)
}

