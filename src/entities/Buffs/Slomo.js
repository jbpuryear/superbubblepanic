module.exports = Slomo;


var Buff = require('./Buff.js');


var TEXTURE = 'gun';


function Slomo(state, data) {
    data.texture = TEXTURE;
    Buff.call(this, state, data);
}


Slomo.prototype = Object.create(Buff.prototype);


Slomo.prototype.buffProto = {
    duration: 6500,
    rate: 4,
    start: function() {
        var rate = this.rate;
        this.state.bulletTime /= rate;
        this.state.enemies.recurse(function(enemy) {
            enemy.body.mass *= rate;
            enemy.body.velocity.x /= rate;
            enemy.body.velocity.y /= rate;
            enemy.body.data.gravityScale /= rate * rate;
        });
    },
    stop: function() {
        this.rate = 1/this.rate;
        this.start();
    }
}
