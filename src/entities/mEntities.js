// This file describes the different game entities
// TODO This should probably be a JSON file, but I wanted
// comments and to leave myself open for adding functions
// as properties.


// Right now we only have one player, but maybe
// we'll want multiplayer or NPCs later.
module.exports.players = {
    player1: {
        sprite: 'player'
    }
}

/**
 * Guns are described by:
 * {
 *   texture: String, texture to use
 *   rate: Num, ms between each shot
 *   auto: Bool, for auto vs semi-auto
 *   spread: Num, in radians
 *   accuracy: Num, bullet direction variance in radians
 *   clips: Num, how many bullets are fired at once
 *   clipSize: Num, size of the bullet pool for each clip
 *   bulletTexture: bullet sprite texture
 *   bulletSpeed: in pixels per second
 *   speedVar: bullet speed variance in pixels/second
 * }
 */ 
// TODO: change textures when we have them.
module.exports.guns = {
    pistol: {
        texture: 'gun',
        rate: 100,
        clips: 1,
        clipSize: 3,
        bulletTexture: 'bullet'
    },
    spread: {
        texture: 'gun',
        rate: 500,
        spread: Math.PI/4,
        clips: 8,
        clipSize: 3,
        bulletTexture: 'bullet'
    }, 
    shotgun: {
        texture: 'gun',
        rate: 300,
        spread: Math.PI/8,
        accuracy: Math.PI/8,
        clips: 8,
        clipSize: 3,
        speedVar: 50,
        bulletTexture: 'bullet'
    }
}

/*
 * Enemies get a texture and a "setEach" object. For each
 * key: value pair in setEach we will call enemy.setAll(key, value).
 */
module.exports.enemies = {
    orbo: {
        texture: 'enemy'
    },
    hex: {
        texture: 'enemy',
        setEach: {
            'body.data.gravityScale': 0,
            'tint': 0x00FF00
        }
    }
}

// Buffs have:
// String, texture
// Fun, start
// Fun, update function that gets turned into a plugin
// Num, time in ms that buff lasts
// Fun, destroy
//
// When a buff is picked up it gets the properties target and
// state. Target is the player/actor that picked up the buff and
// state is the currently running Phaser.State.
module.exports.buffs = {
    repel: {
        texture: 'gun',
        time: 8000,
        update: function() {
            var target = this.target;
            var mag = 80;
            var range = 70;
            var pxmi = this.state.physics.p2.pxmi;
            this.state.enemies.forEachAlive(function(enemy) {
                enemy.forEachAlive(function(child) {
                    var distance = target.world.distance(child);
                    if (distance <= range) {
                        var angle = target.world.angle(child);
                        var force = [
                            pxmi( mag * Math.cos(angle) * Math.sqrt(distance) ),
                            pxmi( mag * Math.sin(angle) * Math.sqrt(distance) )
                        ];
                        child.body.applyForce(force, child.x, child.y);
                    }
                });
            });
        },
    },

    slomo: {
        texture: 'gun',
        time: 1000,
        rate: 4,
        start: function() {
            var rate = this.rate;
            this.state.time.slowMotion *= rate;
            this.state.enemies.forEach(function(enemy) {
                enemy.forEach(function(child) {
                    child.body.mass *= rate;
                });
            });
            this.target.speedBonus *= rate;
            this.target.weapon.bulletSpeed *= rate;
            this.target.weapon.rate *= rate;
        },
        stop: function() {
            var rate = this.rate = 1/this.rate;
            this.start();
            this.target.weapon.clips.forEach(function(clip) {
                clip.forEachAlive(function(bullet) {
                    bullet.body.velocity.x *= rate;
                    bullet.body.velocity.y *= rate;
                });
            });
        }
    }
}
