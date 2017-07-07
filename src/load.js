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
          var reticule = this.make.image(this.world.width/2,
              this.world.height/2, 'sprites', 'reticule')
          reticule.anchor.setTo(0.5)
          reticule.animations.add('die',
              Phaser.Animation.generateFrameNames('reticule', 1, 5), 38, false)
          this.stage.addChild(reticule)
          this.stage.reticule = reticule
          this.state.start('Menu')
      }
}
