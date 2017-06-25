module.exports = HiScoresModal


var Modal = require('./Modal.js')
var Btn = require('./TextButton.js')


function HiScoresModal(state, gui) {
    Modal.call(this, state, gui)

    var scores = state.game.data.getHiScores()

    var text = 'HI-SCORES\n\n'
    scores.forEach(function(score, i) {
        var value = score.score + ''
        while (value.length < 9) value = '0' + value
        text += (i<9?' ':'') + (i+1) + ' '
            + score.name + ' ' + value + '\n'
    })

    var scoreboard = state.entities.smallFont(state)
    scoreboard.font.align = Phaser.RetroFont.ALIGN_CENTER
    scoreboard.font.multiLine = true
    scoreboard.font.text = text
    scoreboard.width *= 2
    scoreboard.height *= 2
    scoreboard.y = scoreboard.height/2

    var backBtn = new Btn(state, 'BACK', function() {
        this.gui.switchModal('menu')
    }, this)
    backBtn.y = scoreboard.bottom + 32

    this.addMultiple([scoreboard, backBtn])
}


HiScoresModal.prototype = Object.create(Modal.prototype)
