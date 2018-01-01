module.exports = Director


var Hydroid = require('../../entities/enemies/Hydroid.js')


function Director(state) {
  this.state = state
  this.finished = false
  this.started = false
  this.script = null
  this.pool = state.addEntity({ type: 'enemy',  width: 40*Hydroid.prototype.minWidth })
  this.pool.getFirstExists().exists = false

  function cull(obj) {
    obj.exists = false
  }

  this.pool.forEach(function(enemy) {
    enemy.body.removeCollisionGroup(enemy.game.physics.p2.boundsCollisionGroup)
    enemy.checkWorldBounds = true
    enemy.events.onOutOfBounds.add(cull)
  })
}


Director.prototype = {
  update: function() {
    if (this.finished || !this.started) { return }

    if (this.script.finished) {
      var noneExist = true
      for (var i = 0; i < this.pool.children.length; ++i) {
        if (this.pool.children[i].exists) {
          noneExist = false
        }
      }
      this.finished = noneExist
      return
    }

    this.script.update(this.state.time.physicsElapsedMS)
  },

  load: function(script) {
    this.script = script
  },

  start: function(idx) {
    idx = idx || 0
    if (!this.script || this.script.length <= idx) {
      this.finished = true
      return false
    }
    this.script.start(idx)
    this.started = true
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

