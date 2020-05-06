module.exports = Hydroid


var MIN_WIDTH = 10


function Hydroid(state, EnemyClass, count) {
  count = count || 70

  Phaser.Group.call(this, state.game)
  state.enemies.add(this)

  var data = { x: 0, y: 0 }

  for (var i = 0; i < count; ++i) {
    var e = this.add(new EnemyClass(state, data))
    e.events.onKilled.add(this.childDeath, this)
  }

  this.updateOnlyExistingChildren = true
}


Hydroid.prototype = Object.create(Phaser.Group.prototype)

Hydroid.prototype.minWidth = MIN_WIDTH


Hydroid.prototype.childDeath = function(enemy) {
  var drop = enemy.drop
  enemy.drop = null
  var dropL
  var dropR
  if (Array.isArray(drop)) {
    dropL = drop[1] || null
    dropR = drop[2] || null
    drop = drop[0] || null
  }
  if (drop && typeof drop.reset === 'function') {
    drop.reset(x, y)
  }

  var width = enemy.width / 2
  var x = enemy.x
  var y = enemy.y
  var vx = enemy.body.velocity.x
  var vy = enemy.body.velocity.y
  var theta = enemy.killTheta

  var mag = Math.sqrt( vx*vx + vy*vy )
  var xOff = Math.cos(theta + Math.PI/2) * width * 1/3
  var yOff = Math.sin(theta + Math.PI/2) * width * 1/3
  var velx = Math.cos(theta + Math.PI/4) * mag
  var vely = Math.sin(theta + Math.PI/4) * mag

  this.spawn(x - xOff, y - yOff, width, vely, -velx, dropL)
  this.spawn(x + xOff, y + yOff, width, velx, vely, dropR)
}


Hydroid.prototype.spawn = function(x, y, width, velx, vely, drop) {
  var enemy = this.getFirstDead()
  if (!enemy || width < MIN_WIDTH) return null
  return enemy.spawn(x, y, width, velx, vely, drop)
}

