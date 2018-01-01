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
        var levels = require('../assets/levels.json')
        this.load.pack('levels', null, levels)

        this.progress = entities.smallFont(this, 'LOADING 0%')
        this.progress.x = this.world.width/2
        this.progress.y = this.world.height/2
        this.world.add(this.progress)
    },

    loadUpdate: function() {
        this.progress.font.text = 'LOADING ' + this.load.progress + '%'
    },

    create: function() {
        // this.state.start('Menu')
        //this.state.start('Level', true, false, 'level1')
         this.state.start('ShmupLevel', true, false, 'shmup')
        // this.state.start('SpaceBoss', true, false, 'space-boss')
        // this.state.start('LevelSelect')
    }
}


function levelSort(a, b) {
    if (a.key < b.key) return -1
    if (a.key > b.key) return 1
    return 0
}
