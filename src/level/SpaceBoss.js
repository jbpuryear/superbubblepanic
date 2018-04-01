module.exports = SpaceBoss


var Level = require('./Level.js')
var Director = require('./Director.js')
var Script = require('./Script.js')
var mapsConfig = require('../../assets/mapsConfig.json')


function SpaceBoss() {
  this.rotAccel = Math.PI / 20
  this.rotMaxSpeed = Math.PI
  this.rotSpeed = 0
  this.pivotPoint = new Phaser.Point()
  this.maxHp = 25
  this.hp = this.maxHp
  this.trigger = null
  this.blinking = false
  this.hitTimeout = false
  this.provoked = false
  this.attackTimer = 0
  this.blinkTimer = 0
  this.director = null
  this.curtain = null
  this.lastSeeker = 0
  this.lastShield = 0
}


SpaceBoss.prototype = Object.create(Level.prototype)


SpaceBoss.prototype.create = function() {
  this.trigger = null
  Level.prototype.create.call(this)

  this.provoked = false
  this.attackTimer = 0
  this.blinkTimer = 0
  this.lastSeeker = 0
  this.lastShield = 0

  this.director = new Director(this)
  this.curtain = new Script.Curtain(this.director, null, 16, 150, 28)
  this.curtainR = new Script.Curtain(this.director, null, 16, 150, 28,
    null, null, this.game.width, -this.game.width)

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

  this.motes = this.add.group()
  this.bgItems.add(this.motes)
  this.motes.createMultiple(5, 'sprites', 'dust1')
  this.motes.createMultiple(5, 'sprites', 'dust2')
  this.motes.createMultiple(5, 'sprites', 'dust3')
  this.motes.createMultiple(5, 'sprites', 'dust4')
  this.motes.setAll('alpha', 0.6)
  this.motes.setAll('blendMode', PIXI.blendModes.ADD)

  this.enemies.bringToTop(this.enemyPools.seeker)
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
  var r = this.bgItems.create(800, 400, 'space-boss', 'fg-right')
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
  b.collides([this.shellsCG, this.itemsCG], function(_, s) {
    s.sprite.kill()
    this.blink(100)
    this.damage(0.05)
  }, this)
}


SpaceBoss.prototype.update = function() {
  Level.prototype.update.call(this)

  if (this.hp <= 0) { return }

  this.director.update()
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
  if (this.eye.exists && !this.hitTimeout && !this.blinking &&
    (p1.x-c.x)*(p1.x-c.x) + (p1.y+p1.character.height/2-c.y)*(p1.y+p1.character.height/2-c.y) < 300*300) {
    this.blink(1000)
    this.hitTimeout = true
    this.time.events.add(2400, this.clearHitTimeout, this)
    this.p1.damage(null, this.eye.body)
  }

  if (this.blinking) {
    this.blinkTimer -= dt * 1000
    if (this.blinkTimer <= 0) { this.unblink() }
  }

  if (!this.provoked) { return }

  if (this.attackTimer > 0) {
    this.attackTimer -= dt
    if (this.attackTimer <= 0) { this.attack() }
  }
}


function curtCB() {
  var script = Math.random() > 0.5 ? this.curtain : this.curtainR
  this.director.load(script)
  this.director.start()
  this.camera.shake(0.01, 100)
}
SpaceBoss.prototype.attack = function() {
  var sinceSeeker = this.time.now - this.lastSeeker
  if (sinceSeeker > 27000) {
    this.generateSeeker()
    this.attackTimer = 5
    return
  }
  var roll = Math.random()
  switch (true) {
  case roll < 0.2:
    if (sinceSeeker > 15000) {
      this.generateSeeker()
    }
    this.attackTimer = 5
    return
  case roll < 0.95:
    var t = 400
    this.blink(t)
    this.time.events.add(t, curtCB, this)
    this.attackTimer = Math.random()*2 + t/1000 + 2
    return
  default:
    this.attackTimer = Math.random() * 3
  }
}


SpaceBoss.prototype.clearHitTimeout = function() {
  this.hitTimeout = false
}


SpaceBoss.prototype.onCollide = function(_, src) {
  if (this.blinking) return
  this.camera.shake(0.01, 100)
  this.eye.tint = 0x180c08
  this.damage(src.attack || 1)
  this.bleed(src.x, src.y, -Math.PI/2)
  this.time.events.add(20, this.blink, this)
}


