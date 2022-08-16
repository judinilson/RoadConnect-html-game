const ASSET_CENTER_WIDTH = 400;
var connectText;
var roadText;
var playText;
export default class Welcome extends Phaser.Scene {
  constructor() {
    super("welcome");
  }

  preload() {
    this.load.audio("sound", "/src/assets/audio/Funky_Chill_loop.wav");
    this.load.audio(
      "defaultClickEffect",
      "/src/assets/audio/SFX/DefaultClick.mp3"
    );
    this.load.bitmapFont(
      "nonstopFont",
      "/src/assets/fonts/nonstopfont.png",
      "/src/assets/fonts/nonstopfont.xml"
    );
    this.load.bitmapFont(
      "customFont",
      "/src/assets/fonts/a2203.png",
      "/src/assets/fonts/a2203.xml"
    );
  }

  create() {
    const sound = this.sound.add("sound");
    const defaultClickEffect = this.sound.add("defaultClickEffect");
    sound.play({ volume: 1 });
    connectText = this.add
      .bitmapText(ASSET_CENTER_WIDTH, 200, "nonstopFont", "Anchor.x = 0.5", 30)
      .setOrigin(0.5, 0.5)
      .setCenterAlign()
      .setX(100);

    //.setVisible(false);

    roadText = this.add
      .bitmapText(ASSET_CENTER_WIDTH, 240, "nonstopFont", "Anchor.x = 0.5", 30)
      .setOrigin(0.5, 0.5)
      .setCenterAlign()
      .setX(800);

    //  shape to handle the button hit area zone
    var shape = new Phaser.Geom.Circle(46, 45, 45);
    playText = this.add
      .bitmapText(ASSET_CENTER_WIDTH, 600, "customFont", "Anchor.x = 0.5", 30)
      .setOrigin(0.5, 0.5)
      .setCenterAlign()
      .setY(900)
      .setInteractive(shape, Phaser.Geom.Circle.Contains, {
        useHandCursor: true,
      });

    connectText.setText("Connect");
    roadText.setText("Road");
    playText.setText("Play");

    var timedEvent = this.time.addEvent({
      delay: 500,
      callback: onEvent,
      callbackScope: this,
      loop: true,
    });

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

//simple loop animation just loading the text on the scene
var loop;
var reverseLoop;
function onEvent() {
  loop = connectText.x * 2;
  reverseLoop = roadText.x / 2;
  connectText.x = loop < ASSET_CENTER_WIDTH ? loop : 400;
  roadText.x = reverseLoop > ASSET_CENTER_WIDTH ? reverseLoop : 400;
  playText.y = reverseLoop > 600 ? reverseLoop : 600;
}
