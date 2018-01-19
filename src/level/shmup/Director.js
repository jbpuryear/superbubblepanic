module.exports = Director


var Hydroid = require('../../entities/enemies/Hydroid.js')
var Enemy = require('../../entities/enemies/Enemy.js')


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
  enemy.checkWorldBounds = true
  enemy.update = update
}


function Director(state) {
  this.state = state
  this.finished = false
  this.started = false
  this.script = null
  this.pool = {
    "enemy": state.addEntity({ type: 'enemy',  width: 40*Hydroid.prototype.minWidth }),
    "hex": state.addEntity({ type: 'hex',  width: 40*Hydroid.prototype.minWidth })
  }
  this.pool.enemy.getFirstExists().exists = false
  this.pool.hex.getFirstExists().exists = false

  this.pool.enemy.forEach(initEnemy)
  this.pool.hex.forEach(initEnemy)
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
  },

  spawn: function(type, x, y, width, velx, vely) {
    type = type || 'enemy'
    x = x || 0
    y = y || 0
    width = width || 8
    velx = velx || 0
    vely = vely || 40
    var e = this.pool[type].spawn(x, y, width, velx, vely)
    if (!e) { return }
    e.wasInWorld = false
  }
}

