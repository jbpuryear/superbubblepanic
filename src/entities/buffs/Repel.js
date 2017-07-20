module.exports = Repel


var Buff = require('./Buff.js')
var dotGravity =  require('../../magic/dotGravity.js')


var TEXTURE = 'repel1'


function Repel(state, data) {
    data.texture = TEXTURE
    Buff.call(this, state, data)
    this.sounds.pickup = 'repel-pickup'
    this.sounds.stop = 'repel-stop'
    this.animations.add('rest',
        Phaser.Animation.generateFrameNames('repel', 1, 4), 5, true)
    this.animations.play('rest')
}


Repel.prototype = Object.create(Buff.prototype)


Repel.prototype.buffProto = {
    duration: 15000,

    start: function() {
        this.targets = []
        this.state.physics.p2.enable(this.sprite)
        this.sprite.animations.stop()
        this.sprite.frameName = 'repel-aura'
        this.sprite.lifespan = 0
        var body = this.sprite.body
        var r = this.target.height*3
        this.r = r
        this.rInner = this.target.height
        var shape = body.setCircle(r)
        body.setCollisionGroup(this.state.platformsCG)
        body.collides(this.state.enemiesCG)
        body.fixedRotation = true
        body.static = true
        shape.sensor = true
        body.onBeginContact.add(this.addTarget, this)
        body.onEndContact.add(this.removeTarget, this)
        this.sprite.height = 8
        this.sprite.width = 8
        this.sprite.alpha = 0.4
        this.state.add.tween(this.sprite)
            .to({width: r, height: r}, 500, Phaser.Easing.Quadratic.In, true)
            .loop()
        this.overFlag = false
    },

    stop: function() {
        this.sprite.destroy()
    },

    update: function() {
        if (this.timeLeft < 800 && !this.overFlag) {
            this.state.playSound(this.sounds.stop, undefined, false)
            this.overFlag = true
        }
        this.sprite.body.x = this.target.world.x
        this.sprite.body.y = this.target.world.y

        this.targets.forEach(function(trgt) {
            var dist = this.sprite.world.distance(trgt.world)
            var angle = this.sprite.world.angle(trgt.world)
            normDist = (dist - trgt.width/2 - this.rInner) / (this.r - this.rInner)
            normDist = Math.max(normDist, 0.0001)
            var mag = 1 / (normDist)
            mag  = this.state.physics.p2.pxm(-mag)
            mag *= trgt.body.mass
            trgt.body.applyForce(
                [mag * Math.cos(angle), mag * Math.sin(angle)],
                trgt.world.x, trgt.world.y)
        }, this)
    },

    addTarget: function(body) {
        var sprite = body.sprite
        for (var i = 0; i < this.targets.length; i++)
            if (sprite === this.targets[i]) return
        this.targets.push(sprite)
    },

    removeTarget: function(body) {
        var sprite = body.sprite
        for (var i = this.targets.length-1; i >= 0; i--)
            if (sprite === this.targets[i]) this.targets.splice(i, 1)
    }
}
