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
    this.drop = drop;

    var xMin=0, xMax=0, yMin=0, yMax=0;
    var poly = data.polyline;
    for (var i=0; i<poly.length; i++) {
        // P2.converCollisionObjects converts the tilemap data to P2 units
        // so change them back.
        var x = poly[i][0] = state.physics.p2.mpxi(poly[i][0]);
        var y = poly[i][1] = state.physics.p2.mpxi(poly[i][1]);
        if (x < xMin) xMin = x;
        if (x > xMax) xMax = x;
        if (y < yMin) yMin = y;
        if (y > yMax) yMax = y;
    }
    var width = xMax - xMin;
    var height = yMax - yMin;

    var points = [];
    for (i=0; i<poly.length; i++) {
        var x = poly[i][0] - xMin;
        var y = poly[i][1] - yMin;
        points.push([x, y]);
    }

    var texture = new Phaser.Graphics(state.game);
    texture.beginFill(0xFFFFFF, 1);
    texture.drawPolygon(points);
    texture.endFill();
    
    Phaser.Image.call(this, state.game, x, y, texture.generateTexture());
    texture.destroy();

    this.anchor.setTo(0.5);

    this.x = width/2 + data.x + data.polyline[0][0] + xMin;
    this.y = height/2 + data.y + data.polyline[0][1] + yMin; 
    state.add.existing(this);
}


BrkPlat.prototype = Object.create(Phaser.Image.prototype);


BrkPlat.prototype.break = function() {
    if (this.drop instanceof Phaser.Sprite) {
        this.drop.reset(this.x, this.y);
    }
    this.destroy();
    this._body.destroy();
}
