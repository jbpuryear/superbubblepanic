module.exports = BrkPlat;

function BrkPlat(state, data) {
    var width = data.width;
    var height = data.height;
    var texture = new Phaser.BitmapData(state.game, width, height);
    texture.canvas.width = width;
    texture.canvas.height = height;
    var ctx = texture.ctx;
    var grd = ctx.createLinearGradient(0, 0, width, height);
    grd.addColorStop(.4, 'blue');
    grd.addColorStop(0.5, 'white');
    grd.addColorStop(.6, '#ADD8E6');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, width, height);
    
    Phaser.Sprite.call(this, state.game, data.x, data.y, texture.generateTexture());
    texture.destroy();

    state.physics.p2.enable(this);
    state.platforms.add(this);
    
    this.body.static = true;
    this.body.setCollisionGroup(state.platformsCG);
    this.body.collides([state.enemiesCG, state.playersCG, state.itemsCG]);
    this.body.collides(state.bulletsCG, this.break, this);
    this.body.setMaterial(state.platformMaterial);
}

BrkPlat.prototype = Object.create(Phaser.Sprite.prototype);

BrkPlat.prototype.break = function() {
    this.destroy();
}
