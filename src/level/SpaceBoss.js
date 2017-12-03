module.exports = SpaceBoss


var Level = require('./Level.js')


function SpaceBoss() {
}


SpaceBoss.prototype = Object.create(Level.prototype)


SpaceBoss.prototype.create = function() {
  Level.prototype.create.call(this)
  this.rotAccel = Math.PI*2
  this.rotMaxSpeed = Math.PI
  this.rotSpeed = 0
  var l = this.add.sprite(0, 400, 'space-boss', 'fg-left')
  l.anchor.setTo(0, 1)
  l.scale.setTo(2)
  this.bgItems.create(l.width, 260, 'space-boss', 'bg').scale.setTo(2)
  var i = this.eye = this.bgItems.create(this.game.width/2+2, 308, 'space-boss', 'eyeball')
  var overlay = this.add.sprite(0, 0, 'space-boss', 'eyeball-overlay')
  overlay.anchor.setTo(0.5)
  this.eye.overlay = overlay
  this.eye.addChild(overlay)
  i.anchor.setTo(0.5)
  i.scale.setTo(2)
  i.pivot.setTo(0, 150 - i.height/4)
  i.y += i.pivot.y*2
  this.pivotPoint = new Phaser.Point(i.x, i.y+i.pivot.y)
  this.bgItems.addChild(l)
  var c = this.bgItems.create(300, 400, 'space-boss', 'fg')
  c.anchor.setTo(0, 1)
  c.x = l.width
  c.scale.setTo(2)
  var r = this.bgItems.create(600, 400, 'space-boss', 'fg-right')
  r.anchor.setTo(1, 1)
  r.scale.setTo(2)
  var lid = this.bgItems.create(this.game.width/2+8, 284, 'space-boss', 'lid')
  lid.anchor.setTo(0.5)
  lid.scale.setTo(2)
}


SpaceBoss.prototype.update = function() {
  Level.prototype.update.call(this)
  var dt = this.time.physicsElapsed
  this.rotSpeed = Math.min(this.rotSpeed + this.rotAccel * dt, this.rotMaxSpeed)
  var rot = this.rotSpeed * dt
  var theta = this.pivotPoint.angle(this.p1.world)
  if (theta > -Math.PI/3-Math.PI/18) theta = -Math.PI/3-Math.PI/18
  else if (theta < -Math.PI*2/3+Math.PI/18) theta = -Math.PI*2/3+Math.PI/18
  theta += Math.PI/2
  if (Math.abs(this.eye.rotation - theta) > Math.PI / 1800)
    this.eye.rotation += theta > this.eye.rotation ? rot : -rot
  else this.rotSpeed = 0
}


SpaceBoss.prototype.winCondition = function() { return false }


SpaceBoss.prototype.playSound = function() {}

