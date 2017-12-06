module.exports = Character


var WALK = Phaser.Animation.generateFrameNames('p1-walk', 1, 3)
var WALK_RATE = 12
var FLY = Phaser.Animation.generateFrameNames('p1-fly', 1, 2)
var FLY_RATE = 100
var FALL = Phaser.Animation.generateFrameNames('p1-fall', 1, 2)
var FALL_RATE = 10
var FALL_SLOW = ['p1-fall1']
var FALL_RATE = 10
var DIE = Phaser.Animation.generateFrameNames('p1-die', 3, 4)
var DIE_RATE = 4


function Character(state) {
    var character = new Phaser.Sprite(state.game, 0, 0, 'sprites', 'p1-stand')

    character.anchor.setTo(0.5)

    character.animations.add('walk', WALK, WALK_RATE, true)
    character.animations.add('fall', FALL, FALL_RATE, true)
    character.animations.add('fall-slow', FALL_SLOW, 1, true)
    character.animations.add('fly', FLY, FLY_RATE, true)
    character.animations.add('die', DIE, DIE_RATE, true)
    character.animations.add('idle', ['p1-stand'], 1, true)
    character.animations.add('stun', ['p1-die1'], 1, true)
    character.animations.add('shoot', ['p1-shoot'], 1, true)

    return character
}
