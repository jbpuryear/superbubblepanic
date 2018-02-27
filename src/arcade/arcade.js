module.exports = Arcade


var Level = require('../level/Level.js')
var SETTINGS = ['desert']

function Arcade() {
  Level.call(this)
}


Arcade.prototype = Object.create(Level.prototype)

Arcade.prototype.init = function() {
  Level.prototype.init.call(this, '_arcade')
}

Arcade.prototype.create = function() {
  var setting = Phaser.ArrayUtils.getRandomItem(SETTINGS)
  this.map.properties = this.map.properties || {}
  this.map.properties.setting = setting

  Level.prototype.create.call(this)

  var hsMod = this.gameOverScreen.hsMod = this.add.group()
  var character = hsMod.create(0, 0, 'sprites', 'p1-victory')
  character.anchor.setTo(0, 0.5)
  character.scale.setTo(4)
  var hs = hsMod.hs = this.entities.smallFont(this, 'New High Score!')
  hs.anchor.setTo(0, 0.5)
  hs.scale.setTo(2)
  hs.x = character.width + 5
  hs.y = 0
  hsMod.addChild(hs)
  hsMod.x = -hsMod.width/2
  hsMod.y = 0
  this.gameOverScreen.addChild(hsMod)
  this.gameOverScreen.hsMod = hsMod

  this.maxTime = 20000
  this.timer = this.maxTime
  this.level = 1
  this.maxEnemyWidth = 100
  this.nextDrop = 5 + Math.floor(Math.random() * 20)

  this.enemyConfig = require('./enemyConfig.js')()
  this.enemyChance = this.enemyConfig.reduce(function(sum, enemy) {
    return sum + enemy.chance
  }, 0)
  this.itemConfig = require('./itemConfig.js')()
  this.itemChance = this.itemConfig.reduce(function(sum, item) {
    return sum + item.chance
  }, 0)

  this._score = 0
  this.score = this.entities.smallFont(this, this._score + '')
  this.score.anchor.setTo(1, 0)
  this.score.x = this.game.width * 0.98
  this.score.y = this.game.height * 0.03
  this.hud.add(this.score)

  for (var type in this.enemyPools) {
    var pool = this.enemyPools[type].children
    for (var i = 0; i < pool.length; ++i) {
      pool[i].events.onKilled.add(this.getDrop, this)
    }
  }

  this.generatEnemy()
}


Arcade.prototype.update = function() {
  Level.prototype.update.call(this)

  this.timer -= this.time.physicsElapsedMS
  if (this.timer < 0) this.generatEnemy()
  var noEnemy = true
  for (var i = 0; i < this.enemyConfig.length; i++) {
    if (this.enemyPools[this.enemyConfig[i].type].getFirstAlive()) {
      noEnemy = false
      break
    }
  }
  if (noEnemy) { this.timer = Math.min(this.timer, 400) }
}


Arcade.prototype.gameOver = function() {
  Level.prototype.gameOver.call(this)

  var hsMod = this.gameOverScreen.hsMod
  var x = hsMod.x
  hsMod.x = this.game.width + 20
  if (this.game.data.checkScore(this._score)) {
    this.time.events.add(800, function() {
      this.gameOverScreen.hsMod.hs.font.text = 'New High Score:\n\n' + this._score
      this.playSound('victory-jingle', undefined, undefined, true)
      this.gameOverScreen.hsMod.x = x
      this.gameOverScreen.addChild(this.frag)
      this.gameOverScreen.addChild(this.glass)
      this.time.events.loop(10, function() { hsMod.hs.tint = (hsMod.hs.tint + 10) % 0xffffff })
      this.time.events.loop(200, function() {
        this.frag.x = Math.random() * this.game.width - this.game.width/2
        this.frag.y = Math.random() * this.game.height - this.game.height/2
        this.frag.explode(1000, 5)
        this.glass.x = Math.random() * this.game.width - this.game.width/2
        this.glass.y = Math.random() * this.game.height - this.game.height/2
        this.glass.explode(1000, 10)
      }, this)
    }, this)
  }    
}


Arcade.prototype.exit = function() {
  this.state.start('Menu')
}


Arcade.prototype.winCondition = function() {
  return false
}


Arcade.prototype.generatEnemy = function() {
  var width = (Math.random() * this.maxEnemyWidth + this.maxEnemyWidth)/2
  var x = Math.random() * (this.world.width - width - 10) + width/2 + 5
  var y = -width/2
  var roll = Math.floor(Math.random() * (Math.min(this.level, this.enemyChance)))
  for (var i = 0, acc = 0; i < this.enemyConfig.length; i++) {
    acc += this.enemyConfig[i].chance
    if (roll < acc) {
      var spawnData = this.enemyConfig[i]
      break
    }
  }
  var enemy = this.enemyPools[spawnData.type].spawn(x, y, width)

  if (!enemy) return

  this.maxEnemyWidth = Math.min(this.maxEnemyWidth + 4, 256)

  enemy.body.velocity.x = spawnData.velx * this.bulletTime
  enemy.body.velocity.y = spawnData.vely * this.bulletTime

  this.maxTime *= 0.98
  this.timer = this.maxTime
  this.level++

  enemy.alpha = 0.7
  var body = this.physics.p2.removeBody(enemy.body)
  var self = this
  this.add.tween(body).to( {y: enemy.height/2 + 2}, 1500, 'Back.easeInOut', true)
    .onComplete.addOnce(function() {
      self.physics.p2.addBody(body)
      enemy.alpha = 1
    })
}

Arcade.prototype.getDrop = function(enemy) {
  this._score += Math.ceil(enemy.width) * 10
  this.score.font.text = '' + this._score

  if (--this.nextDrop !== 0) return null
  this.nextDrop = 5 + Math.floor(Math.random() * 20)

  var roll = Math.floor(Math.random() * this.itemChance)
  for (var i = 0, acc = 0; i < this.itemConfig.length; i++) {
    acc += this.itemConfig[i].chance
    if (roll < acc) {
      var type = this.itemConfig[i].type
      var drop = this.addEntity({x: 0, y: 0, type: type})
      if (type === 'shoes') {
        this.itemChance -= this.itemConfig[i].chance
        this.itemConfig[i].chance = 0
      }
      drop.reset(enemy.x, enemy.y)
      return drop
    }
  }
}
