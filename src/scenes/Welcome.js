const ASSET_CENTER_WIDTH = 400;
export default class Welcome extends Phaser.Scene {
  constructor() {
    super("welcome");
  }

  preload() {
    this.load.audio("sound", "assets/audio/Funky_Chill_loop.wav");
    this.load.audio("defaultClickEffect", "assets/audio/SFX/DefaultClick.mp3");
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
    const sound = this.sound.add("sound");
    const defaultClickEffect = this.sound.add("defaultClickEffect");
    //sound.play({ volume: 1 });
    const connectText = this.add
      .bitmapText(ASSET_CENTER_WIDTH, 200, "nonstopFont", "Anchor.x = 0.5", 30)
      .setOrigin(0.5, 0.5)
      .setCenterAlign();

    const roadText = this.add
      .bitmapText(ASSET_CENTER_WIDTH, 240, "nonstopFont", "Anchor.x = 0.5", 30)
      .setOrigin(0.5, 0.5)
      .setCenterAlign();

    //  shape to handle the button hit area zone
    var shape = new Phaser.Geom.Circle(46, 45, 45);
    const playText = this.add
      .bitmapText(ASSET_CENTER_WIDTH, 500, "customFont", "Anchor.x = 0.5", 30)
      .setOrigin(0.5, 0.5)
      .setCenterAlign()
      .setInteractive(shape, Phaser.Geom.Circle.Contains, {
        useHandCursor: true,
      });

    connectText.setText("Connect");
    roadText.setText("Road");
    playText.setText("Play");

    // input click callbacks
    playText
      .on("pointerdown", () => {
        //sende user to menu scene after 0.5sec
        defaultClickEffect.play({ volume: 1 });
        setTimeout(() => {
          this.scene.start("Menu");
        }, 500);
      })
      .on("pointerover", () => {
        //set drop shadow on  hover state
        playText.setText("Play").setDropShadow(2, 2, 0xffffff, 0.4);
      });
  }
}
