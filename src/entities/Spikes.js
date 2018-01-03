module.exports = Spikes


function Spikes(state, data) {
  Phaser.Sprite.call(this, state.game, data.x, data.y)

  this.state = state

  state.world.addChild(this)
  this.width = data.width
  this.height = data.height
  state.physics.p2.enable(this)
  this.body.static = true
  this.body.setCollisionGroup(state.bulletsCG)
  this.body.collides(state.enemiesCG)
  this.body.onBeginContact.add(this.stab, this)
}


Spikes.prototype = Object.create(Phaser.Sprite.prototype)


Spikes.prototype.update = function() {
  var p1 = this.state.p1
  if (p1.y + p1.character.height/2 < this.top
      || p1.y - p1.character.height/2 > this.bottom
      || p1.x + p1.character.width/6 < this.left
      || p1.x - p1.character.width/6 > this.right) {
    return
  }
  this.stab(p1.body)
}


Spikes.prototype.stab = function(target) {
  if (typeof target.sprite.damage === 'function') { target.sprite.damage(null, this.body) }
}

