module.exports = Grenade


var Bullet = require('./Bullet.js')

var TEXTURE = 'grenade'
var SPEED = 400
var MASS = 0.5
var LIFE = 2500


function Grenade(state, x, y, texture) {
  Phaser.Group.call(this, state.game)
  texture = texture || TEXTURE
  this.addChild(new Round(state, x, y, texture))
}


Grenade.prototype = Object.create(Phaser.Group.prototype)

// TODO: This is to get around how guns fire their bullets, which
// which needs to be fixed.
Object.defineProperty(Grenade.prototype, 'alive', {get: function() {return false}})


Grenade.prototype.fire = function(x, y, theta, speedBonus) {
  var round = this.children[0]
  if (round.exists) round.kill()
  else round.fire(x, y, theta, speedBonus)
}


function Round(state, x, y, texture) {
  Bullet.call(this, state, x, y, texture)
  this.body.setMaterial(state.grenadeMaterial)
  this.body.data.gravityScale = 1
  this.body.mass = MASS
  this.body.removeCollisionGroup(state.platformsCG)
  this.body.collides(state.platformsCG)
  this.body.collideWorldBounds = true

  var frames = Array(9).fill('grenade')
  frames.unshift('grenade-flash')
  this.animations.add('rest', frames, 10, true)
    .onLoop.add(this.beep, this)
  this.animations.play('rest')
}


Round.prototype = Object.create(Bullet.prototype)

Round.prototype.speed = SPEED


Round.prototype.beep = function() {
  var snd = this.state.playSound('start')
  if (snd) snd.volume = 0.6
}


Round.prototype.kill = function() {
  this.state.explode(this.x, this.y)
  Bullet.prototype.kill.apply(this, arguments)
}


Round.prototype.fire = function(x, y, theta, speedBonus) {
  this.lifespan = LIFE
  this.animations.getAnimation('rest').restart()
  this.beep()
  Bullet.prototype.fire.call(this, x, y, theta, speedBonus)
  this.body.angularVelocity = (this.body.rotation > Math.PI/2 || this.body.rotation < -Math.PI/2) ?
    Math.PI : -Math.PI
}


Round.prototype.hit = function() {
  this.kill()
}
