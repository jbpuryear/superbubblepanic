// Oh man, we're in the shit now. Most of the coupling problems between
// the different game entities have been shoved into this module. I'm not
// super happy with this solution, but for now at least my problems are all
// in one spot and I know where to find them.
var Bullet = require('./Bullet.js');
var Enemy = require('./Enemy.js');
var Gun = require('./Gun.js');
var Player = require('./Player.js');
var mEntities = require('./mEntities.js');

/**
 * Takes a Tiled object, creates the appropriate game entity, adding it to the world.
 *
 * Assumes a bunch of things exist on state:
 *     groups - players, enemies, items
 *     collision groups - itemsCG, playersCG, enemiesCG, platformsCG, bulletsCG
 *     materials - worldMaterial, playerMaterial, platformMaterial, enemyMaterial
 */
module.exports = entity;

function entity(state, objData) {
    // Tiled uses different coordinates than Phaser.
    var x = objData.x += objData.width / 2;
    var y = objData.y += objData.width / 2;
    var type = objData.type;
    switch(true) {
        case mEntities.players.hasOwnProperty(type):
            return addPlayer(state, x, y, mEntities.players[type]);
        case mEntities.guns.hasOwnProperty(type):
            return addGun(state, x, y, mEntities.guns[type]);
        case mEntities.enemies.hasOwnProperty(type):
            return addEnemy(state, objData, mEntities.enemies[type]);
        case mEntities.items.hasOwnProperty(type):
            return addItem(state, x, y, mEntities.items[type]);
        default:
            throw new TypeError('Cannot create entity of type ' + type
                    + ' in Tiled object list.');
    }
}

// These functions wire up all the physics/collision/sound/animation for each entity type.
function addPlayer(state, x, y, type) {
    var player = new Player(state.game, x, y, type.sprite);

    player.character.animations.add('walk', [0, 1, 2, 3], 25, true);
    player.character.animations.add('fly', [10, 11], 100, true);

    player.body.setCollisionGroup(state.playersCG);

    player.equip(addGun(state, 0, 0, mEntities.guns['pistol']));

    player.body.setMaterial(state.playerMaterial);
    player.body.setCollisionGroup(state.playersCG);
    player.body.collides(state.enemiesCG, player.die, player);
    player.body.collides([state.itemsCG, state.platformsCG]);

    state.players.add(player);
    return player;
}

function addEnemy(state, data, type) {
    var drop = parseDrop(state, data.properties.drop);
    var texture = type.texture;
    var enemy = new Enemy(state.game, data.x, data.y, texture, data.width,
                                      data.properties.velx, data.properties.vely, drop);
    enemy.forEach(function(enemy) {
        enemy.body.setCollisionGroup(state.enemiesCG);
        enemy.body.setMaterial(state.enemyMaterial);
        enemy.body.collides([state.playersCG, state.platformsCG]);
        enemy.body.collides(state.bulletsCG, enemy.kill, enemy);
    }, state);
    if (typeof type.setEach === 'object') {
        for (key in type.setEach) {
            enemy.setAll(key, type.setEach[key]);
        }
    }
    state.enemies.add(enemy);
    return enemy;
}

function addItem(state, item) {
    item.body.setCollisionGroup(state.itemsCG);
    item.body.collides(state.platformsCG);
    item.body.collides(state.playersCG, item.pickUp, item);
    state.items.add(item);
    return item;
}

function addGun(state, x, y, type) {
    var gun = new Gun(state.game, x, y, type);
    addItem(state, gun);
    gun.clips.forEach(function(clip) {
        clip.forEach(function(bullet) {
            bullet.body.setCollisionGroup(state.bulletsCG);
            bullet.body.collides([state.platformsCG, state.enemiesCG], bullet.die, bullet);
        }, state);
    }, state);
    return gun;
}

// The tiled representation of enemies has a recursive JSON representation
// of what they drop. It looks like [this_drops [left_child_drops, right_child_drops]]
// This function parses that list and creates the appropriate game entities.
function parseDrop(state, drop) {
    if (Array.isArray(drop)) { return drop.map(parseDrop.bind(null, state)); }
    if (typeof drop === 'string') {
        try {
            var dropOb = JSON.parse(drop);
            return parseDrop(state, dropOb);
        } catch (e) {
            if (e instanceof SyntaxError) {
                console.log('"' + drop + '" is not JSON, trying to add ' + drop + '.');
                try {
                    var item = entity(state, {x: 0, y: 0, width: 0, height: 0, type: drop});
                    item.kill();
                    return item;
                } catch (e) {
                    if (e instanceof TypeError) {
                        console.log(drop 
                                    + '" in Tiled object data is not a valid value for the drop field');
                        throw e;
                    }
                }
            }
        }
    }
    return null;
}
