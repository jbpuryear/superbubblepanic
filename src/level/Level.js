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
        console.log('Creating ' + type + '...')
        if (!this.entities.hasOwnProperty(type)) {
            throw "Failed to read Tiled map, no game object of type '" + type + ".'"
        }
        return new this.entities[type](this, data, drop)
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
        if (this.sound.usingWebAudio) {
            this.sound._sounds.forEach(function(snd) {
                if (snd._snd) snd._snd.playbackRate *= factor
            });
        }
    },


    exit: function() {
        this.state.start('Menu')
    },


    explode: function(x, y, width) {
        this.explosionPool.getFirstDead(true).reset(x, y, width)
    },


    gameOver: function() {
        var self = this
        this.input.keyboard.addKey(Phaser.Keyboard.R).onDown.addOnce(function() {
            self.state.start(self.key, true, false, self.mapName)
        })
        this.input.keyboard.addKey(Phaser.Keyboard.X).onDown.addOnce(this.exit.bind(this))
        this.add.tween(this.gameOverScreen).to({alpha: 0.8}, 100).start()
        this.gameOverScreen.exists = true
        this.time.slowMotion = 6
    },


    playSound: function(sound, randomize) {
        sound.play()
        if (sound._sound && sound.usingWebAudio)
            sound._sound.playbackRate.value = this.bulletTime
            if (randomize)
                sound._sound.detune.value = Math.random() * -randomize
        return sound
    },


    throwShell: function(x, y, dir) {
        var shell = this.shellPool.getFirstDead() || this.shellPool.getRandom()
        shell.reset(x, y)
        shell.body.angularVelocity = Math.random() * 8
        shell.body.velocity.x = (Math.random() * 40 + 20) * dir
        shell.body.velocity.y = -120
    },


    update: function() {
        for (var i=this.buffs.length-1; i>=0; i--) {
            var buff = this.buffs[i]
            buff.timeLeft -= this.time.elapsed
            if (buff.timeLeft >= 0) {
                if (typeof buff.update === 'function') buff.update()
            } else {
                if (typeof buff.stop === 'function') buff.stop()
                this.buffs.splice(i, 1)
            }
        }

        if (!this.p1.alive) { this.gameOver() }
    },


    shutdown: function() {
        this.stage.removeChild(this.gameOverScreen)
        this.time.slowMotion = 1
    }
}
