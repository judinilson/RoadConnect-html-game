import { LevelChoiceButton } from "../game-objects/customLevelChoiceButton";
export default class Menu extends Phaser.Scene {
  constructor() {
    super("Menu");
  }

  preload() {
    this.load.image("levelButtonBg", "assets/red_button09.png");
  }
  create() {
    //this.scene.start("Game");

    const levelSelectText = this.add
      .bitmapText(240, 50, "customFont", "", 30)
      .setOrigin(0.5, 0.5)
      .setCenterAlign();

    var levelOne = new LevelChoiceButton(this, 120, 180, "1");
    var levelTwo = new LevelChoiceButton(this, 200, 180, "2");
    var levelThree = new LevelChoiceButton(this, 280, 180, "3");
    var levelFour = new LevelChoiceButton(this, 360, 180, "4");
    //this.add.existing(levelOne);
    // var container = this.add.container(120, 180).setDepth(1);
    // var firstLevelbtn = this.add.sprite(0, 0, "levelButtonBg");
    // const level = this.add
    //   .bitmapText(0, 0, "customFont", "", 25)
    //   .setOrigin(0.5, 0.5)
    //   .setText("1");
    // container.add(firstLevelbtn);
    // container.add(level);

    // this.add.sprite(200, 180, "levelButtonBg").setDepth(1);
    // this.add.sprite(280, 180, "levelButtonBg").setDepth(1);
    // this.add.sprite(360, 180, "levelButtonBg").setDepth(1);
    //the blue background rectangle
    this.add.rectangle(240, 350, 350, 450, 0x4fd3c4);

    levelSelectText.setText("Level Select");
  }
}
