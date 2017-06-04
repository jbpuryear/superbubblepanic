module.exports = Player


var PlayerStateMachine = require('./PlayerStateMachine.js')
var PlayerSounds = require('./PlayerSounds.js')
var PlayerFX = require('./PlayerFX.js')
var Character = require('./Character.js')
var setPhysics = require('./setPhysics.js')

var DEFAULT_WEAPON = 'pistol'
var SPEED = 100


function Player(state, data, ctlr) {
    var game = state.game
    var x = data.x || 0
    var y = data.y || 0
    var weapon = state.parseDrop(data.properties.weapon || DEFAULT_WEAPON)

    Phaser.Sprite.call(this, game, x, y)

    this.state = state

    this.speedBonus = 1
    this.standing = 0

    this.character = new Character(state)
    this.playerState = new PlayerStateMachine(this, ctlr)
    this.sounds = new PlayerSounds(state)
    this.fx = new PlayerFX(state)

    setPhysics(this)

    this.addChild(this.character)

    weapon.exists = true
    weapon.pickup(null, this.body)

    state.players.add(this)
}


Player.prototype = Object.create(Phaser.Sprite.prototype)

Player.prototype.maxFuel = 2000

Object.defineProperty(Player.prototype, 'speed', {
    get: function() {
        return this.speedBonus * SPEED
    }
})


Object.defineProperty(Player.prototype, 'facing', {
    set: function(dir) {
        this.character.scale.x = dir
        if (this.weapon) {
            if (dir === -1) {
                this.weapon.scale.y = -1
                this.removeChild(this.weapon)
                this.addChild(this.weapon)
            } else {
                this.weapon.scale.y = 1
                this.removeChild(this.character)
                this.addChild(this.character)
            }
        }
    },

    get: function () {
        return this.character.scale.x > 0 ? 1 : -1
    }
})


Player.prototype.damage = function(_, enemy) {
    var theta = this.world.angle(enemy.sprite)
    this.facing = theta > Math.PI/2 || theta < -Math.PI/2 ? -1 : 1
    this.health -= 1
    if (this.health <= 0) this.kill()
    else this.playerState.change('stunned')
}


Player.prototype.equip = function(weapon) {
    if (this.weapon instanceof Phaser.Sprite) this.weapon.destroy()
    weapon.anchor.setTo(0, 0.5)
    // abs because character is flipped by setting scale to -1.
    weapon.pivot.setTo(-Math.abs(this.character.width/8), 0)
    this.weapon = weapon
    this.addChild(weapon)
}


Player.prototype.kill = function(_, enemy) {
    this.playerState.change('dead')
}


Player.prototype.update = function() {
    this.playerState.update()
}
