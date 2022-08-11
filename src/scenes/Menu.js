export default class Menu extends Phaser.Scene {
  constructor() {
    super("Menu");
  }

  create() {
    this.scene.start("Game");
    this.add.text(200, 100, "Menu..");
  }
}
