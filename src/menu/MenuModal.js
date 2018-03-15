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
  hiScore.y = logo.bottom + 24
  this.hiScore = hiScore

  var startBtn = new Btn(state, 'start', function() {
    state.start('LevelSelect')
  }, state)
  startBtn.onDownSound = 'start'
  startBtn.y = hiScore.bottom + 26
  this.startBtn = startBtn

  var arcadeBtn = new Btn(state, 'arcade', function() {
    state.start('Arcade')
  }, state)
  arcadeBtn.onDownSound = 'start'
  arcadeBtn.y = startBtn.bottom + 22
  this.arcadeBtn = arcadeBtn

  /*
    var scoresBtn = new Btn(state, 'HI-SCORES', function() {
        this.gui.switchModal('hiScores')
    }, this)
    scoresBtn.y = startBtn.y + 32
    */

  var howToBtn = new Btn(state, 'INSTRUCTIONS', function() {
    this.gui.switchModal('howTo')
  }, this)
  howToBtn.y = arcadeBtn.bottom + 22
  this.howToBtn = howToBtn

  var settingsBtn = new Btn(state, 'SETTINGS', function() {
    this.gui.switchModal('settings')
  }, this)
  settingsBtn.y = howToBtn.bottom + 22
  this.settingsBtn = settingsBtn

  this.addMultiple([logo, hiScore, startBtn, arcadeBtn, howToBtn, settingsBtn])
}


MenuModal.prototype = Object.create(Modal.prototype)
