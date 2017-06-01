module.exports = Character


var WALK = [0, 1, 2, 3]
var WALK_RATE = 15
var FLY = [10, 11]
var FLY_RATE = 100
var FALL = [12, 13]
var FALL_RATE = 10
var DIE = [22, 23]
var DIE_RATE = 4


function Character(state) {
    var character = new Phaser.Sprite(state.game, 0, 0, 'player')

    character.anchor.setTo(0.5)

    character.animations.add('walk', WALK, WALK_RATE, true)
    character.animations.add('fall', FALL, FALL_RATE, true)
    character.animations.add('fly', FLY, FLY_RATE, true)
    character.animations.add('die', DIE, DIE_RATE, true)

    return character
}
