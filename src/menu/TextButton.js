module.exports = TextButton


var smallFont = require('../entities/SmallFont.js')



function TextButton(state, text, callback, ctx) {
    var font = smallFont.Text(state, text)
    var btn = state.make.button(0, 0, font, callback, ctx)
    btn.tint = smallFont.colors.PLAIN

    btn.onInputDown.add(inputDown, btn)
    btn.onInputOver.add(inputOver, btn)

    btn.background = state.make.image(0, 0, font)
    btn.background.tint = btn.tint
    btn.background.anchor = btn.anchor
    btn.background.alpha = 0.3
    btn.addChild(btn.background)

    btn.width *= 2
    btn.height *= 2
    btn.anchor.setTo(0.5)

    btn.onOverSound = state.sound.add('rollover')
    btn.onDownSound = state.sound.add('click')
    return btn
}


function inputDown() {
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

    // TODO: When modals fade out, their buttons don't register inputs
    // as being out, so when that modal is loaded again it's button's
    // onOver events won't fire on the first mouseover. At least I think
    // that's why they weren't firing. This hack gets around that, but I'd
    // prefer a real fix.
    this.game.time.events.add(1000, function() {
        this.input.reset()
        this.input.enabled = true
    },this)
}


function inputOver() {
    var tint = smallFont.colors.PLAIN
    this.tint = tint
    var r = Math.trunc(tint / 0x10000)
    var g = ((tint % 0x10000) - r) / 0x100
    var b = tint % 0x100 
    var color = { r: r, g: g, b: b }
    var tint2 = smallFont.colors.HILIGHT
    var r2 = Math.trunc(tint2 / 0x10000)
    var g2 = ((tint2 % 0x10000) - r) / 0x100
    var b2 = tint2 % 0x100 
    var tween = this.game.add.tween(color)
    tween.from({r: r2, g: g2, b: b2}, 200, Phaser.Easing.Quadratic.Out)
    tween.onUpdateCallback(function() {
        var r = Math.round(color.r)
        var g = Math.round(color.g)
        var b = Math.round(color.b)
        this.tint = r * 0x10000 + g * 0x100 + b
    }, this)
    tween.start()
}
