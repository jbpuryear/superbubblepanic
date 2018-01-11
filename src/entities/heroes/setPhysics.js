module.exports = function setPhysics(player) {
  var state = player.state

  player.game.physics.p2.enable(player)
  player.body.setRectangle(player.character.width/2, player.character.height)

  player.body.collideWorldBounds = false
  player.body.kinematic = true
  player.body.fixedRotation = true

  player.body.setMaterial(state.playerMaterial)
  player.body.setCollisionGroup(state.playersCG)
  player.body.collides(state.enemiesCG, player.damage, player)
  player.body.collides([state.itemsCG, state.platformsCG, state.physics.p2.boundsCollisionGroup])
}
