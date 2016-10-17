SBP.states = SBP.states || {};

SBP.states.Load = function() {
    return this;
}

SBP.states.Load.prototype = {
    preload: function() {
        var assets = this.cache.getJSON('assets');
        for (var section in assets) {
            this.load.pack(section, null, assets);
        }
    },

    create: function() {
        this.state.start('Level', true, false, 'level1');
    }
}
