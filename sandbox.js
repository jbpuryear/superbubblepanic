window.onload = function() {

var game = SBP();
var state = game.state.states.Level;
var entities = state.entities;

function make() {
    var data = {
        type: this.value,
        x: 450,
        y: 70,
        width: 30,
        properties: {},
    };
    state.addEntity(data);
    this.value = '';
}

var select = document.getElementById('entities');
for (key in state.entities) {
    var option = document.createElement("option");
    option.value = key;
    option.text = key;
    select.add(option);
}
select.value = '';
select.onchange = make;

document.getElementById('hitToggle').onclick = function() {
    var state = game.state.states.Level;
    var p1 = state.players.children[0];
    p1.body.clearCollision();
    p1.collideWorldBounds = true;
    p1.body.setCollisionGroup(state.playersCG);
    p1.body.collides([state.itemsCG, state.platformsCG]);
}

document.getElementById('step').onclick = function() {
    if (!game.stepping) game.enableStep();
    game.step();
}

document.getElementById('endStep').onclick = function() {
    game.disableStep();
}

}
