'use strict'

module.exports = {
    src: './assets/images/sprites/**/*.png',
    destImage: './assets/images/spritesheet.png',
    destCSS: './assets/images/sprites.json',
    engine: 'pixelsmith',
    algorithm: 'binary-tree',
    cssTemplate: require('spritesmith-texturepacker'),
    padding: 2
}

