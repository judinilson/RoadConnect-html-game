export default class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.add.text(20, 20, "Game..");

    // setTimeout(() => {
    //   this.scene.start("game");
    // }, 2000);
  }
}
