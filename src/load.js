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
    },

    create: function() {
        this.state.start('Arcade', true, false, 'level1')
    }
}
