module.exports = Hydroid


var MIN_WIDTH = 10


function Hydroid(state, data, drop, EnemyClass) {
    Phaser.Group.call(this, state.game)
    state.enemies.add(this)

    var w = data.width
    if (w < MIN_WIDTH) return

    var i = Math.ceil(w/MIN_WIDTH) + 1
    for (; i>0; i--) this.add(new EnemyClass(state, data))

    this.forEach(function(enemy) {
        enemy.events.onKilled.add(this.childDeath, this)
    }, this)

    this.spawn(data.x, data.y, data.width, data.properties.velx,
            data.properties.vely, drop)
}


Hydroid.prototype = Object.create(Phaser.Group.prototype)

Hydroid.prototype.minWidth = MIN_WIDTH


Hydroid.prototype.childDeath = function(enemy) {
    var drop = enemy.drop
    enemy.drop = null
    var dropL = null, dropR = null
    if (Array.isArray(drop)) {
        dropL = drop[1] || null
        dropR = drop[2] || null
        drop = drop[0] || null
    }
    if (drop && typeof drop.reset === 'function') {
        drop.reset(x, y)
    }

    var width = enemy.width * 2/3
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

    this.spawn(x + xOff, y + yOff, width, velx, vely, dropL)
    this.spawn(x - xOff, y - yOff, width, vely, -velx, dropL)
}


Hydroid.prototype.spawn = function(x, y, width, velx, vely, drop) {
    var enemy = this.getFirstDead()
    if (!enemy || width < MIN_WIDTH) return null
    return enemy.spawn(x, y, width, velx, vely, drop)
}
