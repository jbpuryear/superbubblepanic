module.exports = PlayerStateMachine


function PlayerStateMachine(player, ctlr) {
  this.player = player
  this.ctlr = ctlr

  this.states = {
    dead: new Dead(this),
    falling: new Falling(this),
    floating: new Floating(this),
    flying: new Flying(this),
    standing: new Standing(this),
    stunned: new Stunned(this),
    victory: new Victory(this)
  }

  this.current = this.states.standing

  this.player.body.vel = new Phaser.Physics.P2.InversePointProxy(player.game.physics.p2, [0, 0])
  this.player.body.kick = new Phaser.Physics.P2.InversePointProxy(player.game.physics.p2, [0, 0])
}


PlayerStateMachine.prototype = {
  change: function(key){
    this.current.exit()
    this.current = this.states[key]
    this.current.enter()
  },

  update: function() {
    var game = this.player.game
    this.player.body.vel.y += game.physics.p2.gravity.y * game.time.physicsElapsed
    this.ctlr.update()
    this.current.update()
  }
}


function PlayerState(machine) {
  this.machine = machine
  this.player = machine.player
}

PlayerState.prototype = {
  enter: function() {},
  exit: function() {},

  update: function() {
    var plyr = this.player
    var ctlr = this.machine.ctlr

    if (this.machine.shooting) {
      plyr.character.animations.play('shoot')
    }

    var theta = Phaser.Point.angle(ctlr.position, plyr.position)
    if (plyr.weapon) {
      plyr.weapon.rotation = theta
    }
    theta -= plyr.character.rotation
    theta %= 2 * Math.PI
    if (theta > Math.PI) theta -= 2 * Math.PI
    else if (theta <= -Math.PI) theta += 2 * Math.PI
    plyr.facing = theta > Math.PI/2 || theta < -Math.PI/2 ? -1 : 1

    if (ctlr.left) this.onLeft()
    if (ctlr.right) this.onRight()
    if (ctlr.up) this.onUp()
    if (ctlr.shoot) this.onShoot()
  },

  onUp: function() {
    if (this.player.fuel > 100) this.machine.change('flying')
  },

  onLeft: function() {
    if (this.player.body.vel.x < -this.player.speed) return
    this.player.body.vel.x -= this.player.accel * this.player.game.time.physicsElapsed
  },

  onRight: function() {
    if (this.player.body.vel.x > this.player.speed) return
    this.player.body.vel.x += this.player.accel * this.player.game.time.physicsElapsed
  },

  onShoot: function() {
    var plyr = this.player
    if (!plyr.weapon) return
    if (plyr.weapon.fire(this.machine.ctlr.newShot)) {
      plyr.character.animations.stop()
      plyr.character.animations.play('shoot')
      var angle = plyr.weapon.rotation
      if (plyr.standing) {
        plyr.body.kick.x += -3 * plyr.facing
      } else {
        plyr.body.vel.x -= 8 * Math.cos(angle)
        plyr.body.vel.y -= 8 * Math.sin(angle)
      }
      plyr.weapon.x = -2
      this.machine.shooting = true
      plyr.game.time.events.add(60, function() {
        this.machine.shooting = false
        plyr.weapon.x = 0
      }, this)
    }
  }
}


function Dead(machine) {
  PlayerState.call(this, machine)
  this.wasStanding = false
}


Dead.prototype = {
  exit: function() {},

  enter: function() {
    var plyr = this.player
    plyr.standing = false
    plyr.alive = false

    plyr.state.playSound('death')
    plyr.state.camera.flash(0xf6eeee, 500)
    plyr.body.removeCollisionGroup([
      plyr.state.enemiesCG, plyr.state.itemsCG
    ])
    plyr.character.animations.stop()
    plyr.character.frameName = 'p1-die2'
    plyr.body.vel.x = -100 * plyr.facing
    plyr.body.vel.y = -150
    if (plyr.weapon) {
      var x = plyr.weapon.world.x
      var y = plyr.weapon.world.y
      plyr.weapon.scale.y = 1
      plyr.game.world.add(plyr.weapon)
      plyr.weapon.x = x
      plyr.weapon.y = y
      plyr.state.physics.p2.enableBody(plyr.weapon)
      plyr.weapon.body.collideWorldBounds = false
      plyr.weapon.body.angularVelocity = 4
      plyr.weapon.body.velocity.x = 60 * plyr.facing
      plyr.weapon.body.velocity.y = -100
    }
  },

  update: function() {
    if (!this.player.standing) {
      this.player.character.frameName = 'p1-die2'
      this.wasStanding = false
      return
    }
    var velx = this.player.body.vel.x
    if (velx > 0)
      this.player.body.vel.x = Math.max(velx - 2, 0)
    else if (velx < 0)
      this.player.body.vel.x = Math.min(velx + 2, 0)
    if (!this.wasStanding) {
      this.player.character.animations.play('die', null, false)
      this.wasStanding = true
    }
  }
}


