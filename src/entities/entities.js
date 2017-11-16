var Player = require('./heroes/Player.js');
var DefaultCtlr = require('./heroes/DefaultCtlr');

var Hydroid = require('./enemies/Hydroid.js');
var Enemy = require('./enemies/Enemy.js');
var Hex = require('./enemies/Hex.js');
var Seeker = require('./enemies/Seeker.js');
var SeekBoss = require('./enemies/SeekBoss.js');

var Gun = require('./Gun.js');
var Bullet = require('./bullets/Bullet.js');
var Gravity = require('./bullets/Gravity.js');
var Grenade = require('./bullets/Grenade.js');
var Bouncy = require('./bullets/Bouncy');

var Trigger = require('./Trigger.js');

var SmallFont = require('./SmallFont.js')


module.exports = {
    smallFont: SmallFont,

    player1: function(state, data) {
        var ctlr = new DefaultCtlr(state);
        return new Player(state, data, ctlr);
    },


    // Enemies
    enemy: function(state, data, drop) {
        return new Hydroid(state, data, drop, Enemy);
    },

    hex: function(state, data, drop) {
        return new Hydroid(state, data, drop, Hex);
    },

    seeker: function(state, data, drop) {
        return new Hydroid(state, data, drop, Seeker);
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
            rate: 100,
            clips: 1,
            clipSize: 3,
        }, Bullet);
    },

    spread: function(state, data) {
        return new Gun(state, {
            x: data.x,
            y: data.y,
            texture: 'gun',
            rate: 500,
            spread: Math.PI/4,
            clips: 6,
            clipSize: 3
        }, Bullet);
    }, 

    shotgun: function(state, data) {
        return new Gun(state, {
            x: data.x,
            y: data.y,
            texture: 'shotgun',
            rate: 1000,
            spread: Math.PI/18,
            accuracy: Math.PI/54,
            bulletTexture: 'pellet',
            clips: 5,
            clipSize: 3,
            speedVar: 0.1,
            shotSound: 'shotgun'
        }, Bullet);
    },

    smg: function(state, data) {
        return new Gun(state, {
            x: data.x,
            y: data.y,
            texture: 'smg',
            auto: true,
            rate: 100,
            accuracy: Math.PI/16,
            clips: 1,
            clipSize: 30,
        }, Bullet);
    },


    gravgun: function(state, data) {
        var gun = new Gun(state, {
            x: data.x,
            y: data.y,
            texture: 'gravgun1',
            clips: 1,
            clipSize: 1,
        }, Gravity);
        gun.animations.add('rest',
            Phaser.Animation.generateFrameNames('gravgun', 1, 4), 6, true)
            .play()
        return gun
    },

    grenade: function(state, data) {
        return new Gun(state, {
            x: data.x,
            y: data.y,
            texture: 'grenade-launcher',
            clips: 1,
            clipSize: 1,
            shotSound: 'launch'
        }, Grenade);
    },

    shotgrenade: function(state, data) {
        return new Gun(state, {
            x: data.x,
            y: data.y,
            texture: 'gun',
            rate: 1000,
            spread: Math.PI/8,
            accuracy: Math.PI/8,
            clips: 8,
            clipSize: 3,
            speedVar: 0.05,
        }, Grenade);
    },

    bouncy: function(state, data) {
        return new Gun(state, {
            x: data.x,
            y: data.y,
            texture: 'gun',
            rate: 100,
            clips: 1,
            clipSize: 3,
        }, Bouncy);
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
