window.addEventListener('load', function() {
var game = SBP();
var entities = game.state.states.Level.entities;

function state() {
    return game.state.states[game.state.current];
}

function make() {
    var data = {
        type: this.value,
        x: 450,
        y: 70,
        width: 30,
        properties: {},
    };
    state().addEntity(data);
    this.value = '';
}

function levelSelect() {
    state().state.start('Level', true, false, this.value);
    this.value = '';
}

var select = document.getElementById('entities');
for (key in entities) {
    var option = document.createElement("option");
    option.value = key;
    option.text = key;
    select.add(option);
}
select.value = '';
select.onchange = make;

select = document.getElementById('levels');
setTimeout(function(){
    state().cache.getKeys(Phaser.Cache.TILEMAP).forEach(function(key) {
        var option = document.createElement("option");
        option.value = key;
        option.text = key;
        select.add(option);
    });
    select.value = '';
}, 5000);
select.onchange = levelSelect;

document.getElementById('hitToggle').onclick = function() {
    var p1 = state().players.children[0];
    p1.body.clearCollision();
    p1.collideWorldBounds = true;
    p1.body.setCollisionGroup(state().playersCG);
    p1.body.collides([state().itemsCG, state().platformsCG]);
}

document.getElementById('step').onclick = function() {
    if (!game.stepping) game.enableStep();
    game.step();
}

document.getElementById('endStep').onclick = function() {
    game.disableStep();
}
}, false)
