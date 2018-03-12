module.exports = Spaceship


function Spaceship(state, ctlr) {
  // Spawn off screen to hide flame particles
  Phaser.Sprite.call(this, state.game, -100, 0)
  state.physics.p2.enable(this)
  this.icon = new Phaser.Sprite(state.game, 0, 0, 'sprites', 'rocket')
  this.addChild(this.icon).anchor.setTo(0.5)

  this.state = state
  this.ctlr = ctlr
  this.flame = state.bgItems.addChild(state.make.emitter(0, 0, 200))

  this.flame.makeParticles('sprites',
    Phaser.Animation.generateFrameNames('flame', 1, 4))
  this.flame.setScale(0.25, 1, 0.25, 1, 200)
  this.flame.setAlpha(1, 0.2, 400)
  this.flame.setRotation(0)
  this.flame.lifespan = 400
  this.flame.setXSpeed(-40, 40)
  this.flame.setYSpeed(100, 140)

  var h = this.height * 0.65
  var w = this.width * 0.5
  this.body.setRectangle(w, h)
  this.body.data.gravityScale = 0
  this.body.setMaterial(state.playerMaterial)
  this.body.setCollisionGroup(state.playersCG)
  this.body.collides(state.enemiesCG, this.damage, this)
  this.body.collides([state.itemsCG, state.physics.p2.boundsCollisionGroup])
  this.body.fixedRotation = true

  this.game.time.events.loop(40, function() {
    this.body.offset.x = Math.random() * 1.25 - 0.625
    this.body.offset.y = Math.random() * 1.25 - 0.625
  }, this)

  this.maxHealth = 3
  this.health = this.maxHealth
  this.inputDisabled = false
  this.invincible = false
}


Spaceship.prototype = Object.create(Phaser.Sprite.prototype)

var max = 200
Spaceship.prototype.maxSpeed = max
Spaceship.prototype.acceleration = max/0.35


Spaceship.prototype.update = function() {
  this.ctlr.update()

  var vel = this.body.velocity
  var speed = this.maxSpeed
  var accel = this.acceleration * this.game.time.physicsElapsed
  var right = this.ctlr.right
  var left = this.ctlr.left
  var up = this.ctlr.up
  var down = this.ctlr.down

  if (this.inputDisabled) { return }
  if (up && !down) {
    vel.y = Math.max(vel.y - accel, -speed)
  } else if (down && !up) {
    vel.y = Math.min(vel.y + accel, speed)
  } else if (vel.y !== 0) {
    vel.y = vel.y > 0 ? Math.max(vel.y - accel, 0) : Math.min(vel.y + accel, 0)
  }

  if (right && !left) {
    vel.x = Math.min(vel.x + accel, speed)
  } else if (left && !right) {
    vel.x = Math.max(vel.x - accel, -speed)
  } else if (vel.x !== 0) {
    vel.x = vel.x > 0 ? Math.max(vel.x - accel, 0) : Math.min(vel.x + accel, 0)
  }

  this.rotation =  Math.PI/12 * vel.x/speed

  var w = this.width/4 - 1
  var x = this.x - w
  if (down) this.flame.setScale(0.25, 0.5, 0.25, 0.5, 200)
  else this.flame.setScale(0.25, 1, 0.25, 1, 200)
  this.flame.y = this.y + this.height/2 - 2 - this.body.offset.y
  if (vel.y <= 0) this.flame.setYSpeed(-vel.y+100, -vel.y+140)
  for (var i = 0; i < 3; ++i) {
    this.flame.x = x + w*i
    this.flame.emitParticle()
    if (!down) this.flame.emitParticle()
  }
}


Spaceship.prototype.damage = function() {
  this.state.camera.shake(0.01, 200)
  if (this.health <= 0 || this.invincible) { return }
  this.health -= 1
  if (this.health <= 2/3 * this.maxHealth) { this.icon.frameName = 'rocket-damaged' }
  if (this.health <= 1/3 * this.maxHealth) { this.icon.frameName = 'rocket-damaged2' }
  if (this.health <= 0) {
    this.kill()
    return
  }
  this.invincible = true
  var tween = this.state.add.tween(this.icon)
  tween.to({alpha: 0.4}, 100, null, false, 0, -1, true)
  tween.start()

  this.state.time.events.add(2400, function() {
    tween.stop()
    this.icon.alpha = 1
    this.invincible = false
  }, this)
}


Spaceship.prototype.kill = function() {
  this.body.removeCollisionGroup(this.game.physics.p2.boundsCollisionGroup)
  this.inputDisabled = true
  this.body.collideWorldBounds = false
  this.alive = false
  this.state.bgItems.addChild(this)
  var ev = this.game.time.events
  var loop = ev.loop(111, function() {
    this.state.glass.x = this.x
    this.state.glass.y = this.y
    this.state.glass.explode(400, 10)
    this.state.frag.x = this.x
    this.state.frag.y = this.y
    this.state.frag.explode(400, 10)
    this.state.explode(this.x+Math.random()*40-20, this.y+Math.random()*40-20, Math.random()*60+20)
  }, this)
  ev.add(1200, function() {
    ev.remove(loop)
    this.icon.frameName = 'p1-die2'
  }, this)
}

