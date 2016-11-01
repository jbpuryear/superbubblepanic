module.exports = BrkPlat;

function BrkPlat(game, x, y, width, height, drop) {
    var width = width;
    var height = height;
    var texture = new Phaser.BitmapData(game, width, height);
    texture.canvas.width = width;
    texture.canvas.height = height;
    var ctx = texture.ctx;
    var grd = ctx.createLinearGradient(0, 0, width, height);
    grd.addColorStop(.4, 'blue');
    grd.addColorStop(0.5, 'white');
    grd.addColorStop(.6, '#ADD8E6');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, width, height);
    
    Phaser.Sprite.call(this, game, x, y, texture.generateTexture());
    texture.destroy();

    this.drop = drop;
    game.physics.p2.enable(this);
}

BrkPlat.prototype = Object.create(Phaser.Sprite.prototype);

BrkPlat.prototype.break = function() {
    if (this.drop instanceof Phaser.Sprite) this.drop.reset(this.x, this.y);
    this.destroy();
}
