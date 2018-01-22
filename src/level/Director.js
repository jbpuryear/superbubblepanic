module.exports = Director


var Hydroid = require('../entities/enemies/Hydroid.js')
var Enemy = require('../entities/enemies/Enemy.js')
var Hex = require('../entities/enemies/Hex.js')


function cull(obj) {
  obj.exists = false
  obj.alive = false
  obj.visible = false
}

function update() {
  // Phaser's inWorld wasn't working right, so we do it ourselves.
  Enemy.prototype.update.call(this)
  var x = this.x
  var y = this.y
  var hw = this.width/2
  var inWorld = !(x+hw < 0 || x-hw > this.game.width || y+hw < 0 || y-hw > this.game.height)
  if (this.wasInWorld && !inWorld) { cull(this) }
  this.wasInWorld = inWorld
}

function initEnemy(enemy) {
  enemy.body.removeCollisionGroup(enemy.game.physics.p2.boundsCollisionGroup)
  enemy.body.data.gravityScale = 0
  enemy.checkWorldBounds = true
  enemy.update = update
}


function Director(state) {
  this.state = state
  this.finished = false
  this.started = false
  this.script = null
  this.pool = {
    "enemy": new Hydroid(state, Enemy, 40),
    "hex": new Hydroid(state, Hex, 40)
  }

  this.pool.enemy.forEach(initEnemy)
  this.pool.hex.forEach(function(e) {
    initEnemy(e)
    e.body.removeCollisionGroup(state.platformsCG)
  }, this)
}


Director.prototype = {
  update: function() {
    if (this.finished || !this.started) { return }

    this.script.update(this.state.time.physicsElapsedMS)
    this.finished = this.script.finished
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
    this.finished = false
  },

  spawn: function(type, x, y, width, velx, vely, drop) {
    type = type || 'enemy'
    x = x || 0
    y = y || 0
    width = width || 8
    velx = velx || 0
    vely = vely || 0
    var e = this.pool[type].spawn(x, y, width, velx, vely, drop)
    if (!e) { return null }
    e.wasInWorld = false
    return e
  }
}

