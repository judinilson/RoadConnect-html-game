import { LevelChoiceButton } from "../game-objects/customLevelChoiceButton";
var container;
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
      .bitmapText(400, 50, "customFont", "", 30)
      .setOrigin(0.5, 0.5)
      .setCenterAlign();

    var levelOne = new LevelChoiceButton(this, 250, 180, "1", () => {
      this.scene.start("Game");
      console.log("Iam in first level");
    });
    var levelTwo = new LevelChoiceButton(this, 350, 180, "2", () => {
      console.log("Iam in second level");
    });
    var levelThree = new LevelChoiceButton(this, 450, 180, "3", () => {
      console.log("Iam in third level");
    });
    var levelFour = new LevelChoiceButton(this, 550, 180, "4", () => {
      console.log("Iam in last level");
    });

    //the blue background rectangle
    this.add.rectangle(400, 400, 400, 550, 0x4fd3c4);

    levelSelectText.setText("Level Select");
  }
}
