module.exports = SeekBoss;


var Seeker = require('./Seeker.js');

var TEXTURE = 'enemy';
var HEALTH = 20;
var POOL_SIZE = 120;
var CHILD_WIDTH = 30;
var CHILD_VEL = 100;


function SeekBoss(state, data) {
    data.texture = data.texture || TEXTURE;
    Seeker.call(this, state, data);
    this.childPool = state.add.group();
    state.enemies.add(this.childPool);
    var childData = {
        type: 'seeker',
        x: 0,
        y: 0,
        width: CHILD_WIDTH,
        properties: {}
    };
    for (var i=0; i<POOL_SIZE; i++) {
        var seek = state.addEntity(childData);
        seek.recurse(function(enemy) {
            enemy.alive = false;
            enemy.visible = false;
            enemy.exists = false;
        });
        this.childPool.add(seek);
    }
    this.drops = [];
    for (i=0; i<3; i++) {
        var prize = state.addEntity({type: 'slomo'});
        prize.kill();
        this.drops.push(prize);
    }

    this.spawn(data.x, data.y, data.width)
}


SeekBoss.prototype = Object.create(Seeker.prototype);

SeekBoss.prototype.maxHealth = HEALTH;


SeekBoss.prototype.getHit = function(_, bullet) {
    if (this.health % 10 === 1) {
        this.drops.pop().reset(this.x, this.y);
        this.width *= 2/3;
        this.height *= 2/3;
        this._circle *= 2/3;
    }
    Seeker.prototype.getHit.apply(this, arguments);
    var v = this.body.velocity;
    this.childPool.getFirstDead().getFirstDead().spawn(this.x, this.y, CHILD_WIDTH, v.x + CHILD_VEL, v.y + CHILD_VEL);
    this.childPool.getFirstDead().getFirstDead().spawn(this.x, this.y, CHILD_WIDTH, v.x + CHILD_VEL, v.y + -CHILD_VEL);
    this.childPool.getFirstDead().getFirstDead().spawn(this.x, this.y, CHILD_WIDTH, v.x - CHILD_VEL, v.y + CHILD_VEL);
    this.childPool.getFirstDead().getFirstDead().spawn(this.x, this.y, CHILD_WIDTH, v.x - CHILD_VEL, v.y + -CHILD_VEL);
}