SpaceBoss.prototype.throwHex = function() {
  if (this.hp <= 0) { return }
  var roll = Math.random()
  var width = Math.random() * 80 + 80
  this.time.events.add(Math.random() * 3000 + 500, this.throwHex, this)
  var h
  var speed = 100
  if (roll < 0.5) {
    h = this.director.spawn('hex', -width/2-1,
      Math.random()*this.game.height*3/4, width, speed, 0, drop)
  } else {
    h = this.director.spawn('hex', this.game.width+width/2+1,
      Math.random()*this.game.height*3/4, width, -speed, 0, drop)
  }
  if (!h) { return }
  if (this.time.now - this.lastShield > 40000 && h.y <= this.game.height * 3/5) {
    if (Math.random() < 1/40) {
      var drop = this.addEntity({ x: 0, y: 0, type: 'shield'})
      this.lastShield = this.time.now
      drop.kill()
      h.drop = drop
      var tween = this.add.tween(h)
      tween.to({ alpha: 0.6 }, 200, Phaser.Easing.Sinusoidal.InOut, true, null, -1, true)
      h.events.onKilled.addOnce(function() {
        tween.manager.remove(tween)
        h.alpha = 1
      })
    }
  }
}


SpaceBoss.prototype.damage = function(amt) {
  this.hp -= amt || 1
  this.eye.overlay.alpha = (this.maxHp - this.hp)/this.maxHp
  if (this.hp <= 0) { this.defeatMonster() }

  if (!this.provoked && this.hp <= this.maxHp-0.7) {
    this.provoked = true
    var t = 1000
    this.camera.shake(0.02, t)
    this.blink(1000)
    this.time.events.add(1000, function() {
      var drop = this.addEntity({ x: 0, y: 0, type: 'dblPistol' })
      drop.kill()
      this.generateSeeker(drop)
    }, this)
    this.time.events.add(t, this.throwHex, this)
    this.attackTimer = 3 + 1.2
  }
}


SpaceBoss.prototype.blink = function(time) {
  this.blinking = true
  time = time || 200
  this.lid.frameName = 'lid-closed'
  this.blinkTimer = Math.max(this.blinkTimer, time)
  this.eye.body.removeCollisionGroup([this.shellsCG, this.itemsCG], false)
}


SpaceBoss.prototype.unblink = function() {
  this.blinking = false
  this.eye.tint = 0xffffff
  this.lid.frameName = 'lid'
  this.eye.body.collides([this.shellsCG, this.itemsCG])
}


SpaceBoss.prototype.defeatMonster = function() {
  this.blink(-1)
  var time = 4000
  var loop = this.time.events.loop(50, function() {
    var x = Math.random() * 200 - 100 + this.eye.x
    var y = Math.random() * 60 + 250
    var angle = Math.random() * Math.PI/4 - Math.PI/8 - Math.PI/2
    this.bleed(x, y, angle)
    this.explode(x, y, Math.random() * 80 + 40)
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


SpaceBoss.prototype.generateSeeker = function(drop) {
  var width = 112
  var x = width/2+16 + (Math.random() * (this.game.width/2 - 32))
  var y = 16+width/2 + Math.random()*this.game.height/3
  var e = this.spawn('seeker', x, y, width, 0, 0, drop)

  if (!e) { return }

  this.lastSeeker = this.time.now

  e.body.removeFromWorld()
  e.alpha = 1
  e.blendMode = PIXI.blendModes.ADD

  var time = 2000

  var glow = this.time.events.loop(100, function() {
    var m = this.motes.getFirstDead()
    if (!m) { return }

    m.width = 1
    m.height = 1

    var rot = Math.random() * 2*Math.PI
    var dx = x + Math.cos(rot) * width/1.4
    var dy = y + Math.sin(rot) * width/1.4
    m.reset(dx, dy)
    var t = this.add.tween(m)
    t.onComplete.addOnce(m.kill, m)
    t.to({ x: x, y: y, width: 4, height: 4 }, 800, Phaser.Easing.Quadratic.In, true)
  }, this)

  var tween = this.add.tween(e)
  tween.from({ alpha: 0, width: 2, height: 2 }, time, Phaser.Easing.Quadratic.In)
  tween.onComplete.add(function() {
    e.blendMode = PIXI.blendModes.NORMAL
    e.body.addToWorld()
    e.body.velocity.x = 0
    e.body.velocity.y = 0
    this.time.events.remove(glow)
    this.motes.setAll('exists', false, true)
    this.eye.rotation = 0
    this.camera.shake(0.01, 100)
  }, this)
  tween.start()

  this.blink(time + 100)
}


SpaceBoss.prototype.playSound = function() {}

