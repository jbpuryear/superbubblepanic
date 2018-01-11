module.exports = Gravity


var Bullet = require('./Bullet.js')
var dotGravity = require('../../magic/dotGravity.js')
var explode = require('../../magic/explode.js')


var TEXTURE = 'bullet'
var SPEED = 340
var RANGE = 80
var MAGNITUDE = 250
var LIFESPAN = 1600
var KILL_RANGE = 20
var EXPLOSION = 700
var SELF_DAMP = 0.97


function Gravity(state, x, y, texture) {
  texture = texture || TEXTURE
  Bullet.call(this, state, x, y, texture)

  this.speed = SPEED
  this.lifespan = LIFESPAN
  this.enemies = state.enemies
  this.body.clearCollision()
}


Gravity.prototype = Object.create(Bullet.prototype)


Gravity.prototype.kill = function() {
  Bullet.prototype.kill.call(this)
  if (!this.enemies) return
  explode(this.enemies, this, KILL_RANGE, null, EXPLOSION, 0, true)
}


Gravity.prototype.update = function() {
  if (!this.alive) return
  this.body.velocity.x *= SELF_DAMP
  this.body.velocity.y *= SELF_DAMP
  this.enemies.forInReach(this, RANGE, function(enemy) {
    var dist = this.world.distance(enemy)
    dist = Phaser.Physics.P2.prototype.pxm(dist)
    dist = dist < 1 ? 1 : dist*dist
    var damp = 1 - 1/dist
    enemy.body.velocity.x *= damp
    enemy.body.velocity.y *= damp
  }, this)
  dotGravity(this.enemies, this, MAGNITUDE, RANGE)
}


Gravity.prototype.reset = function(x, y, health) {
  Bullet.prototype.reset.call(this, x, y, health)
  this.lifespan = LIFESPAN
}
