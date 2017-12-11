module.exports = Gun


var Item = require('./Item.js')


function Gun(state, data, BulletClass) {
    Item.call(this, state, data)

    this.rate = data.rate || 100
    this.auto = data.auto || false
    this.spread = data.spread || 0
    this.accuracy = data.accuracy || 0
    this.speedMul = data.speedMul || 1
    this.speedVar = data.speedVar || 0
    this.sounds.pickup = data.equipSound || 'reload'
    this.sounds.shot = data.shotSound || 'gunshot'
    this.clipSize = data.clipSize || 3
    this.bulletsPerShot = data.bulletsPerShot || 1

    this.shotThrottle = 0

    this.clip = new Phaser.Group(state.game)

    var bulletTexture = data.bulletTexture

    for (var i = 0; i < this.clipSize * this.bulletsPerShot; ++i) {
        var bullet = new BulletClass(state, 0, 0, bulletTexture)
        this.clip.add(bullet)
    }
}


Gun.prototype = Object.create(Item.prototype)


Object.defineProperty(Gun.prototype, 'available', {
  get: function() {
    return Math.floor(this.clip.countDead()/this.bulletsPerShot)
  }
})


Gun.prototype.pickup = function(_, playerBody) {
    this.lifespan = 0
    Item.prototype.pickup.call(this)
    playerBody.sprite.equip(this)
}


Gun.prototype.fire = function(newShot) {
    if (this.auto || newShot) {

        if (this.shotThrottle > 0 || this.available === 0) return false

        this.shotThrottle = this.rate

        var theta = this.rotation
        var x = this.world.x + (this.width/2 * Math.cos(theta))
        var y = this.world.y + (this.width/2 * Math.sin(theta))

        for (var i = 0; i < this.bulletsPerShot; ++i) {
            var bullet = this.clip.getFirstDead()
            var speedBonus = this.speedMul * (1 + (Math.random()*2 - 1)*this.speedVar)
            var bulletTheta = theta + (this.spread/this.clipSize *i - this.spread/2)
            bulletTheta += (Math.random()*2 - 1)*this.accuracy
            bullet.fire(x, y, bulletTheta, speedBonus)
        }

        var dir = theta > Math.PI/2 || theta < -Math.PI/2 ? 2 : -2
        this.state.throwShell(this.world.x, this.world.y, dir)

        this.state.playSound(this.sounds.shot, 400)
        this.game.camera.shake(0.01, 70)
        return true
    }
    return false
}


Gun.prototype.update = function() {
    if (this.shotThrottle > 0) this.shotThrottle -= this.game.time.physicsElapsedMS
}

