var Player = require('./heroes/Player.js')
var DefaultCtlr = require('./heroes/DefaultCtlr')
var SeekBoss = require('./enemies/SeekBoss.js')
var Gun = require('./Gun.js')
var Bullet = require('./Bullet.js')
var Trigger = require('./Trigger.js')
var SmallFont = require('./SmallFont.js')


module.exports = {
  smallFont: SmallFont,

  player1: function(state, data) {
    var ctlr = new DefaultCtlr(state)
    return new Player(state, data, ctlr)
  },


  // Enemies
  enemy: function(state, data, drop) {
    state.spawn(data.type, data.x, data.y, data.width, data.properties.velx, data.properties.vely, drop)
  },

  hex: function(state, data, drop) {
    state.spawn(data.type, data.x, data.y, data.width, data.properties.velx, data.properties.vely, drop)
  },

  seeker: function(state, data, drop) {
    state.spawn(data.type, data.x, data.y, data.width, data.properties.velx, data.properties.vely, drop)
  },
    
  seekboss: SeekBoss,


  // Buffs
  repel: require('./buffs/Repel.js'),
  shield: require('./buffs/Shield.js'),
  shoes: require('./buffs/Shoes.js'),
  slomo: require('./buffs/Slomo.js'),


  // Guns
  pistol: function(state, data) {
    return new Gun(state, {
      x: data.x,
      y: data.y,
      texture: 'gun',
      rate: 400,
      bulletsPerShot: 1,
      clipSize: 2,
    }, Bullet)
  },

  dblPistol: function(state, data) {
    return new Gun(state, {
      x: data.x,
      y: data.y,
      texture: 'dbl-pistol',
      rate: 200,
      bulletsPerShot: 1,
      clipSize: 4,
      accuracy: Math.PI/48,
    }, Bullet)
  },

  shotgun: function(state, data) {
    return new Gun(state, {
      x: data.x,
      y: data.y,
      texture: 'shotgun',
      rate: 800,
      spread: Math.PI/18,
      accuracy: Math.PI/54,
      bulletTexture: 'pellet',
      bulletsPerShot: 5,
      clipSize: 2,
      speedVar: 0.1,
      shotSound: 'shotgun'
    }, Bullet)
  },

  smg: function(state, data) {
    return new Gun(state, {
      x: data.x,
      y: data.y,
      texture: 'smg',
      auto: true,
      throttle: 100,
      rate: 100,
      accuracy: Math.PI/16,
      bulletsPerShot: 1,
      clipSize: 12,
    }, Bullet)
  },


  // Misc
  trigger: function(state, data) {
    return new Trigger(state, data)
  },


  rocket: function(state, data) {
    var sprite = state.make.sprite(data.x, data.y, 'sprites', 'rocket')
    sprite.anchor.setTo(0.5)
    state.bgItems.add(sprite)
    state.rocket = sprite
  }
}
