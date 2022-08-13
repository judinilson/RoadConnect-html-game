import Phaser, { Scene } from "phaser";

var textureOne;
const ROAD_WIDTH = 100,
  ROAD_HEIGHT = 100;
const BOARD_COLS = 4,
  BOARD_ROWS = 4;

export default class Game extends Phaser.Scene {
  constructor() {
    super("Game");
    this.roadGrid = [];
  }

  preload() {
    this.load.spritesheet("roadTexture1", "assets/roadTexture_01.png", {
      frameWidth: ROAD_WIDTH,
      frameHeight: ROAD_HEIGHT,
    });
    this.load.spritesheet("roadTexture2", "assets/roadTexture_02.png", {
      frameWidth: ROAD_WIDTH,
      frameHeight: ROAD_HEIGHT,
    });
    this.load.spritesheet("roadTexture3", "assets/roadTexture_03.png", {
      frameWidth: ROAD_WIDTH,
      frameHeight: ROAD_HEIGHT,
    });
    this.load.spritesheet("roadTexture4", "assets/roadTexture_04.png", {
      frameWidth: ROAD_WIDTH,
      frameHeight: ROAD_HEIGHT,
    });
    this.load.spritesheet("roadTexture5", "assets/roadTexture_05.png", {
      frameWidth: ROAD_WIDTH,
      frameHeight: ROAD_HEIGHT,
    });
    this.load.spritesheet("roadTexture6", "assets/roadTexture_06.png", {
      frameWidth: ROAD_WIDTH,
      frameHeight: ROAD_HEIGHT,
    });
    this.load.spritesheet("roadTexture7", "assets/roadTexture_07.png", {
      frameWidth: ROAD_WIDTH,
      frameHeight: ROAD_HEIGHT,
    });
    this.load.image("menuIcon", "assets/barsHorizontal.png");

    // delete before deploy
    this.load.bitmapFont(
      "customFont",
      "assets/fonts/a2203.png",
      "assets/fonts/a2203.xml"
    );
  }
  create() {
    const defaultClickEffect = scene.sound.add("defaultClickEffect");

    // this.add.image(350, 300, "roadTexture2").setScale(0.5);

    this.prepareBoard();
    // this.add.image(250, 500, "roadTexture3");
    // this.add.image(280, 300, "roadTexture4");
    // this.add.image(290, 330, "roadTexture5");
    // this.add.image(200, 360, "roadTexture6");
    // this.add.image(190, 400, "roadTexture7");

    var shape = new Phaser.Geom.Circle(46, 45, 45);
    this.add
      .bitmapText(400, 80, "customFont", "", 30)
      .setOrigin(0.5, 0.5)
      .setText("Level 0");

    //menu icon image
    var icon = this.add
      .sprite(400, 700, "menuIcon")
      .setScale(0.8)
      .setInteractive(shape, Phaser.Geom.Circle.Contains, {
        useHandCursor: true,
      });

    // icon on click event
    icon.on("pointerdown", () => {
      defaultClickEffect.play();
      //sende user to menu scene after 0.5sec
      setTimeout(() => {
        this.scene.start("Menu");
      }, 300);
    });
  }

  prepareBoard() {
    var shuffleRoads = createShuffledIndexArray(2);

    var roadGroup = this.add.container();
    var roadIndex = 0,
      newRoad;
    for (let i = 0; i < BOARD_ROWS; i++) {
      for (let j = 0; j < BOARD_COLS; j++) {
        if (i < 2 && j < 2) {
          roadGroup.addAt(
            this.add.image(j * ROAD_WIDTH, i * ROAD_HEIGHT, "roadTexture2"),
            roadIndex
          );
          roadGroup.each((e) => {
            e.setInteractive(
              new Phaser.Geom.Circle(45, 45, 46),
              Phaser.Geom.Circle.Contains
            );
            e.on("pointerdown", () => {
              e.rotation += 5;
            });
          });

          roadIndex++;
        }
      }
    }
    this.add.container(300, 300, roadGroup);
    console.log(roadGroup);
  }
}
function createShuffledIndexArray(piecesAmount) {
  var indexArray = [];

  for (var i = 0; i < piecesAmount; i++) {
    indexArray.push(i);
  }

  return shuffle(indexArray);
}

function shuffle(array) {
  var counter = array.length,
    temp,
    index;

  while (counter > 0) {
    index = Math.floor(Math.random() * counter);

    counter--;

    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

const rotate = (road) => {
  road.rotation += 1;
};
