module.exports = LevelSelect


var Button = require('./gui/Button.js')
var Character = require('./entities/heroes/Character.js')
var Reticule = require('./Reticule.js')
var WorldMap = require('./WorldMap.js')
var SmallFont = require('./entities/SmallFont.js')

var ICON_SIZE = 16


function LevelSelect() {
  this.inputEnabled = true
  this.lastPlayed = null
}


LevelSelect.prototype = {
  create: function() {
    this.input.keyboard.addKey(Phaser.Keyboard.X)
        .onDown.add(this.exit, this)

    this.walkPoints = []
    this.walkDirection = 1
    this.characterAt = null
    var bg = this.bg = this.add.image(0, 0, 'space')
    var map = this.world.add(new WorldMap(this.game))
    this.scale.setGameSize(map.map.width, map.map.height)
    this.bg.scale.setTo( Math.max(this.game.width/bg.width, this.game.height/bg.height) )
    bg.scale.setTo( bg.scale.x * 1.25 )
    this.add.image(410, 10, 'sprites', 'floating-eye')
      .scale.setTo(2)
    this.world.setBounds(0, 0, this.game.width, this.game.height)
    this.reticule = new Reticule(this.game)

    this.inputEnabled = true

    var levels = this.game.data.levels
    var start = this.game.data.mapStart
    var symbols = this.make.group()
    this.trail = symbols.addChild(this.make.graphics())

    var startBtn = symbols.addChild(new LevelButton(this, start, 'map-start'))
    startBtn.x = start.mapX
    startBtn.y = start.mapY
    startBtn.anchor.setTo(0.5, 1)

    if (levels.length === 0) return
    var lastCompleted = this.game.data.lastCompleted
    var lvl = levels[0]

    this.trail.lineStyle(2, 0xcccccc, 0.4)
    this.trail.moveTo(start.mapX, start.mapY)
    for (var i = 0; i < levels.length && i <= lastCompleted+1; i++) {
      lvl = levels[i]
      this.trail.lineTo(lvl.mapX, lvl.mapY)
    }

    for (i = 0; i < levels.length; i++) {
      lvl = levels[i]
      if (i <= lastCompleted + 1) {
        if (lvl.state === 'RocketLevel') {
          var butt = new LevelButton(this, lvl, 'rocket')
        } else {
          var frame = i === lastCompleted + 1 ? 'lvlButtonCurrent' : 'lvlButtonComplete'
          var butt = new LevelButton(this, lvl, frame + '1')
          butt.animations.add('blink', [frame + '1', frame + '1', frame + '2'])
          butt.animations.play('blink', 1.5, true)
        }
        butt.x = lvl.mapX
        butt.y = lvl.mapY
        symbols.addChild(butt)
        if (lvl.state === 'RocketLevel') butt.anchor.setTo(0.5, 1)
      } else {
        var icon = this.make.image(lvl.mapX, lvl.mapY, 'sprites', 'lvlLocked')
        icon.anchor.setTo(0.5)
        icon.width = ICON_SIZE
        icon.height = ICON_SIZE
        symbols.addChild(icon)
      }
    }

    var lastPlayed = this.lastPlayed
    if (lastPlayed !== null) {
      this.characterAt = lastPlayed
      lvl = lastPlayed === -1 ? start : levels[lastPlayed]
    } else if (lastCompleted >=0) {
      this.characterAt = lastCompleted
      lvl = levels[lastCompleted]
    } else {
      this.characterAt = -1
      lvl = start
    }
    this.playerIcon = symbols.addChild(new Character(this))
    this.playerIcon.anchor.setTo(0.5, 1)
    this.playerIcon.x = lvl.mapX
    this.playerIcon.y = lvl.mapY
    if (lastPlayed > lastCompleted) this.walkTo(lastCompleted)

    map.addAt(symbols, map.getChildIndex(map.clouds))

    this.selectIcon = this.add.sprite(0, 0, 'sprites', 'select-icon')
    this.selectIcon.anchor.setTo(0.5)
    this.selectIcon.exists = false
    this.selectIcon.width = 20
    this.selectIcon.height = 20

    this.world.add(this.reticule)

    var margin = 40
    this.preview = new PhaserNineSlice.NineSlice(game, margin, margin, 'sprites', 'window',
      this.game.width - 2*margin, 80, { top: 8 })
    this.preview.font = new SmallFont(this)
    this.preview.font.anchor.setTo(0, 0.5)
    this.preview.font.x = 8
    this.preview.font.y = this.preview.height/2
    this.preview.addChild(this.preview.font)
    this.preview.exists = false
    this.world.add(this.preview)

    this.camera.flash(0x180c08, 1000)
  },


  update: function() {
    var plyr = this.playerIcon
    var pts = this.walkPoints
    if (pts.length > 0) {
      plyr.animations.play('walk')
      var dt = this.time.physicsElapsed
      var vel = 200
      var p = pts[pts.length - 1]
      var dx = p.mapX - plyr.x
      var dy = p.mapY - plyr.y
      var d = Math.sqrt(dx*dx + dy*dy)
      if (d <= dt*vel) {
        plyr.x = p.mapX
        plyr.y = p.mapY
        this.characterAt = this.game.data.getLevelIndex(p.key)
        this.walkPoints.pop()
      } else {
        if (this.characterAt % 1 === 0) this.characterAt += this.walkDirection * 0.5
        plyr.x += vel*dt * dx/d
        plyr.y += vel*dt * dy/d
      }
    } else {
      plyr.animations.stop()
      plyr.frameName = 'p1-stand'
    }
    
    this.preview.y = this.reticule.y >= this.game.height * 2/3 ?
        0 : this.game.height - this.preview.height
  },


  exit: function() {
    this.state.start('Menu')
  },


  walkTo(index) {
    var at = this.characterAt
    var pts = []
    if (index === at) return
    var dir = index >= at ? 1 : -1
    this.walkDirection = dir
    if (index === -1) {
      pts.push(this.game.data.mapStart)
      index++
    }
    if (at % 1 === 0.5) at += 0.5 * dir
    for (; index !== at; index -= dir) {
      pts.push(this.game.data.levels[index])
    }
    if (at === -1) {
      pts.push(this.game.data.mapStart)
    } else {
      pts.push(this.game.data.levels[at])
    }
    this.walkPoints = pts
  }
}


function LevelButton(state, level, frame) {
  Button.call(this, state, 'sprites', frame, this.callback, this)
  this.state = state
  this.level = level
  this.width = ICON_SIZE
  this.height = ICON_SIZE
}


LevelButton.prototype = Object.create(Button.prototype)


LevelButton.prototype.inputOver = function() {
  Button.prototype.inputOver.call(this)
  this.state.selectIcon.exists = true
  this.state.selectIcon.x = this.x
  this.state.selectIcon.y = this.y
  this.state.preview.font.font.text = this.level.title
  this.state.preview.exists = true
}


LevelButton.prototype.callback = function() {
  if (this.state.inputEnabled === false) return
  this.state.inputEnabled = false
  this.state.camera.onFadeComplete.addOnce(fadeCb, this)
  this.state.camera.fade(0x180c08, 800)
  var i = this.game.data.getLevelIndex(this.level.key)
  this.state.walkTo(i)
  this.state.lastPlayed = i
}


function fadeCb() {
  this.state.state.start(this.level.state, true, false, this.level.key)
}

