module.exports = Game;


var Boot = require('./boot.js');
var Load = require('./load.js');
var Level = require('./level.js');


function Game(parent) {
    require('./phaserPatch.js')();

    var game = new Phaser.Game(800, 600);
    game.state.add('Boot', new Boot);
    game.state.add('Load', new Load);
    game.state.add('Level', new Level);
    
    game.state.start('Boot');
    return game;
}
