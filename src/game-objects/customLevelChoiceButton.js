import Phaser from "phaser";
export class LevelChoiceButton extends Phaser.GameObjects.Text {
  constructor(scene, x, y, text) {
    super(scene, x, y);

    var container = scene.add.container(x, y).setDepth(1);
    var levelBg = scene.add.sprite(0, 0, "levelButtonBg");
    const levelText = scene.add
      .bitmapText(0, 0, "customFont", "", 25)
      .setOrigin(0.5, 0.5)
      .setText(text);
    container.add(levelBg);
    container.add(levelText);
    scene.add.existing(this);
    // this.setInteractive({ useHandCursor: true });
  }
}
