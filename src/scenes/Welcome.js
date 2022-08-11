export default class Welcome extends Phaser.Scene {
  constructor() {
    super("welcome");
  }

  preload() {
    this.load.bitmapFont(
      "nonstopFont",
      "assets/fonts/nonstopfont.png",
      "assets/fonts/nonstopfont.xml"
    );
  }

  create() {
    //this.scene.start("Menu");

    const connectText = this.add
      .bitmapText(230, 100, "nonstopFont", "", 30)
      .setOrigin(0.5)
      .setCenterAlign()
      .setInteractive();

    const roadText = this.add
      .bitmapText(230, 140, "nonstopFont", "", 30)
      .setOrigin(0.5)
      .setCenterAlign()
      .setInteractive();

    connectText.setText("Connect");
    roadText.setText("Road");
  }
}
