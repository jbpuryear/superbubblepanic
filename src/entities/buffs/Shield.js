module.exports = Shield


var Buff = require('./Buff.js')


function Shield(state, data) {
    data.texture = 'shield'
    Buff.call(this, state, data)
    this.sounds.pickup = state.add.sound('shield-pickup')
    this.alpha = 0.8
}


Shield.prototype = Object.create(Buff.prototype)


Shield.prototype.buffProto = {
    duration: -1,

    start: function(target) {
        this.sprite.destroy()

        if (target.health > 1) {
            this.timeLeft = 0
            return
        }

        target.health = 2
        this.block = this.state.add.sound('block')

        this.sprite = this.state.add.sprite(0, 0, target.character.texture)

        this.alpha = 0.3
        this.scale = 1.2

        this.sprite.anchor.setTo(0.5)
        this.sprite.tint = 0x62cade
        this.sprite.frame = target.character.frame
        this.sprite.width = target.character.width * 1.2
        this.sprite.height = target.character.height * 1.2
        this.state.items.addChild(this.sprite)
        this.sprite.shader = new Phaser.Filter(this.state.game, {alpha: {type: '1f', value: this.alpha}}, [
            'precision mediump float;',
            'uniform sampler2D uSampler;',
            'uniform float alpha;',
            'varying vec2 vTextureCoord;',
            'void main(void) {',
            'gl_FragColor = texture2D(uSampler, vTextureCoord);',
            'if (gl_FragColor.a == 0.0) return;',
            'gl_FragColor = vec4(0.3843137254901961 * alpha, 0.792156862745098 * alpha, 0.8705882352941177 * alpha, alpha);',
            '}'
        ])
        this.state.add.tween(this).to({scale: 1.5, alpha: 0.8}, 500, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true)
        target.addChildAt(this.sprite, 0)
    },

    update: function() {
        if (this.target.health <= 1) {
            this.state.playSound(this.block)
            this.sprite.destroy()
            this.timeLeft = 0
            return
        }
        this.sprite.width = this.target.character.width * this.scale
        this.sprite.height = this.target.character.height * this.scale
        this.sprite.alpha = this.alpha
        //this.sprite.shader.uniforms.alpha.value = this.alpha
    }
}
