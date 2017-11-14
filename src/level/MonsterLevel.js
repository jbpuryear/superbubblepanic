module.exports = MonsterLevel


var Level = require('./Level.js')


function MonsterLevel() {

}


MonsterLevel.prototype = Object.create(Level.prototype)

MonsterLevel.prototype.tileset = 'living-tissue-tileset'



var WIDTH = 450
var HEIGHT = 300
var CAM_PAD = 40
var X_CLAMP = WIDTH - CAM_PAD
var Y_CLAMP = HEIGHT - CAM_PAD
var X_FOCUS = (WIDTH/2 - CAM_PAD) / X_CLAMP
var Y_FOCUS = (HEIGHT/2 - CAM_PAD) / Y_CLAMP


MonsterLevel.prototype.create = function() {
  var worldWidth = this.map.widthInPixels
  var worldHeight = this.map.heightInPixels
  var bg = this.add.tileSprite(0, 0, worldWidth, worldHeight, 'living-tissue')
  Level.prototype.create.apply(this, arguments)
  this.background.destroy()
  this.background = bg

  var p1 = this.p1 = this.players.children[0]

  this.camera.lerp.setTo(0.1)
  this.camera.bounds = this.world.bounds
  this.reticule.follow(p1, X_CLAMP, Y_CLAMP)
}


MonsterLevel.prototype.update = function() {
  Level.prototype.update.apply(this, arguments)
  this.background.tilePosition.x = this.camera.x/5
  this.background.tilePosition.y = this.camera.y/5

  var xMid = (this.reticule.x - this.p1.world.x) * X_FOCUS + this.p1.world.x
  var yMid = (this.reticule.y - this.p1.world.y) * Y_FOCUS + this.p1.world.y
  var dx = (xMid - (this.camera.x+this.camera.width/2)) * 0.1 + this.camera.x+this.camera.width/2
  var dy = (yMid - (this.camera.y+this.camera.height/2)) * 0.1 + this.camera.y+this.camera.height/2
  this.camera.focusOnXY(dx, dy)
}


MonsterLevel.prototype.setSize = function() {
  this.scale.setGameSize(WIDTH, HEIGHT)
}

