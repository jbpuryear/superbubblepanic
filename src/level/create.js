var BrkPlat = require('../entities/BrkPlat.js')
var Explosion = require('../magic/Explosion.js')


module.exports = function create() {
    this.soundPool = []
    for(var i = 0; i < 30; i++) this.soundPool.push(this.add.sound('reload'))

    if (this.map.properties && this.map.properties.bgImage) 
        paintBackground(this)
    makeParticles(this)
    makeMap(this)
    makeExplosions(this)
    makeGameOverScreen(this)

    // TODO Change if we ever have more than one player.
    if (this.players.length > 0)
        this.p1 = this.players.getChildAt(0)

    this.startFX()

    this.input.keyboard.addKey(Phaser.Keyboard.ESC)
        .onDown.add(this.exit, this)
}


function makeExplosions(state) {
    state.explosionPool = state.add.group()
    state.explosionPool.classType = Explosion
    state.explosionPool.createMultiple(10)
}


function makeGameOverScreen(state) {
    var gameOverScreen = state.make.graphics()
    gameOverScreen.beginFill(0x000000)
    gameOverScreen.drawRect(
        0, 0, state.world.width, state.world.height)
    gameOverScreen.endFill()
    state.gameOverScreen = state.make.image(
        0, 0, gameOverScreen.generateTexture())

    var GOtext = state.entities.smallFont(state, 'x: menu r: retry')
    GOtext.anchor.setTo(0, 1)
    GOtext.x = 16
    GOtext.y = state.world.height-16

    state.gameOverScreen.addChild(GOtext)
    state.gameOverScreen.alpha = 0
    state.gameOverScreen.exists = false
    state.world.addChild(state.gameOverScreen)
}


function paintBackground(state) {
    var bg = state.add.image( state.world.width/2, state.world.height/2,
        state.map.properties.bgImage)
    var wWidth = state.world.width
    var wHeight = state.world.height
    bg.anchor.setTo(0.5)
    bg.x = wWidth/2
    bg.y = wHeight/2
    var scale = Math.max(wWidth/bg.width, wHeight/bg.height)
    bg.width *= scale
    bg.height *= scale
}


function makeMap(state) {
    state.map.addTilesetImage('tiles', 'tiles', 8, 8)
    var plats = state.physics.p2
        .convertCollisionObjects(state.map, 'platform', true)
    
    state.map.objects.object.forEach(state.addEntity, state)
    state.map.createLayer('background')
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

    var p2 = state.physics.p2
    var bounds = [
        p2.createBody(0, state.world.height, 0, true),
        p2.createBody(0, 0, 0, true),
        p2.createBody(0, 0, 0, true),
        p2.createBody(state.world.width, 0, 0, true)
    ]
    for (var i = 0; i < bounds.length; i++) {
        bounds[i].rotation = i * Math.PI/2
        bounds[i].addCircle(8)
        bounds[i].addPlane()
        bounds[i].setCollisionGroup(p2.boundsCollisionGroup)
        bounds[i].collides([
            state.enemiesCG, state.playersCG, state.itemsCG,
            state.shellsCG, state.bulletsCG
        ])
        bounds[i].setMaterial(state.platformMaterial)
    }

}


function makeParticles(state) {
    state.shellPool = state.add.group()
    state.players = state.add.group()
    state.enemies = state.add.group()
    state.items = state.add.group()
    state.platforms = state.add.group()

    state.shellPool.physicsBodyType = Phaser.Physics.P2JS
    state.shellPool.enableBody = true
    state.shellPool.createMultiple(50, 'sprites', 'shell')
    state.shellPool.forEach(function(shell) {
        shell.body.setRectangle(4, 2)
        shell.body.setCollisionGroup(state.shellsCG)
        shell.body.collides(state.platformsCG)
    }, state)

    state.frag = state.add.emitter(0, 0, 50)
    state.frag.makeParticles('sprites', 
        Phaser.Animation.generateFrameNames('flame', 1, 4))
    state.frag.setScale(0.5, 1, 0.5, 1.)
    state.frag.setRotation(0, 0)
    state.frag.gravity = 0
    state.frag.setXSpeed(-400, 400)
    state.frag.setYSpeed(-400, 400)
    state.frag.setAlpha(1, 0.2, 400)
    state.frag.lifespan = 200

    state.puffs = state.add.emitter(0, 0, 100)
    state.puffs.makeParticles('sprites', 
        Phaser.Animation.generateFrameNames('dust', 1, 4))
    state.puffs.gravity = -40
    state.puffs.setAlpha(0.8, 0, 800, Phaser.Easing.Quadratic.Out)
    state.puffs.setScale(3, 10, 3, 10, 800)
    state.puffs.setXSpeed(-100, 100)
    state.puffs.setYSpeed(-100, 20)
    state.puffs.setRotation(0, 0)
}
