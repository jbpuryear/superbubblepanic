module.exports = Load


var entities = require('./entities/entities.js')
    
    
function Load() {
    return this
}


Load.prototype = {
    preload: function() {
        var assets = require('../assets/assets.json')
        for (var section in assets) {
            this.load.pack(section, null, assets)
        }
        this.progress = entities.smallFont(this, 'LOADING 0%')
        this.progress.x = this.world.width/2
        this.progress.y = this.world.height/2
        this.world.add(this.progress)
    },

    loadUpdate: function() {
        this.progress.font.text = 'LOADING ' + this.load.progress + '%'
    },

    create: function() {
        this.state.start('Menu')
    }
}
