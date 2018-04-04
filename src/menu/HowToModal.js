module.exports = HowToModal


var Modal = require('../gui/Modal.js')
var Btn = require('../gui/TextButton.js')


function HowToModal(state, gui) {
  Modal.call(this, state, gui)
  var info = state.entities.smallFont(state)
  info.font.align = Phaser.RetroFont.ALIGN_CENTER
  info.font.text = 'CONTROLS\n\n'
        + 'X - MAIN MENU\n\n'
        + 'WASD - MOVE\n'
        + '\n'
        + 'MOUSE - SHOOT\n'
        + '\n'
        + 'SHIFT F -\nFULLSCREEN'
  info.anchor.setTo(0.5)
  info.height *= 2
  info.width *= 2
  info.y = info.height/2

  var backBtn = new Btn(state, 'back', function() {
    this.gui.switchModal('menu')
  }, this)
  backBtn.y = info.bottom + 32

  this.addMultiple([info, backBtn])

  var pad = 48
  var b = this.getBounds()
  var win = new PhaserNineSlice.NineSlice(state.game, 0, 0, 'sprites', 'window', 24, 24, { top: 8 })
  win.resize(b.width*2+pad, backBtn.bottom-info.top+pad)
  win.anchor.setTo(0.5, 0)
  win.y = -pad/2
  this.addAt(win, 0)
}


HowToModal.prototype = Object.create(Modal.prototype)
