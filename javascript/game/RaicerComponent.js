function RaicerComponent() {
    this.image = new Image();
}

function RaicerComponent.prototype.draw = function(context) {
    if (this.image.complete) {
	context.drawImage(this.image, 50, 50);
    }
};
