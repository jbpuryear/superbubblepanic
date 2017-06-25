module.exports = TextButton


var smallFont = require('../entities/SmallFont.js')



function TextButton(state, text, callback, ctx) {
    var font = smallFont.Text(state, text)
    Phaser.Sprite.call(this, state.game, 0, 0, font)

    this.state = state
    this.callback = callback
    this.callbackCtx = ctx

    this.tint = smallFont.colors.PLAIN

    this.background = state.make.image(0, 0, font)
    this.background.tint = this.tint
    this.background.anchor = this.anchor
    this.background.alpha = 0.3
    this.addChild(this.background)

    this.width *= 2
    this.height *= 2
    this.anchor.setTo(0.5)

    this.onOverSound = state.sound.add('rollover')
    this.onDownSound = state.sound.add('click')

    this.mouseWasOver = false
    this.mouseIsOver = false

    state.input.mousePointer.leftButton.onDown.add(inputDown, this)
}


TextButton.prototype = Object.create(Phaser.Sprite.prototype)


TextButton.prototype.update = function() {
    if (!this.exists || !this.visible || this.worldAlpha !== 1) return

    var ret = this.state.reticule.world
    this.mouseWasOver = this.mouseIsOver
    this.mouseIsOver = this.getBounds().contains(ret.x, ret.y)

    if (this.mouseIsOver && !this.mouseWasOver) inputOver.call(this)
}
    


function inputDown() {
    if (!this.exists || !this.visible
        || this.worldAlpha !== 1 || !this.mouseIsOver) return
    var scale = 1.02
    this.width *= scale
    this.height *= scale
    this.game.time.events.add(40, function() {
        this.width /= scale
        this.height /= scale
    }, this)

    var tween = this.game.add.tween(this.background)
    var height = this.background.height
    var width = this.background.width
    var alpha = this.background.alpha

    tween.to({width: width * 1.4,
            height: height * 1.4,
            alpha: 0
        }, 1200, Phaser.Easing.Quadratic.Out)
    tween.onComplete.addOnce(function() {
        this.background.height = height
        this.background.width = width
        this.background.alpha = alpha
    }, this)
    tween.start()

    this.callback.call(this.callbackCtx)
}


function inputOver() {
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
