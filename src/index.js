import Phaser from "phaser";
import Welcome from "./scenes/Welcome";
import Menu from "./scenes/Menu";
import Game from "./scenes/Game";
import GameOver from "./scenes/GameOver";

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.CENTER_HORIZONTALLY,
    parent: "phaser-example",
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 800,
  },
  backgroundColor: "#23BF8E",
  scene: [Welcome, Menu, Game, GameOver],
};

const game = new Phaser.Game(config);
