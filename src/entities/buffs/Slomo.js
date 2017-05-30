module.exports = Slomo;


var Buff = require('./Buff.js');


function Slomo(state, data) {
    data.texture = 'slomo';
    Buff.call(this, state, data);
}


Slomo.prototype = Object.create(Buff.prototype);


Slomo.prototype.buffProto = {
    duration: 6500,
    rate: 0.25,
    start: function() {
        this.sprite.destroy()
        this.speedUp = this.state.sound.play('slowdown')
        this.tick = this.state.sound.play('clock', 1, true)
        this.slowDown = this.state.add.sound('speedup')
        this.state.changeTime(this.rate)
    },
    stop: function() {
        this.tick.stop()
        this.slowDown.onStop.addOnce(function() {
            this.state.changeTime(1/this.rate)
        }, this)
        this.slowDown.play();
    }
}
