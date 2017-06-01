module.exports = DefaultCtlr


function DefaultCtlr(state) {
    var k = state.input.keyboard
    var keys = Phaser.Keyboard

    this._w = k.addKey(keys.W)
    this._a = k.addKey(keys.A)
    this._d = k.addKey(keys.D)
    this._left = k.addKey(keys.LEFT)
    this._right = k.addKey(keys.RIGHT)
    this._up = k.addKey(keys.UP)
    this.position = state.input.mousePointer.position
    this.newShot = true

    this._wasDown = false
    this._pointer = state.input.mousePointer
}


DefaultCtlr.prototype = {
    get left() {
        return this._a.isDown || this._left.isDown
    },
    get up() {
        return this._w.isDown || this._up.isDown
    },
    get right() {
        return this._d.isDown || this._right.isDown
    },
    get shoot() {
        return this._pointer.leftButton.isDown
    },

    update: function() {
        if (!this.shoot) {
            this._wasDown = false
            return
        }

        if (this._wasDown)
            this.newShot = false
        else
            this.newShot = true

        this._wasDown = true
    }
}
