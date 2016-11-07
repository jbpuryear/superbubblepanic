var Hydroid = require('./Enemies/Hydroid.js');
var Enemy = require('./Enemies/Enemy.js');

var Gun = require('./Gun.js');
var Bullet = require('./Bullets/Bullet.js');


module.exports = {

    player1: require('./Heroes/Player.js'),


    // Enemies
    //hex: require('./Enemies/Hex.js'),
    enemy: function(state, data, drop) {
        return new Hydroid(state, data, drop, Enemy);
    },
    

    // Buffs
    repel: require('./Buffs/Repel.js'),
    slomo: require('./Buffs/Slomo.js'),


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
            texture: 'gun',
            rate: 300,
            spread: Math.PI/8,
            accuracy: Math.PI/8,
            clips: 8,
            clipSize: 3,
            speedVar: 0.05,
        }, Bullet);
    }
}
