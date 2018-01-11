module.exports = explode


var dotGravity = require('./dotGravity.js')

var DAMAGE = 3


function explode(target, source, radius, damage, blast, blastRadius, invert) {
  damage = damage || DAMAGE

  target.forInReach(source, radius, function(enemy) {
    enemy.damage(damage, source.world.angle(enemy))
  })
  dotGravity(target, source, -blast, blastRadius, invert)
  target.game.camera.shake(0.01, 400)
}
