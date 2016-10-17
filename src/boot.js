SBP.states = SBP.states || {};

SBP.states.Boot = function() {
    return this;
};

SBP.states.Boot.prototype = {
    init: function() {
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
        this.game.physics.startSystem(Phaser.Physics.P2JS);
    },

    preload: function() {
        this.load.json('assets', 'assets/assets.json');
    },

    create: function() {
        this.state.start('Load');
    }
}
