import Phaser from "phaser";
export class LevelChoiceButton extends Phaser.GameObjects.Text {
  constructor(scene, x, y, text, callback) {
    super(scene, x, y, text);

    var container = scene.add.container(x, y).setDepth(1);
    var levelBg = scene.add.sprite(0, 0, "levelButtonBg");
    const levelText = scene.add
      .bitmapText(0, 0, "customFont", "", 25)
      .setOrigin(0.5, 0.5)
      .setText(text);
    container.add(levelBg);
    container.add(levelText);
    scene.add.existing(this);

    //  shape to handle the button hit area zone
    var shape = new Phaser.Geom.Circle(0, 0, 45);
    this.setInteractive(shape, Phaser.Geom.Circle.Contains, {
      useHandCursor: true,
    }).on("pointerdown", () => {
      //this.enterButtonHoverState()
      const defaultClickEffect = scene.sound.add("defaultClickEffect");
      defaultClickEffect.play();

      callback();
    });
  }
}
