module.exports = function create() {
    this.scale.setGameSize(this.map.widthInPixels, this.map.heightInPixels)

    makeMap(this)
    makeGameOverScreen(this)

    this.shellPool.physicsBodyType = Phaser.Physics.P2JS
    this.shellPool.enableBody = true
    this.shellPool.createMultiple(40, 'shell')
    this.shellPool.forEach(function(shell) {
        shell.body.setRectangle(4, 2)
        shell.body.setCollisionGroup(this.shellsCG)
        shell.body.collides(this.platformsCG)
    }, this)

    // TODO Change if we ever have more than one player.
    this.p1 = this.players.getChildAt(0)
    this.world.addChild(this.players)
}


function makeGameOverScreen(state) {
    var gameOverScreen = state.make.graphics()
    gameOverScreen.beginFill(0x000000)
    gameOverScreen.drawRect(
        0, 0, state.world.width, state.world.height)
    gameOverScreen.endFill()
    state.gameOverScreen = state.make.image(
        0, 0, gameOverScreen.generateTexture())

    var GOtext = state.make.retroFont(
        'font-small', 8, 8, Phaser.RetroFont.TEXT_SET2)
    GOtext.text = 'r: retry x: menu'
    var t = state.make.image(16, state.world.height-16, GOtext)
    t.anchor.setTo(0, 1)

    state.gameOverScreen.addChild(t)
    state.gameOverScreen.alpha = 0
    state.world.addChild(state.gameOverScreen)
}


function makeMap(state) {
    state.map.addTilesetImage('tiles', 'tiles', 8, 8)
    state.map.createLayer('background')

    var plats = state.physics.p2
        .convertCollisionObjects(state.map, 'platform', true)

    plats.forEach(function(platform, i) {
        var data = state.map.objects.platform[i]

        platform.setCollisionGroup(state.platformsCG)
        platform.collides(
            [state.enemiesCG, state.playersCG, state.itemsCG, state.shellsCG]
        )

        if (data.properties && data.properties.breakable) {
            var drop = state.parseDrop(data.properties.drop)
            var brkplat = new BrkPlat(state, data, platform, drop)
            platform.collides(state.bulletsCG, brkplat.break, brkplat)
        } else if (data.properties && data.properties.passable) {
            // TODO: Passables should be their own thing.
            // new BrkPlat(state, data, platform)
        } else {
            platform.collides(state.bulletsCG)
        }

        platform.setMaterial(state.platformMaterial)
    }, state)

    state.map.objects.object.forEach(state.addEntity, state)
}
