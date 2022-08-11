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
    this.load.bitmapFont(
      "customFont",
      "assets/fonts/a2203.png",
      "assets/fonts/a2203.xml"
    );
  }

  create() {
    //this.scene.start("Menu");

    const connectText = this.add
      .bitmapText(230, 100, "nonstopFont", "", 30)
      .setOrigin(0.5)
      .setCenterAlign();

    const roadText = this.add
      .bitmapText(230, 140, "nonstopFont", "", 30)
      .setOrigin(0.5)
      .setCenterAlign();

    const playText = this.add
      .bitmapText(230, 500, "customFont", "", 30)
      .setOrigin(0.5)
      .setCenterAlign()
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("Menu");
      });

    connectText.setText("Connect");
    roadText.setText("Road");
    playText.setText("Play");
  }
}
