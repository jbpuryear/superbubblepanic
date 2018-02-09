module.exports = LevelSelect


var Button = require('./gui/Button.js')
var Character = require('./entities/heroes/Character.js')
var Reticule = require('./Reticule.js')
var WorldMap = require('./WorldMap.js')
var SmallFont = require('./entities/SmallFont.js')

var ICON_SIZE = 16
var padTop = 25


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
    map.y = padTop

    this.preview = new PhaserNineSlice.NineSlice(game, 0, map.map.height+padTop, 'sprites', 'window',
      map.map.width, 40, { top: 8 })
    this.preview.font = new SmallFont(this)
    this.preview.font.anchor.setTo(0.5)
    this.preview.font.x = this.preview.width/2
    this.preview.font.y = this.preview.height/2
    this.preview.addChild(this.preview.font)
    this.world.add(this.preview)

    this.scale.setGameSize(map.map.width, map.map.height+this.preview.height+padTop)
    this.bg.scale.setTo( Math.max(this.game.width/bg.width, this.game.height/bg.height-this.preview.height) )
    bg.scale.setTo( bg.scale.x * 1.25 )
    this.world.setBounds(0, 0, this.game.width, this.game.height)
    this.reticule = new Reticule(this.game)

    this.inputEnabled = true

    var levels = this.game.data.levels
    var start = this.game.data.mapStart
    var symbols = this.make.group()
    this.trail = symbols.addChild(this.make.graphics())

    var startBtn = symbols.addChild(new LevelButton(this, start, 'map-start'))
    startBtn.x = start.mapX
    startBtn.y = start.mapY - padTop
    startBtn.anchor.setTo(0.5, 1)

    if (levels.length === 0) return
    var lastCompleted = this.game.data.lastCompleted
    var lvl = levels[0]

    // This would be easier with BitmapData, but I can't turn off smoothing!
    this.trail.lineStyle(2, 0xfff2cd, 0.6)
    var x = start.mapX
    var y = start.mapY - padTop
    this.trail.moveTo(x, y)
    var dashLength = 5
    var spaceLength = 4
    for (var i = 0; i < levels.length && i <= lastCompleted+1; i++) {
      lvl = levels[i]
      var run = lvl.mapX - x
      var rise = lvl.mapY - y - padTop
      var d = Math.sqrt(run*run + rise*rise)
      var dashX = dashLength * run/d
      var dashY = dashLength * rise/d
      var spaceX = spaceLength * run/d
      var spaceY = spaceLength * rise/d
      while (x !== lvl.mapX) {
        if (Math.abs(x - lvl.mapX) < Math.abs(dashX)) {
          x = lvl.mapX
          y = lvl.mapY - padTop
        } else {
          x += dashX
          y += dashY
        }
        this.trail.lineTo(x, y)
        if (Math.abs(x - lvl.mapX) < Math.abs(dashX)) {
          x = lvl.mapX
          y = lvl.mapY - padTop
        } else {
          x += spaceX
          y += spaceY
        }
        this.trail.moveTo(x, y)
      }
    }

    for (i = 0; i < levels.length; i++) {
      lvl = levels[i]
      if (i <= lastCompleted + 1) {
        var butt
        if (lvl.state === 'RocketLevel') {
          butt = new LevelButton(this, lvl, 'rocket')
        } else {
          var frame = i === lastCompleted + 1 ? 'lvlButtonCurrent' : 'lvlButtonComplete'
          butt = new LevelButton(this, lvl, frame + '1')
          butt.animations.add('blink', [frame + '1', frame + '1', frame + '2'])
          butt.animations.play('blink', 1.5, true)
        }
        butt.x = lvl.mapX
        butt.y = lvl.mapY - padTop
        symbols.addChild(butt)
        if (lvl.state === 'RocketLevel') butt.anchor.setTo(0.5, 1)
      } else if (lvl.state === 'RocketLevel') {
        var icon = this.make.image(lvl.mapX, lvl.mapY-padTop, 'sprites', 'rocket')
        icon.anchor.setTo(0.5, 1)
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
    this.playerIcon.y = lvl.mapY - padTop
    if (lastPlayed > lastCompleted) this.walkTo(lastCompleted)

    var key = lastCompleted >= this.game.data.getLevelIndex('space-boss')
      ? 'floating-eye-damaged' : 'floating-eye'
    var eye = this.add.image(425, -30, 'sprites', key)
    eye.scale.setTo(2)
    map.addAt(eye, map.getChildIndex(map.clouds))
    map.addAt(symbols, map.getChildIndex(map.clouds))

    this.selectIcon = this.add.sprite(0, 0, 'sprites', 'select-icon')
    this.selectIcon.anchor.setTo(0.5)
    this.selectIcon.width = 20
    this.selectIcon.height = 20
    this.selectIcon.exists = false

    this.world.add(this.reticule)

    this.camera.flash(0x180c08, 1000)

    var track = this.sound.addSprite('gone')
    this.soundtrack = track
    if (track) {
      this.time.events.add(800, track.play, track, 'loop')
    }
  },


  update: function() {
    // Hack: Force a repaint to get around camera shake bug.
    this.preview.resize(this.world.width, 40)

    var plyr = this.playerIcon
    var pts = this.walkPoints
    if (pts.length > 0) {
      plyr.animations.play('walk')
      var dt = this.time.physicsElapsed
      var vel = 200
      var p = pts[pts.length - 1]
      var dx = p.mapX - plyr.x
      var dy = p.mapY - padTop - plyr.y
      var d = Math.sqrt(dx*dx + dy*dy)
      if (d <= dt*vel) {
        plyr.x = p.mapX
        plyr.y = p.mapY - padTop
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
  },


  exit: function() {
    this.state.start('Menu')
  },


  walkTo: function(index) {
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
  this.state.selectIcon.y = this.y + padTop
  this.state.preview.font.font.text = this.level.title
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

