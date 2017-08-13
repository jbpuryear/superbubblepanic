module.exports = PlayerFX


function PlayerFX(state) {
    this.dust = state.add.emitter(0, 0, 10)
    this.flame = state.add.emitter(0, 0, 30)
    this.exhaust = state.add.emitter(0, 0, 10)

    this.dust.makeParticles('sprites', 
        Phaser.Animation.generateFrameNames('dust', 1, 4))
    this.dust.setScale(0.5, 2, 0.5, 2, 400)
    this.dust.setRotation(0)
    this.dust.setXSpeed(-100, 100)
    this.dust.setYSpeed(-20, -80)
    this.dust.setAlpha(1, 0.2, 400)
    this.dust.setScale(0.25, 1, 0.25, 1, 200)

    this.flame.makeParticles('sprites',
        Phaser.Animation.generateFrameNames('flame', 1, 4))
    this.flame.setScale(0.25, 1, 0.25, 1, 200)
    this.flame.setAlpha(1, 0.2, 400)
    this.flame.setRotation(0)
    this.flame.setXSpeed(-40, 40)
    this.flame.setYSpeed(60, 80)
    this.flame.lifespan = 400

    this.exhaust.makeParticles('sprites', 
        Phaser.Animation.generateFrameNames('dust', 1, 4))
    this.exhaust.setScale(0.5, 2, 0.5, 2, 400)
    this.exhaust.setRotation(0)
    this.exhaust.setXSpeed(-80, 80)
    this.exhaust.setYSpeed(-10, 100)
    this.exhaust.setAlpha(1, 0.2, 400)
    this.exhaust.setScale(0.25, 1, 0.25, 1, 200)
}
