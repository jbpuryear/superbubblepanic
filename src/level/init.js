module.exports = function init(map) {
    this.buffs = []
    this.bulletTime = 1
    this.map = this.add.tilemap(map)
    this.mapName = map

    this.stage.backgroundColor = 0x313839
    setPhysics(this)
}


function setPhysics(state) {
    var p2 = state.physics.p2
    p2.updateBoundsCollisionGroup()
    p2.setImpactEvents(true)
    p2.gravity.y = 400
    p2.applyGravity = true
    p2.applyDamping = false

    state.itemsCG = p2.createCollisionGroup()
    state.playersCG = p2.createCollisionGroup()
    state.enemiesCG = p2.createCollisionGroup()
    state.platformsCG = p2.createCollisionGroup()
    state.bulletsCG = p2.createCollisionGroup()
    state.shellsCG = p2.createCollisionGroup()

    state.worldMaterial = p2.createMaterial('worldMaterial')
    p2.setWorldMaterial(state.worldMaterial)
    state.playerMaterial = p2.createMaterial('playerMaterial')
    state.platformMaterial = p2.createMaterial('platformMaterial')
    state.enemyMaterial = p2.createMaterial('enemyMaterial')

    p2.createContactMaterial(state.platformMaterial, state.enemyMaterial, {
        restitution: 1,
        friction: 0
    })
    p2.createContactMaterial(state.enemyMaterial, state.worldMaterial, {
        restitution: 1,
        friction: 0
    })
    p2.createContactMaterial(state.playerMaterial, state.platformMaterial, {
        restitution: 0,
        friction: 0
    })
}
