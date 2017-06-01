var dotGravity = require('./dotGravity.js')


module.exports = Explosion


function Explosion(game, x, y, key, frame) {
    key = key || 'explosion'
    Phaser.Sprite.call(this, game, x, y, key, frame)

    this.state = game.state.getCurrentState()
    game.physics.p2.enable(this)

    this.sounds = {
        explode: this.state.add.sound('explode')
    }

    this.width = this.height = 128
    this.shape = this.body.setCircle(this.width/2)
    this.shape.sensor = true
    var ex = this.animations.add('explode', null, 60, false)
    ex.killOnComplete = true

    this.body.collideWorldBounds = false
    this.body.setCollisionGroup(this.state.bulletsCG)
    this.body.collides(this.state.enemiesCG)
    this.body.onBeginContact.add(this.explode, this)
    game.physics.p2.removeBody(this.body)
}


Explosion.prototype = Object.create(Phaser.Sprite.prototype)


Explosion.prototype.explode = function(body) {
    this.removeNextStep = true
    var trgt = body.sprite
    var theta = this.world.angle(trgt.world)
    trgt.damage(10, theta)
}

Explosion.prototype.kill = function() {
    Phaser.Sprite.prototype.kill.call(this)
    this.state.enemies.recurseAlive(function(enemy) {
        var distance = Math.max(this.world.distance(enemy.world), 1);
        var r = 512;
        if (distance > r) return
        var angle = this.world.angle(enemy.world);
        var d2 = distance*distance;
        var mag = 400 * (1 - distance/r) * this.state.bulletTime
        enemy.body.velocity.x += mag * Math.cos(angle)
        enemy.body.velocity.y += mag * Math.sin(angle)
    }, this)
}


Explosion.prototype.reset = function(x, y, radius) {
    if (radius > 0) {
        this.width = this.height = radius *2
        this.shape.radius = radius
    }
    this.body.addToWorld()
    Phaser.Sprite.prototype.reset.call(this, x, y)
    this.animations.play('explode')
    this.state.playSound(this.sounds.explode)
    this.state.camera.shake(0.015, 400);
}
