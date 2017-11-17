module.exports = LevelSelect


var Button = require('./gui/Button.js')
var Character = require('./entities/heroes/Character.js')
var Reticule = require('./Reticule.js')


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
    this.bg = this.add.image(0, 0, 'world-map')
    this.scale.setGameSize(this.bg.width, this.bg.height)
    this.world.setBounds(0, 0, this.game.width, this.game.height)
    this.trail = this.add.graphics()
    this.reticule = new Reticule(this.game)

    this.inputEnabled = true

    var levels = this.game.data.levels
    var start = this.game.data.mapStart

    var startBtn = this.world.add(new LevelButton(this, start, 'map-start'))
    startBtn.x = start.mapX
    startBtn.y = start.mapY

    if (levels.length === 0) return
    var lastCompleted = this.game.data.lastCompleted
    var lvl = levels[0]

    this.trail.lineStyle(2, 0xcccccc, 0.4)
    this.trail.moveTo(start.mapX, start.mapY)
    for (var i = 0; i < levels.length; i++) {
      lvl = levels[i]
      this.trail.lineTo(lvl.mapX, lvl.mapY)
    }

    this.selectIcon = this.add.sprite(0, 0, 'sprites', 'select-icon')
    this.selectIcon.anchor.setTo(0.5)
    this.selectIcon.exists = false
    this.selectIcon.width = 20
    this.selectIcon.height = 20

    for (i = 0; i < levels.length; i++) {
      lvl = levels[i]
      if (i <= lastCompleted + 1) {
        var frame = i === lastCompleted + 1 ? 'lvlButtonCurrent' : 'lvlButtonComplete'
        if (lvl.state === 'RocketLevel') frame = 'rocket'
        var butt = new LevelButton(this, lvl, frame)
        butt.x = lvl.mapX
        butt.y = lvl.mapY
        this.world.add(butt)
        if (lvl.state === 'RocketLevel') butt.anchor.setTo(0.5, 1)
      } else {
        this.add.image(lvl.mapX, lvl.mapY, 'sprites', 'lvlLocked')
          .anchor.setTo(0.5)
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
    this.playerIcon = this.world.add(new Character(this))
    this.playerIcon.anchor.setTo(0.5, 1)
    this.playerIcon.x = lvl.mapX
    this.playerIcon.y = lvl.mapY
    if (lastPlayed > lastCompleted) this.walkTo(lastCompleted)
    this.world.add(this.reticule)

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
  this.width = 16
  this.height = 16
}


LevelButton.prototype = Object.create(Button.prototype)


LevelButton.prototype.inputOver = function() {
  Button.prototype.inputOver.call(this)
  this.state.selectIcon.exists = true
  this.state.selectIcon.x = this.x
  this.state.selectIcon.y = this.y
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

