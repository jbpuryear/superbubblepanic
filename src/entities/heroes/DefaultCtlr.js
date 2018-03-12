module.exports = DefaultCtlr


function DefaultCtlr(state) {
  var k = state.input.keyboard
  var keys = Phaser.Keyboard

  this._w = k.addKey(keys.W)
  this._a = k.addKey(keys.A)
  this._s = k.addKey(keys.S)
  this._d = k.addKey(keys.D)
  this._left = k.addKey(keys.LEFT)
  this._right = k.addKey(keys.RIGHT)
  this._up = k.addKey(keys.UP)
  this._down = k.addKey(keys.DOWN)
  this.position = state.reticule.world
  this.newShot = true

  this._wasDown = false
  this._pointer = state.input.mousePointer
}


DefaultCtlr.prototype = {
  get left() {
    return this._a.isDown || this._left.isDown
  },
  get right() {
    return this._d.isDown || this._right.isDown
  },
  get up() {
    return this._w.isDown || this._up.isDown
  },
  get down() {
    return this._s.isDown || this._down.isDown
  },
  get shoot() {
    return this._pointer.leftButton.isDown
  },

  update: function() {
    var shoot = this.shoot
    this.newShot = (this.shoot && !this._wasDown) ? true : false
    this._wasDown = shoot
  }
}

