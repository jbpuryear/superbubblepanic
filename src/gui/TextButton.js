module.exports = TextButton


var smallFont = require('../entities/SmallFont.js')
var Button = require('./Button.js')


function TextButton(state, text, callback, ctx) {
  var font = smallFont.Text(state, text)
  Button.call(this, state, font, null, callback, ctx)
  this.font = font
  this.tint = smallFont.colors.PLAIN

  this.background.tint = this.tint
  this.width *= 2
  this.height *= 2
}


TextButton.prototype = Object.create(Button.prototype)


TextButton.prototype.update = function() {
  this.font.buildRetroFontText()
  Button.prototype.update.call(this)
}


TextButton.prototype.inputOver = function() {
  Button.prototype.inputOver.call(this)
  var tint = smallFont.colors.PLAIN
  this.tint = tint
  var r = (tint & 0xff0000) >>  16
  var g = (tint & 0xff00) >> 8
  var b = tint & 0xff 
  var color = { r: r, g: g, b: b }
  var tint2 = smallFont.colors.HILIGHT
  var r2 = (tint2 & 0xff0000) >> 16
  var g2 = (tint2 & 0xff00) >> 8
  var b2 = tint2 & 0xff
  var tween = this.game.add.tween(color)
  tween.from({r: r2, g: g2, b: b2}, 200, Phaser.Easing.Quadratic.Out)
  tween.onUpdateCallback(function() {
    var r = (color.r & 0xff) << 16
    var g = (color.g & 0xff) << 8
    var b = color.b & 0xff
    this.tint = r | g | b
  }, this)
  tween.start()
}
