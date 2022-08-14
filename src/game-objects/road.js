export class RoadImage extends Phaser.GameObjects.Image {
  constructor(scene, x, y, texture, name, currentAngle, destAngle) {
    super(scene, x, y, texture);
    var _roadImage = scene.add.image(x, y, texture).setScale(0.8);
    _roadImage.name = name;
    _roadImage.angle = currentAngle;
    _roadImage.tabIndex = destAngle; //notice that i use tabIndex just to past the destination index for game over

    const shape = new Phaser.Geom.Circle(50, 50, 50);
    this.setInteractive(shape, Phaser.Geom.Circle.Contains, {
      useHandCursor: true,
    });
  }
}
