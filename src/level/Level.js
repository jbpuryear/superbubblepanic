var mapsConfig = require('../../assets/mapsConfig.json')

module.exports = Level


function Level() {
  Phaser.State.call(this)
  this.won = false
  this.lost = false
}


Level.prototype = Object.create(Phaser.State.prototype)
  
Level.prototype.gravity = 400

Level.prototype.create = require('./create.js')
Level.prototype.entities = require('../entities/entities.js')
Level.prototype.init = require('./init.js')
Level.prototype.parseDrop = require('./parseDrop.js')

Level.prototype.addEntity = function(data) {
  data.properties = data.properties || {}
  var type = data.type
  var drop = this.parseDrop(data.properties.drop)
  // Tiled uses different coordinates than Phaser.
  data.x = data.x + data.width / 2
  data.y = data.y + data.height / 2
  if (!this.entities.hasOwnProperty(type)) {
    throw 'Failed to read Tiled map, no game object of type \'' + type + '.\''
  }
  return new this.entities[type](this, data, drop)
}


Level.prototype.bleed = function(object) {
  for (var i = 0; i < 5; i++) {
    var drop = this.blood.getFirstDead() || this.blood.getRandom()
    drop.reset(object.world.x + Math.random() * 5 - 2.5, object.world.y)
    drop.body.velocity.x = (Math.random() * 220 + 170) * Math.cos(object.killTheta)
    drop.body.velocity.y = (Math.random() * 220 + 170) * Math.sin(object.killTheta)
    drop.body.velocity.x *= this.bulletTime
    drop.body.velocity.y *= this.bulletTime
    drop.scale.setTo(Math.random()/2 + 0.25)
  }
}


Level.prototype.changeTime = function(factor) {
  if (factor === 0 || isNaN(factor)) return
  this.bulletTime *= factor
  this.enemies.recurse(function(enemy) {
    enemy.body.mass /= factor
    enemy.body.velocity.x *= factor
    enemy.body.velocity.y *= factor
    enemy.body.data.gravityScale *= factor * factor
  })
  this.blood.recurse(function(drop) {
    drop.body.mass /= factor
    drop.body.velocity.x *= factor
    drop.body.velocity.y *= factor
    drop.body.data.gravityScale *= factor * factor
    drop.slowSpeed *= factor
  })
  if (this.sound.usingWebAudio) {
    this.sound._sounds.forEach(function(snd) {
      if (snd.isPlaying && snd.useBulletTime) {
        snd._sound.playbackRate.value *= factor
      }
    })
  }
}


Level.prototype.exit = function() {
  this.state.start('LevelSelect')
}


Level.prototype.explode = function(x, y, width) {
  this.explosionPool.getFirstDead(true).reset(x, y, width)
  this.puffs.x = x
  this.puffs.y = y
  this.puffs.explode(800, 10)
}


Level.prototype.FXMaskErase = function(sprite) {
  this.splatter.mask.blendDestinationOut()
  // TODO: Hack to fix antialiasing causing masks not to erase fully.
  this.splatter.mask.draw(sprite)
  this.splatter.mask.draw(sprite)
  this.splatter.mask.draw(sprite)
  this.splatter.mask.draw(sprite)
  this.splatter.mask.blendSourceOver()
  this.splatter.unclean = true
}


Level.prototype.gameOver = function() {
  this.reticule.animations.play('die', null, false, true)
  this.input.keyboard.addKey(Phaser.Keyboard.R).onDown.addOnce(function() {
    this.state.start(this.key, true, false, this.mapName)
  }, this)
  this.add.tween(this.gameOverScreen).to({alpha: 0.8}, 100).start()
  this.gameOverScreen.exists = true
  this.time.slowMotion = 6
  if (this.soundtrack)
    this.soundtrack.stop()
  this.players.forEach(this.world.addChild, this.world)
}


Level.prototype.paintFX = function(sprite) {
  this.splatter.draw(sprite)
  this.splatter.unclean = true
}


Level.prototype.paintFXupdate = function() {
  if (!this.splatter.unclean) return
  this.splatter.blendDestinationIn()
  this.splatter.draw(this.splatter.mask)
  this.splatter.blendSourceOver()
  this.splatter.unclean = false
}


