var mapsConfig = require('../../assets/mapsConfig.json')

module.exports = Level


function Level() {
    return this
}


Level.prototype = {

    create: require('./create.js'),
    entities: require('../entities/entities.js'),
    init: require('./init.js'),
    parseDrop: require('./parseDrop.js'),


    addEntity: function(data) {
        data.properties = data.properties || {}
        var type = data.type
        var drop = this.parseDrop(data.properties.drop)
        // Tiled uses different coordinates than Phaser.
        data.x = data.x + data.width / 2
        data.y = data.y + data.height / 2
        if (!this.entities.hasOwnProperty(type)) {
            throw "Failed to read Tiled map, no game object of type '" + type + ".'"
        }
        return new this.entities[type](this, data, drop)
    },


    bleed: function(object) {
        for (var i = 0; i < 5; i++) {
            var drop = this.blood.getFirstDead() || this.blood.getRandom()
            drop.reset(object.world.x + Math.random() * 5 - 2.5, object.y)
            drop.body.velocity.x = (Math.random() * 220 + 170) * Math.cos(object.killTheta)
            drop.body.velocity.y = (Math.random() * 220 + 170) * Math.sin(object.killTheta)
            drop.body.velocity.x *= this.bulletTime
            drop.body.velocity.y *= this.bulletTime
            drop.scale.setTo(Math.random()/2 + 0.25)
        }
    },


    changeTime: function(factor) {
        if (factor === 0 || isNaN(factor)) return
        this.bulletTime *= factor;
        this.enemies.recurse(function(enemy) {
            enemy.body.mass /= factor;
            enemy.body.velocity.x *= factor;
            enemy.body.velocity.y *= factor;
            enemy.body.data.gravityScale *= factor * factor;
        });
        this.blood.recurse(function(drop) {
            drop.body.mass /= factor;
            drop.body.velocity.x *= factor;
            drop.body.velocity.y *= factor;
            drop.body.data.gravityScale *= factor * factor;
            drop.slowSpeed *= factor
        });
        if (this.sound.usingWebAudio) {
            this.sound._sounds.forEach(function(snd) {
                if (snd.isPlaying && snd.useBulletTime) {
                    snd._sound.playbackRate.value *= factor
                }
            });
        }
    },


    exit: function() {
        this.state.start('Menu')
    },


    explode: function(x, y, width) {
        this.explosionPool.getFirstDead(true).reset(x, y, width)
        this.puffs.x = x
        this.puffs.y = y
        this.puffs.explode(800, 20)
    },


    FXMaskErase: function(sprite) {
        this.splatter.mask.blendDestinationOut()
        this.splatter.mask.draw(sprite)
        this.splatter.mask.blendSourceOver()
        this.splatter.unclean = true
    },


    gameOver: function() {
        this.reticule.animations.play('die', null, false, true)
        this.input.keyboard.addKey(Phaser.Keyboard.R).onDown.addOnce(function() {
            this.state.start(this.key, true, false, this.mapName)
        }, this)
        this.add.tween(this.gameOverScreen).to({alpha: 0.8}, 100).start()
        this.gameOverScreen.exists = true
        this.time.slowMotion = 6
        this.soundtrack.stop()
        this.players.forEach(this.world.addChild, this.world)
    },


    paintFX: function(sprite) {
        this.splatter.draw(sprite)
        this.splatter.unclean = true
    },


    paintFXupdate: function() {
        if (!this.splatter.unclean) return
        this.splatter.blendDestinationIn()
        this.splatter.draw(this.splatter.mask)
        this.splatter.blendSourceOver()
        this.splatter.unclean = false
    },


    playSound: function(key, randomize, useBulletTime, lock, repeat) {
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
    },


    shutdown: function() {
        this.splatter.mask.destroy()
        this.splatter.destroy()
        this.gameOverScreen.destroy()
        this.time.slowMotion = 1
        this.soundtrack.stop()
    },


    loseCondition: function() {
        return !this.players.getFirstAlive()
    },


    startFX: function() {
        var go = this.add.image(this.world.width/2, this.world.height/2,
            'sprites', 'go')
        go.anchor.setTo(0.5)
        var goTween = this.add.tween(go)
        goTween.to({width: go.width * 4, height: go.height * 4, alpha: 0},
            800, Phaser.Easing.Quartic.In)
        goTween.onComplete.addOnce(go.kill, go)
        goTween.start()

        this.camera.flash(0x180c08, 1000)
    },


    startMusic: function() {
        var track = Phaser.ArrayUtils.getRandomItem(
            mapsConfig[this.map.properties.setting].songs)
        this.soundtrack = this.sound.addSprite(track)
        if (this.soundtrack.get('intro')) {
            var intro = this.soundtrack.play('intro')
            intro.onMarkerComplete.addOnce(function () { this.soundtrack.play('loop') }, this)
        } else {
            this.soundtrack.play('loop')
        }
    },


    throwShell: function(x, y, dir) {
        var shell = this.shellPool.getFirstDead() || this.shellPool.getRandom()
        shell.reset(x, y)
        shell.body.angularVelocity = Math.random() * 8
        shell.body.velocity.x = (Math.random() * 40 + 20) * dir
        shell.body.velocity.y = -120
    },


    update: function() {
        if (this.input.mouse.locked) {
            var x = this.reticule.x
            var y = this.reticule.y
            x += this.input.mousePointer.movementX * this.scale.scaleFactor.x
            y += this.input.mousePointer.movementY * this.scale.scaleFactor.y
            x = Phaser.Math.clamp(x, 0, this.world.width)
            y = Phaser.Math.clamp(y, 0, this.world.height)
            this.reticule.x = x
            this.reticule.y = y
            this.input.mousePointer.resetMovement()
        } else {
            if (!this.retFlag) {
                this.reticule.exists = this.input.mousePointer.withinGame
                this.retFlag = this.input.mousePointer.withinGame
            }
            this.reticule.x = this.input.mousePointer.x
            this.reticule.y = this.input.mousePointer.y
        }

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

        if (this.loseCondition()) this.gameOver()
    }
}
