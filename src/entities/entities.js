var Player = require('./heroes/Player.js');
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


module.exports = {

    player1: function(state, data) {
        var k = state.input.keyboard;
        var keys = Phaser.Keyboard;
        var ctlr = {
            up: k.addKey(keys.W),
            left: k.addKey(keys.A),
            right: k.addKey(keys.D),
            shoot: state.input.mousePointer.leftButton,
            position: state.input.mousePointer.position
        };
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
    slomo: require('./buffs/Slomo.js'),
    ears: require('./buffs/Ears.js'),


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
            rate: 300,
            spread: Math.PI/8,
            accuracy: Math.PI/8,
            clips: 8,
            clipSize: 3,
            speedVar: 0.05,
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
        return new Gun(state, {
            x: data.x,
            y: data.y,
            texture: 'gravgun',
            clips: 1,
            clipSize: 1,
        }, Gravity);
    },

    grenade: function(state, data) {
        return new Gun(state, {
            x: data.x,
            y: data.y,
            texture: 'gun',
            clips: 1,
            clipSize: 1,
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
}
