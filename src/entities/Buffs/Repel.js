module.exports = Repel;


var Buff = require('./Buff.js');


var TEXTURE = 'gun';


function Repel(state, data) {
    data.texture = TEXTURE;
    Buff.call(this, state, data);
}


Repel.prototype = Object.create(Buff.prototype);


Repel.prototype.buffProto = {
    duration: 8000,
    update: function() {
        var target = this.target;
        var mag = 80;
        var range = 90;
        var pxmi = this.state.physics.p2.pxmi;
        this.state.enemies.forEachAlive(function recurse(enemy) {
            if (typeof enemy.forEachAlive === 'function') {
                enemy.forEachAlive(recurse);
            } else {
                var distance = target.world.distance(enemy);
                if (distance <= range) {
                    var angle = target.world.angle(enemy);
                    var force = [
                        pxmi( mag * Math.cos(angle) * Math.sqrt(distance) ),
                        pxmi( mag * Math.sin(angle) * Math.sqrt(distance) )
                    ];
                    enemy.body.applyForce(force, enemy.x, enemy.y);
                }
            }
        });
    }
}
