module.exports = Director


var Attack = require('./Attack.js')
var Hydroid = require('../../entities/enemies/Hydroid.js')


function Director(state, Script) {
  this.state = state
  this.finished = false
  this.attack = new Script(this)
  this.pool = state.addEntity({ type: 'enemy',  width: 40*Hydroid.prototype.minWidth })
  this.pool.getFirstExists().exists = false

  this.pool.forEach(function(enemy) {
    enemy.body.removeCollisionGroup(enemy.game.physics.p2.boundsCollisionGroup)
  })
}


Director.prototype = {
  update: function() {
    var noneExist = true
    for (var i = 0; i < this.pool.children.length; ++i) {
      var e = this.pool.children[i]
      if (e.exists) {
        if (e.top > this.state.game.height) {
          e.exists = false
        } else {
          noneExist = false
        }
      }
    }
    this.attack.update()
    this.finished = this.attack.finished && noneExist
  },

  start: function(idx) {
    idx = idx || 0
    this.attack.start()
  },

  spawn: function(type, x, y, width, velx, vely) {
    x = x || 0
    y = y || 0
    width = width || 8
    velx = velx || 0
    vely = vely || 40
    this.pool.spawn(x, y, width, velx, vely)
  }
}

