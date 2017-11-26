module.exports = ShmupLevel


var Level = require('./Level.js')
var Spaceship = require('../entities/Spaceship.js')
var DefaultCtlr = require('../entities/heroes/DefaultCtlr.js')


function ShmupLevel() {
  Level.call(this)
}


ShmupLevel.prototype = Object.create(Level.prototype)


ShmupLevel.prototype.create = function() {
  Level.prototype.create.call(this)

  this.puffs.setXSpeed(-80, 80)
  this.puffs.setYSpeed(400, 480)

  var dust = this.bgItems.addChild(this.make.emitter(this.game.width/2, 0, 100))
  this.dust = dust
  dust.makeParticles('sprites', 
      Phaser.Animation.generateFrameNames('dust', 1, 4), 4)
  dust.setSize(this.game.width, 1)
  dust.minParticleSpeed.setTo(0, 2000)
  dust.maxParticleSpeed.setTo(0, 1000)
  dust.setRotation(0, 0)
  dust.gravity = 0
  dust.setAll('checkWorldBounds', true)
  dust.setAll('outOfBoundsKill', true)
  dust.start(false, 0, 250)

  this.atmosphere = this.make.image(0, 0, 'sprites', 'sky')
  this.atmosphere.width = this.game.width
  this.atmosphere.height = this.game.height
  this.bgItems.addChild(this.atmosphere)
  this.ocean = this.make.image(0, 0, 'ocean')
  this.ocean.scale.setTo(this.game.height/this.ocean.height)
  this.bgItems.addChild(this.ocean)
  this.add.tween(this.ocean).to({ y: this.game.height }, 3000).chain(
    this.add.tween(this.atmosphere)
      .to({ alpha: 0 }, 8000, Phaser.Easing.Quadratic.In, false, 2000)
  ).start()

  var ship = this.players.addChild(new Spaceship(this, new DefaultCtlr(this)))
  this.ship = ship
  ship.body.removeFromWorld()
  ship.body.x = this.game.width/2
  ship.body.y = this.game.height + ship.height
  this.add.tween(this.ship.body).to({ y: this.game.height - 40 }, 1000, null, true, 1000)
    .onComplete.addOnce(function() {
      this.ship.body.addToWorld()
      this.ship.body.velocity.y = 0
    }, this)

  this.sound.play('jetpack')
}


ShmupLevel.prototype.winCondition = function() {
  return false
}
  

ShmupLevel.prototype.win = function() {
  this.time.events.add(200, function() {
    this.game.data.checkWin(this.mapName)
    if (this.soundtrack && this.soundtrack.isPlaying)
      this.soundtrack.stop()
    this.sound.play('victory-jingle')

    var clear = this.add.image(this.game.width/2, this.game.height/2,
        'sprites', 'stage-clear')
    clear.anchor.setTo(0.5)
    clear.fixedToCamera = true
    var clearTween = this.add.tween(clear)
    clearTween.from({width: clear.width * 4, height: clear.height * 4, alpha: 0},
        800, Phaser.Easing.Quartic.Out, null, 200)
    clearTween.onComplete.addOnce(function() {
      this.camera.onFadeComplete.addOnce(function() {
        this.exit()
      }, this)
      this.camera.fade(0xf6eeee, 1000)
    }, this)
    clearTween.start()
  }, this)
}

ShmupLevel.prototype.playSound = function() {
  return
}

