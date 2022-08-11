import Phaser from "phaser";
import Welcome from "./scenes/Welcome";
import Menu from "./scenes/Menu";
import Game from "./scenes/Game";

const config = {
  type: Phaser.AUTO,
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: window.innerWidth < 480 ? 480 : window.innerWidth,
    height: window.innerHeight - 32 < 320 ? 320 : window.innerHeight,
  },
  backgroundColor: "#23BF8E",
  scene: [Welcome, Menu, Game],
};

const game = new Phaser.Game(config);
