module.exports = Blood


function Blood(game) {
    Phaser.Sprite.call(this, game, 0, 0, 'sprites', 'blood')

    this.state  = game.state.getCurrentState()

    this.slowSpeed = Math.random() * 260 + 60

    game.physics.p2.enable(this)
    this.body.clearShapes()
    this.body.addParticle()
    this.body.setCollisionGroup(this.state.enemiesCG)
    this.body.collides(this.state.platformsCG, this.kill, this)
    this.body.collideWorldBounds = false
}


Blood.prototype = Object.create(Phaser.Sprite.prototype)


Blood.prototype.update = function() {
    var vx = this.body.velocity.x
    var vy = this.body.velocity.y

    if (Phaser.Math.distance(0, 0, vx, vy) < this.slowSpeed)
        this.frameName = 'blood-slow'
    else
        if (this.frameName !== 'blood') this.frameName = 'blood'

    this.body.rotation = Math.atan2(vy, vx) - Math.PI/2
}


Blood.prototype.kill = function() {
    var snd = this.state.playSound('splat')
    if (snd && snd.isPlaying && snd.usingWebAudio) {
        var scale = this.scale.x
        snd._sound.detune.value = 300 / scale
        snd._sound.playbackRate = Math.random() * 0.3 + 0.75
        snd.volume = scale * scale
        console.log(snd)
    }
    this.frameName = 'splatter'
    this.alpha = 0.7
    this.body.rotation = Math.random() * Math.PI*2

    this.state.paintFX(this)

    this.frameName = 'blood'
    this.alpha = 1
    Phaser.Sprite.prototype.kill.call(this)
}
