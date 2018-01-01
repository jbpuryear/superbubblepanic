module.exports = Spaceship


var Hud = require('./heroes/Hud.js')
var Gun = require('./Gun.js')
var Rocket = require('./bullets/Rocket.js')


function Spaceship(state, ctlr) {
  // Spawn off screen to hide flame particles
  Phaser.Sprite.call(this, state.game, -100, 0)
  // TODO more hacks to make hud work
  state.physics.p2.enable(this)
  this.weapon = new Gun(state, { rate: 5000, clipSize: 1 }, Rocket)
  this.weapon.y = -8
  this.addChild(this.weapon)
  this.icon = new Phaser.Sprite(state.game, 0, 0, 'sprites', 'rocket')
  this.addChild(this.icon).anchor.setTo(0.5)
  this.weapon.body.removeFromWorld()
  this.weapon.lifespan = 0
  this.onEquip = new Phaser.Signal()
  this.hud = new Hud(state, this)
  this.onEquip.dispatch()

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

  this.health = 3
  this.maxFuel = 3
  this.inputDisabled = false
}


Spaceship.prototype = Object.create(Phaser.Sprite.prototype)

Spaceship.prototype.maxSpeed = 200
Spaceship.prototype.acceleration = 250

// TODO Hack to make player hud show health bar
Object.defineProperty(Spaceship.prototype, 'fuel', {
  get: function() {
    return this.health
  }
})


Spaceship.prototype.update = function() {
  this.weapon.rotation = Phaser.Point.angle(this.ctlr.position, this.position)
  this.hud.update()
  this.ctlr.update()
  this.weapon.update()

  if (this.ctlr.shoot && this.ctlr.newShot) this.shoot()

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


Spaceship.prototype.shoot = function() {
  this.weapon.fire(true)
}


Spaceship.prototype.damage = function() {
  if (this.health <= 0) { return }
  this.health -= 1
  if (this.health <= 0) { this.kill() }
}


Spaceship.prototype.kill = function() {
  this.body.removeCollisionGroup(this.game.physics.p2.boundsCollisionGroup)
  this.inputDisabled = true
  this.icon.frameName = 'p1-die2'
  this.body.collideWorldBounds = false
  this.alive = false
  var ev = this.game.time.events
  var x = this.x
  var y = this.y
  var loop = ev.loop(150, function() {
    //this.state.explode(x+Math.random()*20-10, y+Math.random()*20-10, Math.random()*20+40)
  }, this)
  ev.add(2000, ev.remove, ev, loop)
}

