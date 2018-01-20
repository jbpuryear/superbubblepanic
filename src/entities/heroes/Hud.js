module.exports = Hud


function Hud(state, player) {
  var game = state.game
  var marginLeft = state.game.width * 0.02
  var marginTop = state.game.height * 0.03
  this.height = state.game.height * 0.2
  this.width = Math.max(4, this.height/10)

  this.player = player
  this.gun = this.player.weapon

  this.fuelGauge = new PhaserNineSlice
    .NineSlice(game, marginLeft, marginTop, 'sprites', 'fuel', 8, 8, { top: 2 })
  this.fuelGauge.resize(this.width, this.height)
  this.fuelGauge.alpha = 0.8
  state.hud.add(this.fuelGauge)

  this.bullets = game.make.group()
  this.bullets.x = marginLeft + this.width
  this.bullets.y = marginTop

  for (var i = 0; i < 12; ++i) {
    this.bullets.add(new PhaserNineSlice
      .NineSlice(game, 0, 0, 'sprites', 'hud-bullet', 8, 8, { top: 2 }))
  }
  this.bullets.alpha = 0.8
  state.hud.add(this.bullets)

  this.player.onEquip.add(this.initClipDisplay, this)
}


Hud.prototype.initClipDisplay = function() {
  this.gun = this.player.weapon
  var h = this.height / this.gun.clipSize
  this.bulletHeight = h
  var spacing = this.gun.clipSize > 1 ?
    (this.height - h) / (this.gun.clipSize - 1) : 0
  for (var i = 0; i < this.bullets.children.length; ++i) {
    var b = this.bullets.children[i]
    b.y = i * spacing
    b.exists = false
    b.resize(this.width, this.bulletHeight)
  }
  this.updateClip()
}


Hud.prototype.updateClip = function() {
  var avail = this.gun.available
  for (var i = 0; i < this.gun.clipSize; ++i) {
    var b = this.bullets.children[i]
    if (i < avail) {
      b.exists = true
      if (i <= avail-1) {
        b.alpha = 1
        b.resize(this.width, this.bulletHeight)
      } else {
        b.alpha = 0.6
        var h = this.bulletHeight*(avail - i)
        b.resize(this.width, Math.max(4, h))
      }
    } else {
      b.exists = false
    }
  }
}


Hud.prototype.update = function() {
  var prcnt = 100 * this.player.fuel / this.player.maxFuel
  var full = 0x4ab67b
  var half = 0xf6d639
  var empty = 0xff555a

  if (prcnt > 50) {
    this.fuelGauge.tint = Phaser.Color.interpolateColor(half, full, 50, prcnt-50)
  } else {
    this.fuelGauge.tint = Phaser.Color.interpolateColor(empty, half, 50, prcnt)
  }

  this.fuelGauge.resize(this.width, this.height * prcnt/100)
  this.updateClip()
}

