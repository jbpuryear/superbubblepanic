module.exports = PlayerCollider


var UNIT_Y = p2.vec2.fromValues(0, 1)


function PlayerCollider(player) {
  this.game = player.game
  this.player = player
  this.body = player.body
  this.ray = new p2.Ray({mode: p2.Ray.CLOSEST, skipBackfaces: true})
  this.res = new p2.RaycastResult()
  this.rayCountH = 3
  this.rayCountV = 2
  this.padding = Phaser.Physics.P2.prototype.pxm(0.5)

  this.rayBounds = { left: 0, right: 0, top: 0, bottom: 0 }
  this.updateRayBounds()

  this.spacingH = (this.rayBounds.top - this.rayBounds.bottom - this.padding) / (this.rayCountH - 1)
  this.spacingV = (this.rayBounds.right - this.rayBounds.left - this.padding) / (this.rayCountV - 1)
  this.maxStandAngle = Math.PI / 6 + 0.0000001
  this.slopeVector = p2.vec2.create()

  this.ray.collisionMask = this.game.state.getCurrentState().platformsCG.mask | this.game.physics.p2.boundsCollisionGroup.mask
  this.player.standing = false
}


PlayerCollider.prototype = {
  update: function() {
    var vec2 = p2.vec2
    var ray = this.ray
    var res = this.res
    var dt = this.game.time.physicsElapsed
    var dx = this.body.vel.mx * dt
    var dy = this.body.vel.my * dt

    this.updateRayBounds()

    if (this.player.playerState.current === this.player.playerState.states.flying) {
      this.player.standing = false
    } else if (this.player.standing) {
      var x
      if (this.slopeVector[1] > 0) {
        x = this.rayBounds.right - this.padding
      } else if (this.slopeVector[1] < 0) {
        x = this.rayBounds.left + this.padding
      } else {
        x = dx > 0 ? this.rayBounds.left + this.padding : this.rayBounds.right - this.padding
      }
      var y = this.rayBounds.bottom + this.padding + 0.1
      vec2.set(ray.from, x, y)
      vec2.set(ray.to, x, y - this.padding - 0.2)
      ray.update()
      if (!this.game.physics.p2.world.raycast(res, ray)) {
        this.player.standing = false
      } else if (this.maxStandAngle < Math.acos(vec2.dot(res.normal, UNIT_Y))) {
        this.player.standing = false
      } else {
        vec2.rotate90cw(this.slopeVector, res.normal)
      }
      res.reset()
    }

    if (this.player.standing) {
      dy = 0
      var v = this.slopeVector
      var p = (dx*v[0] + dy*v[1]) / (v[0]*v[0] + v[1]*v[1])
      dx = p*v[0]
      dy = p*v[1]
    }

    this.collide(this.body.kick.mx, this.body.kick.my, dt)
    this.body.kick.x = 0
    this.body.kick.y = 0
    this.collide(dx, dy, dt)
  },


  translateRayBounds: function(x, y) {
    var b = this.rayBounds
    b.left += x
    b.right += x
    b.top += y
    b.bottom += y
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


PlayerCollider.prototype.collide = (function() {
  var norm = p2.vec2.create()
  return function(dx, dy, dt) {
    var ray = this.ray
    var res = this.res
    var vec2 = p2.vec2
    var world = this.game.physics.p2.world
    var bounds = this.rayBounds

    var j = 0
    while (Math.abs(dt) > 0.0000001 && j++ < 3) {
      if (Math.abs(dx) < 0.0000001 && Math.abs(dy) < 0.0000001) {
        this.body.vel.x = 0
        this.body.vel.y = 0
        break
      }
      this.body.vel.mx = -dx/dt
      this.body.vel.my = -dy/dt
      var dLength = Math.sqrt(dx*dx + dy*dy)
      var sin = dy/dLength
      var cos = dx/dLength
      var pad = this.padding
      var rayLength = dLength + pad
      var dirX = dx >= 0 ? 1 : -1
      var dirY = dy > 0 ? 1 : -1

      var x = bounds.left + pad
      var y = (dirY === 1 ? bounds.top - pad : bounds.bottom + pad)
      var spacing = this.spacingV

      vec2.set(norm, 0, 0)

      if (dy !== 0) {
        for (var i = 0; i < this.rayCountV; i++) {
          vec2.set(ray.from, x, y)
          vec2.set(ray.to, x + rayLength*cos, y + rayLength*sin)
          ray.update()
          if (world.raycast(res, ray)) {
            rayLength = res.getHitDistance(ray)
            vec2.copy(norm, res.normal)
            if (this.maxStandAngle >= Math.acos(vec2.dot(norm, UNIT_Y))) {
              vec2.rotate90cw(this.slopeVector, norm)
              this.player.standing = true
              this.body.vel.y = 0
            }
          }
          res.reset()
          x += spacing
        }
      }

      if (dx !== 0) {
        y = bounds.bottom + pad
        x = (dirX === 1 ? bounds.right - pad : bounds.left + pad)

        for (var i = 0; i < this.rayCountH; i++) {
          vec2.set(ray.from, x, y)
          vec2.set(ray.to, x + rayLength*cos, y + rayLength*sin)
          ray.update()
          if (world.raycast(res, ray)) {
            vec2.copy(norm, res.normal)
            rayLength = res.getHitDistance(ray)
            if (this.maxStandAngle >= Math.acos(vec2.dot(norm, UNIT_Y))) {
              vec2.rotate90cw(this.slopeVector, norm)
              this.player.standing = true
              this.body.vel.y = 0
            }
          }
          res.reset()
          y += spacing
        }
      }

      var tx = (rayLength - pad) * cos
      var ty = (rayLength - pad) * sin
      var tt = dt * ((rayLength - pad) / dLength)
      this.translateRayBounds(tx, ty)
      this.body.data.position[0] += tx
      this.body.data.position[1] += ty
      dx -= tx
      dy -= ty
      dt -= tt
      // Orthagonal projection (dx, dy) onto the line we've collided with.
      if (norm[0] !== 0 || norm[1] !== 0) {
        vec2.rotate90cw(norm, norm)
        var p = (dx*norm[0] + dy*norm[1]) / (norm[0]*norm[0] + norm[1]*norm[1])
        dx = p*norm[0]
        dy = p*norm[1]
      }
    }
  }
})()

