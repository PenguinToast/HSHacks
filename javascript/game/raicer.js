function Raicer() {
    this.position = new Vector2();
    this.body = RaicerBody.types[0];
    this.gun = RaicerGun.types[0];
    this.tread = RaicerTread.types[0];
    // this.radar = RaicerRadar.types[0];
}

Raicer.prototype.draw = function(context) {
    context.translate(this.position.x, this.position.y);
    context.save();
    this.tread.draw(context);
    context.restore();
    context.save();
    this.body.draw(context);
    context.restore();
    context.save();
    this.gun.draw(context);
    context.restore();
};