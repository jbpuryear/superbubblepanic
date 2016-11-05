var Boot = require('./boot.js');
var Load = require('./load.js');
var Level = require('./level.js');

//TODO: Change the way pickup works for items. Collision callbacks should be set in the state.
/**
 * Starts Super Bubble Panic!
 * @param {HTMLElement|string} [parent=document.body] The parent element
 *      to hold the game
 */
module.exports = (function() {
    function Game(parent) {
        var game = new Phaser.Game(800, 600);
        game.state.add('Boot', new Boot);
        game.state.add('Load', new Load);
        game.state.add('Level', new Level);
        game.mEntities = require('./entities/mEntities.js');

        game.state.start('Boot');
        return game;
    }
    return Game;
})();
