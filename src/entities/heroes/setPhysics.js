module.exports = function setPhysics(player) {
    var state = player.state

    player.game.physics.p2.enable(player)
    player.body.setRectangle(player.character.width/2, player.character.height)

    var groundSensor = player.body.addRectangle(
        player.character.width*2/3, 2, 0, player.character.height/2
    )
    groundSensor.sensor = true

    player.body.onBeginContact.add(function(){
        if(arguments[2] === groundSensor) player.standing++
    }, player)
    player.body.onEndContact.add(function(){
        if(arguments[2] === groundSensor) player.standing--
    }, player)

    player.body.setMaterial(state.playerMaterial);
    player.body.setCollisionGroup(state.playersCG);
    player.body.collides(state.enemiesCG, player.die, player);
    player.body.collides([state.itemsCG, state.platformsCG]);

    player.body.fixedRotation = true
}
