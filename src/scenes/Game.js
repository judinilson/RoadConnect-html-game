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
    //const defaultClickEffect = this.sound.add("defaultClickEffect");

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
    const offset = 90;
    var roadContainer = this.add.container();
    var roadIndex = 0,
      newRoad;
    for (let i = 0; i < BOARD_ROWS; i++) {
      for (let j = 0; j < BOARD_COLS; j++) {
        if (i < 2 && j < 2) {
          var road = this.add
            .image(j * 80, i * 80, "roadTexture2")
            .setScale(0.8);
          road.name = "road" + i.toString() + "x" + j.toString();
          road.tabIndex = roadIndex;
          if (i == 0 && j == 0) {
            road.angle = 90;
            road.tabIndex = 0; //notice that i use tabIndex just to past the destination index for game over
          }
          if (i == 0 && j == 1) {
            road.angle = 0;
            road.tabIndex = 90;
          }
          if (i == 1 && j == 0) {
            road.angle = -180;
            road.tabIndex = -90;
          }
          if (i == 1 && j == 1) {
            road.angle = -90;
            road.tabIndex = -180;
          }

          console.log(`${road}:`, road);

          roadContainer.add(road);

          roadIndex++;
        }
      }
    }
    roadContainer.each((e) => {
      const shape = new Phaser.Geom.Circle(50, 50, 50);
      e.setInteractive(shape, Phaser.Geom.Circle.Contains, {
        useHandCursor: true,
      }).on("pointerup", () => {
        e.angle += offset;
        checkIfFinished(roadContainer);
      });
    });
    this.add.container(350, 300, roadContainer);
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

function checkIfFinished(container) {
  var isFinished = true;
  container.each((e) => {
    if (e.angle !== e.tabIndex) {
      isFinished = false;
      return;
    }
  });

  if (isFinished) {
    console.log("congratulation you done it");
  }
}
