module.exports = Credits


var fs = require('fs')
var SmallFont = require('./entities/SmallFont.js')
var Explosion = require('./magic/Explosion.js')
var text = fs.readFileSync(__dirname + '/../credits.txt', 'utf8')

var WorldMap = require('./WorldMap.js')


function Credits() {
}


Credits.prototype = {
  create: function() {
    this.input.keyboard.addKey(Phaser.Keyboard.X)
        .onDown.add(function() { this.state.start('Menu') }, this)

    var bg = this.bg = this.add.image(0, 0, 'space')
    var map = this.map = this.world.addChild(new WorldMap(this.game))
    map.eye.exists = false
    
    this.scale.setGameSize(map.map.width, map.map.height)
    bg.scale.setTo( Math.max(this.game.width/bg.width, this.game.height/bg.height) )
    bg.scale.setTo( bg.scale.x * 1.25 )

    var dust = this.dust = this.add.emitter(this.game.width/2, this.game.height, 100)
    var character = this.character = this.add.sprite(
      this.game.width * 0.75, -20, 'sprites', 'p1-space')

    character.scale.x = -1

    dust.makeParticles('sprites', 
        Phaser.Animation.generateFrameNames('dust', 1, 4), 4)
    dust.setSize(this.game.width, 1)
    dust.minParticleSpeed.setTo(0, -2000)
    dust.maxParticleSpeed.setTo(0, -20)
    dust.setRotation(0, 0)
    dust.gravity = 0
    dust.setAll('checkWorldBounds', true)
    dust.setAll('outOfBoundsKill', true)
    dust.start(false, 0, 250)

    this.camera.flash(0xf6eeee, 8000)

    this.explosionPool = this.add.group()
    this.explosionPool.createMultiple(40, 'sprites')
    this.explosionPool.forEach(function(exp) {
      exp.anchor.setTo(0.5)
      exp.animations.add('explode',
        Phaser.Animation.generateFrameNames('explosion', 1, 4), 60, false)
    })

    var expY = {value: 10}
    var loop = this.time.events.loop(150, function() {
      var e = this.explosionPool.getFirstDead()
      if (!e) return
      e.reset(
        Math.random()*this.game.width, Math.random()*20+expY.value)
      e.width = e.height = Math.random()*160 + 40
      e.animations.play('explode', null, false, true)
      this.camera.shake(0.015, 400);
    }, this)

    map.y = this.game.height + 5
    var pause = 2000
    var explodeTime = 4000 + pause
    var scrollTime = 20000
    var mapTime = 10000
    
    this.add.tween(expY).to({ value: -200 }, explodeTime).start()

    this.time.events.add(explodeTime-pause, this.time.events.remove, this.time.events, loop)

    var scroll
    var thanks

    this.add.tween(bg)
      .to({y: -(bg.height - this.game.height)}, scrollTime+mapTime+explodeTime)
      .start()
    this.add.tween(character)
      .to({x: 500, y: 180}, scrollTime+mapTime+explodeTime/2, null, true, explodeTime/2)
    this.add.tween(character.scale)
      .to({x: -0.01, y: 0.01}, scrollTime+mapTime+explodeTime/2,
        Phaser.Easing.Cubic.In, true, explodeTime/2)

    // Camera shake messes with retrofont rendering, so we have to wait to
    // add our text
    this.time.events.add(explodeTime, function() {
      scroll = this.add.existing(SmallFont(this, text))
      thanks = this.add.existing(SmallFont(this, 'Thanks for playing!'))
      thanks.alpha = 0
      thanks.x = this.game.width/2
      thanks.y = this.game.height/2

      scroll.anchor.setTo(0, 1)
      scroll.x = 40
      scroll.y = scroll.height + this.game.height + 10
      this.add.tween(scroll)
        .to({y: -10}, scrollTime, null, true,  explodeTime)
        .onComplete.addOnce(function() {
          this.time.events.add(mapTime * 0.75, function() { dust.on = false })
          this.add.tween(map).to({y: 0}, mapTime)
            .start()
            .onComplete.addOnce(function() {
              this.add.tween(thanks).to({alpha: 1}, 500, null, true, 2000)
                .onComplete.addOnce(function() {
                  this.camera.onFadeComplete.addOnce(function() {
                    this.state.start('Menu')
                  }, this)
                  this.time.events.add(2000, function() { this.camera.fade(0xf6eeee, 1000) }, this)
                }, this)
            }, this)
        }, this)
    }, this)
  }
}

