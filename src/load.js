module.exports = Load
    
    
function Load() {
    return this
}


Load.prototype = {
    preload: function() {
        var assets = require('../assets/assets.json')
        for (var section in assets) {
            this.load.pack(section, null, assets)
        }
        this.font = this.make.retroFont('font-small', 8, 8, Phaser.RetroFont.TEXT_SET2)
        this.progress = this.add.image(this.world.width/2, this.world.height/2, this.font)
        this.progress.anchor.setTo(0.5)
    },

    loadUpdate: function() {
        this.font.text = 'LOADING ' + this.load.progress + '%'
    },

    create: function() {
        this.state.start('Menu')
    }
}
