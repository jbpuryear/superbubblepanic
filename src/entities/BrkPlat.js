module.exports = BrkPlat;

// TODO: This is a hack to let us draw a Tiled polyline to the
// world and link it to a P2.Body. A better way would be to make a
// sprite and enable pysics on it and add give it the body made by
// P2.converCollisionObjects, but the body ends up offset from the
// sprite and I don't know how to fix it. So for now we take the body
// and an image, stuff them in a wrapper and add them to the world
// seperatele.


function BrkPlat(state, data, body, drop) {
    this.body = body;
    this.fxmask = data.mask;
    this.drop = drop;
    this.state = state;

    var points = data.points;
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
    
    var img = new Phaser.Image(state.game, points.cx, points.cy, texture);
    img.anchor.setTo(0.5);

    state.paintFX(img);
    texture.destroy()
    img.destroy()
}


BrkPlat.prototype.break = function() {
    this.state.paintFX(this.fxmask)
    this.state.time.events.add(20, shatter, this)
}


function shatter() {
    if (this.drop instanceof Phaser.Sprite) {
        this.drop.reset(this.x, this.y);
    }
    this.state.FXMaskErase(this.fxmask);
    this.body.destroy();
    this.state.glass.x = this.x
    this.state.glass.y = this.y
    this.state.time.events.add(40, sprinkle , this)
    this.state.playSound('breaking-glass', 100)
}


function sprinkle() {
    this.state.glass.explode(2000, 25)
}
