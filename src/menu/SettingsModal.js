module.exports = SettingsModal


var Modal = require('../gui/Modal.js')
var Btn = require('../gui/TextButton.js')


function SettingsModal(state, gui) {
  Modal.call(this, state, gui)

  var vol = state.entities.smallFont(state, 'volume:')
  vol.scale.setTo(vol.scale.x*2)
  vol.anchor.setTo(1, 0.5)
  var up = new Btn(state, ' +', function() {
    this.game.sound.volume = Math.round(Math.min(this.game.sound.volume + 0.05, 1)*100)/100
    this.v.font.text = Math.round(this.game.sound.volume * 100).toString()
  }, this)
  up.anchor.setTo(0, 0.5)
  up.x = vol.right
  var down = new Btn(state, '-', function() {
    this.game.sound.volume = Math.round(Math.max(this.game.sound.volume - 0.05, 0)*100)/100
    this.v.font.text = Math.round(this.game.sound.volume * 100).toString()
  }, this)
  down.anchor.setTo(0, 0.5)
  down.x = up.right + 64
  var v = state.entities.smallFont(state, (state.sound.volume*100)+'')
  v.scale.setTo(v.scale.x*2)
  v.anchor.setTo(1, 0.5)
  v.x = down.left - 8
  this.v = v

  var music = state.entities.smallFont(state, 'music:')
  music.anchor.setTo(1, 0.5)
  music.scale.setTo(music.scale.x*2)
  this.mOn = new Btn(state, (this.game.data.musicOn ? ' on' : ' off'), function() {
    this.game.data.musicOn = !this.game.data.musicOn
    this.mOn.font.text = this.game.data.musicOn ? ' on' : ' off'
  }, this)
  this.mOn.anchor.setTo(0, 0.5)
  this.mOn.x = music.right
  music.y = this.mOn.y = vol.y + 32

  var sfx = state.entities.smallFont(state, 'sfx:')
  sfx.anchor.setTo(1, 0.5)
  sfx.scale.setTo(sfx.scale.x*2)
  this.sfxOn = new Btn(state, (this.game.data.sfxOn ? ' on' : ' off'), function() {
    this.game.data.sfxOn = !this.game.data.sfxOn
    this.sfxOn.font.text = this.game.data.sfxOn ? ' on' : ' off'
  }, this)
  this.sfxOn.anchor.setTo(0, 0.5)
  this.sfxOn.x = sfx.right
  sfx.y = this.sfxOn.y = music.y + 32

  var clear = new Btn(state, 'reset', function() {
    this.gui.switchModal('clear')
  }, this)
  clear.y = sfx.y + 32

  var backBtn = new Btn(state, 'back', function() {
    this.gui.switchModal('menu')
  }, this)
  backBtn.y = clear.y + 32

  this.addMultiple([vol, up, v, down, music, this.mOn, sfx, this.sfxOn, clear, backBtn])

  var win = new PhaserNineSlice.NineSlice(state.game, 0, 0, 'sprites', 'window', 24, 24, { top: 8 })
  win.resize(264, 192)
  win.anchor.setTo(0.5, 0)
  win.y = -32
  this.addAt(win, 0)
}


SettingsModal.prototype = Object.create(Modal.prototype)