Level.prototype.playSound = function(key, randomize, useBulletTime, lock, repeat) {
  if (!this.cache.isSoundDecoded(key)) return
  lock = lock || false
  repeat = repeat || false
  if (useBulletTime === undefined) useBulletTime = true

  var sound = null

  for (var i = 0; i < this.soundPool.length; i++) {
    if (!this.soundPool[i].isPlaying) {
      sound = this.soundPool[i]
      break
    }
  }

  if (!sound) {
    for (i = 0; i < this.soundPool.length; i++) {
      if (!this.soundPool[i].isLocked) {
        sound = this.soundPool[i]
        break
      }
    }
  }

  if (!sound) return null

  sound.volume = 1

  sound.key = key
  sound.isLocked = lock
  sound.useBulletTime = useBulletTime
  sound.play('', 0, 1, repeat, true)

  if (sound._sound && sound.usingWebAudio) {
    if (useBulletTime)
      sound._sound.playbackRate.value = this.bulletTime
    else
      sound._sound.playbackRate.value = 1

    if (randomize)
      sound._sound.detune.value = Math.random() * -randomize
    else
      sound._sound.detune.value = 0
  }

  return sound
}


Level.prototype.shutdown = function() {
  this.splatter.mask.destroy()
  this.splatter.destroy()
  this.gameOverScreen.destroy()
  this.time.slowMotion = 1
  if (this.soundtrack)
    this.soundtrack.stop()
}


Level.prototype.loseCondition = function() {
  return !this.p1.alive
}


Level.prototype.spawn = function(type, x, y, width, velx, vely, drop) {
  return this.enemyPools[type]
    .spawn(x, y, width, velx, vely, drop)
}


Level.prototype.setSize = function() {
  this.scale.setGameSize(this.map.widthInPixels, this.map.heightInPixels)
}

Level.prototype.startFX = function() {
  var go = this.add.image(this.game.width/2, this.game.height/2,
    'sprites', 'go')
  go.anchor.setTo(0.5)
  go.fixedToCamera = true
  var goTween = this.add.tween(go)
  goTween.to({width: go.width * 4, height: go.height * 4, alpha: 0},
    800, Phaser.Easing.Quartic.In)
  goTween.onComplete.addOnce(go.kill, go)
  goTween.start()

  this.camera.flash(0x180c08, 1000)
}


Level.prototype.startMusic = function() {
  var track = Phaser.ArrayUtils.getRandomItem(
    mapsConfig[this.map.properties.setting].songs)
  this.soundtrack = this.sound.addSprite(track)
  if (!this.soundtrack) return
  if (this.soundtrack.get('intro')) {
    var intro = this.soundtrack.play('intro')
    intro.onMarkerComplete.addOnce(function () { this.soundtrack.play('loop') }, this)
  } else {
    this.soundtrack.play('loop')
  }
}


Level.prototype.throwShell = function(x, y, dir) {
  var shell = this.shellPool.getFirstDead() || this.shellPool.getRandom()
  shell.reset(x, y)
  shell.body.angularVelocity = Math.random() * 8
  shell.body.velocity.x = (Math.random() * 40 + 20) * dir
  shell.body.velocity.y = -120
}


Level.prototype.update = function() {
  this.paintFXupdate()

  for (var i=this.buffs.length-1; i>=0; i--) {
    var buff = this.buffs[i]
    if (buff.timeLeft !== -1)
      buff.timeLeft = Math.max(buff.timeLeft - this.time.elapsed, 0)
    if (buff.timeLeft !== 0) {
      if (typeof buff.update === 'function') buff.update()
    } else {
      if (typeof buff.stop === 'function') buff.stop()
      this.buffs.splice(i, 1)
    }
  }

  if (!this.lost && this.loseCondition()) {
    this.lost = true
    this.gameOver()
  } else if (!this.lost && !this.won && this.winCondition()) {
    this.win()
    this.won = true
  }
}


Level.prototype.win = function() {
  this.time.events.add(200, function() {
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
    clearTween.onComplete.addOnce(function() {
      this.camera.onFadeComplete.addOnce(function() {
        this.exit()
      }, this)
      this.camera.fade(0xf6eeee, 1000)
    }, this)
    clearTween.start()
  }, this)
}


Level.prototype.winCondition = function() {
  return this.enemies.getFirstAlive() ? false : true
}

