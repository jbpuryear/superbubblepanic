module.exports = MenuModal


var Modal = require('../gui/Modal.js')
var Btn = require('../gui/TextButton.js')


function MenuModal(state, gui) {
    Modal.call(this, state, gui)

    var logo = state.make.image(0, 0, 'sprites', 'logo')
    logo.width = 256
    logo.height = 172
    logo.anchor.setTo(0.5)
    logo.y = logo.height/2

    var score = state.game.data.hiScore
    var hiScore = state.entities.smallFont(state, 'HI-SCORE ' + score)
    hiScore.y = logo.bottom + 32
    this.hiScore = hiScore

    var startBtn = new Btn(state, 'start', function() {
        state.start()
    }, state)
    startBtn.onDownSound = state.sound.add('start')
    startBtn.y = hiScore.bottom + 32
    this.startBtn = startBtn

    /*
    var scoresBtn = new Btn(state, 'HI-SCORES', function() {
        this.gui.switchModal('hiScores')
    }, this)
    scoresBtn.y = startBtn.y + 32
    */

    var howToBtn = new Btn(state, 'INSTRUCTIONS', function() {
        this.gui.switchModal('howTo')
    }, this)
    howToBtn.y = startBtn.bottom + 32
    this.howToBtn = howToBtn

    this.addMultiple([logo, hiScore, startBtn, howToBtn])
}


MenuModal.prototype = Object.create(Modal.prototype)
