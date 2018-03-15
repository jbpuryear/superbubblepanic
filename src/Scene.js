module.exports = Scene

function Scene() {
  Phaser.State.call(this)
  this.bulletTime = 1
  this.soundtrack = null
}


Scene.prototype = Object.create(Phaser.State.prototype)


Scene.prototype.create = function() {
  this.soundPool = []
  for(var i = 0; i < 30; i++) this.soundPool.push(this.add.sound('reload'))
}


Scene.prototype.playSound = function(key, randomize, useBulletTime, lock, repeat) {
  if (!this.game.data.sfxOn || !this.cache.isSoundDecoded(key)) { return null }
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


Scene.prototype.startMusic = function(track) {
  if (!this.game.data.musicOn) { return null }
  this.soundtrack = this.sound.addSprite(track)
  if (!this.soundtrack) return null
  if (this.soundtrack.get('intro')) {
    var intro = this.soundtrack.play('intro')
    intro.onMarkerComplete.addOnce(function () { this.soundtrack.play('loop') }, this)
  } else {
    this.soundtrack.play('loop')
  }
}

