module.exports = Game;


var Boot = require('./boot.js');
var Load = require('./load.js');
var Level = require('./level/Level.js');
var Arcade = require('./arcade/arcade.js');
var Menu = require('./menu/menu.js');


function Game(parent) {
    require('./phaserPatch.js')();

    var game = new Phaser.Game(800, 600, undefined,
        undefined, undefined, false, false)

    game.data = new GameData()

    game.state.add('Boot', new Boot);
    game.state.add('Load', new Load);
    game.state.add('Level', new Level);
    game.state.add('Menu', new Menu);
    game.state.add('Arcade', new Arcade);
    
    game.state.start('Boot');
    return game;
}


function GameData() {
    var hiScore
    try {
        hiScore = localStorage.getItem('hiScore')
        this.localStore = true
    } catch (e) {
        this.localStore = false
    }

    if (!hiScore) hiScore = 0

    this._hiScore = hiScore
}


GameData.prototype = {
    checkScore: function(score) {
        if (score > this._hiScore) {
            this._hiScore = score
            if (this.localStore) localStorage.setItem('hiScore', score)
            return true
        }
        return false
    },

    getHiScore: function() {
        return this._hiScore
    },
}


// TODO: Do we want a top 10 scoreboard? Local or server?
/*
function GameData() {
    var hiScores
    try {
        hiScores = localStorage.getItem('hiScores')
    } catch (e) {
    }

    if (!hiScores) {
        hiScores = []
        for (var i = 0; i < 10; i++)
            hiScores.push({name: 'AAA', score: 0})
    }

    this.hiScores = hiScores
    this.newHiScores = []

    this.fetchHiScores()
}


GameData.prototype = {
    checkScore: function(score) {
        this.newHiScores.push(score)
        this.scrubNewScores()
    },

    fetchHiScores: function() {
    },

    getHiScores: function() {
        return this.hiScores
    },

    scrubNewScores: function() {
        this.newHiScores.sort(function(a, b) { return b - a })

        var newHSi = 0
        var HSi = 0

        for (var i = 0; i < 10; i++) {
            this.newHiScores[newHSi] > this.hiScores[HSi].score ?
                newHSi++
                : HSi++
        }

        this.newHiScores.splice(newHSi)
    },

    get scoresPending() {
        return this.newHiScores.length > 0
    }
}
*/
