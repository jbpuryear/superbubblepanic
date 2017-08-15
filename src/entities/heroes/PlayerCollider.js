module.exports = PlayerCollider


function PlayerCollider(player) {
    this.game = player.game
    this.body = player.body
    this.ray = new p2.Ray({mode: p2.Ray.CLOSEST, skipBackfaces: true})
    this.res = new p2.RaycastResult()
    this.rayCountH = 3
    this.rayCountV = 2
    this.padding = Phaser.Physics.P2.prototype.pxm(1)
    this.rayBounds = { left: 0, right: 0, top: 0, bottom: 0 }
    this.dx = 0
    this.dy = 0

    this.updateRayBounds()
}

PlayerCollider.prototype = {
    update: function() {
        var dt = this.game.time.physicsElapsed
        var dx = this.body.vel.mx * dt
        var dy = this.body.vel.my * dt

        this.updateRayBounds()
        this.ray.collisionMask = this.body.getCollisionMask()

        this.collide(dx, dy)
    },


    collide: function() {
        var vec2 = p2.vec2
        var world = this.game.physics.p2.world
        var bounds = this.rayBounds
        var ray = this.ray
        var res = this.res
        var dLength = Math.sqrt(dx*dx + dy*dy)
        var sin = dy/dLength
        var cos = dx/dLength
        var pad = this.padding
        var padX = pad * cos
        var padY = pad * sin
        var rayLength = Math.sqrt( (dx+padX)*(dx+padX) + (dy+padY)*(dy+padY) )
        var dirX = dx >= 0 ? 1 : -1
        var dirY = dy > 0 ? 1 : -1

        var x = Math.max(bounds.left - padX, bounds.left + pad)
        var xMax = Math.min(bounds.right - padX, bounds.right - pad)
        var spacing = (xMax - x) / (this.rayCountV - 1)
        var y = (dirY === 1 ? bounds.top : bounds.bottom) - padY

        if (dy !== 0) {
            for (var i = 0; i < this.rayCountV; i++) {
                vec2.set(ray.from, x, y)
                vec2.set(ray.to, x + rayLength*cos, y + rayLength*sin)
                ray.update()
                res.reset()
                if (world.raycast(res, ray)) {
                    this.body.vel.x = 0
                    this.body.vel.y = 0
                    rayLength = res.getHitDistance(ray)
                }
                x += spacing
            }
        }

        if (dx !== 0) {
            y = Math.max(bounds.bottom - padY, bounds.bottom + pad)
            var yMax = Math.min(bounds.top - padX, bounds.top - pad)
            spacing = (yMax - y) / (this.rayCountH - 1)
            x = (dirX === 1 ? bounds.right : bounds.left) - padX

            for (var i = 0; i < this.rayCountH; i++) {
                vec2.set(ray.from, x, y)
                vec2.set(ray.to, x + rayLength*cos, y + rayLength*sin)
                ray.update()
                res.reset()
                if (world.raycast(res, ray)) {
                    this.body.vel.x = 0
                    this.body.vel.y = 0
                    rayLength = res.getHitDistance(ray)
                }
                y += spacing
            }
        }

        this.body.data.position[0] += rayLength*cos - padX
        this.body.data.position[1] += rayLength*cos - padY
    },


    updateRayBounds: function() {
        var aabb = this.body.data.getAABB()
        var b = this.rayBounds
        b.left = aabb.lowerBound[0]
        b.right = aabb.upperBound[0]
        b.top = aabb.upperBound[1]
        b.bottom = aabb.lowerBound[1]
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

