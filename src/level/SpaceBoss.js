module.exports = SpaceBoss


var Level = require('./Level.js')


function SpaceBoss() {
  this.rotAccel = Math.PI / 20
  this.rotMaxSpeed = Math.PI
  this.rotSpeed = 0
  this.pivotPoint = new Phaser.Point()
  this.maxHp = 5
  this.hp = this.maxHp
  this.trigger = null
  this.blinking = false
  this.hitTimeout = false
}


SpaceBoss.prototype = Object.create(Level.prototype)


SpaceBoss.prototype.create = function() {
  this.trigger = null
  Level.prototype.create.call(this)
  this.splatterImage.exists = false
  this.rotSpeed = 0
  this.hp = this.maxHp
  this.blinking = false
  this.hitTimeout = false
  this.makeMonster()

  this.p1.character.animations.add('walk',
    Phaser.Animation.generateFrameNames('p1-walk-space', 1, 4), 12, true)
  this.p1.character.animations.add('fall', ['p1-space'], 1, true)
  this.p1.character.animations.add('fall-slow', ['p1-space'], 1, true)
  this.p1.character.animations.add('fly', ['p1-space'], 1, true)
  this.p1.character.animations.add('idle', ['p1-walk-space1'], 1, true)
  this.p1.character.animations.add('stun', ['p1-space'], 1, true)
  this.p1.character.animations.add('shoot', ['p1-shoot-space'], 1, true)
}


SpaceBoss.prototype.makeMonster = function() {
  var l = this.add.sprite(0, 400, 'space-boss', 'fg-left')
  l.anchor.setTo(0, 1)
  l.scale.setTo(2)
  this.bgItems.create(l.width, 260, 'space-boss', 'bg').scale.setTo(2)
  var i = this.eye = this.bgItems.create(this.game.width/2+5, 308, 'space-boss', 'eyeball')
  i.mask = this.add.graphics()
  i.mask.beginFill(0xffffff)
  i.mask.drawRect(0, 0, this.game.width, this.game.height-20)
  var overlay = this.add.sprite(0, 0, 'space-boss', 'eyeball-overlay')
  overlay.anchor.setTo(0.5)
  overlay.alpha = 0
  this.eye.overlay = overlay
  this.eye.addChild(overlay)
  i.anchor.setTo(0.5)
  i.scale.setTo(2)
  i.pivot.setTo(0, 150 - i.height/4)
  i.y += i.pivot.y*2
  this.pivotPoint.setTo(i.x, i.top+59)
  this.bgItems.addChild(l)
  var c = this.centerPanel = this.bgItems.create(300, 400, 'space-boss', 'fg')
  c.anchor.setTo(0, 1)
  c.x = l.width
  c.scale.setTo(2)
  var r = this.bgItems.create(600, 400, 'space-boss', 'fg-right')
  r.anchor.setTo(1, 1)
  r.scale.setTo(2)
  var lid = this.lid =  this.bgItems.create(this.game.width/2+8, 284, 'space-boss', 'lid')
  lid.anchor.setTo(0.5)
  lid.scale.setTo(2)

  this.physics.p2.enable(this.eye, false, false)
  var b = this.monsterBody = this.eye.body
  b.static = true
  b.setCircle(150*2)
  b.setCollisionGroup(this.enemiesCG)
  b.collides([this.bulletsCG, this.playersCG], this.onCollide, this)
}


SpaceBoss.prototype.update = function() {
  Level.prototype.update.call(this)
  var dt = this.time.physicsElapsed

  var theta = this.pivotPoint.angle(this.p1.world)
  if (theta > -Math.PI/3-Math.PI/18) theta = -Math.PI/3-Math.PI/18
  else if (theta < -Math.PI*2/3+Math.PI/18) theta = -Math.PI*2/3+Math.PI/18
  theta += Math.PI/2

  var d = Math.abs(this.eye.rotation - theta) * 180/Math.PI
  if (!this.blinking) {
    var rot
    if (d > 10) {
      this.rotSpeed = Math.min(this.rotSpeed + this.rotAccel * dt, this.rotMaxSpeed)
      rot = this.rotSpeed * dt
      this.eye.body.rotation += theta > this.eye.rotation ? rot : -rot
    } else if (d > 1) {
      rot = d/10 * this.rotSpeed * dt
      this.eye.body.rotation +=  theta > this.eye.rotation ? rot : -rot
    } else {
      this.rotSpeed = 0
    }
  }

  var p1 = this.p1
  var c = this.eye
  if (this.eye.exists && !this.hitTimeout &&
    (p1.x-c.x)*(p1.x-c.x) + (p1.y+p1.character.height/2-c.y)*(p1.y+p1.character.height/2-c.y) < 300*300) {
    this.blink(1000)
    this.hitTimeout = true
    this.time.events.add(2400, this.clearHitTimeout, this)
    this.p1.damage(null, this.eye.body)
  }
}


SpaceBoss.prototype.clearHitTimeout = function() {
  this.hitTimeout = false
}


SpaceBoss.prototype.onCollide = function(_, src) {
  if (this.blinking) return
  this.hp -= src.attack || 1
  this.eye.overlay.alpha = (this.maxHp - this.hp)/this.maxHp
  this.eye.tint = 0x180c08
  this.time.events.add(20, this.blink, this)
  if (this.hp <= 0) this.defeatMonster()
}


SpaceBoss.prototype.blink = function(time) {
  this.blinking = true
  time = time || 200
  this.lid.frameName = 'lid-closed'
  if (time >= 0) this.time.events.add(time, this.unblink, this)
}


SpaceBoss.prototype.unblink = function() {
  this.blinking = false
  this.eye.tint = 0xffffff
  this.lid.frameName = 'lid'
}


SpaceBoss.prototype.defeatMonster = function() {
  this.blink(-1)
  var time = 4000
  var bleedSpoof = {world: {x: 40, y: 40}, killTheta: 0}
  var loop = this.time.events.loop(50, function() {
    var x = Math.random() * 200 - 100 + this.eye.x
    var y = Math.random() * 60 + 250
    bleedSpoof.world.x = x
    bleedSpoof.world.y = y
    bleedSpoof.killTheta = Math.random() * Math.PI/4 - Math.PI/8 - Math.PI/2
    this.explode(x, y, Math.random() * 80 + 40)
    this.bleed(bleedSpoof)
  }, this)
  this.time.events.add(time, this.time.events.remove, this.time.events, loop)
  this.add.tween(this.eye).to({alpha: 0}, time, null, true).onComplete.add(function() {
    this.eye.kill()
    this.lid.kill()
    for (var i = 0; i < this.platforms.length; ++i) {
      if (this.platforms[i].shouldRemove) this.platforms[i].removeFromWorld()
    }
    this.fgItems.addChild(this.centerPanel)
  }, this)
}


SpaceBoss.prototype.winCondition = function() {
  return this.trigger.contains(this.p1.x, this.p1.y)
}


SpaceBoss.prototype.gameOver = function() {
  Level.prototype.gameOver.call(this)
  this.p1.playerState.states.floating.exit()
}


SpaceBoss.prototype.playSound = function() {}

