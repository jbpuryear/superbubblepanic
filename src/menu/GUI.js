module.exports = GUI


var HowToModal = require('./HowToModal.js')
var MenuModal = require('./MenuModal.js')


function GUI(state) {
  this.modals = {
    howTo: new HowToModal(state, this),
    menu: new MenuModal(state, this),
  }

  var mm = this.modals.menu
  mm.visible = true
  this.currentModal = mm
  mm.y = state.world.height/2 - mm.height/2
}


GUI.prototype.switchModal = function(key) {
  if (this.currentModal)
    this.currentModal.exit()
  this.currentModal = this.modals[key]
  this.modals[key].enter()
}