function Falling(machine) {
  PlayerState.call(this, machine)
}


Falling.prototype = Object.create(PlayerState.prototype)


Falling.prototype.enter = function() {
  this.time = this.player.game.time.now
}


Falling.prototype.exit = function() {
  this.player.weapon.y = 0
}


Falling.prototype.update = function() {
  var plyr = this.player

  if (plyr.standing) {
    if (plyr.game.time.now - this.time > 300) {
      plyr.state.playSound('land')
      plyr.fx.land()
    }

    this.machine.change('standing')
    return
  }

  var v = plyr.body.vel.y
  if (v > 30) {
    plyr.character.animations.play('fall')
    plyr.weapon.y = -2
  } else if (v >10) {
    plyr.character.animations.play('fall-slow')
  } else {
    plyr.character.animations.play('idle')
  }

  PlayerState.prototype.update.call(this)
}


function Floating(machine) {
  PlayerState.call(this, machine)
  this.rotation = -Math.PI/2
  this.wasThrusting = false
}


Floating.prototype = Object.create(PlayerState.prototype)


Floating.prototype.angularSpeed = Math.PI * 1.5
Floating.prototype.thrust = 200


Floating.prototype.exit = function() {
  var player = this.player
  if (player.health > 0) return
  var state = player.game.state.getCurrentState()
  state.glass.x = player.x
  state.glass.y = player.y
  state.glass.explode(-1, 20)
}


Floating.prototype.update = function() {
  var plyr = this.player
  if (!this.machine.ctlr.up) {
    if (this.wasThrusting) {
      plyr.fx.backfire()
      this.wasThrusting = false
    }
    plyr.fuel = Math.min(plyr.maxFuel, plyr.fuel + plyr.game.time.physicsElapsedMS)
  }
  PlayerState.prototype.update.call(this)
  plyr.character.frameName = 'p1-space'
  plyr.standing = false
  if (plyr.body.vel.y < -plyr.speed) plyr.body.vel.y = -plyr.speed
  else if (plyr.body.vel.y > plyr.speed) plyr.body.vel.y = plyr.speed
}


Floating.prototype.onLeft = function() {
  var plyr = this.player
  var dt = plyr.game.time.physicsElapsed
  this.rotation -= this.angularSpeed * dt
  this.player.character.rotation = this.rotation + Math.PI/2
}


Floating.prototype.onRight = function() {
  var plyr = this.player
  var dt = plyr.game.time.physicsElapsed
  this.rotation += this.angularSpeed * dt
  this.player.character.rotation = this.rotation + Math.PI/2
}


Floating.prototype.onUp = function() {
  var plyr = this.player
  var dt = plyr.game.time.physicsElapsed
  plyr.body.vel.x += dt * this.thrust * Math.cos(this.rotation)
  plyr.body.vel.y += dt * this.thrust * Math.sin(this.rotation)
  if (!this.wasThrusting) {
    plyr.fx.puff()
  }
  this.wasThrusting = true
  plyr.fx.jet()
  plyr.fuel = Math.max(0, plyr.fuel - dt*1000)
}


function Flying(machine) {
  PlayerState.call(this, machine)
}


Flying.prototype = Object.create(PlayerState.prototype)


Flying.prototype.enter = function() {
  if (this.player.standing) this.player.body.vel.y += -80
  this.jet = this.player.state.playSound('jetpack', undefined, true, true)
  this.player.fx.puff()
}

Flying.prototype.exit = function() {
  if (this.jet && this.jet.isPlaying) this.jet.stop()
  this.player.fx.backfire()
  this.player.weapon.y = 0
}

