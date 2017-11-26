module.exports = Spaceship


function Spaceship(state, ctlr) {
  Phaser.Sprite.call(this, state.game, 0, 0, 'sprites', 'rocket')

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

  state.physics.p2.enable(this)
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

  this.bullet = this.game.make.sprite(0, 0, 'sprites', 'grenade')
  state.bgItems.add(this.bullet)
  this.bullet.anchor.setTo(0.5)
  this.bullet.exists = false
}


Spaceship.prototype = Object.create(Phaser.Sprite.prototype)

Spaceship.prototype.maxSpeed = 100
Spaceship.prototype.acceleration = 250


Spaceship.prototype.update = function() {
  this.ctlr.update()

  if (this.ctlr.shoot && this.ctlr.newShot) this.shoot()

  var vel = this.body.velocity
  var speed = this.maxSpeed
  var accel = this.acceleration * this.game.time.physicsElapsed
  var right = this.ctlr.right
  var left = this.ctlr.left
  var up = this.ctlr.up
  var down = this.ctlr.down

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
  this.flame.y = this.y + this.height/2 - 2
  if (vel.y <= 0) this.flame.setYSpeed(-vel.y+100, -vel.y+140)
  for (var i = 0; i < 3; ++i) {
    this.flame.x = x + w*i
    this.flame.emitParticle()
    if (!down) this.flame.emitParticle()
  }
}


Spaceship.prototype.shoot = (function() {
  function cb() {
    this.bullet.kill()
    this.game.state.getCurrentState()
      .explode(this.bullet.x, this.bullet.y)
  }

  return function() {
    var b = this.bullet
    if (b.exists) return
    var x = this.ctlr.position.x
    var y = this.ctlr.position.y
    b.exists = true
    b.x = this.x
    b.y = this.y
    this.game.add.tween(b)
      .to({ x: x, y: y }, 1000, Phaser.Easing.Cubic.Out, true)
      .onComplete.add(cb, this)
  }
})()

