module.exports = GameData


var mapData = require('../assets/levels.json')
var levels = mapData.levels


function GameData(game) {
  this.game = game
  this.hiScore = 0
  this.lastCompleted = -1

  this.load()
}


GameData.prototype = {
  mapStart: mapData.start,
  levels: levels,
  _musicOn: true,
  sfxOn: true,


  get musicOn() {
    return this._musicOn
  },

  set musicOn(val) {
    this._musicOn = !!val
    var state = this.game.state.getCurrentState()
    if (!this._musicOn) {
      if (state.soundtrack && typeof state.soundtrack.stop === 'function') {
        state.soundtrack.stop()
      }
    } else {
      if (state.soundtrack && typeof state.soundtrack.play === 'function') {
        state.soundtrack.play('loop')
      }
    }
  },



  clear: function() {
    this.hiScore = 0
    this.lastCompleted = -1
    return this.save()
  },


  load: function() {
    try {
      this.hiScore = localStorage.getItem('hiScore') || 0
      this.lastCompleted = localStorage.getItem('lastCompleted') || -1
      this.lastCompleted = Math.min(this.levels.length - 1, this.lastCompleted)
    } catch(e) {
      this.hiScore = 0
      this.lastCompleted = -1
    }
  },


  save: function() {
    try {
      localStorage.setItem('hiScore', this.hiScore)
      localStorage.setItem('lastCompleted', this.lastCompleted)
    } catch(e) {
      return false
    }
    return true
  },


  checkScore: function(score) {
    if (score > this.hiScore) {
      this.hiScore = score
      this.save()
      return true
    }
    return false
  },


  checkWin: function(key) {
    var id = this.getLevelIndex(key)
    this.lastCompleted = Math.max(id, this.lastCompleted)
    this.save()
  },


  getLevelIndex: function(key) {
    for (var i = 0; i < this.levels.length; i++) {
      if (this.levels[i].key === key) return i
    }
    return -1
  },


  getLevelKey: function(index) {
    return (index >= 0 && index < this.levels.length) ? this.levels[index].key : null
  }
}

