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

        this.game.camera.bounds = null
    },

    create: function() {
        this.state.start('Load')
    }
}
