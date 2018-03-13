module.exports = Menu


var Level = require('../level/Level.js')
var GUI = require('./GUI.js')
var mapConf = require('../../assets/mapsConfig.json')


function Menu() {
  this.firstTime = true
  return this
}


Menu.prototype = Object.create(Level.prototype)
    

Menu.prototype.init = function() {
  Level.prototype.init.call(this, '_menu')
} 


Menu.prototype.create = function() {
  Level.prototype.create.call(this)
  var data = this.game.data

  this.p1 = this.add.sprite(568, 72, 'sprites', 'p1-sit1')
  this.p1.anchor.setTo(0.5)
  this.p1.scale.x = -1

  if (data.lastCompleted === data.levels.length-1) {
    this.background.loadTexture('desert-plain')
    this.background.reset(this.game.width/2, this.game.height/2)
    this.enemies.setAllChildren('exists', false)
    this.p1.x = 445
    this.p1.y = 344
    this.bullets.create(440, 323, 'sprites', 'map-start')
    var fire = this.bullets.create(418, 342, 'sprites', 'campfire1')
    fire.anchor.setTo(0.5)
    fire.animations.add('idle', ['campfire1', 'campfire2', 'campfire3'], 8, true)
    fire.animations.play('idle')
    this.puffs.x = fire.x
    this.puffs.y = fire.y
    this.puffs.setXSpeed(-10, 10)
    this.puffs.setYSpeed(-40, -20)
    this.puffs.flow(2000)
    this.frag.x = fire.x
    this.frag.y = fire.y
    this.frag.setXSpeed(-20, 20)
    this.frag.setYSpeed(-40, -20)
    this.frag.flow(400)
  } else if (data.lastCompleted >= this.game.data.getLevelIndex('space-boss')) {
    var x = this.background.scale.x * 155 + this.background.left
    var y = this.background.scale.y * 55 + this.background.top
    this.bgItems.create(x, y, 'sprites', 'eye-patch').scale.setTo(this.background.scale.x)
  }


  var frames = Phaser.Animation.generateFrameNames('p1-sit', 1, 3)
  frames = frames.concat(frames)
  frames = frames.concat(frames)
  frames = frames.concat(frames)
  frames[0] = 'p1-sit-blink'

  this.p1.animations.add('sit', frames, 5, true, false)
  this.p1.animations.add('walk',
    Phaser.Animation.generateFrameNames('p1-walk', 1, 4), 15, true)
  this.p1.animations.play('sit')

  this.gui = new GUI(this)


  if (this.firstTime) {
    var menu = this.gui.modals.menu
    menu.hiScore.visible = false
    menu.startBtn.visible = false
    menu.arcadeBtn.visible = false
    menu.howToBtn.visible = false
      
    this.time.events.add(2000, function() {
      menu.hiScore.visible = true
      menu.startBtn.visible = true
      menu.arcadeBtn.visible = true
      menu.howToBtn.visible = true
    })
    this.firstTime = false
  }
  this.world.bringToTop(this.reticule)
} 


Menu.prototype.exit = function() {
  return
}


Menu.prototype.loseCondition = function() {
  return false
}
Menu.prototype.winCondition = function() {
  return false
}


Menu.prototype.start = function(key) {
  this.p1.animations.stop()
  this.p1.frameName = 'p1-stand'
  this.time.events.add(100, function() {
    this.p1.animations.play('walk')
    this.p1.scale.x = 1
    var dest = this.world.width + 16
    var t = (dest-this.p1.x)/100 * 1000
    this.add.tween(this.p1)
      .to({x: dest}, t)
      .start()
    this.camera.onFadeComplete.addOnce(function() {
      this.state.start(key)
    }, this)
    this.camera.fade(0x180c08, 800, true)
  }, this)
}


Menu.prototype.startFX = function() {
  this.camera.flash(0x180c08, 1000)
}


