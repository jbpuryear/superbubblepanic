module.exports = function(subjects, source, magnitude, range, invert) {
    range = range || 0;

    var fn = function(subject) {
        var distance = source.world.distance(subject); 
        if (range > 0 && distance > range) return;

        distance = Phaser.Physics.P2.prototype.pxm(distance);
        var d2 = distance*distance;
        // Gaddamn singularities.
        d2 = d2 < 1 ? 1 : d2;

        var mag = invert ? magnitude * (1 - 1/d2) : magnitude / d2;
        var angle = source.world.angle(subject);
        var force = [
            mag * Math.cos(angle),
            mag * Math.sin(angle)
        ];

        subject.body.applyForce(force, subject.x, subject.y);
    }

    if (subjects instanceof Phaser.Group) {
        subjects.recurseAlive(fn);
    } else {
        fn(subjects);
    }
}
