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
        this.state.enemies.forEach(function(enemy) {
            enemy.forEach(function(child) {
                child.body.mass *= rate;
                child.body.velocity.x /= rate;
                child.body.velocity.y /= rate;
                child.body.data.gravityScale /= rate * rate;
            });
        });
    },
    stop: function() {
        this.rate = 1/this.rate;
        this.start();
    }
}
