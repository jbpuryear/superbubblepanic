module.exports = RocketLevel


var Level = require('./Level.js')


function RocketLevel() {
  this.rocket = null
}


RocketLevel.prototype = Object.create(Level.prototype)


RocketLevel.prototype.create = function() {
  Level.prototype.create.call(this)
  this.loopEnd = false
  this.takeoff = false
  this.won = false
}


RocketLevel.prototype.update = function() {
  Level.prototype.update.call(this)
  if (this.won) this.winLoop()
}


RocketLevel.prototype.win = function() {
  var rocket = this.rocket
  var player = this.p1
  this.world.addChild(this.rocket)

  this.time.events.add(200, function() {
    player.playerState.ctlr = {
      get right() { return player.exists && player.world.x < rocket.x },
      get left() { return player.exists && player.world.x > rocket.x },
      position: this.rocket.world,
      update: function() {}
    }
    this.game.data.checkWin(this.mapName)
    if (this.soundtrack)
      this.soundtrack.stop()
    this.sound.play('victory-jingle')
    this.p1.playerState.change('victory')
    var clear = this.add.image(this.game.width/2, this.game.height/2,
        'sprites', 'stage-clear')
    clear.anchor.setTo(0.5)
    clear.fixedToCamera = true
    var clearTween = this.add.tween(clear)
    clearTween.from({width: clear.width * 4, height: clear.height * 4, alpha: 0},
        800, Phaser.Easing.Quartic.Out, null, 200)
      .chain(this.add.tween(clear).to({ alpha: 0 }, 200, null, null, 1000))
    clearTween.start()
  }, this)
  this.won = true
}


RocketLevel.prototype.winLoop = function() {
  var p1 = this.p1
  if (this.takeoff) {
    var r = this.rocket
    p1.x = r.x - r.width/4
    p1.y = r.y + r.height/4
    for (var i = -1; i < 2; i++) {
      p1.fx.jet()
      p1.fx.jet()
      p1.fx.jet()
      p1.x += r.width/4
    }
  }
  if (this.loopEnd) return
  if (p1.world.distance(this.rocket) < 12) {
    p1.exists = false
    this.loopEnd = true
    p1.fx.flame.makeParticles('sprites',
        Phaser.Animation.generateFrameNames('flame', 1, 4), 1000)
    this.time.events.add(1000, function() {
      this.takeoff = true
      this.playSound('jetpack', false, false, true)
      this.add.tween(this.rocket).to({x: this.rocket.x-3}, 400,
        Phaser.Easing.Bounce.In).yoyo(true)
        .chain(this.add.tween(this.rocket).to({x: this.rocket.x+3}, 400,
          Phaser.Easing.Bounce.Out).yoyo(true)).start()
      this.add.tween(this.rocket).to({y: -100}, 1500,
        Phaser.Easing.Cubic.In, true, 350)
        .onComplete.add(function() {
          this.camera.onFadeComplete.addOnce(function() {
            this.exit()
          }, this)
          this.camera.fade(0xf6eeee, 1000)
        }, this)
    }, this)
  }
}

