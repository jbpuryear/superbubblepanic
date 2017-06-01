module.exports = Boot


function Boot() {
    return this
}


Boot.prototype = {
    init: function() {
        this.game.scale.pageAlignHorizontally = true
        this.game.scale.pageAlignVertically = true
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        Phaser.Canvas.setImageRenderingCrisp(this.game.canvas)
        this.game.physics.startSystem(Phaser.Physics.P2JS)
        this.game.physics.p2.setBounds(0, 0, 0, 0, false, false, false, false)

        this.game.camera.bounds = null

        if (this.sound.usingWebAudio) {
            this.sound.masterGain.disconnect(this.sound.context.destination)
            var filter = this.sound.context.createBiquadFilter()
            this.sound.masterGain.connect(filter)
            filter.connect(this.sound.context.destination)
            filter.type = 'highpass'
            filter.frequency.value = 60;
        }
    },

    create: function() {
        this.state.start('Load')
    }
}
