module.exports = Blood


function Blood(game) {
    Phaser.Sprite.call(this, game, 0, 0, 'sprites', 'blood')

    var state = game.state.getCurrentState()

    this.slowSpeed = Math.random() * 260 + 60

    game.physics.p2.enable(this)
    this.body.clearShapes()
    this.body.addParticle()
    this.body.setCollisionGroup(state.enemiesCG)
    this.body.collides(state.platformsCG)
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
