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
    var centerXOffset = window.innerWidth / 2;
    const connectText = this.add
      .bitmapText(240, 200, "nonstopFont", "", 30)
      .setOrigin(0.5, 0.5)
      .setCenterAlign();

    const roadText = this.add
      .bitmapText(240, 240, "nonstopFont", "", 30)
      .setOrigin(0.5, 0.5)
      .setCenterAlign();

    const playText = this.add
      .bitmapText(240, 500, "customFont", "", 30)
      .setOrigin(0.5, 0.5)
      .setCenterAlign()
      .setInteractive()
      .on("pointerdown", () => {
        //sende user to menu scene after 1sec
        setTimeout(() => {
          this.scene.start("Menu");
        }, 1000);
      })
      .on("pointerover", () => {
        //set drop shadow on  hover state
        playText.setText("Play").setDropShadow(2, 2, 0xffffff, 0.4);
      });

    connectText.setText("Connect");
    roadText.setText("Road");
    playText.setText("Play");
  }
}
