module.exports = Hud


function Hud(state, player) {
  var game = state.game
  var tankMargin = 20

  this.player = player
  this.gun = this.player.weapon
  this.fuelLast = player.fuel
  this.tank = game.make.sprite(tankMargin, tankMargin, 'sprites', 'fuel-tank')
  this.fuelHeight = this.tank.height - 4

  this.fuelGauge =  game.make.sprite(
    tankMargin + 2, tankMargin + this.tank.height - 2, 'sprites', 'fuel')

  this.fuelGauge.anchor.setTo(0, 1)
  this.fuelGauge.width = this.tank.width - 4
  this.fuelGauge.height = this.fuelHeight
  this.fuelGauge.alpha = 0.8
  state.hud.add(this.fuelGauge)
  state.hud.add(this.tank)

  this.player.onEquip.add(this.initClipDisplay, this)

  this.bullets = game.make.group()
  this.bullets.x = this.tank.right
  this.bullets.y = this.tank.top

  for (var i = 0; i < 12; ++i) {
    this.bullets.add(new PhaserNineSlice
      .NineSlice(game, 0, 0, 'sprites', 'hud-bullet', 8, 8, { top: 2 }))
  }
  this.bullets.alpha = 0.8
  state.hud.add(this.bullets)
}


Hud.prototype.initClipDisplay = function() {
  this.gun = this.player.weapon
  var h = this.tank.height / this.gun.clipSize
  this.bulletHeight = h
  var spacing = this.gun.clipSize > 1 ?
    (this.tank.height - h) / (this.gun.clipSize - 1) : 0
  for (var i = 0; i < this.bullets.children.length; ++i) {
    var b = this.bullets.children[i]
    b.y = i * spacing
    b.exists = false
    b.resize(8, this.bulletHeight)
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
        b.resize(8, this.bulletHeight)
      } else {
        b.alpha = 0.6
        var h = this.bulletHeight*(avail - i)
        b.resize(8, Math.max(4, h))
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

  this.fuelGauge.height = this.fuelHeight * prcnt/100
  this.updateClip()
}

