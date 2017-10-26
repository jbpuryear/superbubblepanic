module.exports = PlayerFX


function PlayerFX(player) {
    var state = player.game.state.getCurrentState()
    this.player = player

    this.dust = state.add.emitter(0, 0, 10)
    this.flame = state.add.emitter(0, 0, 30)

    this.dust.makeParticles('sprites', 
        Phaser.Animation.generateFrameNames('dust', 1, 4))
    this.dust.setScale(0.5, 2, 0.5, 2, 400)
    this.dust.setAlpha(1, 0.2, 400)
    this.dust.setRotation(0)

    this.flame.makeParticles('sprites',
        Phaser.Animation.generateFrameNames('flame', 1, 4))
    this.flame.setScale(0.25, 1, 0.25, 1, 200)
    this.flame.setAlpha(1, 0.2, 400)
    this.flame.setRotation(0)
    this.flame.lifespan = 400
}


PlayerFX.prototype = {
    land: function() {
      var dust = this.dust
      dust.setXSpeed(-100, 100)
      dust.setYSpeed(-20, -80)
      dust.x = this.player.x
      dust.y = this.player.y + this.player.character.height/2
      dust.explode(100, 6)
    },

    puff: function() {
      var dust = this.dust
      var player = this.player
      var ho2 = player.character.height/2
      var rot = player.character.rotation
      dust.x = player.x - ho2*Math.sin(rot)
      dust.y = player.y + ho2*Math.cos(rot)
      dust.explode(200, 10)
    },

    backfire: function() {
      var dust = this.dust
      var player = this.player
      dust.setXSpeed(-80, 80)
      dust.setYSpeed(-10, 100)
      dust.x = player.x
      dust.y = player.y
      dust.explode(200, 6)
    },

    jet: function() {
      var flame = this.flame
      var player = this.player
      flame.gravity = player.game.physics.p2.gravity.y
      var sin = Math.sin(player.character.rotation)
      var cos = Math.cos(player.character.rotation)
      flame.setXSpeed(-40*cos-60*sin, 40*cos-80*sin)
      flame.setYSpeed(-40*sin+60*cos, 40*sin+80*cos)
      flame.x = player.x
      flame.y = player.y
      flame.emitParticle()
    }

}
