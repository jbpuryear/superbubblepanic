module.exports = BrkPlat;

// TODO: This is a hack to let us draw a Tiled polyline to the
// world and link it to a P2.Body. A better way would be to make a
// sprite and enable pysics on it and add give it the body made by
// P2.converCollisionObjects, but the body ends up offset from the
// sprite and I don't know how to fix it. So for now we take the body
// and an image, stuff them in a wrapper and add them to the world
// seperatele.


function BrkPlat(state, data, body, drop) {
    this._body = body;
    this.fxmask = data.mask;
    this.drop = drop;
    this.state = state;

    var points = data.points;
    var texture = new Phaser.Graphics(state.game);

    texture.beginFill(0xFFFFFF, 1);
    texture.drawPolygon(points);
    texture.endFill();
    
    Phaser.Image.call(this, state.game, points.cx, points.cy, texture.generateTexture());
    texture.destroy();

    this.anchor.setTo(0.5);

    state.add.existing(this);
}


BrkPlat.prototype = Object.create(Phaser.Image.prototype);


BrkPlat.prototype.break = function() {
    if (this.drop instanceof Phaser.Sprite) {
        this.drop.reset(this.x, this.y);
    }
    this.state.FXMaskErase(this.fxmask);
    this.destroy();
    this._body.destroy();
}
