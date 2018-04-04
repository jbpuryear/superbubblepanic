module.exports = SeekBoss


var Seeker = require('./Seeker.js')

var HEALTH = 50
var CHILD_WIDTH = 30
var CHILD_VEL = 100


function SeekBoss(state, data) {
  Seeker.call(this, state, data)

  this.drops = []
  var prize = state.addEntity({type: 'slomo'})
  prize.kill()
  this.drops.push(prize)
  prize = state.addEntity({type: 'shield'})
  prize.kill()
  this.drops.push(prize)
  prize = state.addEntity({type: 'repel'})
  prize.kill()
  this.drops.push(prize)

  this.spawn(data.x, data.y, data.width)
  this._scale = this.scale.x
  this.heartbeat()
  this.bringToTop()
  state.boss = this
}


SeekBoss.prototype = Object.create(Seeker.prototype)

SeekBoss.prototype.maxHealth = HEALTH
SeekBoss.prototype.defaultFrame = 'seek-boss'


SeekBoss.prototype.heartbeat = function() {
  if (this.tween) { this.tween.manager.remove(this.tween) }
  this.tween = this.game.add.tween(this.scale)
  var to = this._scale * 1.05
  this.tween.to({ x: to, y: to }, 500, Phaser.Easing.Back.Out, true, null, -1)
}


SeekBoss.prototype.damage = function() {
  this.tween.stop()
  if (this.health % 10 === 1 && this.drops.length > 0) {
    this.drops.pop().reset(this.x, this.y)
    this._scale *= 3/4
    this._circle.radius *= 3/4
  }
  this.scale.setTo(this._scale)
  this.heartbeat()
  Seeker.prototype.damage.apply(this, arguments)
  var v = this.body.velocity
  this.state.spawn('seeker', this.x, this.y, CHILD_WIDTH, v.x + CHILD_VEL, v.y + CHILD_VEL)
  this.state.spawn('seeker', this.x, this.y, CHILD_WIDTH, v.x + CHILD_VEL, v.y + -CHILD_VEL)
  this.state.spawn('seeker', this.x, this.y, CHILD_WIDTH, v.x - CHILD_VEL, v.y + CHILD_VEL)
  this.state.spawn('seeker', this.x, this.y, CHILD_WIDTH, v.x - CHILD_VEL, v.y + -CHILD_VEL)
}
