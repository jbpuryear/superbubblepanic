module.exports = Character


var WALK = Phaser.Animation.generateFrameNames('p1-walk', 1, 4)
var WALK_RATE = 15
var FLY = Phaser.Animation.generateFrameNames('p1-fly', 1, 2)
var FLY_RATE = 100
var FALL = Phaser.Animation.generateFrameNames('p1-fall', 1, 2)
var FALL_RATE = 10
var DIE = Phaser.Animation.generateFrameNames('p1-die', 3, 4)
var DIE_RATE = 4


function Character(state) {
    var character = new Phaser.Sprite(state.game, 0, 0, 'sprites', 'p1-stand')

    character.anchor.setTo(0.5)

    character.animations.add('walk', WALK, WALK_RATE, true)
    character.animations.add('fall', FALL, FALL_RATE, true)
    character.animations.add('fly', FLY, FLY_RATE, true)
    character.animations.add('die', DIE, DIE_RATE, true)

    return character
}
