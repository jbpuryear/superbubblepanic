module.exports = TextButton


function TextButton(state, text, callback, ctx) {
    var font = state.entities.smallFontText(state, text)
    var btn = state.make.button(0, 0, font, callback, ctx)
    btn.width *= 2
    btn.height *= 2
    btn.anchor.setTo(0.5)
    return btn
}
