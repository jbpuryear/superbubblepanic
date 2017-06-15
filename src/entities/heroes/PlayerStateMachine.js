module.exports = PlayerStateMachine


function PlayerStateMachine(player, ctlr) {
    this.player = player
    this.ctlr = ctlr

    this.fuel = this.maxFuel
    this.states = {
        dead: new Dead(this),
        falling: new Falling(this),
        flying: new Flying(this),
        standing: new Standing(this),
        stunned: new Stunned(this)
    }

    this.current = this.states.standing
}


PlayerStateMachine.prototype = {
    maxFuel: 2000,

    change: function(key){
        this.current.exit()
        this.current = this.states[key]
        this.current.enter()
    },

    update: function() {
        this.ctlr.update()
        this.current.update()
    }
}


function PlayerState(machine) {
    this.machine = machine
    this.player = machine.player
    this.ctlr = machine.ctlr
}

PlayerState.prototype = {
    enter: function() {},
    exit: function() {},

    update: function() {
        var plyr = this.player
        var ctlr = this.ctlr

        if (this.machine.shooting) {
            plyr.character.animations.stop()
            plyr.character.frameName = 'p1-shoot'
        }

        var theta = Phaser.Point.angle(ctlr.position, plyr.position)
        if (plyr.weapon) {
            plyr.weapon.rotation = theta
        }
        plyr.facing = theta > Math.PI/2 || theta < -Math.PI/2 ? -1 : 1

        if (ctlr.left) this.onLeft()
        if (ctlr.right) this.onRight()
        if (ctlr.up) this.onUp()
        if (ctlr.shoot) this.onShoot()
    },

    onUp: function() {
        if (this.machine.fuel > 100) this.machine.change('flying')
    },

    onLeft: function() {
        if (!this.ctlr.right) this.player.body.velocity.x = -this.player.speed
    },

    onRight: function() {
        if (!this.ctlr.left) this.player.body.velocity.x = this.player.speed
    },

    onShoot: function() {
        var plyr = this.player
        if (!plyr.weapon) return
        if (plyr.weapon.fire(this.ctlr.newShot)) {
            plyr.character.animations.stop()
            plyr.character.frameName = 'p1-shoot'
            var direction = plyr.facing
            plyr.body.x -= 3 * direction
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

        plyr.state.playSound('death')
        plyr.state.camera.flash(0xf6eeee, 500)
        plyr.alive = false
        plyr.body.removeCollisionGroup([
            plyr.state.enemiesCG, plyr.state.itemsCG
        ])
        plyr.character.animations.stop()
        plyr.character.frameName = 'p1-die2'
        plyr.body.velocity.x = -100 * plyr.facing
        plyr.body.velocity.y = -150
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
        velx = this.player.body.velocity.x
        if (velx > 0)
            this.player.body.velocity.x = Math.max(velx - 2, 0)
        else if (velx < 0)
            this.player.body.velocity.x = Math.min(velx + 2, 0)
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


Falling.prototype.exit = function() {
    this.player.weapon.y = 0
}


Falling.prototype.update = function() {
    var plyr = this.player

    if (plyr.standing) {
        plyr.state.playSound('land')
        plyr.fx.dust.x = plyr.x
        plyr.fx.dust.y = plyr.y + plyr.character.height/2
        plyr.fx.dust.explode(100, 6)

        this.machine.change('standing')
        return
    }

    if (plyr.body.velocity.y > 30) {
        plyr.character.animations.play('fall')
        plyr.weapon.y = -2
    } else {
        plyr.character.frameName = 'p1-fall1'
    }

    PlayerState.prototype.update.call(this)
}


function Flying(machine) {
    PlayerState.call(this, machine)
}


Flying.prototype = Object.create(PlayerState.prototype)


Flying.prototype.enter = function() {
    this.jet = this.player.state.playSound('jetpack', undefined, true, true)
}

Flying.prototype.exit = function() {
    if (this.jet && this.jet.isPlaying) this.jet.stop()
    this.player.weapon.y = 0
}

Flying.prototype.update = function() {
    var plyr = this.player
    var mchn = this.machine

    if (mchn.fuel <= 0 || !this.ctlr.up) {
        mchn.change('falling')
        return
    }

    plyr.character.animations.play('fly')

    plyr.weapon.y = plyr.body.velocity.y < -30 ? 2 : 0

    plyr.body.thrust(plyr.game.physics.p2.gravity.y * 2.5)
    mchn.fuel = Math.max(mchn.fuel - plyr.game.time.physicsElapsedMS, 0)

    plyr.fx.flame.x = plyr.x
    plyr.fx.flame.y = plyr.y
    plyr.fx.flame.emitParticle()

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
    var velx = plyr.body.velocity.x

    if (!plyr.standing) mchn.change('falling')

    if (mchn.fuel < mchn.maxFuel) {
        var fuel = mchn.fuel + plyr.game.time.physicsElapsedMS / 2
        mchn.fuel = Math.min(mchn.maxFuel, fuel)
    }

    if (velx !== 0) {
        var friction = velx/20 * plyr.speedBonus
        plyr.body.velocity.x = velx < 0 ?
            Math.min(velx - friction, 0) :
            Math.max(velx - friction, 0)
    }

    if (Math.abs(velx) >= plyr.speed/2) {
        plyr.character.animations.play('walk')
        if (this.lastStep < plyr.state.time.now - 200) {
            plyr.state.playSound('step', 200)
            this.lastStep = plyr.state.time.now
        }
    } else {
        plyr.character.animations.stop()
        plyr.character.frameName = 'p1-stand'
    }

    PlayerState.prototype.update.call(this)
}


function Stunned(machine) {
    PlayerState.call(this, machine)
}


Stunned.prototype = {
    exit: function() {},
    update: function() {
        this.player.character.frameName = 'p1-die1'
    },

    enter: function() {
        var plyr = this.player
        var lvl = plyr.state

        plyr.body.removeCollisionGroup(lvl.enemiesCG, false)

        if (plyr.weapon)
            plyr.weapon.rotation = plyr.facing === 1 ? 0 : Math.PI
        plyr.body.velocity.x = 40 * -plyr.facing

        this.tween = this.player.state.add.tween(this.player.character)
        this.tween.to({alpha: 0.2}, 75, null, false, 0, -1, true)
        this.tween.start()

        lvl.time.events.add(800, this.endStun, this)
    },

    end: function() {
        this.tween.pause()
        this.player.character.alpha = 1
        this.player.body.collides(this.player.state.enemiesCG)
    },

    endStun: function() {
        this.player.state.time.events.add(1600, this.end, this)
        this.machine.change('standing')
    }
}