Flying.prototype.update = function() {
  var plyr = this.player
  var mchn = this.machine

  if (plyr.fuel <= 0 || !this.machine.ctlr.up) {
    mchn.change('falling')
    return
  }

  plyr.character.animations.play('fly')

  plyr.weapon.y = plyr.body.vel.y < -30 ? 2 : 0

  plyr.body.vel.y -= plyr.game.physics.p2.gravity.y * 2.5 * plyr.game.time.physicsElapsed
  plyr.fuel = Math.max(plyr.fuel - plyr.game.time.physicsElapsedMS, 0)

  plyr.fx.jet()

  PlayerState.prototype.update.call(this)
}


Flying.prototype.onUp = function() {
  return
}


function Standing(machine) {
  PlayerState.call(this, machine)
  this.lastStep = 0
}


Standing.prototype = Object.create(PlayerState.prototype)


Standing.prototype.update = function() {
  var plyr = this.player
  var mchn = this.machine
  var ctlr = mchn.ctlr
  var velx = plyr.body.vel.x

  if (!plyr.standing) mchn.change('falling')

  if (plyr.fuel < plyr.maxFuel) {
    var fuel = plyr.fuel + plyr.game.time.physicsElapsedMS
    plyr.fuel = Math.min(plyr.maxFuel, fuel)
  }

  if (velx !== 0) {
    var friction = plyr.speed/12
    plyr.body.vel.x = velx < 0 ?
      Math.min(velx + friction, 0) :
      Math.max(velx - friction, 0)
  }

  if (ctlr.left || ctlr.right || Math.abs(velx) >= plyr.speed/2) {
    plyr.character.animations.play('walk')
    if (this.lastStep < plyr.state.time.now - 200) {
      plyr.state.playSound('step', 200)
      this.lastStep = plyr.state.time.now
    }
  } else {
    plyr.character.animations.play('idle')
  }

  PlayerState.prototype.update.call(this)
}


function Stunned(machine) {
  PlayerState.call(this, machine)
}


Stunned.prototype = {
  exit: function() {},
  update: function() {
    this.player.character.animations.play('stun')
  },

  enter: function() {
    var plyr = this.player
    var lvl = plyr.state

    plyr.body.removeCollisionGroup(lvl.enemiesCG, false)
    plyr.invincible = true

    if (plyr.weapon)
      plyr.weapon.rotation = plyr.facing === 1 ? 0 : Math.PI
    plyr.body.vel.x = 40 * -plyr.facing

    this.tween = this.player.state.add.tween(this.player.character)
    this.tween.to({alpha: 0.2}, 75, null, false, 0, -1, true)
    this.tween.start()

    lvl.time.events.add(800, this.endStun, this)
  },

  end: function() {
    this.tween.pause()
    this.player.character.alpha = 1
    this.player.body.collides(this.player.state.enemiesCG)
    this.player.invincible = false
  },

  endStun: function() {
    this.player.state.time.events.add(1600, this.end, this)
    this.machine.change('standing')
  }
}


function Victory(machine) {
  PlayerState.call(this, machine)
  this.started = false
}

Victory.prototype = {
  enter: function() {
    if (this.player.game.state.getCurrentState().gravity === 0) {
      this.machine.change('floating')
    }
    this.started = false
  },

  update: function() {
    if (this.player.standing && !this.started) {
      this.player.facing = 1
      this.player.character.animations.stop()
      this.player.character.frameName = 'p1-victory'
      this.player.weapon.x = this.player.character.width/4
      this.player.weapon.y = -this.player.character.height/3
      this.player.weapon.rotation = -Math.PI/4
      this.player.weapon.pivot.setTo(0.5, 0.5)
      var tween = this.player.game.add.tween(this.player.weapon)
        .to({rotation: -Math.PI * 4.25}, 500, null, true, 200)
      this.started = true
      this.player.body.vel.x = 0
      this.player.body.vel.y = 0
      tween.onComplete.addOnce(function() {
        this.player.game.time.events.add(1500, function() {
          this.machine.change('standing')
        }, this)
      }, this)
    }
  },

  exit: function() {
    this.player.weapon.x = 0
    this.player.weapon.y = 0
    this.player.weapon.pivot.setTo(-Math.abs(this.player.character.width/8), 0)
  }
}

