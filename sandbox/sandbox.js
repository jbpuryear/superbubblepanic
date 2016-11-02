window.onload = function() {

var game = SBP();
var entities = require('../src/entities/mEntities.js');
var spawn = require('../src/entities/entities.js');

function make() {
    var data = {
        type: this.value,
        x: 450,
        y: 70
    };
    if (this.id === 'enemies') {
        data.width = 30;
        data.height = 30;
        data.properties = {};
    }
    spawn(game.state.states.Level, data);
    this.value = '';
}

for (sublist in entities) {
    console.log(sublist);
    var select = document.getElementById(sublist);
    if (select) {
        for (key in entities[sublist]) {
            var option = document.createElement("option");
            option.value = key;
            option.text = key;
            select.add(option);
        }
        select.value = '';
        select.onchange = make;
    }
}

document.getElementById('hitToggle').onclick = function() {
    var state = game.state.states.Level;
    var p1 = state.players.children[0];
    p1.body.clearCollision();
    p1.collideWorldBounds = true;
    p1.body.setCollisionGroup(state.playersCG);
    p1.body.collides([state.itemsCG, state.platformsCG]);
}

}
