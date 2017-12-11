var BrkPlat = require('../entities/BrkPlat.js')
var Explosion = require('../magic/Explosion.js')
var Blood = require('../magic/Blood.js')
var mapsConfig = require('../../assets/mapsConfig.json')
var Reticule = require('../Reticule.js')


module.exports = function create() {
    this.won = false
    this.lost = false

    this.soundPool = []
    for(var i = 0; i < 30; i++) this.soundPool.push(this.add.sound('reload'))

    if (this.map.properties && this.map.properties.setting) 
        paintBackground(this)

    this.reticule = new Reticule(this.game)
    this.reticule.exists = true
    this.reticule.animations.stop()
    this.reticule.frameName = 'reticule'

    this.bgItems = this.make.group()
    this.players = this.make.group()
    this.enemies = this.make.group()
    this.items = this.make.group()
    this.fgItems = this.make.group()
    this.hud = this.make.group()
    this.hud.fixedToCamera = true

    this.splatter = this.make.bitmapData(this.world.width, this.world.height)
    this.splatter.mask = this.make.bitmapData(this.world.width, this.world.height)

    this.world.addChild(this.bgItems)

    makeParticles(this)

    makeMap(this)

    this.splatterImage = this.add.image(0, 0, this.splatter)

    this.world.addChild(this.players)
    this.world.addChild(this.enemies)
    this.world.addChild(this.items)
    this.world.addChild(this.fgItems)
    this.world.addChild(this.hud)

    makeExplosions(this)
    makeGameOverScreen(this)

    this.input.keyboard.addKey(Phaser.Keyboard.X)
        .onDown.add(this.exit, this)

    this.time.events.add(500, this.startMusic, this)
    this.startFX()
    this.world.add(this.reticule)
    this.p1 = this.players.children[0]
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
        0, 0, state.game.width, state.game.height)
    gameOverScreen.endFill()
    state.gameOverScreen = state.make.image(
        0, 0, gameOverScreen.generateTexture())

    var GOtext = state.entities.smallFont(state, 'x: menu r: retry')
    GOtext.anchor.setTo(0, 1)
    GOtext.x = 16
    GOtext.y = state.game.height-16

    state.gameOverScreen.addChild(GOtext)
    state.gameOverScreen.alpha = 0
    state.gameOverScreen.exists = false
    state.stage.addChild(state.gameOverScreen)
}


function paintBackground(state) {
    var bgKey = mapsConfig[state.map.properties.setting].bgImage
    var bg = state.add.image(state.world.width/2, state.world.height/2,
        bgKey)
    var wWidth = state.world.width
    var wHeight = state.world.height
    bg.anchor.setTo(0.5)
    bg.x = wWidth/2
    bg.y = wHeight/2
    var scale = Math.max(wWidth/bg.width, wHeight/bg.height)
    bg.width *= scale
    bg.height *= scale
    state.background = bg
}


function makeMap(state) {
    var conf = mapsConfig[state.map.properties.setting]
    state.map.addTilesetImage(conf.tiles)
    var plats = state.physics.p2
        .convertCollisionObjects(state.map, 'platform', true)

    state.map.objects.object.forEach(state.addEntity, state)

    state.map.createLayer('background')
    plats.forEach(function(platform, i) {
        var data = state.map.objects.platform[i]

        var xMin=0, xMax=0, yMin=0, yMax=0;
        var poly = data.polyline;
        for (var i=0; i<poly.length; i++) {
            // P2.converCollisionObjects converts the tilemap data to P2 units
            // so change them back so we can draw with them.
            var x = poly[i][0] = state.physics.p2.mpxi(poly[i][0]);
            var y = poly[i][1] = state.physics.p2.mpxi(poly[i][1]);
            if (x < xMin) xMin = x;
            if (x > xMax) xMax = x;
            if (y < yMin) yMin = y;
            if (y > yMax) yMax = y;
        }
        var width = xMax - xMin;
        var height = yMax - yMin;

        var points = [];
        for (i=0; i<poly.length; i++) {
            var x = poly[i][0] - xMin;
            var y = poly[i][1] - yMin;
            points.push([x, y]);
        }
        points.cx = width/2 + data.x  + xMin;
        points.cy = height/2 + data.y + yMin;
        points.width = width
        points.height = height
        data.points = points;

        var texture = new Phaser.Graphics(state.game);
        texture.beginFill(0xFFFFFF, 1);
        texture.drawPolygon(points);
        texture.endFill();

        var img = state.make.image(x, y, texture.generateTexture());
        texture.destroy();

        img.anchor.setTo(0.5)
        img.x = points.cx
        img.y = points.cy
        data.mask = img

        this.splatter.mask.draw(img)


        platform.setCollisionGroup(state.platformsCG)
        platform.collides(
            [state.enemiesCG, state.playersCG, state.itemsCG, state.shellsCG]
        )

        if (data.properties && data.properties.breakable) {
            var drop = state.parseDrop(data.properties.drop)
            var brkplat = new BrkPlat(state, data, platform, drop)
            platform.collides(state.bulletsCG, brkplat.break, brkplat)
        } else if (data.properties && data.properties.passable) {
            platform.removeCollisionGroup(state.enemiesCG)
            // TODO: Passables should be their own thing.
            // new BrkPlat(state, data, platform)
        } else {
            platform.collides(state.bulletsCG)
        }

        // Only used in SpaceBoss leve so we can remove it after the fight
        if (data.properties && data.properties.shouldRemove) platform.shouldRemove = true

        platform.setMaterial(state.platformMaterial)
    }, state)

    // This gets rid of aliasing artifacts
    state.splatter.mask.blendSourceAtop()
    state.splatter.mask.fill(255, 255, 255, 1)
    state.splatter.mask.blendSourceOver()

    var p2 = state.physics.p2
    var bounds = [
        p2.createBody(0, state.world.height, 0, true),
        p2.createBody(0, 0, 0, true),
        p2.createBody(0, 0, 0, true),
        p2.createBody(state.world.width, 0, 0, true)
    ]
    for (var i = 0; i < bounds.length; i++) {
        bounds[i].rotation = i * Math.PI/2
        bounds[i].addPlane()
        bounds[i].setCollisionGroup(p2.boundsCollisionGroup)
        bounds[i].collides([
            state.enemiesCG, state.playersCG, state.itemsCG,
            state.shellsCG, state.bulletsCG
        ])
        bounds[i].setMaterial(state.platformMaterial)
    }

    state.platforms = plats
}


function makeParticles(state) {
    state.shellPool = state.add.group()
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

    state.blood = state.add.group()
    state.blood.classType = Blood
    state.blood.createMultiple(100, 'sprites', 'blood')

    state.glass = state.add.emitter(0, 0, 100)
    state.glass.makeParticles('sprites', 'glass')
    state.glass.setXSpeed(-500, 500)
    state.glass.setYSpeed(-200, 200)
    state.glass.setScale(0.25, 1.75, 0.25, 1.75)
    state.glass.setAlpha(0.1, 0.8)
    state.glass.gravity = state.physics.p2.gravity.y

    state.puffs = state.add.emitter(0, 0, 50)
    state.puffs.makeParticles('sprites', 
        Phaser.Animation.generateFrameNames('dust', 1, 4))
    state.puffs.setScale(0.5, 2, 0.5, 2, 400)
    state.puffs.setAlpha(1, 0.2, 400)
    state.puffs.setRotation(0)
    state.puffs.setXSpeed(-40, 40)
    state.puffs.setYSpeed(-40, 40)
    state.puffs.gravity = 0
}
