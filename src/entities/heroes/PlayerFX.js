module.exports = PlayerFX


function PlayerFX(state) {
    this.dust = state.add.emitter(0, 0, 10)
    this.flame = state.add.emitter(0, 0, 30)

    this.dust.makeParticles('dust', [0, 1, 2, 3])
    this.dust.setScale(0.5, 2, 0.5, 2, 400)
    this.dust.setRotation(0)
    this.dust.setXSpeed(-100, 100)
    this.dust.setYSpeed(-20, -80)
    this.dust.setAlpha(1, 0.2, 400)
    this.dust.setScale(0.25, 1, 0.25, 1, 200)

    this.flame.makeParticles('flame', [0, 1, 2, 3])
    this.flame.setScale(0.25, 1, 0.25, 1, 200)
    this.flame.setAlpha(1, 0.2, 400)
    this.flame.setRotation(0)
    this.flame.setXSpeed(-40, 40)
    this.flame.setYSpeed(60, 80)
    this.flame.lifespan = 400
}
