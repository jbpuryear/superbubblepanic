module.exports = FinalBoss


var Level = require('./Level.js')


function FinalBoss() {
}


FinalBoss.prototype = Object.create(Level.prototype)


FinalBoss.prototype.update = function() {
  Level.prototype.update.call(this)
  if (this.won && !this.hasLanded) {
    this.hasLanded = this.p1.standing
    if (this.hasLanded) {
      var ctlr = {
        right: false,
        left: false,
        position: { x: 10000, y: 10000 },
        update: function() {}
      }
      this.p1.playerState.ctlr = ctlr
      var t = 1000
      this.time.events.add(t, function() {
        ctlr.right = true
      }, this)
      this.time.events.add(t += 500, function() {
        ctlr.right = false
      }, this)
      this.time.events.add(t += 500, function() {
        ctlr.left = true
        ctlr.position.x = -ctlr.position.x
      }, this)
      this.time.events.add(t += 1000, function() {
        ctlr.left = false
      }, this)
      this.time.events.add(t += 500, function() {
        ctlr.right = true
        ctlr.position.x = 10000
        var x = this.game.width+20 - this.p1.x
        var t2 = 1000*x/this.p1.speed
        this.add.tween(this.p1.body).to({ x: this.game.width+20 }, t2, null, true)
          .onComplete.addOnce(function() {
            this.camera.onFadeComplete.addOnce(function() {
              this.state.start('Credits')
            }, this)
            this.camera.fade(0xf6eeee, 1000, true)
          }, this)
      }, this)
    }
  }
}


FinalBoss.prototype.win = function() {
  this.hasLanded = false
  if (this.soundtrack)
    this.soundtrack.stop()
  this.camera.flash(0xf6eeee, 2000)
  var bleedSpoof = {world: {x: 0, y: 0}, killTheta: Math.PI/2}
  this.time.events.loop(400, function() { this.camera.flash(0xf6eeee, 150) }, this)
  this.time.events.loop(150, function() {
    bleedSpoof.world.x = Math.random() * this.game.width
    this.bleed(bleedSpoof)
    this.explode(Math.random()*this.game.width,
      Math.random()*this.game.height, Math.random()*160 + 40)
  }, this)
}

