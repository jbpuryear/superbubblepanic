module.exports = MenuModal


var Modal = require('./Modal.js')
var Btn = require('./TextButton.js')


function MenuModal(state, gui) {
    Modal.call(this, state, gui)

    var logo = state.make.image(0, 0, 'sprites', 'logo')
    logo.width = 256
    logo.height = 172
    logo.anchor.setTo(0.5)
    logo.y = logo.height/2

    var startBtn = Btn(state, 'start', function() {
        state.start()
    }, state)
    startBtn.y = logo.bottom + 32

    var scoresBtn = Btn(state, 'HI-SCORES', function() {
        this.gui.switchModal('hiScores')
    }, this)
    scoresBtn.y = startBtn.y + 32

    var scoresBtn = Btn(state, 'HI-SCORES', function() {
        this.gui.switchModal('hiScores')
    }, this)
    scoresBtn.y = startBtn.y + 32

    var howToBtn = Btn(state, 'HOW TO PLAY', function() {
        this.gui.switchModal('howTo')
    }, this)
    howToBtn.y = scoresBtn.y + 32

    this.addMultiple([logo, startBtn, scoresBtn, howToBtn])
}


MenuModal.prototype = Object.create(Modal.prototype)
