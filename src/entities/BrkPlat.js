module.exports = BrkPlat;

function BrkPlat(game, data, drop) {
    var xMin=0, xMax=0, yMin=0, yMax=0;
    var poly = data.polyline;
    for (var i=0; i<poly.length; i++) {
        var x = poly[i][0];
        var y = poly[i][1];
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

    var texture = new Phaser.Graphics(game);
    texture.beginFill(0xFFFFFF, 1);
    texture.drawPolygon(points);
    texture.endFill();
    
    Phaser.Sprite.call(this, game, x, y, texture.generateTexture());
    texture.destroy();

    this.drop = drop;
    this.body = game.physics.p2.createBody(data.x, data.y, 0, true, {}, data.polyline);
    this.anchor.setTo(0.5);

    // I don't know why it doesn't work without this
    this.body.sprite = new Phaser.Sprite(game);

    this.x = width/2 + data.x + data.polyline[0][0] + xMin;
    this.y = height/2 + data.y + data.polyline[0][1] + yMin; 
    this.body.debug = true;
    console.log(this.body);
}

BrkPlat.prototype = Object.create(Phaser.Sprite.prototype);

BrkPlat.prototype.break = function() {
    if (this.drop instanceof Phaser.Sprite) this.drop.reset(this.x, this.y);
    this.destroy();
}
