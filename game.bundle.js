(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
    "audio": [
        {
            "type": "audio",
            "key": "block",
            "urls": ["assets/audio/block.ogg"],
            "autoDecode": true
        },
        {
            "type": "audio",
            "key": "bounce",
            "urls": ["assets/audio/bounce.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "breaking-glass",
            "urls": ["assets/audio/breaking-glass.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "click",
            "urls": ["assets/audio/click.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "clock",
            "urls": ["assets/audio/clock.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "death",
            "urls": ["assets/audio/death.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "dry-fire",
            "urls": ["assets/audio/dry-fire.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "explode",
            "urls": ["assets/audio/explode.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "gunshot",
            "urls": ["assets/audio/pistol.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "hit",
            "urls": ["assets/audio/hit.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "jetpack",
            "urls": ["assets/audio/jetpack.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "land",
            "urls": ["assets/audio/land.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "launch",
            "urls": ["assets/audio/launch.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "pop",
            "urls": ["assets/audio/pop.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "reload",
            "urls": ["assets/audio/reload.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "repel-pickup",
            "urls": ["assets/audio/repel-pickup.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "repel-stop",
            "urls": ["assets/audio/repel-stop.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "rollover",
            "urls": ["assets/audio/rollover.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "shield-pickup",
            "urls": ["assets/audio/shield-pickup.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "shoe-pickup",
            "urls": ["assets/audio/shoe-pickup.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "shotgun",
            "urls": ["assets/audio/shotgun.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "speedup",
            "urls": ["assets/audio/speedup.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "splat",
            "urls": ["assets/audio/splat.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "slowdown",
            "urls": ["assets/audio/slowdown.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "start",
            "urls": ["assets/audio/start.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "step",
            "urls": ["assets/audio/step.ogg"],
            "autoDecode": true
	      },
        {
            "type": "audio",
            "key": "victory-jingle",
            "urls": ["assets/audio/victory-jingle.ogg"],
            "autoDecode": true
	      }
    ],

    "songs": [
        {
            "type": "audiosprite",
            "key": "menu-theme",
            "urls": ["assets/songs/komiku_poupis-theme.ogg"],
            "autoDecode": true,
            "jsonData": {
                "spritemap": {
                    "loop": {
                        "start": 0,
                        "end": 52.06,
                        "loop": false
                    }
                }
            }
        },
        {
            "type": "audiosprite",
            "key": "heartbeat",
            "urls": ["assets/songs/creo_heartbeat.ogg"],
            "autoDecode": false,
            "jsonData": {
                "spritemap": {
                    "intro" : {
                        "start": 0,
                        "end": 6.388,
                        "loop": false
                    },
                    "loop": {
                        "start": 6.388,
                        "end": 57.517,
                        "loop": true
                    }
                }
            }
        },
        {
            "type": "audiosprite",
            "key": "live",
            "urls": ["assets/songs/creo_live.ogg"],
            "autoDecode": false,
            "jsonData": {
                "spritemap": {
                    "intro" : {
                        "start": 0,
                        "end": 8.0,
                        "loop": false
                    },
                    "loop": {
                        "start": 8.0,
                        "end": 104.003,
                        "loop": true
                    }
                }
            }
        },
        {
            "type": "audiosprite",
            "key": "fater-lee",
            "urls": ["assets/songs/black_ant-fater_lee.ogg"],
            "autoDecode": false,
            "jsonData": {
                "spritemap": {
                    "intro" : {
                        "start": 0,
                        "end": 1.711,
                        "loop": false
                    },
                    "loop": {
                        "start": 1.711,
                        "end": 103.044,
                        "loop": true
                    }
                }
            }
        },
        {
            "type": "audiosprite",
            "key": "wood-chopper",
            "urls": ["assets/songs/wood-chopper.ogg"],
            "autoDecode": false,
            "jsonData": {
                "spritemap": {
                    "loop": {
                        "start": 0,
                        "end": 226,
                        "loop": false
                    }
                }
            }
        },
        {
            "type": "audiosprite",
            "key": "cylinder-three",
            "urls": ["assets/songs/chris-zabriskie_cylinder-three.ogg"],
            "autoDecode": false,
            "jsonData": {
                "spritemap": {
                    "loop": {
                        "start": 0.106,
                        "end": 164.462,
                        "loop": true
                    }
                }
            }
        },
        {
            "type": "audiosprite",
            "key": "gone",
            "urls": ["assets/songs/alex-mcculloch_gone.ogg"],
            "autoDecode": false,
            "jsonData": {
                "spritemap": {
                    "loop": {
                        "start": 0.066,
                        "end": 40.04,
                        "loop": true
                    }
                }
            }
        },
        {
            "type": "audiosprite",
            "key": "everything-is-changing",
            "urls": ["assets/songs/Noi-Everything_Is_Changing.ogg"],
            "autoDecode": false,
            "jsonData": {
                "spritemap": {
                    "loop": {
                        "start": 0.026,
                        "end": 168.305,
                        "loop": true
                    }
                }
            }
        },
        {
            "type": "audiosprite",
            "key": "cynic",
            "urls": ["assets/songs/creo_cynic.ogg"],
            "autoDecode": false,
            "jsonData": {
                "spritemap": {
                    "intro" : {
                        "start": 0,
                        "end": 15.904,
                        "loop": false
                    },
                    "loop": {
                        "start": 15.904,
                        "end": 63.949,
                        "loop": true
                    }
                }
            }
        },
        {
            "type": "audiosprite",
            "key": "memory",
            "urls": ["assets/songs/Creo-Memory.ogg"],
            "autoDecode": false,
            "jsonData": {
                "spritemap": {
                    "intro" : {
                        "start": 0,
                        "end": 8.723,
                        "loop": false
                    },
                    "loop": {
                        "start": 8.723,
                        "end": 113.452,
                        "loop": true
                    }
                }
            }
        },
        {
            "type": "audiosprite",
            "key": "super-poupi",
            "urls": ["assets/songs/komiku_super-poupi.ogg"],
            "autoDecode": false,
            "jsonData": {
                "spritemap": {
                    "intro" : {
                        "start": 0,
                        "end": 5.111,
                        "loop": false
                    },
                    "loop": {
                        "start": 5.111,
                        "end": 55.641,
                        "loop": true
                    }
                }
            }
        },
        {
            "type": "audiosprite",
            "key": "walk-of-the-day",
            "urls": ["assets/songs/komiku_walk-of-the-day.ogg"],
            "autoDecode": false,
            "jsonData": {
                "spritemap": {
                    "loop": {
                        "start": 0,
                        "end": 82.294,
                        "loop": true
                    }
                }
            }
        },
        {
            "type": "audiosprite",
            "key": "spring-summer",
            "urls": ["assets/songs/Dustin_Wong-Spring_Summer.ogg"],
            "autoDecode": false,
            "jsonData": {
                "spritemap": {
                    "intro" : {
                        "start": 0,
                        "end": 13.455,
                        "loop": false
                    },
                    "loop": {
                        "start": 13.455,
                        "end": 166.127,
                        "loop": true
                    }
                }
            }
        },
        {
            "type": "audiosprite",
            "key": "venus",
            "urls": ["assets/songs/sketchylogic_venus.ogg"],
            "autoDecode": false,
            "jsonData": {
                "spritemap": {
                    "loop": {
                        "start": 0,
                        "end": 25.591,
                        "loop": true
                    }
                }
            }
        },
        {
            "type": "audiosprite",
            "key": "space",
            "urls": ["assets/songs/alexandr-zhelanov_space.ogg"],
            "autoDecode": false,
            "jsonData": {
                "spritemap": {
                    "loop": {
                        "start": 0,
                        "end": 176.140,
                        "loop": true
                    }
                }
            }
        },
        {
            "type": "audiosprite",
            "key": "observing-the-star",
            "urls": ["assets/songs/yd_observing-the-star.ogg"],
            "autoDecode": false,
            "jsonData": {
                "spritemap": {
                    "loop": {
                        "start": 0,
                        "end": 132.252,
                        "loop": true
                    }
                }
            }
        }
    ],

    "images": [
        {
            "type": "spritesheet",
            "key": "tiles",
            "url": "assets/images/tiles.png",
            "frameWidth": 8,
            "frameHeight": 8
        },
        {
            "type": "spritesheet",
            "key": "living-tissue-tileset",
            "url": "assets/images/living-tissue-tileset.png",
            "frameWidth": 16,
            "frameHeight": 16
        },
        {
            "type": "image",
            "key": "city",
            "url": "assets/images/backgrounds/city.png"
        },
        {
            "type": "image",
            "key": "ocean",
            "url": "assets/images/backgrounds/ocean.png"
        },
        {
            "type": "image",
            "key": "world-map",
            "url": "assets/images/backgrounds/world-map.png"
        },
        {
            "type": "image",
            "key": "desert",
            "url": "assets/images/backgrounds/desert.png"
        },
        {
            "type": "image",
            "key": "desert-plain",
            "url": "assets/images/backgrounds/desert-plain.png"
        },
        {
            "type": "image",
            "key": "forest",
            "url": "assets/images/backgrounds/forest.png"
        },
        {
            "type": "image",
            "key": "space",
            "url": "assets/images/backgrounds/space.png"
        },
        {
            "type": "image",
            "key": "living-tissue",
            "url": "assets/images/backgrounds/living-tissue.png"
        },
        {
            "type": "atlasJSONHash",
            "key": "sprites",
            "textureURL": "assets/images/spritesheet.png",
            "atlasURL": "assets/images/sprites.json"
        },
        {
            "type": "atlasJSONHash",
            "key": "space-boss",
            "textureURL": "assets/images/space-boss-sheet.png",
            "atlasURL": "assets/images/space-boss.json"
        }
    ],

    "screens": [
        {
            "type": "tilemap",
            "key": "_arcade",
            "url": "assets/levels/blank.json",
            "format": "TILED_JSON"
        },
        {
            "type": "tilemap",
            "key": "_menu",
            "url": "assets/levels/menu.json",
            "format": "TILED_JSON"
        }
    ]
}

},{}],2:[function(require,module,exports){
module.exports={
  "start": {
    "key": "_menu",
    "mapX": 519,
    "mapY": 222,
    "state": "Menu",
    "title": "home sweet home"
  },

  "levels": [
    {
      "type": "tilemap",
      "key": "level1",
      "url": "assets/levels/level1.json",
      "format": "TILED_JSON",
      "mapX": 472,
      "mapY": 182,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level2",
      "url": "assets/levels/level2.json",
      "format": "TILED_JSON",
      "mapX": 445,
      "mapY": 194,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level3",
      "url": "assets/levels/level3.json",
      "format": "TILED_JSON",
      "mapX": 453,
      "mapY": 226,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level4",
      "url": "assets/levels/level4.json",
      "format": "TILED_JSON",
      "mapX": 413,
      "mapY": 239,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level5",
      "url": "assets/levels/level5.json",
      "format": "TILED_JSON",
      "mapX": 405,
      "mapY": 265,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level6",
      "url": "assets/levels/level6.json",
      "format": "TILED_JSON",
      "mapX": 386,
      "mapY": 297,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level7",
      "url": "assets/levels/level7.json",
      "format": "TILED_JSON",
      "mapX": 407,
      "mapY": 325,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level8",
      "url": "assets/levels/level8.json",
      "format": "TILED_JSON",
      "mapX": 359,
      "mapY": 332,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level9",
      "url": "assets/levels/level9.json",
      "format": "TILED_JSON",
      "mapX": 274,
      "mapY": 313,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level10",
      "url": "assets/levels/level10.json",
      "format": "TILED_JSON",
      "mapX": 244,
      "mapY": 273,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level11",
      "url": "assets/levels/level11.json",
      "format": "TILED_JSON",
      "mapX": 230,
      "mapY": 235,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level12",
      "url": "assets/levels/level12.json",
      "format": "TILED_JSON",
      "mapX": 268,
      "mapY": 234,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level13",
      "url": "assets/levels/level13.json",
      "format": "TILED_JSON",
      "mapX": 244,
      "mapY": 198,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level14",
      "url": "assets/levels/level14.json",
      "format": "TILED_JSON",
      "mapX": 289,
      "mapY": 174,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level15",
      "url": "assets/levels/level15.json",
      "format": "TILED_JSON",
      "mapX": 232,
      "mapY": 147,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level16",
      "url": "assets/levels/level16.json",
      "format": "TILED_JSON",
      "mapX": 277,
      "mapY": 118,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level17",
      "url": "assets/levels/level17.json",
      "format": "TILED_JSON",
      "mapX": 249,
      "mapY": 77,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level18",
      "url": "assets/levels/level18.json",
      "format": "TILED_JSON",
      "mapX": 183,
      "mapY": 76,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level19",
      "url": "assets/levels/level19.json",
      "format": "TILED_JSON",
      "mapX": 141,
      "mapY": 119,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level20",
      "url": "assets/levels/level20.json",
      "format": "TILED_JSON",
      "mapX": 82,
      "mapY": 151,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level21",
      "url": "assets/levels/level21.json",
      "format": "TILED_JSON",
      "mapX": 132,
      "mapY": 173,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level22",
      "url": "assets/levels/level22.json",
      "format": "TILED_JSON",
      "mapX": 76,
      "mapY": 201,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level23",
      "url": "assets/levels/level23.json",
      "format": "TILED_JSON",
      "mapX": 113,
      "mapY": 222,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level24",
      "url": "assets/levels/level24.json",
      "format": "TILED_JSON",
      "mapX": 152,
      "mapY": 242,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level25",
      "url": "assets/levels/level25.json",
      "format": "TILED_JSON",
      "mapX": 119,
      "mapY": 257,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level26",
      "url": "assets/levels/level26.json",
      "format": "TILED_JSON",
      "mapX": 85,
      "mapY": 275,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "level27",
      "url": "assets/levels/level27.json",
      "format": "TILED_JSON",
      "mapX": 75,
      "mapY": 306,
      "state": "Level",
      "title": "and so it begins"
    },
    {
      "type": "tilemap",
      "key": "rocket",
      "url": "assets/levels/rocket.json",
      "format": "TILED_JSON",
      "mapX": 25,
      "mapY": 330,
      "state": "RocketLevel",
      "title": "ground control"
    },
    {
      "type": "tilemap",
      "key": "shmup",
      "url": "assets/levels/shmup.json",
      "format": "TILED_JSON",
      "mapX": 13,
      "mapY": 47,
      "state": "ShmupLevel",
      "title": "a leaf on the wind"
    },
    {
      "type": "tilemap",
      "key": "zero-g",
      "url": "assets/levels/zero-g.json",
      "format": "TILED_JSON",
      "mapX": 63,
      "mapY": 22,
      "state": "ZeroGLevel",
      "title": "the not so friendly skies"
    },
    {
      "type": "tilemap",
      "key": "zero-g2",
      "url": "assets/levels/zero-g2.json",
      "format": "TILED_JSON",
      "mapX": 219,
      "mapY": 25,
      "state": "ZeroGLevel",
      "title": "the not so friendly skies"
    },
    {
      "type": "tilemap",
      "key": "zero-g3",
      "url": "assets/levels/zero-g3.json",
      "format": "TILED_JSON",
      "mapX": 366,
      "mapY": 62,
      "state": "ZeroGLevel",
      "title": "the not so friendly skies"
    },
    {
      "type": "tilemap",
      "key": "space-boss",
      "url": "assets/levels/space-boss.json",
      "format": "TILED_JSON",
      "mapX": 477,
      "mapY": 135,
      "state": "SpaceBoss",
      "title": "how high the moon"
    },
    {
      "type": "tilemap",
      "key": "monster",
      "url": "assets/levels/monster.json",
      "format": "TILED_JSON",
      "mapX": 481,
      "mapY": 69,
      "state": "MonsterLevel",
      "title": "ooh creepy"
    },
    {
      "type": "tilemap",
      "key": "monster2",
      "url": "assets/levels/monster2.json",
      "format": "TILED_JSON",
      "mapX": 454,
      "mapY": 50,
      "state": "MonsterLevel",
      "title": "ooh creepy"
    },
    {
      "type": "tilemap",
      "key": "seeker",
      "url": "assets/levels/seeker.json",
      "format": "TILED_JSON",
      "mapX": 486,
      "mapY": 43,
      "state": "FinalBoss",
      "title": "showdown"
    }
  ]
}


},{}],3:[function(require,module,exports){
module.exports={
    "city": {
        "bgImage": "city",
        "songs": [
            "memory",
            "heartbeat",
            "live"
        ],
        "tiles": "tiles"
    },

    "desert": {
        "bgImage": "desert",
        "songs": [
            "everything-is-changing",
            "spring-summer"
        ],
        "tiles": "tiles"
    },

    "forest": {
        "bgImage": "forest",
        "songs": [
            "memory",
            "walk-of-the-day",
            "super-poupi"
        ],
        "tiles": "tiles"
    },

    "launch-pad": {
        "bgImage": "ocean",
        "songs": [
            "memory"
        ],
        "tiles": "tiles"
    },

    "shmup": {
        "bgImage": "space",
        "songs": [
            "venus"
        ],
        "tiles": "tiles"
    },

    "space": {
        "bgImage": "space",
        "songs": [
            "space",
            "observing-the-star"
        ],
        "tiles": "tiles"
    },

    "space-boss": {
        "bgImage": "space",
        "songs": [
            "cylinder-three"
        ],
        "tiles": "tiles"
    },

    "monster": {
        "bgImage": "living-tissue",
        "songs": [
            "fater-lee"
        ],
        "tiles": "living-tissue-tileset"
    },

    "final-boss": {
        "bgImage": "living-tissue",
        "songs": [
            "cynic"
        ],
        "tiles": "tiles"
    },

    "menu": {
        "bgImage": "desert",
        "songs": ["menu-theme"],
        "tiles": "tiles"
    }
}

},{}],4:[function(require,module,exports){
module.exports = Credits

var Scene = require('./Scene.js')


var SmallFont = require('./entities/SmallFont.js')
var text = "Super Bubble Panic\nby James Puryear\n\n\n\nMade with Phaser\n\n\n\nBackground art based on works by\n\nAnsimuz (ansimuz.com)\nKnoblePersona\n\n\n\nSongs\n\nFater Lee\nby Black Ant\n(black-ant.bandcamp.com)\n\nMemory\nCynic\nHeartbeat\nLive\nby Creo\n(creo-music.com)\n\nPoupi's Theme\nSuper Poupi\nTime For The Walk Of The Day\nby Komiku\n(loyaltyfreakmusic.com)\n\nGone\nby Alex McCulloch\n\nEverything is Changing\nby Noi\n(soundcloud.com/noi)\n\nThe Wood Chopper\nby The Settlers\n(soundcloud.com/user-659046245)\n\nVenus\nby SketchyLogic\n\nSpring Summer\nby Dustin Wong\n(thrilljockey.com)\n\nObserving The Star\nby Yd\n\nCylinder Three\nby Chris Zabriskie\n(chriszabriskie.com)\n\nSpace\nby Alexandr Zhelanov\n(soundcloud.com/alexandr-zhelanov)\n\n\n\nWith Sound FX By\ndklon & Michel Baradari\n\n\n\nThanks To\n\nRichard Davey\nSchteppe\nOpen Game Art\nFree Music Archive\nHudson Soft\nAbetusk\nCosmo\nJT\nDr Murder\n\n"

var WorldMap = require('./WorldMap.js')


function Credits() {
  Scene.call(this)
}


Credits.prototype = Object.create(Scene.prototype)


Credits.prototype.create = function() {
  Scene.prototype.create.call(this)

  var pause = 6000
  var explodeTime = 4000 + pause
  var scrollTime = 60000
  var mapTime = 20000

  this.input.keyboard.addKey(Phaser.Keyboard.X)
    .onDown.add(function() { this.state.start('Menu') }, this)

  if (this.game.data.lastCompleted < this.game.data.levels.length-1) {
    var scroll = this.add.existing(SmallFont(this, text))

    scroll.anchor.setTo(0, 1)
    scroll.x = 40
    scroll.y = scroll.height + this.game.height + 10
    this.add.tween(scroll)
      .to({y: -10}, scrollTime, null, true)
      .onComplete.addOnce(function() {
        this.state.start('Menu')
      }, this)
    return
  }

  this.time.events.add(explodeTime, this.startMusic, this, 'wood-chopper')

  var bg = this.bg = this.add.image(0, 0, 'space')
  var map = this.map = this.world.addChild(new WorldMap(this.game))
  
  this.scale.setGameSize(map.map.width, map.map.height)
  bg.scale.setTo( Math.max(this.game.width/bg.width, this.game.height/bg.height) )
  bg.scale.setTo( bg.scale.x * 1.25 )

  var dust = this.dust = this.add.emitter(this.game.width/2, this.game.height, 100)
  var character = this.character = this.add.sprite(
    this.game.width * 0.75, -20, 'sprites', 'p1-space')

  character.scale.x = -1

  dust.makeParticles('sprites', 
    Phaser.Animation.generateFrameNames('dust', 1, 4), 4)
  dust.setSize(this.game.width, 1)
  dust.minParticleSpeed.setTo(0, -2000)
  dust.maxParticleSpeed.setTo(0, -20)
  dust.setRotation(0, 0)
  dust.gravity = 0
  dust.setAll('checkWorldBounds', true)
  dust.setAll('outOfBoundsKill', true)
  dust.start(false, 0, 250)

  this.camera.flash(0xf6eeee, 8000)

  this.explosionPool = this.add.group()
  this.explosionPool.createMultiple(40, 'sprites')
  this.explosionPool.forEach(function(exp) {
    exp.anchor.setTo(0.5)
    exp.animations.add('explode',
      Phaser.Animation.generateFrameNames('explosion', 1, 4), 60, false)
  })

  var expY = {value: 10}
  var loop = this.time.events.loop(150, function() {
    var e = this.explosionPool.getFirstDead()
    if (!e) return
    e.reset(
      Math.random()*this.game.width, Math.random()*20+expY.value)
    e.width = e.height = Math.random()*160 + 40
    e.animations.play('explode', null, false, true)
    this.camera.shake(0.015, 400)
  }, this)

  map.y = this.game.height + 5
  
  this.add.tween(expY).to({ value: -200 }, explodeTime).start()

  this.time.events.add(explodeTime-pause, this.time.events.remove, this.time.events, loop)

  this.add.tween(bg)
    .to({y: -(bg.height - this.game.height)}, scrollTime+mapTime+explodeTime)
    .start()
  this.add.tween(character)
    .to({x: 500, y: 180}, scrollTime+mapTime+explodeTime, null, true, explodeTime)
    .onComplete.add(character.kill, character)
  this.add.tween(character.scale)
    .to({x: -0.05, y: 0.05}, scrollTime+mapTime+explodeTime/2,
      Phaser.Easing.Cubic.In, true, explodeTime/2)

  // Camera shake messes with retrofont rendering, so we have to wait to
  // add our text
  this.time.events.add(explodeTime, function() {
    var scroll = this.add.existing(SmallFont(this, text))
    var thanks = this.add.existing(SmallFont(this, 'Thanks for playing!'))
    thanks.alpha = 0
    thanks.x = this.game.width/2
    thanks.y = this.game.height/2

    scroll.anchor.setTo(0, 1)
    scroll.x = 40
    scroll.y = scroll.height + this.game.height + 10
    this.add.tween(scroll)
      .to({y: -10}, scrollTime, null, true,  explodeTime)
      .onComplete.addOnce(function() {
        this.time.events.add(mapTime * 0.75, function() { dust.on = false })
        this.add.tween(map).to({y: 0}, mapTime)
          .start()
          .onComplete.addOnce(function() {
            this.add.tween(thanks).to({alpha: 1}, 500, null, true, 2000)
          }, this)
      }, this)
  }, this)
}


},{"./Scene.js":8,"./WorldMap.js":9,"./entities/SmallFont.js":18}],5:[function(require,module,exports){
module.exports = GameData


var mapData = require('../assets/levels.json')
var levels = mapData.levels


function GameData(game) {
  this.game = game
  this.hiScore = 0
  this.lastCompleted = -1

  this.load()
}


GameData.prototype = {
  mapStart: mapData.start,
  levels: levels,
  _musicOn: true,
  sfxOn: true,


  get musicOn() {
    return this._musicOn
  },

  set musicOn(val) {
    this._musicOn = !!val
    var state = this.game.state.getCurrentState()
    if (!this._musicOn) {
      if (state.soundtrack && typeof state.soundtrack.stop === 'function') {
        state.soundtrack.stop()
      }
    } else {
      if (state.soundtrack && typeof state.soundtrack.play === 'function') {
        state.soundtrack.play('loop')
      }
    }
  },



  clear: function() {
    this.hiScore = 0
    this.lastCompleted = -1
    return this.save()
  },


  load: function() {
    try {
      this.hiScore = localStorage.getItem('hiScore') || 0
      this.lastCompleted = localStorage.getItem('lastCompleted') || -1
      this.lastCompleted = Math.min(this.levels.length - 1, this.lastCompleted)
    } catch(e) {
      this.hiScore = 0
      this.lastCompleted = -1
    }
  },


  save: function() {
    try {
      localStorage.setItem('hiScore', this.hiScore)
      localStorage.setItem('lastCompleted', this.lastCompleted)
    } catch(e) {
      return false
    }
    return true
  },


  checkScore: function(score) {
    if (score > this.hiScore) {
      this.hiScore = score
      this.save()
      return true
    }
    return false
  },


  checkWin: function(key) {
    var id = this.getLevelIndex(key)
    this.lastCompleted = Math.max(id, this.lastCompleted)
    this.save()
  },


  getLevelIndex: function(key) {
    for (var i = 0; i < this.levels.length; i++) {
      if (this.levels[i].key === key) return i
    }
    return -1
  },


  getLevelKey: function(index) {
    return (index >= 0 && index < this.levels.length) ? this.levels[index].key : null
  }
}


},{"../assets/levels.json":2}],6:[function(require,module,exports){
module.exports = LevelSelect

var Scene = require('./Scene.js')

var Button = require('./gui/Button.js')
var Character = require('./entities/heroes/Character.js')
var Reticule = require('./Reticule.js')
var WorldMap = require('./WorldMap.js')
var SmallFont = require('./entities/SmallFont.js')

var ICON_SIZE = 16
var padTop = 25


function LevelSelect() {
  Scene.call(this)
  this.inputEnabled = true
  this.lastPlayed = null
}


LevelSelect.prototype = Object.create(Scene.prototype)



LevelSelect.prototype.create = function() {
  Scene.prototype.create.call(this)

  this.input.keyboard.addKey(Phaser.Keyboard.X)
    .onDown.add(this.exit, this)

  this.walkPoints = []
  this.walkDirection = 1
  this.characterAt = null
  var bg = this.bg = this.add.image(0, 0, 'space')
  var map = this.world.add(new WorldMap(this.game))
  map.y = padTop

  this.scale.setGameSize(map.map.width, map.map.height+padTop)
  this.bg.scale.setTo( Math.max(this.game.width/bg.width, this.game.height/bg.height) )
  bg.scale.setTo( bg.scale.x * 1.25 )
  this.world.setBounds(0, 0, this.game.width, this.game.height)
  this.reticule = new Reticule(this.game)

  this.inputEnabled = true

  var levels = this.game.data.levels
  var start = this.game.data.mapStart
  var symbols = this.make.group()
  this.trail = symbols.addChild(this.make.graphics())

  var startBtn = symbols.addChild(new LevelButton(this, start, 'map-start'))
  startBtn.x = start.mapX
  startBtn.y = start.mapY - padTop
  startBtn.anchor.setTo(0.5, 1)

  if (levels.length === 0) return
  var lastCompleted = this.game.data.lastCompleted
  var lvl = levels[0]

  // This would be easier with BitmapData, but I can't turn off smoothing!
  this.trail.lineStyle(2, 0xfff2cd, 0.6)
  var x = start.mapX
  var y = start.mapY - padTop
  this.trail.moveTo(x, y)
  var dashLength = 5
  var spaceLength = 4
  for (var i = 0; i < levels.length && i <= lastCompleted+1; i++) {
    lvl = levels[i]
    var run = lvl.mapX - x
    var rise = lvl.mapY - y - padTop
    var d = Math.sqrt(run*run + rise*rise)
    var dashX = dashLength * run/d
    var dashY = dashLength * rise/d
    var spaceX = spaceLength * run/d
    var spaceY = spaceLength * rise/d
    while (x !== lvl.mapX) {
      if (Math.abs(x - lvl.mapX) < Math.abs(dashX)) {
        x = lvl.mapX
        y = lvl.mapY - padTop
      } else {
        x += dashX
        y += dashY
      }
      this.trail.lineTo(x, y)
      if (Math.abs(x - lvl.mapX) < Math.abs(dashX)) {
        x = lvl.mapX
        y = lvl.mapY - padTop
      } else {
        x += spaceX
        y += spaceY
      }
      this.trail.moveTo(x, y)
    }
  }

  for (i = 0; i < levels.length; i++) {
    lvl = levels[i]
    if (i <= lastCompleted + 1) {
      var butt
      if (lvl.state === 'RocketLevel') {
        butt = new LevelButton(this, lvl, 'rocket')
      } else {
        var frame = i === lastCompleted + 1 ? 'lvlButtonCurrent' : 'lvlButtonComplete'
        butt = new LevelButton(this, lvl, frame + '1')
        butt.animations.add('blink', [frame + '1', frame + '1', frame + '2'])
        butt.animations.play('blink', 1.5, true)
      }
      butt.x = lvl.mapX
      butt.y = lvl.mapY - padTop
      symbols.addChild(butt)
      if (lvl.state === 'RocketLevel') butt.anchor.setTo(0.5, 1)
    } else if (lvl.state === 'RocketLevel') {
      var icon = this.make.image(lvl.mapX, lvl.mapY-padTop, 'sprites', 'rocket')
      icon.anchor.setTo(0.5, 1)
      icon.width = ICON_SIZE
      icon.height = ICON_SIZE
      symbols.addChild(icon)
    }
  }

  var lastPlayed = this.lastPlayed
  if (lastPlayed !== null) {
    this.characterAt = lastPlayed
    lvl = lastPlayed === -1 ? start : levels[lastPlayed]
  } else if (lastCompleted >=0) {
    this.characterAt = lastCompleted
    lvl = levels[lastCompleted]
  } else {
    this.characterAt = -1
    lvl = start
  }
  this.playerIcon = symbols.addChild(new Character(this))
  this.playerIcon.anchor.setTo(0.5, 1)
  this.playerIcon.x = lvl.mapX
  this.playerIcon.y = lvl.mapY - padTop
  if (lastPlayed > lastCompleted) this.walkTo(lastCompleted)

  var key = lastCompleted >= this.game.data.getLevelIndex('space-boss')
    ? 'floating-eye-damaged' : 'floating-eye'
  var eye = this.add.image(425, -30, 'sprites', key)
  eye.scale.setTo(2)
  map.addAt(eye, map.getChildIndex(map.clouds))
  map.addAt(symbols, map.getChildIndex(map.clouds))

  this.selectIcon = this.add.sprite(0, 0, 'sprites', 'select-icon')
  this.selectIcon.anchor.setTo(0.5)
  this.selectIcon.width = 20
  this.selectIcon.height = 20
  this.selectIcon.exists = false

  this.world.add(this.reticule)

  this.camera.flash(0x180c08, 1000)

  this.time.events.add(800, this.startMusic, this, 'gone')
}


LevelSelect.prototype.update = function() {
  var plyr = this.playerIcon
  var pts = this.walkPoints
  if (pts.length > 0) {
    plyr.animations.play('walk')
    var dt = this.time.physicsElapsed
    var vel = 200
    var p = pts[pts.length - 1]
    var dx = p.mapX - plyr.x
    plyr.scale.x = dx >= 0 ? 1 : -1
    var dy = p.mapY - padTop - plyr.y
    var d = Math.sqrt(dx*dx + dy*dy)
    if (d <= dt*vel) {
      plyr.x = p.mapX
      plyr.y = p.mapY - padTop
      this.characterAt = this.game.data.getLevelIndex(p.key)
      this.walkPoints.pop()
    } else {
      if (this.characterAt % 1 === 0) this.characterAt += this.walkDirection * 0.5
      plyr.x += vel*dt * dx/d
      plyr.y += vel*dt * dy/d
    }
  } else {
    plyr.animations.stop()
    plyr.frameName = 'p1-stand'
  }
}


LevelSelect.prototype.exit = function() {
  this.state.start('Menu')
}


LevelSelect.prototype.walkTo = function(index) {
  var at = this.characterAt
  var pts = []
  if (index === at) return
  var dir = index >= at ? 1 : -1
  this.walkDirection = dir
  if (index === -1) {
    pts.push(this.game.data.mapStart)
    index++
  }
  if (at % 1 === 0.5) at += 0.5 * dir
  for (; index !== at; index -= dir) {
    pts.push(this.game.data.levels[index])
  }
  if (at === -1) {
    pts.push(this.game.data.mapStart)
  } else {
    pts.push(this.game.data.levels[at])
  }
  this.walkPoints = pts
}


function LevelButton(state, level, frame) {
  Button.call(this, state, 'sprites', frame, this.callback, this)
  this.state = state
  this.level = level
  this.width = ICON_SIZE
  this.height = ICON_SIZE
}


LevelButton.prototype = Object.create(Button.prototype)


LevelButton.prototype.inputOver = function() {
  Button.prototype.inputOver.call(this)
  this.state.selectIcon.exists = true
  this.state.selectIcon.x = this.x
  this.state.selectIcon.y = this.y + padTop
}


LevelButton.prototype.inputOut = function() {
  Button.prototype.inputOut.call(this)
  this.state.selectIcon.exists = false
}


LevelButton.prototype.callback = function() {
  if (this.state.inputEnabled === false) return
  this.state.inputEnabled = false
  this.state.camera.onFadeComplete.addOnce(fadeCb, this)
  this.state.camera.fade(0x180c08, 800, true)
  var i = this.game.data.getLevelIndex(this.level.key)
  this.state.walkTo(i)
  this.state.lastPlayed = i
}


function fadeCb() {
  this.state.state.start(this.level.state, true, false, this.level.key)
}


},{"./Reticule.js":7,"./Scene.js":8,"./WorldMap.js":9,"./entities/SmallFont.js":18,"./entities/heroes/Character.js":32,"./gui/Button.js":40}],7:[function(require,module,exports){
module.exports = Reticule


function Reticule(game) {
  Phaser.Image.call(this, game, game.world.width/2, game.world.height/2, 'sprites', 'reticule')
  this.anchor.setTo(0.5)
  this.animations.add('die',
    Phaser.Animation.generateFrameNames('reticule', 1, 5), 38, false)

  this._follow = null
  this._xClamp = 0
  this._yClamp = 0
  this._xRel = 40
  this._yRel = 0
}


Reticule.prototype = Object.create(Phaser.Image.prototype)


Reticule.prototype.follow = function(target, xDistance, yDistance) {
  this._follow = target
  this._xClamp = xDistance
  this._yClamp = yDistance
}


Reticule.prototype.update = function() {
  if (this._follow) return this.updateFollow()
  return this.updateNormal()
}


Reticule.prototype.updateFollow = function() {
  var p1 = this._follow
  var xClamp = this._xClamp
  var yClamp = this._yClamp
  var game = this.game
  var clamp = Phaser.Math.clamp
  if (game.input.mouse.locked) {
    var x = this._xRel
    var y = this._yRel
    x += game.input.mousePointer.movementX * game.scale.scaleFactor.x
    y += game.input.mousePointer.movementY * game.scale.scaleFactor.y
    x = clamp(x, -xClamp, xClamp)
    y = clamp(y, -yClamp, yClamp)
    this.x = clamp(p1.world.x + x, 0, game.world.width)
    this.y = clamp(p1.world.y + y, 0, game.world.height)
    this._xRel = this.x - p1.world.x
    this._yRel = this.y - p1.world.y
    game.input.mousePointer.resetMovement()
  } else {
    if (!game.retFlag) {
      this.exists = game.input.mousePointer.withinGame
      game.retFlag = game.input.mousePointer.withinGame
    }
    this.x = game.input.mousePointer.x + game.camera.x
    this.y = game.input.mousePointer.y + game.camera.y
  }
}


Reticule.prototype.updateNormal = function() {
  var game = this.game
  var clamp = Phaser.Math.clamp
  if (game.input.mouse.locked) {
    var x = this.x
    var y = this.y
    x += game.input.mousePointer.movementX * game.scale.scaleFactor.x
    y += game.input.mousePointer.movementY * game.scale.scaleFactor.y
    x = clamp(x, 0, game.world.width)
    y = clamp(y, 0, game.world.height)
    this.x = x
    this.y = y
    game.input.mousePointer.resetMovement()
  } else {
    if (!game.retFlag) {
      this.exists = game.input.mousePointer.withinGame
      game.retFlag = game.input.mousePointer.withinGame
    }
    this.x = game.input.mousePointer.x
    this.y = game.input.mousePointer.y
  }
}

},{}],8:[function(require,module,exports){
module.exports = Scene


var NON_DIEGETIC = {
  "death": true,
  "victory-jingle": true
}


function Scene() {
  Phaser.State.call(this)
  this.playDiegetic = true
  this.bulletTime = 1
  this.soundtrack = null
}


Scene.prototype = Object.create(Phaser.State.prototype)


Scene.prototype.create = function() {
  this.playDiegetic = true
  this.soundPool = []
  for(var i = 0; i < 30; i++) this.soundPool.push(this.add.sound('reload'))
}


Scene.prototype.playSound = function(key, randomize, useBulletTime, lock, repeat) {
  if (!this.game.data.sfxOn || !this.cache.isSoundDecoded(key)) { return null }
  if (!this.playDiegetic && !NON_DIEGETIC[key]) { return null }
  lock = lock || false
  repeat = repeat || false
  if (useBulletTime === undefined) useBulletTime = true

  var sound = null

  for (var i = 0; i < this.soundPool.length; i++) {
    if (!this.soundPool[i].isPlaying) {
      sound = this.soundPool[i]
      break
    }
  }

  if (!sound) {
    for (i = 0; i < this.soundPool.length; i++) {
      if (!this.soundPool[i].isLocked) {
        sound = this.soundPool[i]
        break
      }
    }
  }

  if (!sound) return null

  sound.volume = 1

  sound.key = key
  sound.isLocked = lock
  sound.useBulletTime = useBulletTime
  sound.play('', 0, 1, repeat, true)

  if (sound._sound && sound.usingWebAudio) {
    if (useBulletTime)
      sound._sound.playbackRate.value = this.bulletTime
    else
      sound._sound.playbackRate.value = 1

    if (randomize)
      sound._sound.detune.value = Math.random() * -randomize
    else
      sound._sound.detune.value = 0
  }

  return sound
}


Scene.prototype.startMusic = function(track) {
  if (!this.game.data.musicOn) { return null }
  this.soundtrack = this.sound.addSprite(track)
  if (!this.soundtrack) return null
  if (this.soundtrack.get('intro')) {
    var intro = this.soundtrack.play('intro')
    intro.onMarkerComplete.addOnce(function () { this.soundtrack.play('loop') }, this)
  } else {
    this.soundtrack.play('loop')
  }
}


},{}],9:[function(require,module,exports){
module.exports = WorldMap


function WorldMap(game) {
  Phaser.Group.call(this, game)
  this.radius = 266*2
  this.xMid = 72*2
  this.yMid = 281*2
  this.walkPoints = []
  this.walkDirection = 1
  this.characterAt = null

  this.map = this.create(0, 0, 'world-map')
  this.map.scale.setTo(2)

  this.ocean = this.addChild(game.make.tileSprite(0, 0, this.width, this.height, 'sprites', 'ocean1'))
  this.ocean.animations.add('wave', Phaser.Animation.generateFrameNames('ocean', 1, 5))
  this.ocean.animations.play('wave', 2, true)

  this.ocean.mask = this.addChild(game.make.graphics())
  this.ocean.mask.beginFill(0xffffff)
  this.ocean.mask.drawCircle(this.xMid, this.yMid, this.radius*2-2)

  this.bringToTop(this.map)

  function rotate() {
    this.rotation += Math.PI * 0.01 / this.pivot.y
  }
  this.clouds = this.addChild(game.make.group())
  this.clouds.createMultiple(20, 'sprites', ['cloud1', 'cloud2'], true)
  this.clouds.forEach(function(cloud) {
    var r = 0.99 * (this.radius * 2/3 * Math.random() + this.radius/3)
    cloud.anchor.setTo(0.5)
    cloud.x = this.xMid
    cloud.y = this.yMid
    cloud.pivot.setTo(0, r)
    cloud.rotation = Math.random() * 2*Math.PI
    cloud.update = rotate
  }, this)
}


WorldMap.prototype = Object.create(Phaser.Group.prototype)


},{}],10:[function(require,module,exports){
module.exports = Arcade


var Level = require('../level/Level.js')
var SETTINGS = ['desert']

function Arcade() {
  Level.call(this)
}


Arcade.prototype = Object.create(Level.prototype)

Arcade.prototype.init = function() {
  Level.prototype.init.call(this, '_arcade')
}

Arcade.prototype.create = function() {
  var setting = Phaser.ArrayUtils.getRandomItem(SETTINGS)
  this.map.properties = this.map.properties || {}
  this.map.properties.setting = setting

  Level.prototype.create.call(this)

  var hsMod = this.gameOverScreen.hsMod = this.add.group()
  var character = hsMod.create(0, 0, 'sprites', 'p1-victory')
  character.anchor.setTo(0, 0.5)
  character.scale.setTo(4)
  var hs = hsMod.hs = this.entities.smallFont(this, 'New High Score!')
  hs.anchor.setTo(0, 0.5)
  hs.scale.setTo(2)
  hs.x = character.width + 5
  hs.y = 0
  hsMod.addChild(hs)
  hsMod.x = -hsMod.width/2
  hsMod.y = 0
  this.gameOverScreen.addChild(hsMod)
  this.gameOverScreen.hsMod = hsMod

  this.maxTime = 20000
  this.timer = this.maxTime
  this.level = 1
  this.maxEnemyWidth = 100
  this.nextDrop = 5 + Math.floor(Math.random() * 20)

  this.enemyConfig = require('./enemyConfig.js')()
  this.enemyChance = this.enemyConfig.reduce(function(sum, enemy) {
    return sum + enemy.chance
  }, 0)
  this.itemConfig = require('./itemConfig.js')()
  this.itemChance = this.itemConfig.reduce(function(sum, item) {
    return sum + item.chance
  }, 0)

  this._score = 0
  this.score = this.entities.smallFont(this, this._score + '')
  this.score.anchor.setTo(1, 0)
  this.score.x = this.game.width * 0.98
  this.score.y = this.game.height * 0.03
  this.hud.add(this.score)

  for (var type in this.enemyPools) {
    var pool = this.enemyPools[type].children
    for (var i = 0; i < pool.length; ++i) {
      pool[i].events.onKilled.add(this.getDrop, this)
    }
  }

  this.generatEnemy()
}


Arcade.prototype.update = function() {
  Level.prototype.update.call(this)

  this.timer -= this.time.physicsElapsedMS
  if (this.timer < 0) this.generatEnemy()
  var noEnemy = true
  for (var i = 0; i < this.enemyConfig.length; i++) {
    if (this.enemyPools[this.enemyConfig[i].type].getFirstAlive()) {
      noEnemy = false
      break
    }
  }
  if (noEnemy) { this.timer = Math.min(this.timer, 400) }
}


Arcade.prototype.gameOver = function() {
  Level.prototype.gameOver.call(this)

  var hsMod = this.gameOverScreen.hsMod
  var x = hsMod.x
  hsMod.x = this.game.width + 20
  if (this.game.data.checkScore(this._score)) {
    this.time.events.add(800, function() {
      this.gameOverScreen.hsMod.hs.font.text = 'New High Score:\n\n' + this._score
      this.playSound('victory-jingle', undefined, undefined, true)
      this.gameOverScreen.hsMod.x = x
      this.gameOverScreen.addChild(this.frag)
      this.gameOverScreen.addChild(this.glass)
      this.time.events.loop(10, function() { hsMod.hs.tint = (hsMod.hs.tint + 10) % 0xffffff })
      this.time.events.loop(200, function() {
        this.frag.x = Math.random() * this.game.width - this.game.width/2
        this.frag.y = Math.random() * this.game.height - this.game.height/2
        this.frag.explode(1000, 5)
        this.glass.x = Math.random() * this.game.width - this.game.width/2
        this.glass.y = Math.random() * this.game.height - this.game.height/2
        this.glass.explode(1000, 10)
      }, this)
    }, this)
  }    
}


Arcade.prototype.exit = function() {
  this.state.start('Menu')
}


Arcade.prototype.winCondition = function() {
  return false
}


Arcade.prototype.generatEnemy = function() {
  var width = (Math.random() * this.maxEnemyWidth + this.maxEnemyWidth)/2
  var x = Math.random() * (this.world.width - width - 10) + width/2 + 5
  var y = -width/2
  var roll = Math.floor(Math.random() * (Math.min(this.level, this.enemyChance)))
  for (var i = 0, acc = 0; i < this.enemyConfig.length; i++) {
    acc += this.enemyConfig[i].chance
    if (roll < acc) {
      var spawnData = this.enemyConfig[i]
      break
    }
  }
  var enemy = this.enemyPools[spawnData.type].spawn(x, y, width)

  if (!enemy) return

  this.maxEnemyWidth = Math.min(this.maxEnemyWidth + 4, 256)

  enemy.body.velocity.x = spawnData.velx * this.bulletTime
  enemy.body.velocity.y = spawnData.vely * this.bulletTime

  this.maxTime *= 0.98
  this.timer = this.maxTime
  this.level++

  enemy.alpha = 0.7
  var body = this.physics.p2.removeBody(enemy.body)
  var self = this
  this.add.tween(body).to( {y: enemy.height/2 + 2}, 1500, 'Back.easeInOut', true)
    .onComplete.addOnce(function() {
      self.physics.p2.addBody(body)
      enemy.alpha = 1
    })
}

Arcade.prototype.getDrop = function(enemy) {
  this._score += Math.ceil(enemy.width) * 10
  this.score.font.text = '' + this._score

  if (--this.nextDrop !== 0) return null
  this.nextDrop = 5 + Math.floor(Math.random() * 20)

  var roll = Math.floor(Math.random() * this.itemChance)
  for (var i = 0, acc = 0; i < this.itemConfig.length; i++) {
    acc += this.itemConfig[i].chance
    if (roll < acc) {
      var type = this.itemConfig[i].type
      var drop = this.addEntity({x: 0, y: 0, type: type})
      if (type === 'shoes') {
        this.itemChance -= this.itemConfig[i].chance
        this.itemConfig[i].chance = 0
      }
      drop.reset(enemy.x, enemy.y)
      return drop
    }
  }
}

},{"../level/Level.js":46,"./enemyConfig.js":11,"./itemConfig.js":12}],11:[function(require,module,exports){
module.exports = function() {
  return [
    {
      'type': 'enemy',
      'chance': 6,
      'velx': 90,
      'vely': 0
    },
    {
      'type': 'hex',
      'chance': 4,
      'velx': 120,
      'vely': 120
    },
    {
      'type': 'seeker',
      'chance': 2,
      'velx': 0,
      'vely': 0
    }
  ]
}

},{}],12:[function(require,module,exports){
module.exports = function() {
  return [
    {
      type: 'repel',
      chance: 2
    },
    {
      type: 'shotgun',
      chance: 1
    },
    {
      type: 'slomo',
      chance: 8,
    },
    {
      type: 'shield',
      chance: 2
    },
    {
      type: 'dblPistol',
      chance: 1
    },
    {
      type: 'shoes',
      chance: 2
    }
    /*
        {
            type: 'grenade',
            chance: 1
        },
        */
  ]
}

},{}],13:[function(require,module,exports){
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
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL

    window.addEventListener('keydown', function(e) {
      if ( e.keyCode !== Phaser.Keyboard.F || !e.shiftKey) return
      game.scale.isFullScreen ? game.scale.stopFullScreen() : game.scale.startFullScreen()
    })

    game.renderer.renderSession.roundPixels = true
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
      filter.frequency.value = 60
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
  game.canvas.addEventListener('click', grabPointer, true)
}

},{}],14:[function(require,module,exports){
module.exports = BrkPlat

// TODO: This is a hack to let us draw a Tiled polyline to the
// world and link it to a P2.Body. A better way would be to make a
// sprite and enable pysics on it and add give it the body made by
// P2.converCollisionObjects, but the body ends up offset from the
// sprite and I don't know how to fix it. So for now we take the body
// and an image, stuff them in a wrapper and add them to the world
// seperatele.


function BrkPlat(state, data, body, drop) {
  this.body = body
  this.fxmask = data.mask
  this.drop = drop
  this.state = state

  var points = data.points
  this.x = points.cx
  this.y = points.cy
  var w = data.mask.width
  var h = data.mask.height
  var texture = new Phaser.BitmapData(state.game, null, w, h)

  var ctx = texture.ctx

  texture.fill(98, 202, 222, 0.2)
  ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'
  ctx.fillRect(0, h/2, w, h*3/4)

  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
  ctx.beginPath()
  ctx.moveTo(w/2 + h - 15, 0)
  ctx.lineTo(w/2 + h + 15, 0)
  ctx.lineTo(w/2 - h + 15, h)
  ctx.lineTo(w/2 - h - 15, h)
  ctx.fill()
    

  //texture.beginFill(0x62CADE)
    
  //texture.lineStyle(2, 0x208DDE)

  //texture.lineStyle(2, 0xCDDEE6, 0.4)
  var p1, p2, i
  for (i = 0; i < points.length; i++) {
    p1 = points[i]
    if (i === points.length - 1) p2 = points[0]
    else p2 = points[i+1]
    if ( h/2 > p2[1] - (p2[0]-w/2)*(p2[1]-p1[1])/(p2[0]-p1[0]) ) {
      texture.ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)'
    } else {
      texture.ctx.strokeStyle = 'rgba(0, 0, 0, 0.6)'
    }
    texture.line(p1[0], p1[1], p2[0], p2[1], null, 2)
  }
  texture.blendDestinationIn()
  texture.copy(data.mask, null, null, null, null, w/2, h/2)
    
  var img = new Phaser.Image(state.game, points.cx, points.cy, texture)
  img.anchor.setTo(0.5)

  state.paintFX(img)
  texture.destroy()
  img.destroy()
}


BrkPlat.prototype.break = function() {
  this.state.paintFX(this.fxmask)
  this.state.time.events.add(20, shatter, this)
}


function shatter() {
  if (this.drop instanceof Phaser.Sprite) {
    this.drop.reset(this.x, this.y)
  }
  this.state.FXMaskErase(this.fxmask)
  this.body.destroy()
  this.state.glass.x = this.x
  this.state.glass.y = this.y
  this.state.time.events.add(40, sprinkle , this)
  this.state.playSound('breaking-glass', 100)
}


function sprinkle() {
  this.state.glass.explode(2000, 25)
}

},{}],15:[function(require,module,exports){
module.exports = Bullet


var SPEED = 500
var BODY_RADIUS = 4


function Bullet(state, x, y, texture) {
  Phaser.Sprite.call(this, state.game, x, y, 'sprites')
  if (texture) this.defaultFrame = texture
  this.frameName = this.defaultFrame
  Phaser.Sprite.prototype.kill.call(this)

  this.state = state

  state.game.physics.p2.enable(this)
  this.body.setCircle(BODY_RADIUS)
  this.body.data.gravityScale = 0
  this.body.collideWorldBounds = false
  this.autoCull = true
  this.checkWorldBounds = true
  this.outOfBoundsKill = true
  this.body.mass = 0.6
  this.body.setCollisionGroup(state.bulletsCG)
  this.body.collides([state.enemiesCG, state.platformsCG], this.hit, this)
}


Bullet.prototype = Object.create(Phaser.Sprite.prototype)

Bullet.prototype.attack = 1
Bullet.prototype.defaultFrame = 'bullet'
Bullet.prototype.speed = SPEED


Bullet.prototype.hit = function() {
  this.kill()
  this.state.frag.x = this.x
  this.state.frag.y = this.y
  this.state.frag.explode(40, 5)
}


Bullet.prototype.fire = function(x, y, theta, speedBonus) {
  this.frameName = 'muzzle-flare'
  this.game.time.events.add(40, function() {
    this.frameName = this.defaultFrame
  }, this)
  speedBonus = speedBonus || 1
  var speed = this.speed * speedBonus
  this.reset(x, y)
  this.body.rotation = theta
  this.body.velocity.x = Math.cos(theta) * speed
  this.body.velocity.y = Math.sin(theta) * speed
} 


},{}],16:[function(require,module,exports){
module.exports = Gun


var Item = require('./Item.js')


function Gun(state, data, BulletClass) {
  Item.call(this, state, data)

  this.state = state
  this.rate = data.rate || 100
  this.throttle = data.throttle || 0
  this.auto = data.auto || false
  this.spread = data.spread || 0
  this.accuracy = data.accuracy || 0
  this.speedMul = data.speedMul || 1
  this.speedVar = data.speedVar || 0
  this.sounds.pickup = data.equipSound || 'reload'
  this.sounds.shot = data.shotSound || 'gunshot'
  this.sounds.dryFire = data.dryFire || 'dry-fire'
  this.clipSize = data.clipSize || 3
  this.bulletsPerShot = data.bulletsPerShot || 1
  this.bulletType = BulletClass
  this. bulletTexture = data.bulletTexture

  this._available = this.clipSize

  this.shotThrottle = 0

  this.clip = new Phaser.Group(state.game)
  state.bullets.add(this.clip)

  for (var i = 0; i < this.clipSize * this.bulletsPerShot; ++i) {
    var bullet = new BulletClass(state, 0, 0, this.bulletTexture)
    this.clip.add(bullet)
  }
}


Gun.prototype = Object.create(Item.prototype)


Object.defineProperty(Gun.prototype, 'available', {
  get: function() {
    return this._available
  }
})


Gun.prototype.pickup = function(_, playerBody) {
  this.lifespan = 0
  Item.prototype.pickup.call(this)
  playerBody.sprite.equip(this)
}


Gun.prototype.fire = function(newShot) {
  if (newShot && this._available < 1) {
    this.state.playSound('dry-fire', 400)
    return false
  }
  if (!newShot && (!this.auto || this.available < 1 || this.shotThrottle > 0)) {
    return false
  }


  this.shotThrottle = this.throttle
  this._available = Math.floor(this._available-1)

  var theta = this.rotation
  var x = this.world.x + (this.width/2 * Math.cos(theta))
  var y = this.world.y + (this.width/2 * Math.sin(theta))

  for (var i = 0; i < this.bulletsPerShot; ++i) {
    var bullet = this.clip.getFirstDead()
    if (!bullet) {
      bullet = new this.bulletType(this.state, 0, 0, this.bulletTexture)
      this.clip.addChild(bullet)
    }
    var speedBonus = this.speedMul * (1 + (Math.random()*2 - 1)*this.speedVar)
    var bulletTheta = theta + (this.spread/this.clipSize *i - this.spread/2)
    bulletTheta += (Math.random()*2 - 1)*this.accuracy
    var r = this.state.reticule
    bullet.fire(x, y, bulletTheta, speedBonus, r.x, r.y)
  }

  var dir = theta > Math.PI/2 || theta < -Math.PI/2 ? 2 : -2
  this.state.throwShell(this.world.x, this.world.y, dir)

  this.state.playSound(this.sounds.shot, 400)
  this.game.camera.shake(0.01, 70)
  return true
}


Gun.prototype.update = function() {
  var dt = this.game.time.physicsElapsedMS
  if (this.shotThrottle > 0) this.shotThrottle -= dt
  var old = Math.floor(this._available)
  this._available = Math.min(this._available + dt/this.rate, this.clipSize)
  if (old !== Math.floor(this._available)) {
    this.state.playSound('click')
  }
}


},{"./Item.js":17}],17:[function(require,module,exports){
// Time in ms before item disappears.
var LIFESPAN = 5000

module.exports = Item


function Item(state, data) {
  this.state = state
  var x = data.x || 0
  var y = data.y || 0
  var texture = data.texture

  Phaser.Sprite.call(this, state.game, x, y, 'sprites')
  this.frameName = texture

  this.pulse = state.add.tween(this)
  this.throb = state.add.tween(this.scale)
  this.sounds = {}

  this.pulse.to({alpha: 0.2}, 100, null, false, this._lifespan - 750, null, true)
  this.throb.to({x: 1.15, y: 1.15}, 850, Phaser.Easing.Quadratic.In, false, null, -1)

  state.physics.p2.enable(this)

  this.body.clearShapes()
  var s = this.body.addRectangle(this.width, this.height)
  this.playerSensor = this.body.addRectangle(this.width/2, this.height/2)
  this.playerSensor.sensor = true
  this.body.collideWorldBounds = false

  this.body.onBeginContact.add(this.shouldPickup, this)

  this.body.setCollisionGroup(state.itemsCG)
  this.body.setMaterial(state.itemMaterial)

  // Collide with enemies so space boss will blink if items touch it's eye
  this.body.collides(state.playersCG, null, null, this.playerSensor)
  this.body.collides([state.platformsCG, state.enemiesCG,
    state.physics.p2.boundsCollisionGroup], null, null, s)

  // Necessary, maybe a bug in Phaser.
  this.body.removeCollisionGroup(state.playersCG, null, s)

  this.lifespan = this._lifespan

  state.items.add(this)
}


Item.prototype = Object.create(Phaser.Sprite.prototype)

Item.prototype._lifespan = LIFESPAN


Item.prototype.pickup = function() {
  if (this.sounds.pickup) this.state.playSound(this.sounds.pickup)
  this.pulse.stop()
  this.throb.stop()
  this.alpha = 1
  this.scale.setTo(1)
  this.body.destroy()
  this.x = 0
  this.y = 0
}


Item.prototype.reset = function(x, y, health) {
  this.lifespan = this._lifespan
  this.pulse.start()
  this.throb.start()
  Phaser.Sprite.prototype.reset.call(this, x, y, health)
}


Item.prototype.shouldPickup = function(targetBody, __, shape) {
  if (shape === this.playerSensor) this.pickup(shape, targetBody)
}

},{}],18:[function(require,module,exports){
module.exports = SmallFont


function SmallFont(state, text) {
  var font = SmallFont.Text(state, text)
  var img = state.make.image(0, 0, font)
  img.font = font
  img.anchor.setTo(0.5)
  img.tint = SmallFont.colors.PLAIN
  img.update = update
  return img
}


function update() {
  this.font.buildRetroFontText()
}


SmallFont.Text = function(state, text) {
  text = text || ''

  var font = state.make.retroFont('font-small', 8, 8,
    Phaser.RetroFont.TEXT_SET2)
  font.multiLine = true
  font.text = text
  return font
}


SmallFont.colors = {
  HILIGHT: 0x62cade,
  PLAIN: 0xf6eeee
}

},{}],19:[function(require,module,exports){
module.exports = Spaceship


function Spaceship(state, ctlr) {
  // Spawn off screen to hide flame particles
  Phaser.Sprite.call(this, state.game, -100, 0)
  state.physics.p2.enable(this)
  this.icon = new Phaser.Sprite(state.game, 0, 0, 'sprites', 'rocket')
  this.addChild(this.icon).anchor.setTo(0.5)

  this.state = state
  this.ctlr = ctlr
  this.flame = state.bgItems.addChild(state.make.emitter(0, 0, 200))

  this.flame.makeParticles('sprites',
    Phaser.Animation.generateFrameNames('flame', 1, 4))
  this.flame.setScale(0.25, 1, 0.25, 1, 200)
  this.flame.setAlpha(1, 0.2, 400)
  this.flame.setRotation(0)
  this.flame.lifespan = 400
  this.flame.setXSpeed(-40, 40)
  this.flame.setYSpeed(100, 140)

  var h = this.height * 0.65
  var w = this.width * 0.5
  this.body.setRectangle(w, h)
  this.body.data.gravityScale = 0
  this.body.setMaterial(state.playerMaterial)
  this.body.setCollisionGroup(state.playersCG)
  this.body.collides(state.enemiesCG, this.damage, this)
  this.body.collides([state.itemsCG, state.physics.p2.boundsCollisionGroup])
  this.body.fixedRotation = true

  this.game.time.events.loop(40, function() {
    this.body.offset.x = Math.random() * 1.25 - 0.625
    this.body.offset.y = Math.random() * 1.25 - 0.625
  }, this)

  this.maxHealth = 3
  this.health = this.maxHealth
  this.inputDisabled = false
  this.invincible = false
}


Spaceship.prototype = Object.create(Phaser.Sprite.prototype)

var max = 200
Spaceship.prototype.maxSpeed = max
Spaceship.prototype.acceleration = max/0.35


Spaceship.prototype.update = function() {
  this.ctlr.update()

  var vel = this.body.velocity
  var speed = this.maxSpeed
  var accel = this.acceleration * this.game.time.physicsElapsed
  var right = this.ctlr.right
  var left = this.ctlr.left
  var up = this.ctlr.up
  var down = this.ctlr.down

  if (this.inputDisabled) { return }
  if (up && !down) {
    vel.y = Math.max(vel.y - accel, -speed)
  } else if (down && !up) {
    vel.y = Math.min(vel.y + accel, speed)
  } else if (vel.y !== 0) {
    vel.y = vel.y > 0 ? Math.max(vel.y - accel, 0) : Math.min(vel.y + accel, 0)
  }

  if (right && !left) {
    vel.x = Math.min(vel.x + accel, speed)
  } else if (left && !right) {
    vel.x = Math.max(vel.x - accel, -speed)
  } else if (vel.x !== 0) {
    vel.x = vel.x > 0 ? Math.max(vel.x - accel, 0) : Math.min(vel.x + accel, 0)
  }

  this.rotation =  Math.PI/12 * vel.x/speed

  var w = this.width/4 - 1
  var x = this.x - w
  if (down) this.flame.setScale(0.25, 0.5, 0.25, 0.5, 200)
  else this.flame.setScale(0.25, 1, 0.25, 1, 200)
  this.flame.y = this.y + this.height/2 - 2 - this.body.offset.y
  if (vel.y <= 0) this.flame.setYSpeed(-vel.y+100, -vel.y+140)
  for (var i = 0; i < 3; ++i) {
    this.flame.x = x + w*i
    this.flame.emitParticle()
    if (!down) this.flame.emitParticle()
  }
}


Spaceship.prototype.damage = function() {
  this.state.camera.shake(0.01, 200)
  if (this.health <= 0 || this.invincible) { return }
  this.health -= 1
  if (this.health <= 2/3 * this.maxHealth) { this.icon.frameName = 'rocket-damaged' }
  if (this.health <= 1/3 * this.maxHealth) { this.icon.frameName = 'rocket-damaged2' }
  if (this.health <= 0) {
    this.kill()
    return
  }
  this.invincible = true
  var tween = this.state.add.tween(this.icon)
  tween.to({alpha: 0.4}, 100, null, false, 0, -1, true)
  tween.start()

  this.state.time.events.add(2400, function() {
    tween.stop()
    this.icon.alpha = 1
    this.invincible = false
  }, this)
}


Spaceship.prototype.kill = function() {
  this.body.removeCollisionGroup(this.game.physics.p2.boundsCollisionGroup)
  this.inputDisabled = true
  this.body.collideWorldBounds = false
  this.alive = false
  this.state.bgItems.addChild(this)
  this.state.playSound('death')
  var ev = this.game.time.events
  var loop = ev.loop(111, function() {
    this.state.glass.x = this.x
    this.state.glass.y = this.y
    this.state.glass.explode(400, 10)
    this.state.frag.x = this.x
    this.state.frag.y = this.y
    this.state.frag.explode(400, 10)
    this.state.explode(this.x+Math.random()*40-20, this.y+Math.random()*40-20, Math.random()*60+20)
  }, this)
  ev.add(1200, function() {
    ev.remove(loop)
    this.icon.frameName = 'p1-die2'
  }, this)
}


},{}],20:[function(require,module,exports){
module.exports = Trigger


function Trigger(state, data) {
  Phaser.Rectangle.call(this, data.x - data.width/2, data.y - data.height/2, data.width, data.height)
  if (state.trigger) throw new Error('Only one trigger allowed per state')
  if (data.properties) {
    this.down = data.properties.down
  }
  state.trigger = this
}


Trigger.prototype = Object.create(Phaser.Rectangle.prototype)


},{}],21:[function(require,module,exports){
var Item = require('../Item.js')

module.exports = Buff


function Buff(state, data) {
  Item.call(this, state, data)
  // We will pass to our Level's  buff array which is updated each loop.
  this.buff = Object.create(this.buffProto)
  this.buff.sprite = this
  this.buff.state = state
  this.lifespan = this._lifespan
}


Buff.prototype = Object.create(Item.prototype)

Buff.prototype.buffProto = {
  duration: 0,
  start: function() {},
  update: function() {},
  stop: function() {}
}


Buff.prototype.pickup = function(_, playerBody) {
  Item.prototype.pickup.call(this)
  var buff = this.buff
  buff.target = playerBody.sprite

  if (buff.duration !== 0) {
    buff.timeLeft = buff.duration
    buff.state.buffs.push(buff)
  }

  if (typeof buff.start === 'function') buff.start(buff.target)

  buff.sounds = this.sounds
  return buff
}

},{"../Item.js":17}],22:[function(require,module,exports){
module.exports = Repel


var Buff = require('./Buff.js')


var TEXTURE = 'repel1'


function Repel(state, data) {
  data.texture = TEXTURE
  Buff.call(this, state, data)
  this.sounds.pickup = 'repel-pickup'
  this.sounds.stop = 'repel-stop'
  this.animations.add('rest',
    Phaser.Animation.generateFrameNames('repel', 1, 4), 5, true)
  this.animations.play('rest')
}


Repel.prototype = Object.create(Buff.prototype)


Repel.prototype.buffProto = {
  duration: 15000,

  start: function() {
    this.targets = []
    this.state.physics.p2.enable(this.sprite)
    this.sprite.animations.stop()
    this.sprite.frameName = 'repel-aura'
    this.sprite.lifespan = 0
    var body = this.sprite.body
    var r = this.target.height*3
    this.r = r
    this.rInner = this.target.height
    var shape = body.setCircle(r)
    body.setCollisionGroup(this.state.platformsCG)
    body.collides(this.state.enemiesCG)
    body.fixedRotation = true
    body.static = true
    shape.sensor = true
    body.onBeginContact.add(this.addTarget, this)
    body.onEndContact.add(this.removeTarget, this)
    this.sprite.height = 8
    this.sprite.width = 8
    this.sprite.alpha = 0.4
    this.state.add.tween(this.sprite)
      .to({width: r, height: r}, 500, Phaser.Easing.Quadratic.In, true)
      .loop()
    this.overFlag = false
  },

  stop: function() {
    this.sprite.destroy()
  },

  update: function() {
    if (this.timeLeft < 800 && !this.overFlag) {
      this.state.playSound(this.sounds.stop, undefined, false)
      this.overFlag = true
    }
    this.sprite.body.x = this.target.world.x
    this.sprite.body.y = this.target.world.y

    this.targets.forEach(function(trgt) {
      var dist = this.sprite.world.distance(trgt.world)
      var angle = this.sprite.world.angle(trgt.world)
      var normDist = (dist - trgt.width/2 - this.rInner) / (this.r - this.rInner)
      normDist = Math.max(normDist, 0.0001)
      var mag = 1 / (normDist)
      mag  = this.state.physics.p2.pxm(-mag)
      mag *= trgt.body.mass
      trgt.body.applyForce(
        [mag * Math.cos(angle), mag * Math.sin(angle)],
        trgt.world.x, trgt.world.y)
    }, this)
  },

  addTarget: function(body) {
    var sprite = body.sprite
    for (var i = 0; i < this.targets.length; i++)
      if (sprite === this.targets[i]) return
    this.targets.push(sprite)
  },

  removeTarget: function(body) {
    var sprite = body.sprite
    for (var i = this.targets.length-1; i >= 0; i--)
      if (sprite === this.targets[i]) this.targets.splice(i, 1)
  }
}

},{"./Buff.js":21}],23:[function(require,module,exports){
module.exports = Shield


var Buff = require('./Buff.js')


function Shield(state, data) {
  data.texture = 'shield'
  Buff.call(this, state, data)
  this.sounds.pickup = 'shield-pickup'
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

    this.sprite = this.state.add.sprite(0, 0, target.character.texture)

    this.alpha = 0.7
    this.scale = 1.3

    this.sprite.anchor.setTo(0.5)
    this.sprite.tint = 0x62cade
    this.sprite.frame = target.character.frame
    this.sprite.width = target.character.width * 1.3
    this.sprite.height = target.character.height * 1.3
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
      this.state.playSound('block')
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

},{"./Buff.js":21}],24:[function(require,module,exports){
module.exports = Shoes


var Buff = require('./Buff.js')


function Shoes(state, data) {
  data.texture = 'shoes'
  Buff.call(this, state, data)
  this.sounds.pickup = 'shoe-pickup'
}


Shoes.prototype = Object.create(Buff.prototype)


Shoes.prototype.buffProto = {
  start: function() {
    this.sprite.destroy()
    this.target.speedBonus *= 1.35
  }
}

},{"./Buff.js":21}],25:[function(require,module,exports){
module.exports = Slomo


var Buff = require('./Buff.js')


function Slomo(state, data) {
  data.texture = 'slomo'
  Buff.call(this, state, data)
}


Slomo.prototype = Object.create(Buff.prototype)


Slomo.prototype.buffProto = {
  duration: 6500,
  rate: 0.25,
  start: function() {
    this.sprite.destroy()
    this.state.playSound('slowdown', undefined, false)
    this.tick = this.state.playSound('clock', undefined, false, true, true)
    this.state.changeTime(this.rate)
  },
  stop: function() {
    if (this.tick && this.tick.isPlaying) this.tick.stop()

    this.state.playSound('speedup', undefined, false)
    this.state.time.events.add(900, function() {
      this.state.changeTime(1/this.rate)
    }, this)
  }
}

},{"./Buff.js":21}],26:[function(require,module,exports){
module.exports = Enemy


var Bullet = require('../Bullet.js')


var MAX_HEALTH = 1


function Enemy(state, data) {
  Phaser.Sprite.call(this, state.game, data.x, data.y, 'sprites')

  if (data.texture) this.defaultFrame = data.texture

  this.state = state
  this.sounds = {
    pop: 'pop',
    bounce: 'bounce'
  }
  this.lastBounce = 0

  this.frameName = this.defaultFrame

  this.exists = false
  this.alive = false
  this.visible = false

  state.physics.p2.enable(this)
  state.enemies.add(this)
  this._circle = this.body.setCircle(1)
  this.body.setCollisionGroup(state.enemiesCG)
  this.body.collideWorldBounds = false
  this.body.collides([state.platformsCG, state.physics.p2.boundsCollisionGroup], this.bounce, this)
  this.body.collides([state.playersCG, state.bulletsCG], this.damage, this)
  this.body.setMaterial(state.enemyMaterial)
  this.body.fixedRotation = true

  this.animations.add('flash', Phaser.Animation.generateFrameNames('explosion', 1, 4))
    .onComplete.add(function() {this.frameName = this.defaultFrame}, this)
}


Enemy.prototype = Object.create(Phaser.Sprite.prototype)

Enemy.prototype.maxHealth = MAX_HEALTH
Enemy.prototype.maxSpeed = 500
Enemy.prototype.defaultFrame = 'enemy'
Enemy.prototype.bloodColor = 0xacc7479


Enemy.prototype.bounce = function() {
  var oldBounce = this.lastBounce
  this.lastBounce = this.state.time.now
  if (this.state.time.now - oldBounce < 250
      || Math.abs(this.state.p1.x - this.x) > 600
      || Math.abs(this.state.p1.y - this.y) > 600) {
    return
  }
  var snd = this.state.playSound(this.sounds.bounce)
  if (snd && snd.isPlaying && snd.usingWebAudio) {
    var scale = 128/this.width
    snd._sound.detune.value = scale * 400
    snd.volume = Math.min(0.5+0.5/scale, 1)
  }
}


Enemy.prototype.damage = function(_, src) {
  if (src.sprite instanceof Bullet)
    this.killTheta = src.rotation
  else
    this.killTheta = src.sprite.world.angle(this.world)
  this.state.bleed(this.x, this.y, this.killTheta, this.bloodColor)
  Phaser.Sprite.prototype.damage.call(this, src.attack || 1)
}


Enemy.prototype.kill = function() {
  if (this.pendingDoom) return
  this.pendingDoom = true

  this.state.playSound(this.sounds.pop, 400)
  this.state.camera.shake(0.005, 100)

  this.body.removeCollisionGroup(this.state.playersCG, false)

  var tween = this.game.add.tween(this)
  tween.to({width: this.width*1.5, height: this.height*2, alpha: 0.6}, 40)
  tween.onComplete.addOnce(function() {
    if (this.drop && typeof this.drop.reset === 'function') {
      this.drop.reset(this.x, this.y)
      this.drop = null
    }
    this.pendingDoom = false
    this.height /= 1.5
    this.width /= 1.5
    this.alpha = 1
    this.animations.stop()
    this.frameName = this.defaultFrame
    Phaser.Sprite.prototype.kill.call(this)
    this.body.collides(this.state.playersCG)
  }, this)

  tween.start()
}


Enemy.prototype.spawn = function(x, y, width, velx, vely, drop) {
  this.reset(x, y, this.maxHealth)
  this.drop = drop || null
  this.width = width
  this.height = width
  this._circle.radius = this.game.physics.p2.pxm(width / 2)
  this.body.velocity.x = velx || 0
  this.body.velocity.y = vely || 0
  this.killTheta = Math.PI/4
  return this
}


Enemy.prototype.update = function() {
  var vx = this.body.velocity.x
  var vy = this.body.velocity.y
  var msSq = this.maxSpeed*this.maxSpeed
  var speedSq = vx*vx + vy*vy
  if (speedSq < msSq) return
  var speed = Math.sqrt(speedSq)
  this.body.velocity.x = this.maxSpeed * vx/speed
  this.body.velocity.y = this.maxSpeed * vy/speed
}

},{"../Bullet.js":15}],27:[function(require,module,exports){
module.exports = Hex

var Enemy = require('./Enemy.js')


function Hex(state, data, drop) {
  Enemy.call(this, state, data, drop)
  this.body.data.gravityScale = 0
}


Hex.prototype = Object.create(Enemy.prototype)

Hex.prototype.defaultFrame = 'hex'
Hex.prototype.bloodColor = 0x6daab3


},{"./Enemy.js":26}],28:[function(require,module,exports){
module.exports = Hydroid


var MIN_WIDTH = 10


function Hydroid(state, EnemyClass, count) {
  count = count || 70

  Phaser.Group.call(this, state.game)
  state.enemies.add(this)

  var data = { x: 0, y: 0 }

  for (var i = 0; i < count; ++i) {
    var e = this.add(new EnemyClass(state, data))
    e.events.onKilled.add(this.childDeath, this)
  }

  this.updateOnlyExistingChildren = true
}


Hydroid.prototype = Object.create(Phaser.Group.prototype)

Hydroid.prototype.minWidth = MIN_WIDTH


Hydroid.prototype.childDeath = function(enemy) {
  var drop = enemy.drop
  enemy.drop = null
  var dropL
  var dropR
  if (Array.isArray(drop)) {
    dropL = drop[1] || null
    dropR = drop[2] || null
    drop = drop[0] || null
  }
  if (drop && typeof drop.reset === 'function') {
    drop.reset(x, y)
  }

  var width = enemy.width / 2
  var x = enemy.x
  var y = enemy.y
  var vx = enemy.body.velocity.x
  var vy = enemy.body.velocity.y
  var theta = enemy.killTheta

  var mag = Math.sqrt( vx*vx + vy*vy )
  var xOff = Math.cos(theta + Math.PI/2) * width * 1/3
  var yOff = Math.sin(theta + Math.PI/2) * width * 1/3
  var velx = Math.cos(theta + Math.PI/4) * mag
  var vely = Math.sin(theta + Math.PI/4) * mag

  this.spawn(x - xOff, y - yOff, width, vely, -velx, dropL)
  this.spawn(x + xOff, y + yOff, width, velx, vely, dropR)
}


Hydroid.prototype.spawn = function(x, y, width, velx, vely, drop) {
  var enemy = this.getFirstDead()
  if (!enemy || width < MIN_WIDTH) return null
  return enemy.spawn(x, y, width, velx, vely, drop)
}


},{}],29:[function(require,module,exports){
module.exports = SeekBoss


var Seeker = require('./Seeker.js')

var HEALTH = 50
var CHILD_WIDTH = 30
var CHILD_VEL = 100


function SeekBoss(state, data) {
  Seeker.call(this, state, data)

  this.drops = []
  var prize = state.addEntity({type: 'slomo'})
  prize.kill()
  this.drops.push(prize)
  prize = state.addEntity({type: 'shield'})
  prize.kill()
  this.drops.push(prize)
  prize = state.addEntity({type: 'repel'})
  prize.kill()
  this.drops.push(prize)

  this.spawn(data.x, data.y, data.width)
  this._scale = this.scale.x
  this.heartbeat()
  this.bringToTop()
  state.boss = this
}


SeekBoss.prototype = Object.create(Seeker.prototype)

SeekBoss.prototype.maxHealth = HEALTH
SeekBoss.prototype.defaultFrame = 'seek-boss'


SeekBoss.prototype.heartbeat = function() {
  if (this.tween) { this.tween.manager.remove(this.tween) }
  this.tween = this.game.add.tween(this.scale)
  var to = this._scale * 1.05
  this.tween.to({ x: to, y: to }, 500, Phaser.Easing.Back.Out, true, null, -1)
}


SeekBoss.prototype.damage = function() {
  this.tween.stop()
  if (this.health % 10 === 1 && this.drops.length > 0) {
    this.drops.pop().reset(this.x, this.y)
    this._scale *= 3/4
    this._circle.radius *= 3/4
  }
  this.scale.setTo(this._scale)
  this.heartbeat()
  Seeker.prototype.damage.apply(this, arguments)
  var v = this.body.velocity
  this.state.spawn('seeker', this.x, this.y, CHILD_WIDTH, v.x + CHILD_VEL, v.y + CHILD_VEL)
  this.state.spawn('seeker', this.x, this.y, CHILD_WIDTH, v.x + CHILD_VEL, v.y + -CHILD_VEL)
  this.state.spawn('seeker', this.x, this.y, CHILD_WIDTH, v.x - CHILD_VEL, v.y + CHILD_VEL)
  this.state.spawn('seeker', this.x, this.y, CHILD_WIDTH, v.x - CHILD_VEL, v.y + -CHILD_VEL)
}

},{"./Seeker.js":30}],30:[function(require,module,exports){
module.exports = Seeker


var Enemy = require('./Enemy.js')

var ACCEL = 140
var ACCEL_SQR = ACCEL*ACCEL
var PREFER_SPEED = 80


function Seeker(state, data, drop) {
  Enemy.call(this, state, data, drop)
  this.targets = state.players
  this.body.data.gravityScale = 0
  this.body.mass = 0.5
  // Tying speed to mass makes slowmo work.
  this._preferSpeed = this.body.mass*PREFER_SPEED
}


Seeker.prototype = Object.create(Enemy.prototype)

Object.defineProperty(Seeker.prototype, 'preferSpeed', {get: function() { return this._preferSpeed/this.body.mass }})

Seeker.prototype.defaultFrame = 'seeker'
Seeker.prototype.bloodColor = 0x69b58b


Seeker.prototype.update = function() {
  Enemy.prototype.update.apply(this, arguments)

  var target = this.targets.getClosestTo(this)
  if (!target) return

  var theta = this.world.angle(target.world)
  var vel = this.body.velocity
  var max = this.preferSpeed
  var desired = {
    x: max * Math.cos(theta),
    y: max * Math.sin(theta)
  }
  var steer = {
    x: desired.x - vel.x,
    y: desired.y - vel.y
  }
  var steerSqr = steer.x*steer.x + steer.y*steer.y
  if (steerSqr > ACCEL_SQR) {
    var scale = ACCEL/Math.sqrt(steerSqr)
    steer.x *= scale
    steer.y *= scale
  }
  this.body.data.applyForce([
    this.body.world.pxm(-steer.x * this.body.mass),
    this.body.world.pxm(-steer.y * this.body.mass)
  ])
}


Seeker.prototype.bounce = function() {
  Enemy.prototype.bounce.call(this)
  var vx = this.body.velocity.x 
  var vy = this.body.velocity.y
  var speed = Math.sqrt(vx*vx + vy*vy)
  var desiredSpeed = Math.max(speed, 70 * this.state.bulletTime)
  if (speed === desiredSpeed) { return }
  this.body.velocity.x *= desiredSpeed/speed
  this.body.velocity.y *= desiredSpeed/speed
}


},{"./Enemy.js":26}],31:[function(require,module,exports){
var Player = require('./heroes/Player.js')
var DefaultCtlr = require('./heroes/DefaultCtlr')
var SeekBoss = require('./enemies/SeekBoss.js')
var Gun = require('./Gun.js')
var Bullet = require('./Bullet.js')
var Trigger = require('./Trigger.js')
var SmallFont = require('./SmallFont.js')


module.exports = {
  smallFont: SmallFont,

  player1: function(state, data) {
    var ctlr = new DefaultCtlr(state)
    return new Player(state, data, ctlr)
  },


  // Enemies
  enemy: function(state, data, drop) {
    state.spawn(data.type, data.x, data.y, data.width, data.properties.velx, data.properties.vely, drop)
  },

  hex: function(state, data, drop) {
    state.spawn(data.type, data.x, data.y, data.width, data.properties.velx, data.properties.vely, drop)
  },

  seeker: function(state, data, drop) {
    state.spawn(data.type, data.x, data.y, data.width, data.properties.velx, data.properties.vely, drop)
  },
    
  seekboss: SeekBoss,


  // Buffs
  repel: require('./buffs/Repel.js'),
  shield: require('./buffs/Shield.js'),
  shoes: require('./buffs/Shoes.js'),
  slomo: require('./buffs/Slomo.js'),


  // Guns
  pistol: function(state, data) {
    return new Gun(state, {
      x: data.x,
      y: data.y,
      texture: 'gun',
      rate: 400,
      bulletsPerShot: 1,
      clipSize: 2,
    }, Bullet)
  },

  dblPistol: function(state, data) {
    return new Gun(state, {
      x: data.x,
      y: data.y,
      texture: 'dbl-pistol',
      rate: 200,
      bulletsPerShot: 1,
      clipSize: 4,
      accuracy: Math.PI/48,
    }, Bullet)
  },

  shotgun: function(state, data) {
    return new Gun(state, {
      x: data.x,
      y: data.y,
      texture: 'shotgun',
      rate: 800,
      spread: Math.PI/18,
      accuracy: Math.PI/54,
      bulletTexture: 'pellet',
      bulletsPerShot: 5,
      clipSize: 2,
      speedVar: 0.1,
      shotSound: 'shotgun'
    }, Bullet)
  },

  smg: function(state, data) {
    return new Gun(state, {
      x: data.x,
      y: data.y,
      texture: 'smg',
      auto: true,
      throttle: 100,
      rate: 100,
      accuracy: Math.PI/16,
      bulletsPerShot: 1,
      clipSize: 12,
    }, Bullet)
  },


  // Misc
  trigger: function(state, data) {
    return new Trigger(state, data)
  },


  rocket: function(state, data) {
    var sprite = state.make.sprite(data.x, data.y, 'sprites', 'rocket')
    sprite.anchor.setTo(0.5)
    state.bgItems.add(sprite)
    state.rocket = sprite
  }
}

},{"./Bullet.js":15,"./Gun.js":16,"./SmallFont.js":18,"./Trigger.js":20,"./buffs/Repel.js":22,"./buffs/Shield.js":23,"./buffs/Shoes.js":24,"./buffs/Slomo.js":25,"./enemies/SeekBoss.js":29,"./heroes/DefaultCtlr":33,"./heroes/Player.js":35}],32:[function(require,module,exports){
module.exports = Character


var WALK = Phaser.Animation.generateFrameNames('p1-walk', 1, 3)
var WALK_RATE = 12
var FLY = Phaser.Animation.generateFrameNames('p1-fly', 1, 2)
var FLY_RATE = 100
var FALL = Phaser.Animation.generateFrameNames('p1-fall', 1, 2)
var FALL_RATE = 10
var FALL_SLOW = ['p1-fall1']
var DIE = Phaser.Animation.generateFrameNames('p1-die', 3, 4)
var DIE_RATE = 4


function Character(state) {
  var character = new Phaser.Sprite(state.game, 0, 0, 'sprites', 'p1-stand')

  character.anchor.setTo(0.5)

  character.animations.add('walk', WALK, WALK_RATE, true)
  character.animations.add('fall', FALL, FALL_RATE, true)
  character.animations.add('fall-slow', FALL_SLOW, 1, true)
  character.animations.add('fly', FLY, FLY_RATE, true)
  character.animations.add('die', DIE, DIE_RATE, true)
  character.animations.add('idle', ['p1-stand'], 1, true)
  character.animations.add('stun', ['p1-die1'], 1, true)
  character.animations.add('shoot', ['p1-shoot'], 1, true)

  return character
}

},{}],33:[function(require,module,exports){
module.exports = DefaultCtlr


function DefaultCtlr(state) {
  var k = state.input.keyboard
  var keys = Phaser.Keyboard

  this._w = k.addKey(keys.W)
  this._a = k.addKey(keys.A)
  this._s = k.addKey(keys.S)
  this._d = k.addKey(keys.D)
  this._left = k.addKey(keys.LEFT)
  this._right = k.addKey(keys.RIGHT)
  this._up = k.addKey(keys.UP)
  this._down = k.addKey(keys.DOWN)
  this.position = state.reticule.world
  this.newShot = true

  this._wasDown = false
  this._pointer = state.input.mousePointer
}


DefaultCtlr.prototype = {
  get left() {
    return this._a.isDown || this._left.isDown
  },
  get right() {
    return this._d.isDown || this._right.isDown
  },
  get up() {
    return this._w.isDown || this._up.isDown
  },
  get down() {
    return this._s.isDown || this._down.isDown
  },
  get shoot() {
    return this._pointer.leftButton.isDown
  },

  update: function() {
    var shoot = this.shoot
    this.newShot = (this.shoot && !this._wasDown) ? true : false
    this._wasDown = shoot
  }
}


},{}],34:[function(require,module,exports){
module.exports = Hud


function Hud(state, player) {
  var game = state.game
  var marginLeft = state.game.width * 0.02
  var marginTop = state.game.height * 0.03
  this.height = state.game.height * 0.2
  this.width = Math.max(4, this.height/10)

  this.player = player
  this.gun = this.player.weapon

  this.fuelGauge = new PhaserNineSlice
    .NineSlice(game, marginLeft, marginTop, 'sprites', 'fuel', 8, 8, { top: 2 })
  this.fuelGauge.resize(this.width, this.height)
  this.fuelGauge.alpha = 0.8
  state.hud.add(this.fuelGauge)

  this.bullets = game.make.group()
  this.bullets.x = marginLeft + this.width
  this.bullets.y = marginTop

  for (var i = 0; i < 12; ++i) {
    this.bullets.add(new PhaserNineSlice
      .NineSlice(game, 0, 0, 'sprites', 'hud-bullet', 8, 8, { top: 2 }))
  }
  this.bullets.alpha = 0.8
  state.hud.add(this.bullets)

  this.player.onEquip.add(this.initClipDisplay, this)
}


Hud.prototype.initClipDisplay = function() {
  this.gun = this.player.weapon
  var h = this.height / this.gun.clipSize
  this.bulletHeight = h
  var spacing = this.gun.clipSize > 1 ?
    (this.height - h) / (this.gun.clipSize - 1) : 0
  for (var i = 0; i < this.bullets.children.length; ++i) {
    var b = this.bullets.children[i]
    b.y = i * spacing
    b.exists = false
    b.resize(this.width, this.bulletHeight)
  }
  this.updateClip()
}


Hud.prototype.updateClip = function() {
  var avail = this.gun.available
  for (var i = 0; i < this.gun.clipSize; ++i) {
    var b = this.bullets.children[i]
    if (i < avail) {
      b.exists = true
      if (i <= avail-1) {
        b.alpha = 1
        b.resize(this.width, this.bulletHeight)
      } else {
        b.alpha = 0.6
        var h = this.bulletHeight*(avail - i)
        b.resize(this.width, Math.max(4, h))
      }
    } else {
      b.exists = false
    }
  }
}


Hud.prototype.update = function() {
  var prcnt = 100 * this.player.fuel / this.player.maxFuel
  var full = 0x4ab67b
  var half = 0xf6d639
  var empty = 0xff555a

  if (prcnt > 50) {
    this.fuelGauge.tint = Phaser.Color.interpolateColor(half, full, 50, prcnt-50)
  } else {
    this.fuelGauge.tint = Phaser.Color.interpolateColor(empty, half, 50, prcnt)
  }

  this.fuelGauge.resize(this.width, this.height * prcnt/100)
  this.updateClip()
}


},{}],35:[function(require,module,exports){
module.exports = Player


var PlayerStateMachine = require('./PlayerStateMachine.js')
var PlayerCollider = require('./PlayerCollider.js')
var PlayerFX = require('./PlayerFX.js')
var Hud = require('./Hud.js')
var Character = require('./Character.js')
var setPhysics = require('./setPhysics.js')

var DEFAULT_WEAPON = 'pistol'
var SPEED = 100


function Player(state, data, ctlr) {
  var game = state.game
  var x = data.x || 0
  var y = data.y || 0
  var weapon = state.parseDrop(data.properties.weapon || DEFAULT_WEAPON)

  Phaser.Sprite.call(this, game, x, y)

  this.state = state

  this.fuel = this.maxFuel
  this.speedBonus = 1
  this.standing = true
  this.invincible = false

  this.onEquip = new Phaser.Signal()

  this.character = new Character(state)
  this.fx = new PlayerFX(this)
  this.hud = new Hud(state, this)

  setPhysics(this)
  this.playerState = new PlayerStateMachine(this, ctlr)
  this.collider = new PlayerCollider(this)

  this.addChild(this.character)

  weapon.exists = true
  weapon.pickup(null, this.body)

  state.players.add(this)
}


Player.prototype = Object.create(Phaser.Sprite.prototype)

Player.prototype.maxFuel = 2000

Object.defineProperty(Player.prototype, 'speed', {
  get: function() {
    return this.speedBonus * SPEED
  }
})


Object.defineProperty(Player.prototype, 'accel', {
  get: function() {
    var rate = this.standing ? 0.075 : 0.2
    return this.speed / rate
  }
})


Object.defineProperty(Player.prototype, 'facing', {
  set: function(dir) {
    this.character.scale.x = dir
    if (this.weapon) {
      if (dir === -1) {
        this.weapon.scale.y = -1
        this.removeChild(this.weapon)
        this.addChild(this.weapon)
      } else {
        this.weapon.scale.y = 1
        this.removeChild(this.character)
        this.addChild(this.character)
      }
    }
  },

  get: function () {
    return this.character.scale.x > 0 ? 1 : -1
  }
})


Player.prototype.damage = function(_, enemy) {
  if (this.invincible || this.health <= 0) return
  var theta = this.world.angle(enemy.sprite)
  this.facing = theta > Math.PI/2 || theta < -Math.PI/2 ? -1 : 1
  this.health -= 1
  if (this.health <= 0) this.kill()
  else this.playerState.change('stunned')
}


Player.prototype.equip = function(weapon) {
  if (this.weapon instanceof Phaser.Sprite) this.weapon.destroy()
  weapon.anchor.setTo(0, 0.5)
  // abs because character is flipped by setting scale to -1.
  weapon.pivot.setTo(-Math.abs(this.character.width/8), 0)
  this.weapon = weapon
  this.addChild(weapon)
  this.onEquip.dispatch()
}


Player.prototype.kill = function() {
  this.alive = false
  this.playerState.change('dead')
}


Player.prototype.update = function() {
  if (this.weapon && typeof this.weapon.update === 'function') this.weapon.update()
  this.playerState.update()
  this.collider.update()
  this.hud.update()
}

},{"./Character.js":32,"./Hud.js":34,"./PlayerCollider.js":36,"./PlayerFX.js":37,"./PlayerStateMachine.js":38,"./setPhysics.js":39}],36:[function(require,module,exports){
module.exports = PlayerCollider


var UNIT_Y = p2.vec2.fromValues(0, 1)


function PlayerCollider(player) {
  this.game = player.game
  this.player = player
  this.body = player.body
  this.ray = new p2.Ray({mode: p2.Ray.CLOSEST, skipBackfaces: true})
  this.res = new p2.RaycastResult()
  this.rayCountH = 3
  this.rayCountV = 2
  this.padding = Phaser.Physics.P2.prototype.pxm(0.5)

  this.rayBounds = { left: 0, right: 0, top: 0, bottom: 0 }
  this.updateRayBounds()

  this.spacingH = (this.rayBounds.top - this.rayBounds.bottom - this.padding) / (this.rayCountH - 1)
  this.spacingV = (this.rayBounds.right - this.rayBounds.left - this.padding) / (this.rayCountV - 1)
  this.maxStandAngle = Math.PI / 6 + 0.0000001
  this.slopeVector = p2.vec2.create()

  this.ray.collisionMask = this.game.state.getCurrentState().platformsCG.mask | this.game.physics.p2.boundsCollisionGroup.mask
  this.player.standing = false
}


PlayerCollider.prototype = {
  update: function() {
    var vec2 = p2.vec2
    var ray = this.ray
    var res = this.res
    var dt = this.game.time.physicsElapsed
    var dx = this.body.vel.mx * dt
    var dy = this.body.vel.my * dt

    this.updateRayBounds()

    if (this.player.playerState.current === this.player.playerState.states.flying) {
      this.player.standing = false
    } else if (this.player.standing) {
      var x
      if (this.slopeVector[1] > 0) {
        x = this.rayBounds.right - this.padding
      } else if (this.slopeVector[1] < 0) {
        x = this.rayBounds.left + this.padding
      } else {
        x = dx > 0 ? this.rayBounds.left + this.padding : this.rayBounds.right - this.padding
      }
      var y = this.rayBounds.bottom + this.padding + 0.1
      vec2.set(ray.from, x, y)
      vec2.set(ray.to, x, y - this.padding - 0.14)
      ray.update()
      if (!this.game.physics.p2.world.raycast(res, ray)) {
        this.player.standing = false
      } else if (this.maxStandAngle < Math.acos(vec2.dot(res.normal, UNIT_Y))) {
        this.player.standing = false
      } else {
        vec2.rotate90cw(this.slopeVector, res.normal)
      }
      res.reset()
    }

    if (this.player.standing) {
      dy = 0
      var v = this.slopeVector
      var p = (dx*v[0] + dy*v[1]) / (v[0]*v[0] + v[1]*v[1])
      dx = p*v[0]
      dy = p*v[1]
    }

    this.collide(this.body.kick.mx, this.body.kick.my, dt)
    this.body.kick.x = 0
    this.body.kick.y = 0
    this.collide(dx, dy, dt)
  },


  translateRayBounds: function(x, y) {
    var b = this.rayBounds
    b.left += x
    b.right += x
    b.top += y
    b.bottom += y
  },


  updateRayBounds: function() {
    var aabb = this.body.data.getAABB()
    var b = this.rayBounds
    b.left = aabb.lowerBound[0]
    b.right = aabb.upperBound[0]
    b.top = aabb.upperBound[1]
    b.bottom = aabb.lowerBound[1]
  }
}


PlayerCollider.prototype.debugRay = (function() {
  var line = new Phaser.Line()
  return function(ray) {
    var mpxi = Phaser.Physics.P2.prototype.mpxi
    line.start.x = mpxi(ray.from[0])
    line.start.y = mpxi(ray.from[1])
    line.end.x = mpxi(ray.to[0])
    line.end.y = mpxi(ray.to[1])
    this.game.debug.geom(line)
  }
})()


PlayerCollider.prototype.collide = (function() {
  var norm = p2.vec2.create()
  return function(dx, dy, dt) {
    var ray = this.ray
    var res = this.res
    var vec2 = p2.vec2
    var world = this.game.physics.p2.world
    var bounds = this.rayBounds

    var j = 0
    while (Math.abs(dt) > 0.0000001 && j++ < 3) {
      if (Math.abs(dx) < 0.0000001 && Math.abs(dy) < 0.0000001) {
        this.body.vel.x = 0
        this.body.vel.y = 0
        break
      }
      this.body.vel.mx = -dx/dt
      this.body.vel.my = -dy/dt
      var dLength = Math.sqrt(dx*dx + dy*dy)
      var sin = dy/dLength
      var cos = dx/dLength
      var pad = this.padding
      var rayLength = dLength + pad
      var dirX = dx >= 0 ? 1 : -1
      var dirY = dy > 0 ? 1 : -1

      var x = bounds.left + pad
      var y = (dirY === 1 ? bounds.top - pad : bounds.bottom + pad)
      var spacing = this.spacingV

      vec2.set(norm, 0, 0)

      if (dy !== 0) {
        for (var i = 0; i < this.rayCountV; i++) {
          vec2.set(ray.from, x, y)
          vec2.set(ray.to, x + rayLength*cos, y + rayLength*sin)
          ray.update()
          if (world.raycast(res, ray)) {
            rayLength = res.getHitDistance(ray)
            vec2.copy(norm, res.normal)
            if (this.maxStandAngle >= Math.acos(vec2.dot(norm, UNIT_Y))) {
              vec2.rotate90cw(this.slopeVector, norm)
              this.player.standing = true
              this.body.vel.y = 0
            }
          }
          res.reset()
          x += spacing
        }
      }

      if (dx !== 0) {
        y = bounds.bottom + pad
        x = (dirX === 1 ? bounds.right - pad : bounds.left + pad)

        for (var i = 0; i < this.rayCountH; i++) {
          vec2.set(ray.from, x, y)
          vec2.set(ray.to, x + rayLength*cos, y + rayLength*sin)
          ray.update()
          if (world.raycast(res, ray)) {
            vec2.copy(norm, res.normal)
            rayLength = res.getHitDistance(ray)
            if (this.maxStandAngle >= Math.acos(vec2.dot(norm, UNIT_Y))) {
              vec2.rotate90cw(this.slopeVector, norm)
              this.player.standing = true
              this.body.vel.y = 0
            }
          }
          res.reset()
          y += spacing
        }
      }

      var tx = (rayLength - pad) * cos
      var ty = (rayLength - pad) * sin
      var tt = dt * ((rayLength - pad) / dLength)
      this.translateRayBounds(tx, ty)
      this.body.data.position[0] += tx
      this.body.data.position[1] += ty
      dx -= tx
      dy -= ty
      dt -= tt
      // Orthagonal projection (dx, dy) onto the line we've collided with.
      if (norm[0] !== 0 || norm[1] !== 0) {
        vec2.rotate90cw(norm, norm)
        var p = (dx*norm[0] + dy*norm[1]) / (norm[0]*norm[0] + norm[1]*norm[1])
        dx = p*norm[0]
        dy = p*norm[1]
      }
    }
  }
})()


},{}],37:[function(require,module,exports){
module.exports = PlayerFX


function PlayerFX(player) {
  var state = player.game.state.getCurrentState()
  this.player = player

  this.dust = state.make.emitter(0, 0, 10)
  this.flame = state.make.emitter(0, 0, 30)
  state.bgItems.addChild(this.dust)
  state.bgItems.addChild(this.flame)

  this.dust.makeParticles('sprites', 
    Phaser.Animation.generateFrameNames('dust', 1, 4))
  this.dust.setScale(0.5, 2, 0.5, 2, 400)
  this.dust.setAlpha(1, 0.2, 400)
  this.dust.setRotation(0)

  this.flame.makeParticles('sprites',
    Phaser.Animation.generateFrameNames('flame', 1, 4))
  this.flame.setScale(0.25, 1, 0.25, 1, 200)
  this.flame.setAlpha(1, 0.2, 400)
  this.flame.setRotation(0)
  this.flame.lifespan = 400
}


PlayerFX.prototype = {
  land: function() {
    var dust = this.dust
    dust.setXSpeed(-100, 100)
    dust.setYSpeed(-20, -80)
    dust.x = this.player.x
    dust.y = this.player.y + this.player.character.height/2
    dust.explode(100, 6)
  },

  puff: function() {
    var dust = this.dust
    var player = this.player
    var ho2 = player.character.height/2
    var rot = player.character.rotation
    dust.x = player.x - ho2*Math.sin(rot)
    dust.y = player.y + ho2*Math.cos(rot)
    dust.explode(200, 10)
  },

  backfire: function() {
    var dust = this.dust
    var player = this.player
    dust.setXSpeed(-80, 80)
    dust.setYSpeed(-10, 100)
    dust.x = player.x
    dust.y = player.y
    dust.explode(200, 6)
  },

  jet: function() {
    var flame = this.flame
    var player = this.player
    flame.gravity = player.game.physics.p2.gravity.y
    var sin = Math.sin(player.character.rotation)
    var cos = Math.cos(player.character.rotation)
    flame.setXSpeed(-40*cos-60*sin, 40*cos-80*sin)
    flame.setYSpeed(-40*sin+60*cos, 40*sin+80*cos)
    flame.x = player.x
    flame.y = player.y
    flame.emitParticle()
  }

}

},{}],38:[function(require,module,exports){
module.exports = PlayerStateMachine


function PlayerStateMachine(player, ctlr) {
  this.player = player
  this.ctlr = ctlr

  this.states = {
    dead: new Dead(this),
    falling: new Falling(this),
    floating: new Floating(this),
    flying: new Flying(this),
    standing: new Standing(this),
    stunned: new Stunned(this),
    victory: new Victory(this)
  }

  this.current = this.states.standing

  this.player.body.vel = new Phaser.Physics.P2.InversePointProxy(player.game.physics.p2, [0, 0])
  this.player.body.kick = new Phaser.Physics.P2.InversePointProxy(player.game.physics.p2, [0, 0])
}


PlayerStateMachine.prototype = {
  change: function(key){
    this.current.exit()
    this.current = this.states[key]
    this.current.enter()
  },

  update: function() {
    var game = this.player.game
    this.player.body.vel.y += game.physics.p2.gravity.y * game.time.physicsElapsed
    this.ctlr.update()
    this.current.update()
  }
}


function PlayerState(machine) {
  this.machine = machine
  this.player = machine.player
}

PlayerState.prototype = {
  enter: function() {},
  exit: function() {},

  update: function() {
    var plyr = this.player
    var ctlr = this.machine.ctlr

    if (this.machine.shooting) {
      plyr.character.animations.play('shoot')
    }

    var theta = Phaser.Point.angle(ctlr.position, plyr.position)
    if (plyr.weapon) {
      plyr.weapon.rotation = theta
    }
    theta -= plyr.character.rotation
    theta %= 2 * Math.PI
    if (theta > Math.PI) theta -= 2 * Math.PI
    else if (theta <= -Math.PI) theta += 2 * Math.PI
    plyr.facing = theta > Math.PI/2 || theta < -Math.PI/2 ? -1 : 1

    if (ctlr.left) this.onLeft()
    if (ctlr.right) this.onRight()
    if (ctlr.up) this.onUp()
    if (ctlr.shoot) this.onShoot()
  },

  onUp: function() {
    if (this.player.fuel > 100) this.machine.change('flying')
  },

  onLeft: function() {
    if (this.player.body.vel.x < -this.player.speed) return
    this.player.body.vel.x -= this.player.accel * this.player.game.time.physicsElapsed
  },

  onRight: function() {
    if (this.player.body.vel.x > this.player.speed) return
    this.player.body.vel.x += this.player.accel * this.player.game.time.physicsElapsed
  },

  onShoot: function() {
    var plyr = this.player
    if (!plyr.weapon) return
    if (plyr.weapon.fire(this.machine.ctlr.newShot)) {
      plyr.character.animations.stop()
      plyr.character.animations.play('shoot')
      var angle = plyr.weapon.rotation
      if (plyr.standing) {
        plyr.body.kick.x += -3 * plyr.facing
      } else {
        plyr.body.vel.x -= 8 * Math.cos(angle)
        plyr.body.vel.y -= 8 * Math.sin(angle)
      }
      plyr.weapon.x = -2
      this.machine.shooting = true
      plyr.game.time.events.add(60, function() {
        this.machine.shooting = false
        plyr.weapon.x = 0
      }, this)
    }
  }
}


function Dead(machine) {
  PlayerState.call(this, machine)
  this.wasStanding = false
}


Dead.prototype = {
  exit: function() {},

  enter: function() {
    var plyr = this.player
    plyr.standing = false
    plyr.alive = false

    plyr.state.playSound('death')
    plyr.state.camera.flash(0xf6eeee, 500)
    plyr.body.removeCollisionGroup([
      plyr.state.enemiesCG, plyr.state.itemsCG
    ])
    plyr.character.animations.stop()
    plyr.character.frameName = 'p1-die2'
    plyr.body.vel.x = -100 * plyr.facing
    plyr.body.vel.y = -150
    if (plyr.weapon) {
      var x = plyr.weapon.world.x
      var y = plyr.weapon.world.y
      plyr.weapon.scale.y = 1
      plyr.game.world.add(plyr.weapon)
      plyr.weapon.x = x
      plyr.weapon.y = y
      plyr.state.physics.p2.enableBody(plyr.weapon)
      plyr.weapon.body.collideWorldBounds = false
      plyr.weapon.body.angularVelocity = 4
      plyr.weapon.body.velocity.x = 60 * plyr.facing
      plyr.weapon.body.velocity.y = -100
    }
  },

  update: function() {
    if (!this.player.standing) {
      this.player.character.frameName = 'p1-die2'
      this.wasStanding = false
      return
    }
    var velx = this.player.body.vel.x
    if (velx > 0)
      this.player.body.vel.x = Math.max(velx - 2, 0)
    else if (velx < 0)
      this.player.body.vel.x = Math.min(velx + 2, 0)
    if (!this.wasStanding) {
      this.player.character.animations.play('die', null, false)
      this.wasStanding = true
    }
  }
}


function Falling(machine) {
  PlayerState.call(this, machine)
}


Falling.prototype = Object.create(PlayerState.prototype)


Falling.prototype.enter = function() {
  this.time = this.player.game.time.now
}


Falling.prototype.exit = function() {
  this.player.weapon.y = 0
}


Falling.prototype.update = function() {
  var plyr = this.player

  if (plyr.standing) {
    if (plyr.game.time.now - this.time > 300) {
      plyr.state.playSound('land')
      plyr.fx.land()
    }

    this.machine.change('standing')
    return
  }

  var v = plyr.body.vel.y
  if (v > 30) {
    plyr.character.animations.play('fall')
    plyr.weapon.y = -2
  } else if (v >10) {
    plyr.character.animations.play('fall-slow')
  } else {
    plyr.character.animations.play('idle')
  }

  PlayerState.prototype.update.call(this)
}


function Floating(machine) {
  PlayerState.call(this, machine)
  this.rotation = -Math.PI/2
  this.wasThrusting = false
}


Floating.prototype = Object.create(PlayerState.prototype)


Floating.prototype.angularSpeed = Math.PI * 1.5
Floating.prototype.thrust = 200


Floating.prototype.exit = function() {
  var player = this.player
  if (player.health > 0) return
  var state = player.game.state.getCurrentState()
  state.glass.x = player.x
  state.glass.y = player.y
  state.glass.explode(-1, 20)
}


Floating.prototype.update = function() {
  var plyr = this.player
  if (!this.machine.ctlr.up) {
    if (this.wasThrusting) {
      plyr.fx.backfire()
      this.wasThrusting = false
    }
    plyr.fuel = Math.min(plyr.maxFuel, plyr.fuel + plyr.game.time.physicsElapsedMS)
  }
  PlayerState.prototype.update.call(this)
  plyr.character.frameName = 'p1-space'
  plyr.standing = false
  if (plyr.body.vel.y < -plyr.speed) plyr.body.vel.y = -plyr.speed
  else if (plyr.body.vel.y > plyr.speed) plyr.body.vel.y = plyr.speed
}


Floating.prototype.onLeft = function() {
  var plyr = this.player
  var dt = plyr.game.time.physicsElapsed
  this.rotation -= this.angularSpeed * dt
  this.player.character.rotation = this.rotation + Math.PI/2
}


Floating.prototype.onRight = function() {
  var plyr = this.player
  var dt = plyr.game.time.physicsElapsed
  this.rotation += this.angularSpeed * dt
  this.player.character.rotation = this.rotation + Math.PI/2
}


Floating.prototype.onUp = function() {
  var plyr = this.player
  var dt = plyr.game.time.physicsElapsed
  plyr.body.vel.x += dt * this.thrust * Math.cos(this.rotation)
  plyr.body.vel.y += dt * this.thrust * Math.sin(this.rotation)
  if (!this.wasThrusting) {
    plyr.fx.puff()
  }
  this.wasThrusting = true
  plyr.fx.jet()
  plyr.fuel = Math.max(0, plyr.fuel - dt*1000)
}


function Flying(machine) {
  PlayerState.call(this, machine)
}


Flying.prototype = Object.create(PlayerState.prototype)


Flying.prototype.enter = function() {
  if (this.player.standing) this.player.body.vel.y += -80
  this.jet = this.player.state.playSound('jetpack', undefined, true, true)
  this.player.fx.puff()
}

Flying.prototype.exit = function() {
  if (this.jet && this.jet.isPlaying) this.jet.stop()
  this.player.fx.backfire()
  this.player.weapon.y = 0
}

Flying.prototype.update = function() {
  var plyr = this.player
  var mchn = this.machine

  if (plyr.fuel <= 0 || !this.machine.ctlr.up) {
    mchn.change('falling')
    return
  }

  plyr.character.animations.play('fly')

  plyr.weapon.y = plyr.body.vel.y < -30 ? 2 : 0

  plyr.body.vel.y -= plyr.game.physics.p2.gravity.y * 2.5 * plyr.game.time.physicsElapsed
  plyr.fuel = Math.max(plyr.fuel - plyr.game.time.physicsElapsedMS, 0)

  plyr.fx.jet()

  PlayerState.prototype.update.call(this)
}


Flying.prototype.onUp = function() {
  return
}


function Standing(machine) {
  PlayerState.call(this, machine)
  this.lastStep = 0
}


Standing.prototype = Object.create(PlayerState.prototype)


Standing.prototype.update = function() {
  var plyr = this.player
  var mchn = this.machine
  var ctlr = mchn.ctlr
  var velx = plyr.body.vel.x

  if (!plyr.standing) mchn.change('falling')

  if (plyr.fuel < plyr.maxFuel) {
    var fuel = plyr.fuel + plyr.game.time.physicsElapsedMS
    plyr.fuel = Math.min(plyr.maxFuel, fuel)
  }

  if (velx !== 0) {
    var friction = plyr.speed/12
    plyr.body.vel.x = velx < 0 ?
      Math.min(velx + friction, 0) :
      Math.max(velx - friction, 0)
  }

  if (ctlr.left || ctlr.right || Math.abs(velx) >= plyr.speed/2) {
    plyr.character.animations.play('walk')
    if (this.lastStep < plyr.state.time.now - 200) {
      plyr.state.playSound('step', 200)
      this.lastStep = plyr.state.time.now
    }
  } else {
    plyr.character.animations.play('idle')
  }

  PlayerState.prototype.update.call(this)
}


function Stunned(machine) {
  PlayerState.call(this, machine)
}


Stunned.prototype = {
  exit: function() {},
  update: function() {
    this.player.character.animations.play('stun')
  },

  enter: function() {
    var plyr = this.player
    var lvl = plyr.state

    plyr.body.removeCollisionGroup(lvl.enemiesCG, false)
    plyr.invincible = true

    if (plyr.weapon)
      plyr.weapon.rotation = plyr.facing === 1 ? 0 : Math.PI
    plyr.body.vel.x = 40 * -plyr.facing

    this.tween = this.player.state.add.tween(this.player.character)
    this.tween.to({alpha: 0.2}, 75, null, false, 0, -1, true)
    this.tween.start()

    lvl.time.events.add(800, this.endStun, this)
  },

  end: function() {
    this.tween.pause()
    this.player.character.alpha = 1
    this.player.body.collides(this.player.state.enemiesCG)
    this.player.invincible = false
  },

  endStun: function() {
    this.player.state.time.events.add(1600, this.end, this)
    this.machine.change('standing')
  }
}


function Victory(machine) {
  PlayerState.call(this, machine)
  this.started = false
}

Victory.prototype = {
  enter: function() {
    if (this.player.game.state.getCurrentState().gravity === 0) {
      this.machine.change('floating')
    }
    this.started = false
  },

  update: function() {
    if (this.player.standing && !this.started) {
      this.player.facing = 1
      this.player.character.animations.stop()
      this.player.character.frameName = 'p1-victory'
      this.player.weapon.x = this.player.character.width/4
      this.player.weapon.y = -this.player.character.height/3
      this.player.weapon.rotation = -Math.PI/4
      this.player.weapon.pivot.setTo(0.5, 0.5)
      var tween = this.player.game.add.tween(this.player.weapon)
        .to({rotation: -Math.PI * 4.25}, 500, null, true, 200)
      this.started = true
      this.player.body.vel.x = 0
      this.player.body.vel.y = 0
      tween.onComplete.addOnce(function() {
        this.player.game.time.events.add(1500, function() {
          this.machine.change('standing')
        }, this)
      }, this)
    }
  },

  exit: function() {
    this.player.weapon.x = 0
    this.player.weapon.y = 0
    this.player.weapon.pivot.setTo(-Math.abs(this.player.character.width/8), 0)
  }
}


},{}],39:[function(require,module,exports){
module.exports = function setPhysics(player) {
  var state = player.state

  player.game.physics.p2.enable(player)
  player.body.setRectangle(player.character.width/2, player.character.height)

  player.body.collideWorldBounds = false
  player.body.kinematic = true
  player.body.fixedRotation = true

  player.body.setMaterial(state.playerMaterial)
  player.body.setCollisionGroup(state.playersCG)
  player.body.collides(state.enemiesCG, player.damage, player)
  player.body.collides([state.itemsCG, state.platformsCG, state.physics.p2.boundsCollisionGroup])
}

},{}],40:[function(require,module,exports){
module.exports = Button


function Button(state, key, frame, callback, ctx) {
  Phaser.Sprite.call(this, state.game, 0, 0, key, frame)
  this.state = state
  this.callback = callback
  this.callbackCtx = ctx

  this.background = state.make.image(0, 0, key, frame)
  this.background.anchor = this.anchor
  this.background.alpha = 0.3
  this.addChild(this.background)
  this.anchor.setTo(0.5)

  this.onOverSound = 'rollover'
  this.onDownSound = 'click'
  this.mouseWasOver = false
  this.mouseIsOver = false

  this.clickEffect = null

  state.input.mousePointer.leftButton.onDown.add(this.inputDown, this)
}


Button.prototype = Object.create(Phaser.Sprite.prototype)


Button.prototype.update = function() {
  if (!this.exists || !this.visible || this.worldAlpha !== 1) return

  var ret = this.state.reticule.position
  this.mouseWasOver = this.mouseIsOver
  this.mouseIsOver = this.getBounds().contains(ret.x, ret.y)

  if (this.mouseIsOver && !this.mouseWasOver) this.inputOver()
  if (!this.mouseIsOver && this.mouseWasOver) this.inputOut()
}


Button.prototype.inputDown = function() {
  if (!this.exists || !this.visible
        || this.worldAlpha !== 1 || !this.mouseIsOver) return

  if (this.clickEffect) { this.clickEffect.stop(true) }
  var tween = this.game.add.tween(this.background)
  this.clickEffect = tween
  var height = this.background.height
  var width = this.background.width
  var alpha = this.background.alpha

  tween.to({width: width * 1.4,
    height: height * 1.4,
    alpha: 0
  }, 1200, Phaser.Easing.Quadratic.Out)
  tween.onComplete.addOnce(function() {
    this.background.scale.setTo(1)
    this.background.alpha = alpha
  }, this)
  tween.start()

  this.state.playSound(this.onDownSound)
  var scale = 1.02
  this.width *= scale
  this.height *= scale
  this.game.time.events.add(40, function() {
    this.width /= scale
    this.height /= scale
  }, this)

  this.callback.call(this.callbackCtx)
}


Button.prototype.inputOver = function() {
  this.state.playSound(this.onOverSound)
}


Button.prototype.inputOut = function() {
}


},{}],41:[function(require,module,exports){
module.exports = Modal


function Modal(state, gui) {
  Phaser.Group.call(this, state.game)
  this.gui = gui
  this.x = 144
  this.y = 16
  this.exists = false
  this.visible = false
}


Modal.prototype = Object.create(Phaser.Group.prototype)


Modal.prototype.enter = function() {
  this.y = this.game.world.height/2 - this.height/2
  var tween = this.game.add.tween(this)
  tween.from({
    alpha: 0,
  }, 500, Phaser.Easing.Cubic.In)
  this.game.time.events.add(500, function() {
    this.visible = true
    this.exists = true
    tween.start()
  }, this)
}


Modal.prototype.exit = function() {
  var y = this.y
  var height = this.height
  var width = this.width
  var tween = this.game.add.tween(this)
  this.ignoreChildInput = true
  this.alpha = 0.99
  tween.to({
    alpha: 0
  }, 500, Phaser.Easing.Cubic.In)
  tween.onComplete.add(function() {
    this.visible = false
    this.exists = false
    this.y = y
    this.height = height
    this.width = width
    this.alpha = 1
    this.ignoreChildInput = false
  }, this)
  tween.start()
}

},{}],42:[function(require,module,exports){
module.exports = TextButton


var smallFont = require('../entities/SmallFont.js')
var Button = require('./Button.js')


function TextButton(state, text, callback, ctx) {
  var font = smallFont.Text(state, text)
  Button.call(this, state, font, null, callback, ctx)
  this.font = font
  this.tint = smallFont.colors.PLAIN

  this.background.tint = this.tint
  this.width *= 2
  this.height *= 2
}


TextButton.prototype = Object.create(Button.prototype)


TextButton.prototype.update = function() {
  this.font.buildRetroFontText()
  Button.prototype.update.call(this)
}


TextButton.prototype.inputOver = function() {
  Button.prototype.inputOver.call(this)
  var tint = smallFont.colors.PLAIN
  this.tint = tint
  var r = (tint & 0xff0000) >>  16
  var g = (tint & 0xff00) >> 8
  var b = tint & 0xff 
  var color = { r: r, g: g, b: b }
  var tint2 = smallFont.colors.HILIGHT
  var r2 = (tint2 & 0xff0000) >> 16
  var g2 = (tint2 & 0xff00) >> 8
  var b2 = tint2 & 0xff
  var tween = this.game.add.tween(color)
  tween.from({r: r2, g: g2, b: b2}, 200, Phaser.Easing.Quadratic.Out)
  tween.onUpdateCallback(function() {
    var r = (color.r & 0xff) << 16
    var g = (color.g & 0xff) << 8
    var b = color.b & 0xff
    this.tint = r | g | b
  }, this)
  tween.start()
}

},{"../entities/SmallFont.js":18,"./Button.js":40}],43:[function(require,module,exports){
var GameData = require('./GameData.js')
var Boot = require('./boot.js')
var Load = require('./load.js')
var Menu = require('./menu/menu.js')
var LevelSelect = require('./LevelSelect.js')
var Level = require('./level/Level.js')
var ZeroGLevel = require('./level/ZeroGLevel.js')
var RocketLevel = require('./level/RocketLevel.js')
var ShmupLevel = require('./level/ShmupLevel.js')
var MonsterLevel = require('./level/MonsterLevel.js')
var SpaceBoss = require('./level/SpaceBoss.js')
var FinalBoss = require('./level/FinalBoss.js')
var Arcade = require('./arcade/arcade.js')
var Credits = require('./Credits.js')

require('./phaserPatch.js')()

var game = new Phaser.Game(800, 600, undefined, undefined, undefined, false, false)

game.data = new GameData(game)

game.state.add('Boot', new Boot)
game.state.add('Load', new Load)
game.state.add('Level', new Level)
game.state.add('RocketLevel', new RocketLevel)
game.state.add('ZeroGLevel', new ZeroGLevel)
game.state.add('ShmupLevel', new ShmupLevel)
game.state.add('MonsterLevel', new MonsterLevel)
game.state.add('SpaceBoss', new SpaceBoss)
game.state.add('FinalBoss', new FinalBoss)
game.state.add('Menu', new Menu)
game.state.add('Arcade', new Arcade)
game.state.add('LevelSelect', new LevelSelect)
game.state.add('Credits', new Credits)

game.state.start('Boot')

window.game = game


},{"./Credits.js":4,"./GameData.js":5,"./LevelSelect.js":6,"./arcade/arcade.js":10,"./boot.js":13,"./level/FinalBoss.js":45,"./level/Level.js":46,"./level/MonsterLevel.js":47,"./level/RocketLevel.js":48,"./level/ShmupLevel.js":50,"./level/SpaceBoss.js":51,"./level/ZeroGLevel.js":52,"./load.js":56,"./menu/menu.js":64,"./phaserPatch.js":65}],44:[function(require,module,exports){
module.exports = Director


var Hydroid = require('../entities/enemies/Hydroid.js')
var Enemy = require('../entities/enemies/Enemy.js')
var Hex = require('../entities/enemies/Hex.js')


function cull(obj) {
  obj.exists = false
  obj.alive = false
  obj.visible = false
}

function update() {
  // Phaser's inWorld wasn't working right, so we do it ourselves.
  Enemy.prototype.update.call(this)
  var x = this.x
  var y = this.y
  var vx = this.body.velocity.x
  var vy = this.body.velocity.y
  var hw = this.width/2
  var inWorld = !(x+hw < 0 || x-hw > this.game.width || y+hw < 0 || y-hw > this.game.height)
  if (!inWorld) {
    if (x < 0) {
      if (vx <= 0) {
        cull(this)
        return
      }
      var t = -x/vx
      var iy = y + t*vy
      if (iy > this.game.height+hw || iy < -hw) {
        cull(this)
        return
      }
    }
    if (x > this.game.width) {
      if (vx >= 0) {
        cull(this)
        return
      }
      var t = -x/vx
      var iy = y + t*vy
      if (iy > this.game.height+hw || iy < -hw) {
        cull(this)
        return
      }
    }
    if (y < 0) {
      if (vy <= 0) {
        cull(this)
        return
      }
      var t = -y/vy
      var ix = x + t*vx
      if (ix > this.game.width+hw || ix < -hw) {
        cull(this)
        return
      }
    }
    if (y > this.game.height) {
      if (vy >= 0) {
        cull(this)
        return
      }
      var t = -y/vy
      var ix = x + t*vx
      if (ix > this.game.width+hw || ix < -hw) {
        cull(this)
        return
      }
    }
  }
}

function initEnemy(enemy) {
  enemy.body.removeCollisionGroup(enemy.game.physics.p2.boundsCollisionGroup)
  enemy.body.data.gravityScale = 0
  enemy.update = update
}


function Director(state) {
  this.state = state
  this.finished = false
  this.started = false
  this.script = null
  this.pool = {
    enemy: new Hydroid(state, Enemy, 40),
    hex: new Hydroid(state, Hex, 40)
  }

  this.pool.enemy.forEach(initEnemy)
  this.pool.hex.forEach(function(e) {
    initEnemy(e)
    e.body.removeCollisionGroup(state.platformsCG)
  }, this)
}


Director.prototype = {
  update: function() {
    if (this.finished || !this.started) { return }

    this.script.update(this.state.time.physicsElapsedMS)
    this.finished = this.script.finished
  },

  load: function(script) {
    this.script = script
  },

  start: function(idx) {
    idx = idx || 0
    if (!this.script || this.script.length <= idx) {
      this.finished = true
      return false
    }
    this.script.start(idx)
    this.started = true
    this.finished = false
  },

  spawn: function(type, x, y, width, velx, vely, drop) {
    type = type || 'enemy'
    x = x || 0
    y = y || 0
    width = width || 8
    velx = velx || 0
    vely = vely || 0
    var e = this.pool[type].spawn(x, y, width, velx, vely, drop)
    if (!e) { return null }
    e.wasInWorld = false
    return e
  }
}


},{"../entities/enemies/Enemy.js":26,"../entities/enemies/Hex.js":27,"../entities/enemies/Hydroid.js":28}],45:[function(require,module,exports){
module.exports = FinalBoss


var Level = require('./Level.js')


function FinalBoss() {
}


FinalBoss.prototype = Object.create(Level.prototype)


FinalBoss.prototype.create = function() {
  this.boss = null
  this.startOutro = false
  Level.prototype.create.call(this)
  var glow = this.fgItems.create(0, 0, 'sprites', 'halo')
  glow.width = this.game.width * 1.12
  glow.height = this.game.height * 1.12
  glow.anchor.setTo(0.5)
  glow.x = this.game.width/2
  glow.y = this.game.height/2
  var tween = this.add.tween(glow.scale)
  var x = glow.scale.x * 1.02
  var y = glow.scale.y * 1.02
  tween.to({ x: x, y: y }, 1000, Phaser.Easing.Sinusoidal.InOut, true, null, -1, true) 
}


FinalBoss.prototype.update = function() {
  Level.prototype.update.call(this)
  if (this.startOutro && !this.hasLanded) {
    this.hasLanded = this.p1.standing
    if (this.hasLanded) {
      var ctlr = {
        right: false,
        left: false,
        position: { x: 10000, y: 10000 },
        update: function() {}
      }
      this.p1.playerState.ctlr = ctlr
      var t = 2000
      this.time.events.add(t, function() {
        ctlr.right = true
      }, this)
      this.time.events.add(t += 500, function() {
        ctlr.right = false
      }, this)
      this.time.events.add(t += 500, function() {
        ctlr.left = true
        ctlr.position.x = -ctlr.position.x
      }, this)
      this.time.events.add(t += 1000, function() {
        ctlr.left = false
      }, this)
      this.time.events.add(t += 500, function() {
        ctlr.right = true
        ctlr.position.x = 10000
        var x = this.game.width+20 - this.p1.x
        var t2 = 1000*x/this.p1.speed
        this.add.tween(this.p1.body).to({ x: this.game.width+20 }, t2, null, true)
          .onComplete.addOnce(function() {
            this.camera.onFadeComplete.addOnce(function() {
              this.state.start('Credits')
            }, this)
            this.camera.fade(0xf6eeee, 1000, true)
          }, this)
      }, this)
    }
  }
}


FinalBoss.prototype.winCondition = function() {
  return !this.boss.alive
}


FinalBoss.prototype.win = function() {
  this.game.data.checkWin(this.mapName)
  this.p1.body.removeCollisionGroup(this.enemiesCG)
  this.hasLanded = false
  this.camera.flash(0xf6eeee, 2000)
  var loop = this.time.events.loop(100, this.camera.shake, this.camera, 0.01, 3000, true)
  this.time.events.add(1000, function() {
    this.startOutro = true
    this.time.events.remove(loop)
    if (this.soundtrack)
      this.soundtrack.stop()
    this.time.events.loop(400, function() { this.camera.flash(0xf6eeee, 150) }, this)
    this.time.events.loop(150, function() {
      this.bleed(Math.random() * this.game.width, 0, Math.PI/2)
      this.explode(Math.random()*this.game.width,
        Math.random()*this.game.height, Math.random()*160 + 40)
    }, this)
  }, this)
}


},{"./Level.js":46}],46:[function(require,module,exports){
module.exports = Level


var Scene = require('../Scene.js')
var mapsConfig = require('../../assets/mapsConfig.json')
var Enemy = require('../entities/enemies/Enemy.js')


function Level() {
  Scene.call(this)
  this.won = false
  this.lost = false
}


Level.prototype = Object.create(Scene.prototype)
  
Level.prototype.gravity = 400

Level.prototype.create = require('./create.js')
Level.prototype.entities = require('../entities/entities.js')
Level.prototype.init = require('./init.js')
Level.prototype.parseDrop = require('./parseDrop.js')

Level.prototype.addEntity = function(data) {
  data.properties = data.properties || {}
  var type = data.type
  var drop = this.parseDrop(data.properties.drop)
  // Tiled uses different coordinates than Phaser.
  data.x = data.x + data.width / 2
  data.y = data.y + data.height / 2
  if (!this.entities.hasOwnProperty(type)) {
    throw 'Failed to read Tiled map, no game object of type \'' + type + '.\''
  }
  return new this.entities[type](this, data, drop)
}


Level.prototype.bleed = function(x, y, angle, color) {
  color = color !== undefined ? color : Enemy.prototype.bloodColor
  for (var i = 0; i < 5; i++) {
    var drop = this.blood.getFirstDead() || this.blood.getRandom()
    drop.reset(x + Math.random() * 5 - 2.5, y)
    drop.body.velocity.x = (Math.random() * 220 + 170) * Math.cos(angle)
    drop.body.velocity.y = (Math.random() * 220 + 170) * Math.sin(angle)
    drop.body.velocity.x *= this.bulletTime
    drop.body.velocity.y *= this.bulletTime
    drop.scale.setTo(Math.random()/2 + 0.25)
    drop.tint = color
  }
}


Level.prototype.changeTime = function(factor) {
  if (factor === 0 || isNaN(factor)) return
  this.bulletTime *= factor
  this.enemies.recurse(function(enemy) {
    var f2 = factor * factor
    enemy.body.velocity.x *= factor
    enemy.body.velocity.y *= factor
    enemy.body.data.gravityScale *= f2
    enemy.body.mass /= f2
  })
  this.blood.recurse(function(drop) {
    drop.body.mass /= factor
    drop.body.velocity.x *= factor
    drop.body.velocity.y *= factor
    drop.body.data.gravityScale *= factor * factor
    drop.slowSpeed *= factor
  })
  if (this.sound.usingWebAudio) {
    this.sound._sounds.forEach(function(snd) {
      if (snd.isPlaying && snd.useBulletTime) {
        snd._sound.playbackRate.value *= factor
      }
    })
  }
}


Level.prototype.exit = function() {
  this.state.start('LevelSelect')
}


Level.prototype.explode = function(x, y, width) {
  this.explosionPool.getFirstDead(true).reset(x, y, width)
  this.puffs.x = x
  this.puffs.y = y
  this.puffs.explode(800, 10)
}


Level.prototype.FXMaskErase = function(sprite) {
  this.splatter.mask.blendDestinationOut()
  // TODO: Hack to fix antialiasing causing masks not to erase fully.
  this.splatter.mask.draw(sprite)
  this.splatter.mask.draw(sprite)
  this.splatter.mask.draw(sprite)
  this.splatter.mask.draw(sprite)
  this.splatter.mask.blendSourceOver()
  this.splatter.unclean = true
}


Level.prototype.gameOver = function() {
  this.reticule.animations.play('die', null, false, true)
  this.input.keyboard.addKey(Phaser.Keyboard.R).onDown.addOnce(function() {
    this.state.start(this.key, true, false, this.mapName)
  }, this)
  this.add.tween(this.gameOverScreen).to({alpha: 0.8}, 100).start()
  this.gameOverScreen.exists = true
  this.time.slowMotion = 6
  if (this.soundtrack) { this.soundtrack.stop() }
  this.players.forEach(this.world.addChild, this.world)
}


Level.prototype.paintFX = function(sprite) {
  this.splatter.draw(sprite)
  this.splatter.unclean = true
}


Level.prototype.paintFXupdate = function() {
  if (!this.splatter.unclean) return
  this.splatter.blendDestinationIn()
  this.splatter.draw(this.splatter.mask)
  this.splatter.blendSourceOver()
  this.splatter.unclean = false
}


Level.prototype.shutdown = function() {
  this.splatter.mask.destroy()
  this.splatter.destroy()
  this.gameOverScreen.destroy()
  this.time.slowMotion = 1
  if (this.soundtrack) { this.soundtrack.stop() }
}


Level.prototype.loseCondition = function() {
  return !this.p1.alive
}


Level.prototype.spawn = function(type, x, y, width, velx, vely, drop) {
  return this.enemyPools[type]
    .spawn(x, y, width, velx, vely, drop)
}


Level.prototype.setSize = function() {
  this.scale.setGameSize(this.map.widthInPixels, this.map.heightInPixels)
}

Level.prototype.startFX = function() {
  var go = this.add.image(this.game.width/2, this.game.height/2,
    'sprites', 'go')
  go.anchor.setTo(0.5)
  go.fixedToCamera = true
  var goTween = this.add.tween(go)
  goTween.to({width: go.width * 4, height: go.height * 4, alpha: 0},
    800, Phaser.Easing.Quartic.In)
  goTween.onComplete.addOnce(go.kill, go)
  goTween.start()

  this.camera.flash(0x180c08, 1000)
}


Level.prototype.throwShell = function(x, y, dir) {
  var shell = this.shellPool.getFirstDead() || this.shellPool.getRandom()
  shell.reset(x, y)
  shell.body.angularVelocity = Math.random() * 8
  shell.body.velocity.x = (Math.random() * 40 + 20) * dir
  shell.body.velocity.y = -120
}


Level.prototype.update = function() {
  this.paintFXupdate()

  for (var i=this.buffs.length-1; i>=0; i--) {
    var buff = this.buffs[i]
    if (buff.timeLeft !== -1)
      buff.timeLeft = Math.max(buff.timeLeft - this.time.elapsed, 0)
    if (buff.timeLeft !== 0) {
      if (typeof buff.update === 'function') buff.update()
    } else {
      if (typeof buff.stop === 'function') buff.stop()
      this.buffs.splice(i, 1)
    }
  }

  if (!this.lost && this.loseCondition()) {
    this.lost = true
    this.gameOver()
  } else if (!this.lost && !this.won && this.winCondition()) {
    this.win()
    this.won = true
  }
}


Level.prototype.win = function() {
  this.time.events.add(200, function() {
    this.game.data.checkWin(this.mapName)
    if (this.soundtrack) { this.soundtrack.stop() }
    this.playSound('victory-jingle', undefined, undefined, true)
    this.p1.playerState.change('victory')

    var clear = this.add.image(this.game.width/2, this.game.height/2,
      'sprites', 'stage-clear')
    clear.anchor.setTo(0.5)
    clear.fixedToCamera = true
    var clearTween = this.add.tween(clear)
    clearTween.from({width: clear.width * 4, height: clear.height * 4, alpha: 0},
      800, Phaser.Easing.Quartic.Out, null, 200)
    clearTween.onComplete.addOnce(function() {
      this.camera.onFadeComplete.addOnce(function() {
        this.exit()
      }, this)
      this.camera.fade(0xf6eeee, 1000)
    }, this)
    clearTween.start()
  }, this)
}


Level.prototype.winCondition = function() {
  return this.enemies.getFirstAlive() ? false : true
}


},{"../../assets/mapsConfig.json":3,"../Scene.js":8,"../entities/enemies/Enemy.js":26,"../entities/entities.js":31,"./create.js":53,"./init.js":54,"./parseDrop.js":55}],47:[function(require,module,exports){
module.exports = MonsterLevel


var Level = require('./Level.js')


function MonsterLevel() {

}


MonsterLevel.prototype = Object.create(Level.prototype)

MonsterLevel.prototype.tileset = 'living-tissue-tileset'



var WIDTH = 16 * 28
var HEIGHT = 16 * 18
var CAM_PAD = 40
var X_CLAMP = WIDTH - CAM_PAD * 2
var Y_CLAMP = HEIGHT - CAM_PAD * 2
var X_FOCUS = (WIDTH/2 - CAM_PAD) / X_CLAMP
var Y_FOCUS = (HEIGHT/2 - CAM_PAD) / Y_CLAMP


MonsterLevel.prototype.create = function() {
  var bg = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'living-tissue')
  bg.fixedToCamera = true

  this.trigger = null
  Level.prototype.create.apply(this, arguments)
  this.background.destroy()
  this.background = bg
  this.splatterImage.kill()
  this.winning = false
  this.doneWinning = false

  var p1 = this.p1 = this.players.children[0]

  this.camera.lerp.setTo(0.1)
  this.camera.bounds = this.world.bounds
  this.camera.focusOn(p1)
  this.reticule.follow(p1, X_CLAMP, Y_CLAMP)

  var glow = this.fgItems.create(0, 0, 'sprites', 'halo')
  glow.width = this.game.width * 1.05
  glow.height = this.game.height * 1.05
  glow.anchor.setTo(0.5)
  glow.x = this.game.width/2
  glow.y = this.game.height/2
  var tween = this.add.tween(glow.scale)
  var x = glow.scale.x * 1.02
  var y = glow.scale.y * 1.02
  tween.to({ x: x, y: y }, 1000, Phaser.Easing.Sinusoidal.InOut, true, null, -1, true) 
  glow.fixedToCamera = true
}


MonsterLevel.prototype.update = function() {
  Level.prototype.update.apply(this, arguments)
  this.background.tilePosition.x = -this.camera.x/5
  this.background.tilePosition.y = -this.camera.y/5

  var xMid = (this.reticule.x - this.p1.world.x) * X_FOCUS + this.p1.world.x
  var yMid = (this.reticule.y - this.p1.world.y) * Y_FOCUS + this.p1.world.y
  var dx = (xMid - (this.camera.x+this.camera.width/2)) * 0.1 + this.camera.x+this.camera.width/2
  var dy = (yMid - (this.camera.y+this.camera.height/2)) * 0.1 + this.camera.y+this.camera.height/2
  this.camera.focusOnXY(dx, dy)

  if (this.winning && !this.doneWinning) this.winLoop()
}


MonsterLevel.prototype.setSize = function() {
  this.scale.setGameSize(WIDTH, HEIGHT)
}


MonsterLevel.prototype.win = function() {
  this.winning = true
  this.reticule.exists = false
  this.p1.body.removeCollisionGroup(this.enemiesCG)
  if (!this.trigger.down) {
    this.players.children[0].playerState.ctlr = {
      right: true, position: {y: 10000000, x: 10000000}, update: function(){}
    }
  } else {
    this.p1.playerState.ctlr = { position: { x: 100000, y: -100000 }, update: function() {} }
  }
}


MonsterLevel.prototype.winCondition = function() {
  return this.trigger.contains(this.p1.x, this.p1.y)
}


MonsterLevel.prototype.winLoop = function() {
  var p1 = this.p1
  if (!this.trigger.down) {
    if (p1.standing) {
      var d = this.world.width + p1.width
      var dx = d - p1.world.x
      this.add.tween(p1.body)
        .to({x: d}, dx*1000/p1.speed)
        .start()
        .onComplete.add(Level.prototype.win, this)
      this.doneWinning = true
    }
  } else {
    p1.body.removeCollisionGroup(this.physics.p2.boundsCollisionGroup)
    this.add.tween(p1.body)
      .to({ y: this.world.height + 24 }, 100)
      .start()
      .onComplete.add(Level.prototype.win, this)
    this.doneWinning = true
  }
}


},{"./Level.js":46}],48:[function(require,module,exports){
module.exports = RocketLevel


var Level = require('./Level.js')


function RocketLevel() {
  this.rocket = null
}


RocketLevel.prototype = Object.create(Level.prototype)


RocketLevel.prototype.create = function() {
  Level.prototype.create.call(this)
  this.loopEnd = false
  this.takeoff = false
  this.won = false
}


RocketLevel.prototype.update = function() {
  Level.prototype.update.call(this)
  if (this.won) this.winLoop()
}


RocketLevel.prototype.win = function() {
  var rocket = this.rocket
  var player = this.p1
  this.world.addChild(this.rocket)

  this.time.events.add(200, function() {
    player.playerState.ctlr = {
      get right() { return player.exists && player.world.x < rocket.x },
      get left() { return player.exists && player.world.x > rocket.x },
      position: this.rocket.world,
      update: function() {}
    }
    this.game.data.checkWin(this.mapName)
    if (this.soundtrack) { this.soundtrack.stop() }
    this.playSound('victory-jingle', undefined, undefined, true)
    this.p1.playerState.change('victory')
    var clear = this.add.image(this.game.width/2, this.game.height/2,
      'sprites', 'stage-clear')
    clear.anchor.setTo(0.5)
    clear.fixedToCamera = true
    var clearTween = this.add.tween(clear)
    clearTween.from({width: clear.width * 4, height: clear.height * 4, alpha: 0},
      800, Phaser.Easing.Quartic.Out, null, 200)
      .chain(this.add.tween(clear).to({ alpha: 0 }, 200, null, null, 1000))
    clearTween.start()
  }, this)
  this.won = true
}


RocketLevel.prototype.winLoop = function() {
  var p1 = this.p1
  if (this.takeoff) {
    var r = this.rocket
    p1.x = r.x - r.width/4
    p1.y = r.y + r.height/4
    for (var i = -1; i < 2; i++) {
      p1.fx.jet()
      p1.fx.jet()
      p1.fx.jet()
      p1.x += r.width/4
    }
  }
  if (this.loopEnd) return
  if (p1.world.distance(this.rocket) < 12) {
    p1.exists = false
    this.loopEnd = true
    p1.fx.flame.makeParticles('sprites',
      Phaser.Animation.generateFrameNames('flame', 1, 4), 1000)
    this.time.events.add(1000, function() {
      this.takeoff = true
      this.playSound('jetpack', false, false, true)
      this.add.tween(this.rocket).to({x: this.rocket.x-3}, 400,
        Phaser.Easing.Bounce.In).yoyo(true)
        .chain(this.add.tween(this.rocket).to({x: this.rocket.x+3}, 400,
          Phaser.Easing.Bounce.Out).yoyo(true)).start()
      this.add.tween(this.rocket).to({y: -100}, 1500,
        Phaser.Easing.Cubic.In, true, 350)
        .onComplete.add(function() {
          this.camera.onFadeComplete.addOnce(function() {
            this.exit()
          }, this)
          this.camera.fade(0xf6eeee, 1000)
        }, this)
    }, this)
  }
}


},{"./Level.js":46}],49:[function(require,module,exports){
module.exports = Script


var DEFAULT_WIDTH = 12
var DEFAULT_VELY = 400


function Script(dir, actions) {
  this.next = 0
  this.current = null
  this.finished = false
  this.actions = actions || []
}


Script.prototype = {
  start: function(idx) {
    idx = idx || 0
    this.finished = false
    this.next = idx
    this.advance()
  },

  advance: function() {
    if (this.next === this.actions.length) {
      this.finished = true
      this.current = null
      return null
    }
    this.current = this.actions[this.next]
    this.current.start()
    this.next++
    return this.current
  },

  update: function(dt) {
    if (this.finished) { return }
    if (typeof this.current.update === 'function') { this.current.update(dt) }
    while(this.current && this.current.finished) {
      this.advance()
    }
  }
}


// [Wait]

Script.Wait = function(time) {
  this.delay = time
  this.timer = time
  this.finished = false
}

Script.Wait.prototype = {
  start: function() {
    this.timer = this.delay
    this.finished = false
  },

  update: function(dt) {
    this.timer -= dt
    if (this.timer <= 0) { this.finished = true }
  }
}


// [Spawn]


Script.Spawn = function(dir, type, x, y, width, velx, vely) {
  this.director = dir
  this.type = type || 'enemy'
  this.width = width ||  DEFAULT_WIDTH
  this.x = x || 0
  this.y = y || -width/2 - 2
  this.velx = velx || 0
  this.vely = vely || DEFAULT_VELY
}

Script.Spawn.prototype = {
  start: function() {
    this.director.spawn(this.type, this.x, this.y, this.width, this.velx, this.vely)
    this.finished = true
  },
}


// [Multi]

Script.Multi = function(dir, children) {
  this.dir = dir
  this.children = children || []
}

Script.Multi.prototype = {
  start: function() {
    this.finished = false
    for (var i = 0; i < this.children.length; ++i) {
      this.children[i].start()
    }
  },

  update: function(dt) {
    var finished = true
    for (var i = 0; i < this.children.length; ++i) {
      var child = this.children[i]
      if (typeof child.update === 'function') { child.update(dt) }
      if (!child.finished) { finished = false }
    }
    this.finished = finished
  }
}

// [Curtain]

Script.Curtain = function(dir, type, count, rate, width, velx, vely, offset, span) {
  rate = rate || 0
  offset = offset || 0
  span = span || dir.state.game.width

  var actions = []
  var dx = span / (count - 1)
  var y = -width/2 - 2
  for (var i = 0; i < count; ++i) {
    actions.push( new Script.Spawn(dir, type, dx*i+offset, y, width, velx, vely) )
    if (rate > 0 && i !== count-1) { actions.push( new Script.Wait(rate) ) }
  }
  Script.call(this, dir, actions)
}

Script.Curtain.prototype = Object.create(Script.prototype)


},{}],50:[function(require,module,exports){
module.exports = ShmupLevel


var Level = require('./Level.js')
var Director = require('./Director.js')
var Spaceship = require('../entities/Spaceship.js')
var DefaultCtlr = require('../entities/heroes/DefaultCtlr.js')


function ShmupLevel() {
  Level.call(this)
  this.finished = false
}


ShmupLevel.prototype = Object.create(Level.prototype)

ShmupLevel.prototype.gravity = 0


ShmupLevel.prototype.throwShell = function() {}


ShmupLevel.prototype.create = function() {
  Level.prototype.create.call(this)
  this.finished = false
  this.background.anchor.setTo(0.5, 0)
  this.background.scale.x *= 1.2
  this.background.scale.y *= 1.2
  this.background.x -= 15
  this.background.y = this.game.height-this.background.height
  this.add.tween(this.background)
    .to({ y: 0 }, 120000)
    .start()

  this.director = new Director(this)

  this.puffs.setXSpeed(-80, 80)
  this.puffs.setYSpeed(400, 480)

  var dust = this.bgItems.addChild(this.make.emitter(this.game.width/2, 0, 100))
  this.dust = dust
  dust.makeParticles('sprites', 
    Phaser.Animation.generateFrameNames('dust', 1, 4), 4)
  dust.setSize(this.game.width, 1)
  dust.minParticleSpeed.setTo(0, 2000)
  dust.maxParticleSpeed.setTo(0, 1000)
  dust.setRotation(0, 0)
  dust.gravity = 0
  dust.setAll('checkWorldBounds', true)
  dust.setAll('outOfBoundsKill', true)
  dust.start(false, 0, 250)

  this.atmosphere = this.make.image(-this.game.width*0.05, -this.game.height*0.05, 'sprites', 'sky')
  this.atmosphere.width = this.game.width * 1.1
  this.atmosphere.height = this.game.height * 1.1
  this.bgItems.addChild(this.atmosphere)
  this.ocean = this.make.image(0, 0, 'ocean')
  this.ocean.scale.setTo(this.game.height/this.ocean.height)
  this.bgItems.addChild(this.ocean)
  var tween = this.add.tween(this.atmosphere)
    .to({ alpha: 0 }, 3500, Phaser.Easing.Quadratic.In, false, 750)
  tween.onComplete.addOnce(function() {
    this.atmosphere.exists = false
    this.ocean.exists = false
  }, this)
  this.add.tween(this.ocean).to({ y: this.game.height }, 2000).chain(tween).start()
  
  var ship = this.players.addChild(new Spaceship(this, new DefaultCtlr(this)))
  this.ship = ship
  ship.body.removeFromWorld()
  ship.body.x = this.game.width/2
  ship.body.y = this.game.height + ship.height
  this.add.tween(this.ship.body).to({ y: this.game.height - 80 }, 1000, null, true, 1000)
    .onComplete.addOnce(function() {
      this.ship.body.addToWorld()
      this.ship.body.velocity.x = 0
      this.ship.body.velocity.y = 0
    }, this)
  this.p1 =  ship

  this.playSound('jetpack')
  this.playDiegetic = false

  var delay = 3000
  this.timer = delay
  this.minWait = 500
  this.maxWait = 2000
  var phase1 = this.add.tween(this)
  phase1.to({ minWait: 200, maxWait: 200 }, 18000, Phaser.Easing.Quadratic.In, false, delay)
  var phase2 = this.add.tween(this)
  phase2.to({ minWait: 1000, maxWait: 1000 }, 6000, Phaser.Easing.Quadratic.Out, false, 15000)
  phase2.onComplete.add(function() { this.finished = true }, this)
  phase1.chain(phase2)
  phase1.start()
  this.reticule.exists = false
}


ShmupLevel.prototype.update = function() {
  Level.prototype.update.call(this)
  if (this.finished) { return }
  this.timer -= this.time.physicsElapsedMS
  if (this.timer <= 0) {
    this.timer = Math.random() * (this.maxWait - this.minWait) + this.minWait
    this.minWait = Math.max(this.minWait * 0.98, 100)
    this.maxWait = Math.max(this.maxWait * 0.98, 200)
    var choice = Math.random()
    if (choice > .4) {
      this.director.spawn(null, Math.random()*this.game.width, -20, Math.random()*40+10, 0, Math.random()*300+100)
    } else if (choice > 0.2) {
      this.director.spawn('hex', -20, Math.random()*this.game.height/3, Math.random()*40+20, Math.random()*120+30, Math.random()*120+30)
    } else {
      this.director.spawn('hex', this.game.width+20, Math.random()*this.game.height/3, Math.random()*40+20, -Math.random()*120-30, Math.random()*120+30)
    }
  }
}


ShmupLevel.prototype.winCondition = function() {
  return this.finished
}
  

ShmupLevel.prototype.win = function() {
  this.time.events.add(3000, function() {
    this.game.data.checkWin(this.mapName)
    if (this.soundtrack) this.soundtrack.stop()
    this.playSound('victory-jingle')

    var t = this.add.tween(this.ship.body).to({ y: -200 }, 1000)
    this.ship.body.removeCollisionGroup(this.enemiesCG)

    t.onComplete.addOnce(function() {
      this.ship.body.removeFromWorld()
      var clear = this.add.image(this.game.width/2, this.game.height/2,
        'sprites', 'stage-clear')
      clear.anchor.setTo(0.5)
      clear.fixedToCamera = true
      var clearTween = this.add.tween(clear)
      clearTween.onComplete.addOnce(function() {
        this.camera.onFadeComplete.addOnce(function() {
          this.exit()
        }, this)
        this.camera.fade(0xf6eeee, 1000)
      }, this)
      clearTween.from({width: clear.width * 4, height: clear.height * 4, alpha: 0},
        800, Phaser.Easing.Quartic.Out, null, 200).start()
    }, this)

    t.start()
  }, this)
}


},{"../entities/Spaceship.js":19,"../entities/heroes/DefaultCtlr.js":33,"./Director.js":44,"./Level.js":46}],51:[function(require,module,exports){
module.exports = SpaceBoss


var Level = require('./Level.js')
var Director = require('./Director.js')
var Script = require('./Script.js')
var mapsConfig = require('../../assets/mapsConfig.json')


function SpaceBoss() {
  this.rotAccel = Math.PI / 20
  this.rotMaxSpeed = Math.PI
  this.rotSpeed = 0
  this.pivotPoint = new Phaser.Point()
  this.maxHp = 25
  this.hp = this.maxHp
  this.trigger = null
  this.blinking = false
  this.hitTimeout = false
  this.provoked = false
  this.attackTimer = 0
  this.blinkTimer = 0
  this.director = null
  this.curtain = null
  this.lastSeeker = 0
  this.lastShield = 0
}


SpaceBoss.prototype = Object.create(Level.prototype)


SpaceBoss.prototype.create = function() {
  this.trigger = null
  Level.prototype.create.call(this)

  this.playDiegetic = false
  this.provoked = false
  this.attackTimer = 0
  this.blinkTimer = 0
  this.lastSeeker = 0
  this.lastShield = 0

  this.director = new Director(this)
  this.curtain = new Script.Curtain(this.director, null, 16, 150, 28)
  this.curtainR = new Script.Curtain(this.director, null, 16, 150, 28,
    null, null, this.game.width, -this.game.width)

  this.splatterImage.exists = false
  this.rotSpeed = 0
  this.hp = this.maxHp
  this.blinking = false
  this.hitTimeout = false
  this.makeMonster()

  this.p1.character.animations.add('walk',
    Phaser.Animation.generateFrameNames('p1-walk-space', 1, 4), 12, true)
  this.p1.character.animations.add('fall', ['p1-space'], 1, true)
  this.p1.character.animations.add('fall-slow', ['p1-space'], 1, true)
  this.p1.character.animations.add('fly', ['p1-space'], 1, true)
  this.p1.character.animations.add('idle', ['p1-walk-space1'], 1, true)
  this.p1.character.animations.add('stun', ['p1-space'], 1, true)
  this.p1.character.animations.add('shoot', ['p1-shoot-space'], 1, true)

  this.motes = this.add.group()
  this.bgItems.add(this.motes)
  this.motes.createMultiple(5, 'sprites', 'dust1')
  this.motes.createMultiple(5, 'sprites', 'dust2')
  this.motes.createMultiple(5, 'sprites', 'dust3')
  this.motes.createMultiple(5, 'sprites', 'dust4')
  this.motes.setAll('alpha', 0.6)
  this.motes.setAll('blendMode', PIXI.blendModes.ADD)

  this.enemies.bringToTop(this.enemyPools.seeker)
}


SpaceBoss.prototype.makeMonster = function() {
  var l = this.add.sprite(0, 400, 'space-boss', 'fg-left')
  l.anchor.setTo(0, 1)
  l.scale.setTo(2)
  this.bgItems.create(l.width, 260, 'space-boss', 'bg').scale.setTo(2)
  var i = this.eye = this.bgItems.create(this.game.width/2+5, 308, 'space-boss', 'eyeball')
  i.mask = this.add.graphics()
  i.mask.beginFill(0xffffff)
  i.mask.drawRect(0, 0, this.game.width, this.game.height-20)
  var overlay = this.add.sprite(0, 0, 'space-boss', 'eyeball-overlay')
  overlay.anchor.setTo(0.5)
  overlay.alpha = 0
  this.eye.overlay = overlay
  this.eye.addChild(overlay)
  i.anchor.setTo(0.5)
  i.scale.setTo(2)
  i.pivot.setTo(0, 150 - i.height/4)
  i.y += i.pivot.y*2
  this.pivotPoint.setTo(i.x, i.top+59)
  this.bgItems.addChild(l)
  var c = this.centerPanel = this.bgItems.create(300, 400, 'space-boss', 'fg')
  c.anchor.setTo(0, 1)
  c.x = l.width
  c.scale.setTo(2)
  var r = this.bgItems.create(800, 400, 'space-boss', 'fg-right')
  r.anchor.setTo(1, 1)
  r.scale.setTo(2)
  var lid = this.lid =  this.bgItems.create(this.game.width/2+8, 284, 'space-boss', 'lid')
  lid.anchor.setTo(0.5)
  lid.scale.setTo(2)

  this.physics.p2.enable(this.eye, false, false)
  var b = this.monsterBody = this.eye.body
  b.static = true
  b.setCircle(150*2)
  b.setCollisionGroup(this.enemiesCG)
  b.collides([this.bulletsCG, this.playersCG], this.onCollide, this)
  b.collides([this.shellsCG, this.itemsCG], function(_, s) {
    s.sprite.kill()
    this.blink(100)
    this.damage(0.05)
  }, this)
}


SpaceBoss.prototype.update = function() {
  Level.prototype.update.call(this)

  if (this.hp <= 0) { return }

  this.director.update()
  var dt = this.time.physicsElapsed

  var theta = this.pivotPoint.angle(this.p1.world)
  if (theta > -Math.PI/3-Math.PI/18) theta = -Math.PI/3-Math.PI/18
  else if (theta < -Math.PI*2/3+Math.PI/18) theta = -Math.PI*2/3+Math.PI/18
  theta += Math.PI/2

  var d = Math.abs(this.eye.rotation - theta) * 180/Math.PI
  if (!this.blinking) {
    var rot
    if (d > 10) {
      this.rotSpeed = Math.min(this.rotSpeed + this.rotAccel * dt, this.rotMaxSpeed)
      rot = this.rotSpeed * dt
      this.eye.body.rotation += theta > this.eye.rotation ? rot : -rot
    } else if (d > 1) {
      rot = d/10 * this.rotSpeed * dt
      this.eye.body.rotation +=  theta > this.eye.rotation ? rot : -rot
    } else {
      this.rotSpeed = 0
    }
  }

  var p1 = this.p1
  var c = this.eye
  if (this.eye.exists && !this.hitTimeout && !this.blinking &&
    (p1.x-c.x)*(p1.x-c.x) + (p1.y+p1.character.height/2-c.y)*(p1.y+p1.character.height/2-c.y) < 300*300) {
    this.blink(1000)
    this.hitTimeout = true
    this.time.events.add(2400, this.clearHitTimeout, this)
    this.p1.damage(null, this.eye.body)
  }

  if (this.blinking) {
    this.blinkTimer -= dt * 1000
    if (this.blinkTimer <= 0) { this.unblink() }
  }

  if (!this.provoked) { return }

  if (this.attackTimer > 0) {
    this.attackTimer -= dt
    if (this.attackTimer <= 0) { this.attack() }
  }
}


function curtCB() {
  var script = Math.random() > 0.5 ? this.curtain : this.curtainR
  this.director.load(script)
  this.director.start()
  this.camera.shake(0.01, 100)
}
SpaceBoss.prototype.attack = function() {
  var sinceSeeker = this.time.now - this.lastSeeker
  if (sinceSeeker > 27000) {
    this.generateSeeker()
    this.attackTimer = 5
    return
  }
  var roll = Math.random()
  switch (true) {
  case roll < 0.2:
    if (sinceSeeker > 15000) {
      this.generateSeeker()
    }
    this.attackTimer = 5
    return
  case roll < 0.95:
    var t = 400
    this.blink(t)
    this.time.events.add(t, curtCB, this)
    this.attackTimer = Math.random()*2 + t/1000 + 2
    return
  default:
    this.attackTimer = Math.random() * 3
  }
}


SpaceBoss.prototype.clearHitTimeout = function() {
  this.hitTimeout = false
}


SpaceBoss.prototype.onCollide = function(_, src) {
  if (this.blinking) return
  this.camera.shake(0.01, 100)
  this.eye.tint = 0x180c08
  this.damage(src.attack || 1)
  this.bleed(src.x, src.y, -Math.PI/2)
  this.time.events.add(20, this.blink, this)
}


SpaceBoss.prototype.throwHex = function() {
  if (this.hp <= 0) { return }
  var roll = Math.random()
  var width = Math.random() * 80 + 80
  this.time.events.add(Math.random() * 3000 + 500, this.throwHex, this)
  var h
  var speed = 100
  if (roll < 0.5) {
    h = this.director.spawn('hex', -width/2-1,
      Math.random()*this.game.height*3/4, width, speed, 0, drop)
  } else {
    h = this.director.spawn('hex', this.game.width+width/2+1,
      Math.random()*this.game.height*3/4, width, -speed, 0, drop)
  }
  if (!h) { return }
  if (this.time.now - this.lastShield > 40000 && h.y <= this.game.height * 3/5) {
    if (Math.random() < 1/40) {
      var drop = this.addEntity({ x: 0, y: 0, type: 'shield'})
      this.lastShield = this.time.now
      drop.kill()
      h.drop = drop
      var tween = this.add.tween(h)
      tween.to({ alpha: 0.6 }, 200, Phaser.Easing.Sinusoidal.InOut, true, null, -1, true)
      h.events.onKilled.addOnce(function() {
        tween.manager.remove(tween)
        h.alpha = 1
      })
    }
  }
}


SpaceBoss.prototype.damage = function(amt) {
  this.hp -= amt || 1
  this.eye.overlay.alpha = (this.maxHp - this.hp)/this.maxHp
  if (this.hp <= 0) { this.defeatMonster() }

  if (!this.provoked && this.hp <= this.maxHp-0.7) {
    this.provoked = true
    var t = 1000
    this.camera.shake(0.02, t)
    this.blink(1000)
    this.time.events.add(1000, function() {
      var drop = this.addEntity({ x: 0, y: 0, type: 'dblPistol' })
      drop.kill()
      this.generateSeeker(drop)
    }, this)
    this.time.events.add(t, this.throwHex, this)
    this.attackTimer = 3 + 1.2
  }
}


SpaceBoss.prototype.blink = function(time) {
  this.blinking = true
  time = time || 200
  this.lid.frameName = 'lid-closed'
  this.blinkTimer = Math.max(this.blinkTimer, time)
  this.eye.body.removeCollisionGroup([this.shellsCG, this.itemsCG], false)
}


SpaceBoss.prototype.unblink = function() {
  this.blinking = false
  this.eye.tint = 0xffffff
  this.lid.frameName = 'lid'
  this.eye.body.collides([this.shellsCG, this.itemsCG])
}


SpaceBoss.prototype.defeatMonster = function() {
  this.blink(-1)
  var time = 4000
  var loop = this.time.events.loop(50, function() {
    var x = Math.random() * 200 - 100 + this.eye.x
    var y = Math.random() * 60 + 250
    var angle = Math.random() * Math.PI/4 - Math.PI/8 - Math.PI/2
    this.bleed(x, y, angle)
    this.explode(x, y, Math.random() * 80 + 40)
  }, this)
  this.time.events.add(time, this.time.events.remove, this.time.events, loop)
  this.add.tween(this.eye).to({alpha: 0}, time, null, true).onComplete.add(function() {
    this.eye.kill()
    this.lid.kill()
    for (var i = 0; i < this.platforms.length; ++i) {
      if (this.platforms[i].shouldRemove) this.platforms[i].removeFromWorld()
    }
    this.fgItems.addChild(this.centerPanel)
  }, this)
}


SpaceBoss.prototype.winCondition = function() {
  return this.trigger.contains(this.p1.x, this.p1.y)
}


SpaceBoss.prototype.gameOver = function() {
  Level.prototype.gameOver.call(this)
  this.p1.playerState.states.floating.exit()
}


SpaceBoss.prototype.generateSeeker = function(drop) {
  var width = 112
  var x = width/2+16 + (Math.random() * (this.game.width/2 - 32))
  var y = 16+width/2 + Math.random()*this.game.height/3
  var e = this.spawn('seeker', x, y, width, 0, 0, drop)

  if (!e) { return }

  this.lastSeeker = this.time.now

  e.body.removeFromWorld()
  e.alpha = 1
  e.blendMode = PIXI.blendModes.ADD

  var time = 2000

  var glow = this.time.events.loop(100, function() {
    var m = this.motes.getFirstDead()
    if (!m) { return }

    m.width = 1
    m.height = 1

    var rot = Math.random() * 2*Math.PI
    var dx = x + Math.cos(rot) * width/1.4
    var dy = y + Math.sin(rot) * width/1.4
    m.reset(dx, dy)
    var t = this.add.tween(m)
    t.onComplete.addOnce(m.kill, m)
    t.to({ x: x, y: y, width: 4, height: 4 }, 800, Phaser.Easing.Quadratic.In, true)
  }, this)

  var tween = this.add.tween(e)
  tween.from({ alpha: 0, width: 2, height: 2 }, time, Phaser.Easing.Quadratic.In)
  tween.onComplete.add(function() {
    e.blendMode = PIXI.blendModes.NORMAL
    e.body.addToWorld()
    e.body.velocity.x = 0
    e.body.velocity.y = 0
    this.time.events.remove(glow)
    this.motes.setAll('exists', false, true)
    this.eye.rotation = 0
    this.camera.shake(0.01, 100)
  }, this)
  tween.start()

  this.blink(time + 100)
}


},{"../../assets/mapsConfig.json":3,"./Director.js":44,"./Level.js":46,"./Script.js":49}],52:[function(require,module,exports){
module.exports = ZeroGLevel


var Level = require('./Level.js')


function ZeroGLevel() {
  Level.call(this)
}


ZeroGLevel.prototype = Object.create(Level.prototype)

ZeroGLevel.prototype.gravity = 0


ZeroGLevel.prototype.create = function() {
  Level.prototype.create.call(this)
  this.playDiegetic = false
  this.physics.p2.gravity.x = 0
  this.physics.p2.gravity.y = 0
  this.p1.playerState.change('floating')
}


},{"./Level.js":46}],53:[function(require,module,exports){
var Scene = require('../Scene.js')

var BrkPlat = require('../entities/BrkPlat.js')
var Explosion = require('../magic/Explosion.js')
var Blood = require('../magic/Blood.js')
var Hydroid = require('../entities/enemies/Hydroid.js')
var Enemy = require('../entities/enemies/Enemy.js')
var Hex = require('../entities/enemies/Hex.js')
var Seeker = require('../entities/enemies/Seeker.js')

var mapsConfig = require('../../assets/mapsConfig.json')
var Reticule = require('../Reticule.js')


module.exports = function create() {
  Scene.prototype.create.call(this)

  this.won = false
  this.lost = false

  if (this.map.properties && this.map.properties.setting) 
    paintBackground(this)

  this.reticule = new Reticule(this.game)
  this.reticule.exists = true
  this.reticule.animations.stop()
  this.reticule.frameName = 'reticule'

  this.bgItems = this.make.group()
  this.players = this.make.group()
  this.bullets = this.make.group()
  this.enemies = this.make.group()
  this.items = this.make.group()
  this.fgItems = this.make.group()
  this.hud = this.make.group()
  this.hud.fixedToCamera = true

  this.splatter = this.make.bitmapData(this.game.width, this.game.height)
  this.splatter.mask = this.make.bitmapData(this.game.width, this.game.height)

  this.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels)

  this.world.addChild(this.bgItems)
  makeParticles(this)
  this.world.addChild(this.bullets)

  this.world.addChild(this.players)
  this.world.addChild(this.enemies)

  this.enemyPools = {
    enemy: new Hydroid(this, Enemy, 70),
    hex: new Hydroid(this, Hex, 70),
    seeker: new Hydroid(this, Seeker, 70)
  }

  makeMap(this)

  this.splatterImage = this.add.image(0, 0, this.splatter)

  this.world.addChild(this.items)
  this.world.addChild(this.fgItems)
  this.world.addChild(this.hud)

  makeExplosions(this)
  makeGameOverScreen(this)

  this.input.keyboard.addKey(Phaser.Keyboard.X)
    .onDown.add(this.exit, this)

  var track = Phaser.ArrayUtils.getRandomItem(
    mapsConfig[this.map.properties.setting].songs)
  this.time.events.add(500, this.startMusic, this, track)
  this.startFX()
  this.world.add(this.reticule)
  this.p1 = this.players.children[0]

  this.physics.p2.pause()
  this.time.events.add(250, this.physics.p2.resume, this.physics.p2)
}


function makeExplosions(state) {
  state.explosionPool = state.add.group()
  state.explosionPool.classType = Explosion
  state.explosionPool.createMultiple(10)
}


function makeGameOverScreen(state) {
  var gameOverScreen = state.make.graphics()
  gameOverScreen.beginFill(0x000000)
  gameOverScreen.drawRect(0, 0, state.game.width*1.1, state.game.height*1.1)
  gameOverScreen.endFill()
  state.gameOverScreen = state.make.image(state.game.width/2, state.game.height/2,
    gameOverScreen.generateTexture())
  state.gameOverScreen.anchor.setTo(0.5)

  var GOtext = state.entities.smallFont(state, 'x: menu r: retry')
  GOtext.anchor.setTo(0, 1)
  GOtext.x = -state.game.width/2 + 16
  GOtext.y = state.game.height/2 - 16

  state.gameOverScreen.addChild(GOtext)
  state.gameOverScreen.alpha = 0
  state.gameOverScreen.exists = false
  state.stage.addChild(state.gameOverScreen)
}


function paintBackground(state) {
  var bgKey = mapsConfig[state.map.properties.setting].bgImage
  var bg = state.add.image(state.game.width/2, state.game.height/2,
    bgKey)
  var wWidth = state.game.width
  var wHeight = state.game.height
  bg.anchor.setTo(0.5)
  bg.x = wWidth/2
  bg.y = wHeight/2
  var scale = Math.max(wWidth/bg.width, wHeight/bg.height)
  bg.width *= scale
  bg.height *= scale
  state.background = bg
}


function makeMap(state) {
  var conf = mapsConfig[state.map.properties.setting]
  state.map.addTilesetImage(conf.tiles)
  var plats = state.physics.p2
    .convertCollisionObjects(state.map, 'platform', true)

  var bg = state.map.createLayer('background')
  var tex = bg.generateTexture()
  state.splatter.mask.draw(tex)
  tex.destroy()
  plats.forEach(function(platform, i) {
    var data = state.map.objects.platform[i]

    if (data.properties && data.properties.breakable) {
      var xMin=0, xMax=0, yMin=0, yMax=0
      var poly = data.polyline
      for (var i = 0; i < poly.length; i++) {
        // P2.converCollisionObjects converts the tilemap data to P2 units
        // so change them back so we can draw with them.
        var x = poly[i][0] = state.physics.p2.mpxi(poly[i][0])
        var y = poly[i][1] = state.physics.p2.mpxi(poly[i][1])
        if (x < xMin) xMin = x
        if (x > xMax) xMax = x
        if (y < yMin) yMin = y
        if (y > yMax) yMax = y
      }
      var width = xMax - xMin
      var height = yMax - yMin

      var points = []
      for (i = 0; i < poly.length; i++) {
        x = poly[i][0] - xMin
        y = poly[i][1] - yMin
        points.push([x, y])
      }
      points.cx = width/2 + data.x  + xMin
      points.cy = height/2 + data.y + yMin
      points.width = width
      points.height = height
      data.points = points

      var texture = new Phaser.Graphics(state.game)
      texture.beginFill(0xFFFFFF, 1)
      texture.drawPolygon(points)
      texture.endFill()

      var img = state.make.image(x, y, texture.generateTexture())
      texture.destroy()

      img.anchor.setTo(0.5)
      img.x = points.cx
      img.y = points.cy
      data.mask = img

      this.splatter.mask.draw(img)
    }

    platform.setCollisionGroup(state.platformsCG)
    platform.collides(
      [state.enemiesCG, state.playersCG, state.itemsCG, state.shellsCG]
    )

    if (data.properties && data.properties.breakable) {
      var drop = state.parseDrop(data.properties.drop)
      var brkplat = new BrkPlat(state, data, platform, drop)
      platform.collides(state.bulletsCG, brkplat.break, brkplat)
    } else if (data.properties && data.properties.passable) {
      platform.removeCollisionGroup(state.enemiesCG)
      // TODO: Passables should be their own thing.
      // new BrkPlat(state, data, platform)
    } else {
      platform.collides(state.bulletsCG)
    }

    // Only used in SpaceBoss leve so we can remove it after the fight
    if (data.properties && data.properties.shouldRemove) platform.shouldRemove = true

    platform.setMaterial(state.platformMaterial)
  }, state)

  // This gets rid of aliasing artifacts
  state.splatter.mask.blendSourceAtop()
  state.splatter.mask.fill(255, 255, 255, 1)
  state.splatter.mask.blendSourceOver()

  var p2 = state.physics.p2
  var bounds = [
    p2.createBody(0, state.world.height, 0, true),
    p2.createBody(0, 0, 0, true),
    p2.createBody(0, 0, 0, true),
    p2.createBody(state.world.width, 0, 0, true)
  ]
  for (var j = 0; j < bounds.length; j++) {
    bounds[j].rotation = j * Math.PI/2
    bounds[j].addPlane()
    bounds[j].setCollisionGroup(p2.boundsCollisionGroup)
    bounds[j].collides([
      state.enemiesCG, state.playersCG, state.itemsCG, state.bulletsCG
    ])
    bounds[j].setMaterial(state.platformMaterial)
  }

  state.platforms = plats

  state.map.objects.object.forEach(state.addEntity, state)
}


function makeParticles(state) {
  state.shellPool = state.add.group()
  state.shellPool.physicsBodyType = Phaser.Physics.P2JS
  state.shellPool.enableBody = true
  state.shellPool.createMultiple(50, 'sprites', 'shell')
  state.shellPool.forEach(function(shell) {
    shell.body.setRectangle(4, 2)
    shell.body.setCollisionGroup(state.shellsCG)
    // We collide with enemy so the giant eye can blink when shells hit it
    shell.body.collides([state.platformsCG, state.enemiesCG])
  }, state)

  state.frag = state.add.emitter(0, 0, 50)
  state.frag.makeParticles('sprites', 
    Phaser.Animation.generateFrameNames('flame', 1, 4))
  state.frag.setScale(0.5, 1, 0.5, 1.)
  state.frag.setRotation(0, 0)
  state.frag.gravity = 0
  state.frag.setXSpeed(-400, 400)
  state.frag.setYSpeed(-400, 400)
  state.frag.setAlpha(1, 0.2, 400)
  state.frag.lifespan = 200

  state.blood = state.add.group()
  state.blood.classType = Blood
  state.blood.createMultiple(100, 'sprites', 'blood')

  state.glass = state.add.emitter(0, 0, 100)
  state.glass.makeParticles('sprites', 'glass')
  state.glass.setXSpeed(-500, 500)
  state.glass.setYSpeed(-200, 200)
  state.glass.setScale(0.25, 1.75, 0.25, 1.75)
  state.glass.setAlpha(0.1, 0.8)
  state.glass.gravity = state.physics.p2.gravity.y

  state.puffs = state.add.emitter(0, 0, 50)
  state.puffs.makeParticles('sprites', 
    Phaser.Animation.generateFrameNames('dust', 1, 4))
  state.puffs.setScale(0.5, 2, 0.5, 2, 400)
  state.puffs.setAlpha(1, 0.2, 400)
  state.puffs.setRotation(0)
  state.puffs.setXSpeed(-40, 40)
  state.puffs.setYSpeed(-40, 40)
  state.puffs.gravity = 0
}

},{"../../assets/mapsConfig.json":3,"../Reticule.js":7,"../Scene.js":8,"../entities/BrkPlat.js":14,"../entities/enemies/Enemy.js":26,"../entities/enemies/Hex.js":27,"../entities/enemies/Hydroid.js":28,"../entities/enemies/Seeker.js":30,"../magic/Blood.js":57,"../magic/Explosion.js":58}],54:[function(require,module,exports){
module.exports = function init(map) {
  this.buffs = []
  this.bulletTime = 1
  this.map = this.add.tilemap(map)
  this.mapName = map

  this.setSize()

  setPhysics(this)
}


function setPhysics(state) {
  var p2 = state.physics.p2
  p2.setImpactEvents(true)
  p2.gravity.y = state.gravity
  p2.applyGravity = state.gravity === 0 ? false : true
  p2.applyDamping = false

  state.itemsCG = p2.createCollisionGroup()
  state.playersCG = p2.createCollisionGroup()
  state.enemiesCG = p2.createCollisionGroup()
  state.platformsCG = p2.createCollisionGroup()
  state.bulletsCG = p2.createCollisionGroup()
  state.shellsCG = p2.createCollisionGroup()

  state.worldMaterial = p2.createMaterial('worldMaterial')
  p2.setWorldMaterial(state.worldMaterial)
  state.playerMaterial = p2.createMaterial('playerMaterial')
  state.platformMaterial = p2.createMaterial('platformMaterial')
  state.enemyMaterial = p2.createMaterial('enemyMaterial')
  state.itemMaterial = p2.createMaterial('itemMaterial')

  p2.createContactMaterial(state.platformMaterial, state.enemyMaterial, {
    restitution: 1,
    friction: 0
  })
  p2.createContactMaterial(state.enemyMaterial, state.worldMaterial, {
    restitution: 1,
    friction: 0
  })
  p2.createContactMaterial(state.playerMaterial, state.platformMaterial, {
    restitution: 0,
    friction: 0
  })
  p2.createContactMaterial(state.itemMaterial, state.platformMaterial, {
    friction: 0.6,
  })
}

},{}],55:[function(require,module,exports){
/*
* The tiled representation of enemies have a recursive JSON list
* of what they drop. It looks like:
*      [
*          item_this_enemy_drops,
*          [
*              left_child's_list,
*              right_child's_list
*          ]
*      ]
* This function parses that list and creates the appropriate nested
* array of game entities.
*/
module.exports = function parseDrop(drop) {
  if (drop === '') return null

  if (Array.isArray(drop)) return drop.map(this.parseDrop, this)

  if (typeof drop === 'string') {
    // Hack. Only objects are valid JSON, so an
    // error lets us know we've hit an item name.
    try {
      var dropOb = JSON.parse(drop)
      return this.parseDrop(dropOb)
    } catch (e) {
      if (e instanceof SyntaxError) {
        var item = this.addEntity({x: 0, y: 0, type: drop})
        item.kill()
        return item
      } else {
        throw e
      }
    }
  }
  return null
}

},{}],56:[function(require,module,exports){
module.exports = Load


var entities = require('./entities/entities.js')
    
    
function Load() {
  return this
}


Load.prototype = {
  preload: function() {
    var assets = require('../assets/assets.json')
    for (var section in assets) {
      this.load.pack(section, null, assets)
    }
    var levels = require('../assets/levels.json')
    this.load.pack('levels', null, levels)

    this.progress = entities.smallFont(this, 'LOADING 0%')
    this.progress.x = this.world.width/2
    this.progress.y = this.world.height/2
    this.world.add(this.progress)
  },

  loadUpdate: function() {
    this.progress.font.text = 'LOADING ' + this.load.progress + '%'
  },

  create: function() {
    this.state.start('Menu')
    // this.state.start('Level', true, false, 'level1')
    // this.state.start('ShmupLevel', true, false, 'shmup')
    // this.state.start('SpaceBoss', true, false, 'space-boss')
    // this.state.start('LevelSelect')
  }
}


},{"../assets/assets.json":1,"../assets/levels.json":2,"./entities/entities.js":31}],57:[function(require,module,exports){
module.exports = Blood


function Blood(game) {
  Phaser.Sprite.call(this, game, 0, 0, 'sprites', 'blood')

  this.state  = game.state.getCurrentState()

  this.slowSpeed = Math.random() * 260 + 60

  game.physics.p2.enable(this)
  this.body.clearShapes()
  this.body.addParticle()
  this.body.setCollisionGroup(this.state.enemiesCG)
  this.body.collides(this.state.platformsCG, this.kill, this)
  this.body.collideWorldBounds = false
  this.alpha = 0.7
}


Blood.prototype = Object.create(Phaser.Sprite.prototype)


Blood.prototype.update = function() {
  var vx = this.body.velocity.x
  var vy = this.body.velocity.y

  if (Phaser.Math.distance(0, 0, vx, vy) < this.slowSpeed)
    this.frameName = 'blood-slow'
  else
  if (this.frameName !== 'blood') this.frameName = 'blood'

  this.body.rotation = Math.atan2(vy, vx) - Math.PI/2
}


Blood.prototype.kill = function() {
  var snd = this.state.playSound('splat')
  if (snd && snd.isPlaying && snd.usingWebAudio) {
    var scale = this.scale.x
    snd._sound.detune.value = 300 / scale
    snd._sound.playbackRate = Math.random() * 0.3 + 0.75
    snd.volume = scale * scale
  }
  this.frameName = 'splatter'
  this.body.rotation = Math.random() * Math.PI*2

  this.state.paintFX(this)

  this.frameName = 'blood'
  Phaser.Sprite.prototype.kill.call(this)
}

},{}],58:[function(require,module,exports){
module.exports = Explosion


function Explosion(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'sprites', 'explosion2')

  this.state = game.state.getCurrentState()
  game.physics.p2.enable(this)

  this.width = this.height = 160
  this.shape = this.body.setCircle(this.width/2)
  this.shape.sensor = true
  var ex = this.animations.add('explode', 
    Phaser.Animation.generateFrameNames('explosion', 1, 4), 60, false)
  ex.killOnComplete = true

  this.body.collideWorldBounds = false
  this.body.setCollisionGroup(this.state.bulletsCG)
  this.body.collides(this.state.enemiesCG)
  this.body.onBeginContact.add(this.explode, this)
  game.physics.p2.removeBody(this.body)
}


Explosion.prototype = Object.create(Phaser.Sprite.prototype)


Explosion.prototype.explode = function(body) {
  for (var i = 0; i < this.targets.length; i++)
    if (body.sprite === this.targets[i]) return

  this.targets.push(body.sprite)
}


Explosion.prototype.kill = function() {
  this.alpha = 0.4
  this.frameName = 'burn'
  this.body.rotation = Math.random() * Math.PI * 2
  this.state.paintFX(this)
  this.alpha = 1
  Phaser.Sprite.prototype.kill.call(this)

  for (var i = 0; i < this.targets.length; i++)
    this.targets[i].damage(null, this.body)

  this.state.enemies.recurseAlive(function(enemy) {
    var distance = Math.max(this.world.distance(enemy.world), 1)
    var r = 512
    if (distance > r) return
    var angle = this.world.angle(enemy.world)
    var mag = 400 * (1 - distance/r) * this.state.bulletTime
    enemy.body.velocity.x += mag * Math.cos(angle)
    enemy.body.velocity.y += mag * Math.sin(angle)
  }, this)
}


Explosion.prototype.reset = function(x, y, radius) {
  this.targets = []
  if (radius > 0) {
    this.width = this.height = radius * 1.5
    this.shape.radius = radius
  }
  this.body.addToWorld()
  Phaser.Sprite.prototype.reset.call(this, x, y)
  this.animations.play('explode')
  this.state.playSound('explode')
  this.state.camera.shake(0.015, 400)
}

},{}],59:[function(require,module,exports){
module.exports = ClearModal


var Modal = require('../gui/Modal.js')
var Btn = require('../gui/TextButton.js')


function ClearModal(state, gui) {
  Modal.call(this, state, gui)
  this.x = state.game.width/2

  var msg = state.entities.smallFont(state, 'Erase all progress and hi-scores?\nThis cannot be undone.')
  msg.scale.setTo(2)
  var yes = new Btn(state, 'Yes', function() {
    this.game.data.clear()
    this.game.state.start('Menu')
  }, this)
  yes.anchor.setTo(1, 0.5)
  yes.x = -32
  yes.y = msg.bottom + 32
  var no = new Btn(state, 'No', function() {
    this.gui.switchModal('settings')
  }, this)
  no.anchor.setTo(0, 0.5)
  no.x = 32
  no.y = yes.y

  this.addMultiple([msg, yes, no])

  var pad = 48
  var b = this.getBounds()
  var win = new PhaserNineSlice.NineSlice(state.game, 0, 0, 'sprites', 'window', 24, 24, { top: 8 })
  win.resize(b.width*2+pad, yes.bottom-msg.top+pad)
  win.anchor.setTo(0.5, 0)
  win.y = -40
  this.addAt(win, 0)
}


ClearModal.prototype = Object.create(Modal.prototype)


},{"../gui/Modal.js":41,"../gui/TextButton.js":42}],60:[function(require,module,exports){
module.exports = GUI


var HowToModal = require('./HowToModal.js')
var MenuModal = require('./MenuModal.js')
var SettingsModal = require('./SettingsModal.js')
var ClearModal = require('./ClearModal.js')


function GUI(state) {
  this.modals = {
    howTo: new HowToModal(state, this),
    menu: new MenuModal(state, this),
    settings: new SettingsModal(state, this),
    clear: new ClearModal(state, this),
  }

  var mm = this.modals.menu
  mm.visible = true
  this.currentModal = mm
  mm.y = state.world.height/2 - mm.height/2
}


GUI.prototype.switchModal = function(key) {
  if (this.currentModal)
    this.currentModal.exit()
  this.currentModal = this.modals[key]
  this.modals[key].enter()
}

},{"./ClearModal.js":59,"./HowToModal.js":61,"./MenuModal.js":62,"./SettingsModal.js":63}],61:[function(require,module,exports){
module.exports = HowToModal


var Modal = require('../gui/Modal.js')
var Btn = require('../gui/TextButton.js')


function HowToModal(state, gui) {
  Modal.call(this, state, gui)
  var info = state.entities.smallFont(state)
  info.font.align = Phaser.RetroFont.ALIGN_CENTER
  info.font.text = 'CONTROLS\n\n'
        + 'X - MAIN MENU\n\n'
        + 'WASD - MOVE\n'
        + '\n'
        + 'MOUSE - SHOOT\n'
        + '\n'
        + 'SHIFT F -\nFULLSCREEN'
  info.anchor.setTo(0.5)
  info.height *= 2
  info.width *= 2
  info.y = info.height/2

  var backBtn = new Btn(state, 'back', function() {
    this.gui.switchModal('menu')
  }, this)
  backBtn.y = info.bottom + 32

  this.addMultiple([info, backBtn])

  var pad = 48
  var b = this.getBounds()
  var win = new PhaserNineSlice.NineSlice(state.game, 0, 0, 'sprites', 'window', 24, 24, { top: 8 })
  win.resize(b.width*2+pad, backBtn.bottom-info.top+pad)
  win.anchor.setTo(0.5, 0)
  win.y = -pad/2
  this.addAt(win, 0)
}


HowToModal.prototype = Object.create(Modal.prototype)

},{"../gui/Modal.js":41,"../gui/TextButton.js":42}],62:[function(require,module,exports){
module.exports = MenuModal


var Modal = require('../gui/Modal.js')
var Btn = require('../gui/TextButton.js')


function MenuModal(state, gui) {
  Modal.call(this, state, gui)

  var logo = state.make.image(0, 0, 'sprites', 'logo')
  logo.width = 256
  logo.height = 172
  logo.anchor.setTo(0.5)
  logo.y = logo.height/2

  var score = state.game.data.hiScore
  var hiScore = state.entities.smallFont(state, 'HI-SCORE ' + score)
  hiScore.y = logo.bottom + 24
  this.hiScore = hiScore

  var startBtn = new Btn(state, 'start', function() {
    state.start('LevelSelect')
  }, state)
  startBtn.onDownSound = 'start'
  startBtn.y = hiScore.bottom + 26
  this.startBtn = startBtn

  var arcadeBtn = new Btn(state, 'arcade', function() {
    state.start('Arcade')
  }, state)
  arcadeBtn.onDownSound = 'start'
  arcadeBtn.y = startBtn.bottom + 22
  this.arcadeBtn = arcadeBtn

  /*
    var scoresBtn = new Btn(state, 'HI-SCORES', function() {
        this.gui.switchModal('hiScores')
    }, this)
    scoresBtn.y = startBtn.y + 32
    */

  var howToBtn = new Btn(state, 'INSTRUCTIONS', function() {
    this.gui.switchModal('howTo')
  }, this)
  howToBtn.y = arcadeBtn.bottom + 22
  this.howToBtn = howToBtn

  var settingsBtn = new Btn(state, 'SETTINGS', function() {
    this.gui.switchModal('settings')
  }, this)
  settingsBtn.y = howToBtn.bottom + 22
  this.settingsBtn = settingsBtn

  this.addMultiple([logo, hiScore, startBtn, arcadeBtn, howToBtn, settingsBtn])
}


MenuModal.prototype = Object.create(Modal.prototype)

},{"../gui/Modal.js":41,"../gui/TextButton.js":42}],63:[function(require,module,exports){
module.exports = SettingsModal


var Modal = require('../gui/Modal.js')
var Btn = require('../gui/TextButton.js')


function SettingsModal(state, gui) {
  Modal.call(this, state, gui)

  var vol = state.entities.smallFont(state, 'volume:')
  vol.scale.setTo(vol.scale.x*2)
  vol.anchor.setTo(1, 0.5)
  var up = new Btn(state, ' +', function() {
    this.game.sound.volume = Math.round(Math.min(this.game.sound.volume + 0.05, 1)*100)/100
    this.v.font.text = Math.round(this.game.sound.volume * 100).toString()
  }, this)
  up.anchor.setTo(0, 0.5)
  up.x = vol.right
  var down = new Btn(state, '-', function() {
    this.game.sound.volume = Math.round(Math.max(this.game.sound.volume - 0.05, 0)*100)/100
    this.v.font.text = Math.round(this.game.sound.volume * 100).toString()
  }, this)
  down.anchor.setTo(0, 0.5)
  down.x = up.right + 64
  var v = state.entities.smallFont(state, (state.sound.volume*100)+'')
  v.scale.setTo(v.scale.x*2)
  v.anchor.setTo(1, 0.5)
  v.x = down.left - 8
  this.v = v

  var music = state.entities.smallFont(state, 'music:')
  music.anchor.setTo(1, 0.5)
  music.scale.setTo(music.scale.x*2)
  this.mOn = new Btn(state, (this.game.data.musicOn ? ' on' : ' off'), function() {
    this.game.data.musicOn = !this.game.data.musicOn
    this.mOn.font.text = this.game.data.musicOn ? ' on' : ' off'
  }, this)
  this.mOn.anchor.setTo(0, 0.5)
  this.mOn.x = music.right
  music.y = this.mOn.y = vol.y + 32

  var sfx = state.entities.smallFont(state, 'sfx:')
  sfx.anchor.setTo(1, 0.5)
  sfx.scale.setTo(sfx.scale.x*2)
  this.sfxOn = new Btn(state, (this.game.data.sfxOn ? ' on' : ' off'), function() {
    this.game.data.sfxOn = !this.game.data.sfxOn
    this.sfxOn.font.text = this.game.data.sfxOn ? ' on' : ' off'
  }, this)
  this.sfxOn.anchor.setTo(0, 0.5)
  this.sfxOn.x = sfx.right
  sfx.y = this.sfxOn.y = music.y + 32

  var credits = new Btn(state, 'credits', function() {
    this.game.state.start('Credits')
  }, this)
  credits.y = sfx.y + 32

  var clear = new Btn(state, 'reset', function() {
    this.gui.switchModal('clear')
  }, this)
  clear.y = credits.y + 32

  var backBtn = new Btn(state, 'back', function() {
    this.gui.switchModal('menu')
  }, this)
  backBtn.y = clear.y + 32

  this.addMultiple([vol, up, v, down, music, this.mOn, sfx, this.sfxOn, credits, clear, backBtn])

  var win = new PhaserNineSlice.NineSlice(state.game, 0, 0, 'sprites', 'window', 24, 24, { top: 8 })
  win.resize(264, 224)
  win.anchor.setTo(0.5, 0)
  win.y = -32
  this.addAt(win, 0)
}


SettingsModal.prototype = Object.create(Modal.prototype)


},{"../gui/Modal.js":41,"../gui/TextButton.js":42}],64:[function(require,module,exports){
module.exports = Menu


var Level = require('../level/Level.js')
var GUI = require('./GUI.js')
var mapConf = require('../../assets/mapsConfig.json')


function Menu() {
  this.firstTime = true
  return this
}


Menu.prototype = Object.create(Level.prototype)
    

Menu.prototype.init = function() {
  Level.prototype.init.call(this, '_menu')
} 


Menu.prototype.create = function() {
  Level.prototype.create.call(this)
  var data = this.game.data

  this.p1 = this.add.sprite(568, 72, 'sprites', 'p1-sit1')
  this.p1.anchor.setTo(0.5)
  this.p1.scale.x = -1

  if (data.lastCompleted === data.levels.length-1) {
    this.background.loadTexture('desert-plain')
    this.background.reset(this.game.width/2, this.game.height/2)
    this.enemies.setAllChildren('exists', false)
    this.p1.x = 445
    this.p1.y = 344
    this.bullets.create(440, 323, 'sprites', 'map-start')
    var fire = this.bullets.create(418, 342, 'sprites', 'campfire1')
    fire.anchor.setTo(0.5)
    fire.animations.add('idle', ['campfire1', 'campfire2', 'campfire3'], 8, true)
    fire.animations.play('idle')
    this.puffs.x = fire.x
    this.puffs.y = fire.y
    this.puffs.setXSpeed(-10, 10)
    this.puffs.setYSpeed(-40, -20)
    this.puffs.flow(2000)
    this.frag.x = fire.x
    this.frag.y = fire.y
    this.frag.setXSpeed(-20, 20)
    this.frag.setYSpeed(-40, -20)
    this.frag.flow(400)
  } else if (data.lastCompleted >= this.game.data.getLevelIndex('space-boss')) {
    var x = this.background.scale.x * 155 + this.background.left
    var y = this.background.scale.y * 55 + this.background.top
    this.bgItems.create(x, y, 'sprites', 'eye-patch').scale.setTo(this.background.scale.x)
  }


  var frames = Phaser.Animation.generateFrameNames('p1-sit', 1, 3)
  frames = frames.concat(frames)
  frames = frames.concat(frames)
  frames = frames.concat(frames)
  frames[0] = 'p1-sit-blink'

  this.p1.animations.add('sit', frames, 5, true, false)
  this.p1.animations.add('walk',
    Phaser.Animation.generateFrameNames('p1-walk', 1, 4), 15, true)
  this.p1.animations.play('sit')

  this.gui = new GUI(this)

  if (this.firstTime) {
    var menu = this.gui.modals.menu
    menu.hiScore.visible = false
    menu.startBtn.visible = false
    menu.arcadeBtn.visible = false
    menu.howToBtn.visible = false
    menu.settingsBtn.visible = false
      
    this.time.events.add(2000, function() {
      menu.hiScore.visible = true
      menu.startBtn.visible = true
      menu.arcadeBtn.visible = true
      menu.howToBtn.visible = true
      menu.settingsBtn.visible = true
    })
    this.firstTime = false
  }
  this.world.bringToTop(this.reticule)
} 


Menu.prototype.exit = function() {
  return
}


Menu.prototype.loseCondition = function() {
  return false
}
Menu.prototype.winCondition = function() {
  return false
}


Menu.prototype.start = function(key) {
  this.p1.animations.stop()
  this.p1.frameName = 'p1-stand'
  this.time.events.add(100, function() {
    this.p1.animations.play('walk')
    this.p1.scale.x = 1
    var dest = this.world.width + 16
    var t = (dest-this.p1.x)/100 * 1000
    this.add.tween(this.p1)
      .to({x: dest}, t)
      .start()
    this.camera.onFadeComplete.addOnce(function() {
      this.state.start(key)
    }, this)
    this.camera.fade(0x180c08, 800, true)
  }, this)
}


Menu.prototype.startFX = function() {
  this.camera.flash(0x180c08, 1000)
}



},{"../../assets/mapsConfig.json":3,"../level/Level.js":46,"./GUI.js":60}],65:[function(require,module,exports){
module.exports = function() {

  Phaser.SoundManager.prototype.reset = function() {
    this.stopAll()

    for (var i = 0; i < this._sounds.length; i++) {
      if (this._sounds[i]) {
        this._sounds[i].destroy()
      }
    }

    this._sounds = []

    this.onSoundDecode.dispose()
  }

  Phaser.StateManager.prototype.clearCurrentState = function() {
    if (this.current) {
      if (this.onShutDownCallback) {
        this.onShutDownCallback.call(this.callbackContext, this.game)
      }

      this.game.tweens.removeAll()
      this.game.camera.reset()
      this.game.input.reset(true)
      this.game.physics.clear()
      this.game.time.removeAll()
      this.game.scale.reset(this._clearWorld)
      this.game.sound.reset()

      if (this.game.debug) {
        this.game.debug.reset()
      }

      if (this._clearWorld) {
        this.game.world.shutdown()

        if (this._clearCache) {
          this.game.cache.destroy()
        }
      }
    }
  }


  Object.defineProperty(Phaser.Group.prototype, 'alive', {
    get: function() { return !!this.getFirstAlive() }
  })


  Phaser.Group.prototype.recurse = function(fn, ctx) {
    var args = [null]
    for (var i = 2; i < arguments.length; i++) args.push(arguments[i])

    for (i = 0; i < this.children.length; i++) {
      var child = this.children[i]
      if (child instanceof Phaser.Group) {
        child.recurse.apply(child, arguments)
      } else {
        args[0] = child
        fn.apply(ctx, args)
      }

    }
  }


  Phaser.Group.prototype.recurseAlive = function(fn, ctx) {
    var args = [null]
    for (var i = 2; i < arguments.length; i++) args.push(arguments[i])

    var alive = []
    for (i = 0; i < this.children.length; i++) {
      var child = this.children[i]
      if (!child.alive) continue

      if (child instanceof Phaser.Group) {
        child.recurseAlive.apply(child, arguments)
      } else {
        alive.push(child)
      }
    }

    for (i=0; i<alive.length; i++) {
      args[0] = alive[i]
      fn.apply(ctx, args)
    }
  }


  Phaser.Group.prototype.forInReach  = function(obj, range, fn, ctx) {
    var args = [null]
    for (var i = 4; i < arguments.length; i++) args.push(arguments[i])

    var alive = []
    for (i = 0; i < this.children.length; i++) {
      var child = this.children[i]
      if (!child.alive) continue

      if (child instanceof Phaser.Group) {
        child.forInReach.apply(child, arguments)
      } else if (obj.world.distance(child) <= range) {
        alive.push(child)
      }
    }

    for (i=0; i<alive.length; i++) {
      args[0] = alive[i]
      fn.apply(ctx, args)
    }
  }
}

},{}]},{},[43]);
