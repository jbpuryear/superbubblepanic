'use strict'

module.exports = [
  {
    src: './assets/images/sprites/**/*.png',
    destImage: './assets/images/spritesheet.png',
    destCSS: './assets/images/sprites.json',
    engine: 'pixelsmith',
    algorithm: 'binary-tree',
    cssTemplate: require('spritesmith-texturepacker'),
    padding: 2
  },
  {
    src: './assets/images/space-boss/*.png',
    destImage: './assets/images/space-boss-sheet.png',
    destCSS: './assets/images/space-boss.json',
    engine: 'pixelsmith',
    algorithm: 'binary-tree',
    cssTemplate: require('spritesmith-texturepacker'),
    padding: 2
  }
]

