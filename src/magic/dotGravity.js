module.exports = function(subject, source, magnitude) {
    var distance = source.world.distance(subject);
    var angle = source.world.angle(subject);
    var force = [
        Phaser.Physics.P2.prototype.pxmi( -magnitude * Math.cos(angle) * Math.sqrt(distance) ),
        Phaser.Physics.P2.prototype.pxmi( -magnitude * Math.sin(angle) * Math.sqrt(distance) )
    ];
    subject.body.applyForce(force, subject.x, subject.y);
}
