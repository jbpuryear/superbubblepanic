module.exports = Button


function Button(state, key, frame, callback, ctx) {
    Phaser.Sprite.call(this, state.game, 0, 0, key, frame)
    this.state = state
    this.callback = callback
    this.callbackCtx = ctx

    this.background = state.make.image(0, 0, key, frame)
    this.background.anchor = this.anchor
    this.background.alpha = 0.3
    this.addChild(this.background)
    this.anchor.setTo(0.5)

    this.onOverSound = state.sound.add('rollover')
    this.onDownSound = state.sound.add('click')
    this.mouseWasOver = false
    this.mouseIsOver = false

    state.input.mousePointer.leftButton.onDown.add(this.inputDown, this)
}


Button.prototype = Object.create(Phaser.Sprite.prototype)


Button.prototype.update = function() {
    if (!this.exists || !this.visible || this.worldAlpha !== 1) return

    var ret = this.state.reticule.position
    this.mouseWasOver = this.mouseIsOver
    this.mouseIsOver = this.getBounds().contains(ret.x, ret.y)

    if (this.mouseIsOver && !this.mouseWasOver) this.inputOver()
    if (!this.mouseIsOver && this.mouseWasOver) this.inputOut()
}


Button.prototype.inputDown = function() {
    if (!this.exists || !this.visible
        || this.worldAlpha !== 1 || !this.mouseIsOver) return
    this.onDownSound.play()
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


Button.prototype.inputOver = function() {
    this.onOverSound.play()
}


Button.prototype.inputOut = function() {
}

