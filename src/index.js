module.exports = Game;


var GameData = require('./GameData.js')
var Boot = require('./boot.js');
var Load = require('./load.js');
var Menu = require('./menu/menu.js');
var LevelSelect = require('./LevelSelect.js');
var Level = require('./level/Level.js');
var ZeroGLevel = require('./level/ZeroGLevel.js');
var RocketLevel = require('./level/RocketLevel.js');
var ShmupLevel = require('./level/shmup/ShmupLevel.js');
var MonsterLevel = require('./level/MonsterLevel.js');
var SpaceBoss = require('./level/SpaceBoss.js');
var FinalBoss = require('./level/FinalBoss.js');
var Arcade = require('./arcade/arcade.js');
var Credits = require('./Credits.js');


function Game() {
    require('./phaserPatch.js')();

    var game = new Phaser.Game(800, 600, undefined,
        undefined, undefined, false, false)

    game.data = new GameData(game)

    game.state.add('Boot', new Boot);
    game.state.add('Load', new Load);
    game.state.add('Level', new Level);
    game.state.add('RocketLevel', new RocketLevel);
    game.state.add('ZeroGLevel', new ZeroGLevel);
    game.state.add('ShmupLevel', new ShmupLevel);
    game.state.add('MonsterLevel', new MonsterLevel);
    game.state.add('SpaceBoss', new SpaceBoss);
    game.state.add('FinalBoss', new FinalBoss);
    game.state.add('Menu', new Menu);
    game.state.add('Arcade', new Arcade);
    game.state.add('LevelSelect', new LevelSelect);
    game.state.add('Credits', new Credits);

    game.state.start('Boot');

    return game;
}

