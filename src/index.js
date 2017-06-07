module.exports = Game;


var Boot = require('./boot.js');
var Load = require('./load.js');
var Level = require('./level/Level.js');
var Arcade = require('./arcade/arcade.js');
var Menu = require('./menu.js');


function Game(parent) {
    require('./phaserPatch.js')();

    var game = new Phaser.Game(800, 600, undefined,
        undefined, undefined, false, false)
    game.state.add('Boot', new Boot);
    game.state.add('Load', new Load);
    game.state.add('Level', new Level);
    game.state.add('Menu', new Menu);
    game.state.add('Arcade', new Arcade);
    
    game.state.start('Boot');
    return game;
}
