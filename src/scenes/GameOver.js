export default class GameOver extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

  create() {
    const defaultClickEffect = this.sound.add("defaultClickEffect");

    var shape = new Phaser.Geom.Circle(46, 45, 45);
    this.add
      .bitmapText(400, 300, "customFont", "", 25)
      .setOrigin(0.5, 0.5)
      .setText("All");
    this.add
      .bitmapText(400, 350, "customFont", "", 25)
      .setOrigin(0.5, 0.5)
      .setText("Levels");
    this.add
      .bitmapText(400, 400, "customFont", "", 25)
      .setOrigin(0.5, 0.5)
      .setText("cleared");

    this.add
      .bitmapText(400, 600, "customFont", "", 15)
      .setOrigin(0.5, 0.5)
      .setText("Please check Game repository readme");

    //menu icon image
    var icon = this.add
      .sprite(400, 700, "menuIcon")
      .setScale(0.6)
      .setInteractive(shape, Phaser.Geom.Circle.Contains, {
        useHandCursor: true,
      });

    // icon on click event
    icon.on("pointerdown", () => {
      defaultClickEffect.play();
      //sende user to menu scene after 0.5sec
      setTimeout(() => {
        this.scene.start("Menu");
      }, 300);
    });
  }
}
