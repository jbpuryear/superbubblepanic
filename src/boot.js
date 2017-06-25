module.exports = Boot


var game
var cursorStyle = document.createElement('style')

if (document.readyState === 'interactive' || document.readyState === 'complete') {
    document.body.appendChild(cursorStyle)
} else {
    window.addEventListener('load', function() {
        document.body.appendChild(cursorStyle)
    }, true)
}


function Boot() {
    return this
}


Boot.prototype = {
    init: function() {
        game = this.game
        game.stage.backgroundColor = 0x180c08
        game.scale.pageAlignHorizontally = true
        game.scale.pageAlignVertically = true
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        Phaser.Canvas.setImageRenderingCrisp(this.game.canvas)
        game.physics.startSystem(Phaser.Physics.P2JS)
        game.physics.p2.setBounds(0, 0, 0, 0, false, false, false, false)

        game.camera.bounds = null

        if (game.sound.usingWebAudio) {
            game.sound.masterGain.disconnect(game.sound.context.destination)
            var filter = game.sound.context.createBiquadFilter()
            game.sound.masterGain.connect(filter)
            filter.connect(game.sound.context.destination)
            filter.type = 'highpass'
            filter.frequency.value = 60;
        }

        if (game.device.pointerLock) {
            game.canvas.addEventListener('click', grabPointer, true)
            game.input.mouse.pointerLock.add(function(locked) {
                if (!locked) return
                game.canvas.removeEventListener('click', grabPointer)
            })
            game.input.mouse.pointerLock.add(onReleasePointer)
        }
        hideCursor()
    },

    create: function() {
        this.state.start('Load')
    }, 

    preload: function() {
        this.load.image('font-small', 'assets/images/font-small.png')
    }
}


function hideCursor() {
    cursorStyle.innerHTML = 'canvas { cursor: none !important }'
}


function showCursor() {
    cursorStyle.innerHTML = ''
}


function grabPointer() {
    hideCursor()    // In case pointer lock is denied.
    game.paused = false
    game.input.mouse.requestPointerLock()
}


function onReleasePointer(locked) {
    if (locked) return
    showCursor()
    game.paused = true
    game.canvas.addEventListener('click', grabPointer, {once: true})
}
