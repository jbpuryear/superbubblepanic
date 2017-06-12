module.exports = SmallFont


function SmallFont(state, text, type) {
    var font = SmallFont.Text(state, text, type)
    var img = state.make.image(0, 0, font)
    img.font = font
    img.anchor.setTo(0.5)
    img.tint = SmallFont.colors.PLAIN
    return img
}


SmallFont.Text = function(state, text, type) {
    type = type || 'plain'
    text = text || ''

    var font = state.make.retroFont('font-small', 8, 8,
        Phaser.RetroFont.TEXT_SET2);
    font.text = text
    return font
}


SmallFont.colors = {
    HILIGHT: 0x62cade,
    PLAIN: 0xf6eeee
}
