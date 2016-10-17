module.exports = (function() {

    Load = function() {
        return this;
    }

    Load.prototype = {
        preload: function() {
            var assets = require('../assets/assets.json');
            for (var section in assets) {
                this.load.pack(section, null, assets);
            }
        },

        create: function() {
            this.state.start('Level', true, false, 'level1');
        }
    }

    return Load;
})();
