module.exports = Menu


var Level = require('./level/Level.js')


function Menu() {
    return this
}


Menu.prototype = Object.create(Level.prototype)
    

Menu.prototype.init = function() {
    Level.prototype.init.call(this, '_menu')
} 


Menu.prototype.create = function() {
    Level.prototype.create.call(this)
    this.p1 = this.add.sprite(568, 72, 'sprites', 'p1-sit1')
    this.p1.anchor.setTo(0.5)
    this.p1.scale.x = -1
    var frames = Phaser.Animation.generateFrameNames('p1-sit', 1, 3)
    frames = frames.concat(frames)
    frames = frames.concat(frames)
    frames = frames.concat(frames)
    frames[0] = 'p1-sit-blink'
    this.p1.animations.add('sit', frames, 5, true, false)
    this.p1.animations.add('walk', Phaser.Animation.generateFrameNames('p1-walk', 1, 4), 15, true)
    this.p1.animations.play('sit')
    var logo = this.add.image(32, 16, 'sprites', 'logo')
    logo.width = 256
    logo.height = 172
    var startText = this.make.retroFont('font-small', 8, 8, Phaser.RetroFont.TEXT_SET2);
    startText.text = 'START'
    var startBtn = this.add.button(0, 0, startText, function() {
        this.start()}, this)
    startBtn.anchor.setTo(0.5)
    startBtn.x = logo.x + logo.width/2 + 2
    startBtn.y = logo.y + logo.height + 32
    startBtn.width = 160
    startBtn.height = 32
} 


Menu.prototype.loseCondition = function() {
    return false
}


Menu.prototype.start = function() {
    this.p1.animations.stop()
    this.p1.frameName = 'p1-stand'
    this.time.events.add(100, function() {
        this.p1.animations.play('walk')
        this.p1.scale.x = 1
        this.add.tween(this.p1)
            .to({x: this.world.width + 16}, 800)
            .start()
        this.camera.onFadeComplete.addOnce(function() {
            this.state.start('Arcade')
        }, this)
        this.camera.fade(0x180c08, 800)
    }, this)
}
