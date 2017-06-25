module.exports = HowToModal


var Modal = require('./Modal.js')
var Btn = require('./TextButton.js')


function HowToModal(state, gui) {
    Modal.call(this, state, gui)
    var info = state.entities.smallFont(state)
    info.font.multiLine = true
    info.font.align = Phaser.RetroFont.ALIGN_CENTER
    info.font.text = 'CONTROLS\n\n'
        + 'X - MAIN MENU\n\n'
        + 'W - FLY\n'
        + 'A - LEFT\n'
        + 'D - RIGHT\n'
        + '\n'
        + 'MOUSE - SHOOT'
    info.anchor.setTo(0.5)
    info.height *= 2
    info.width *= 2
    info.y = info.height/2

    var backBtn = new Btn(state, 'back', function() {
        this.gui.switchModal('menu')
    }, this)
    backBtn.y = info.bottom + 32

    this.addMultiple([info, backBtn])
}


HowToModal.prototype = Object.create(Modal.prototype)
