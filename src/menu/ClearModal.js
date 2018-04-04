module.exports = ClearModal


var Modal = require('../gui/Modal.js')
var Btn = require('../gui/TextButton.js')


function ClearModal(state, gui) {
  Modal.call(this, state, gui)
  this.x = state.game.width/2

  var msg = state.entities.smallFont(state, 'Erase all progress and hi-scores?\nThis cannot be undone.')
  msg.scale.setTo(2)
  var yes = new Btn(state, 'Yes', function() {
    this.game.data.clear()
    this.game.state.start('Menu')
  }, this)
  yes.anchor.setTo(1, 0.5)
  yes.x = -32
  yes.y = msg.bottom + 32
  var no = new Btn(state, 'No', function() {
    this.gui.switchModal('settings')
  }, this)
  no.anchor.setTo(0, 0.5)
  no.x = 32
  no.y = yes.y

  this.addMultiple([msg, yes, no])

  var pad = 48
  var b = this.getBounds()
  var win = new PhaserNineSlice.NineSlice(state.game, 0, 0, 'sprites', 'window', 24, 24, { top: 8 })
  win.resize(b.width*2+pad, yes.bottom-msg.top+pad)
  win.anchor.setTo(0.5, 0)
  win.y = -40
  this.addAt(win, 0)
}


ClearModal.prototype = Object.create(Modal.prototype)

