module.exports = PlayerCollider


function PlayerCollider(player) {
    this.game = player.game
    this.body = player.body
    this.ray = new p2.Ray({mode: p2.Ray.CLOSEST})
    this.res = new p2.RaycastResult()
    this.padding = Phaser.Physics.P2.prototype.pxm(2)
    this.rayCountH = 3
    this.rayCountV = 2
    this.dx = 0
    this.dy = 0

    this.rayBounds = { left: 0, right: 0, top: 0, bottom: 0 }
    this.updateRayBounds()

    this.spacingH = (this.rayBounds.top - this.rayBounds.bottom) / (this.rayCountH - 1)
    this.spacingV = (this.rayBounds.right - this.rayBounds.left) / (this.rayCountV - 1)
}

PlayerCollider.prototype = {
    update: function() {
        var dt = this.game.time.physicsElapsed
        this.dx = this.body.vel.mx * dt
        this.dy = this.body.vel.my * dt

        this.updateRayBounds()
        this.ray.collisionMask = this.body.getCollisionMask()

        this.collide()

        this.body.data.position[0] += this.dx
        this.body.data.position[1] += this.dy
    },


    collide: function() {
        var vec2 = p2.vec2
        var world = this.game.physics.p2.world
        var bounds = this.rayBounds
        var ray = this.ray
        var res = this.res
        var pad = this.padding

        var spacing = this.spacingV
        var dir = this.dy >= 0 ? 1 : -1
        var x = bounds.left
        var y = dir === 1 ? bounds.top : bounds.bottom
        var rayLength = Math.abs(this.dy) + pad

        for (var i = 0; i < this.rayCountV; i++) {
            vec2.set(ray.from, x, y)
            vec2.set(ray.to, x, y + dir*rayLength)
            ray.update()
            res.reset()

            if (world.raycast(res, ray)) {
                this.body.vel.y = 0
                rayLength = res.getHitDistance(ray)
            }
            x += spacing
        }
        this.dy = dir * (rayLength - pad)

        if (this.body.vel.x === 0) return

        dir = this.dx >= 0 ? 1 : -1
        x = dir === 1 ? bounds.right : bounds.left
        y = bounds.bottom
        spacing = this.spacingH
        rayLength = Math.abs(this.dx) + pad

        for (var i = 0; i < this.rayCountH; i++) {
            vec2.set(ray.from, x, y)
            vec2.set(ray.to, x + dir*rayLength, y)
            ray.update()
            
            res.reset()
            if (world.raycast(res, ray)) {
                this.body.vel.x = 0
                rayLength = res.getHitDistance(ray)
            }
            y += spacing
        }
        this.dx = dir * (rayLength - pad)
    },


    updateRayBounds: function() {
        var aabb = this.body.data.getAABB()
        var b = this.rayBounds
        var pad = this.padding

        b.left = aabb.lowerBound[0] + pad
        b.right = aabb.upperBound[0] - pad
        b.top = aabb.upperBound[1] - pad
        b.bottom = aabb.lowerBound[1] + pad
    }
}


PlayerCollider.prototype.debugRay = (function() {
    var line = new Phaser.Line()
    return function(ray) {
        var mpxi = Phaser.Physics.P2.prototype.mpxi
        line.start.x = mpxi(ray.from[0])
        line.start.y = mpxi(ray.from[1])
        line.end.x = mpxi(ray.to[0])
        line.end.y = mpxi(ray.to[1])
        this.game.debug.geom(line)
    }
})()
