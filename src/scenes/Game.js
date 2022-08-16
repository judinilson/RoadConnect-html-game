import Phaser, { Scene } from "phaser";

var textureOne;
const ROAD_WIDTH = 100,
  ROAD_HEIGHT = 100;
const BOARD_COLS = 4,
  BOARD_ROWS = 4;

export default class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  preload() {
    this.load.spritesheet("roadTexture1", "/src/assets/roadTexture_01.png", {
      frameWidth: ROAD_WIDTH,
      frameHeight: ROAD_HEIGHT,
    });
    this.load.spritesheet("roadTexture2", "/src/assets/roadTexture_02.png", {
      frameWidth: ROAD_WIDTH,
      frameHeight: ROAD_HEIGHT,
    });
    this.load.spritesheet("roadTexture3", "/src/assets/roadTexture_03.png", {
      frameWidth: ROAD_WIDTH,
      frameHeight: ROAD_HEIGHT,
    });
    this.load.spritesheet("roadTexture4", "/src/assets/roadTexture_04.png", {
      frameWidth: ROAD_WIDTH,
      frameHeight: ROAD_HEIGHT,
    });
    this.load.spritesheet("roadTexture5", "/src/assets/roadTexture_05.png", {
      frameWidth: ROAD_WIDTH,
      frameHeight: ROAD_HEIGHT,
    });
    this.load.spritesheet("roadTexture6", "/src/assets/roadTexture_06.png", {
      frameWidth: ROAD_WIDTH,
      frameHeight: ROAD_HEIGHT,
    });
    this.load.spritesheet("roadTexture7", "/src/assets/roadTexture_07.png", {
      frameWidth: ROAD_WIDTH,
      frameHeight: ROAD_HEIGHT,
    });
    this.load.image("menuIcon", "/src/assets/barsHorizontal.png");

    // delete before deploy
    this.load.bitmapFont(
      "customFont",
      "/src/assets/fonts/a2203.png",
      "/src/assets/fonts/a2203.xml"
    );
  }
  create() {
    const defaultClickEffect = this.sound.add("defaultClickEffect");

    this.prepareBoard();

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
    const offset = 90;
    var roadContainer = this.add.container();
    var roadIndex = 0;

    var road, roadTwo, roadThree;
    for (let i = 0; i < BOARD_ROWS; i++) {
      for (let j = 0; j < BOARD_COLS; j++) {
        if (i < 2 && j < 2) {
          road = this.add.image(j * 60, i * 60, "roadTexture2").setScale(0.6);

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
          //  road = new RoadImage(
          //    this,
          //    j * 60,
          //    i * 60,
          //    "roadTexture2",
          //    currentAngle,
          //    destAngle
          //  );
          roadContainer.add(road);

          roadIndex++;
        }

        /* 
          2ND LEVEL
        */
        // if (i < 2 && j < 1) {
        //   road = this.add.image(j * 40, i * 40, "roadTexture2").setScale(0.4);
        //   road.name = "road" + i.toString() + "x" + j.toString();

        //   console.log(road.name);
        //   if (i == 0 && j == 0) {
        //     road.angle = 90;
        //     road.tabIndex = 0;
        //   }
        //   if (i == 1 && j == 0) {
        //     road.angle = -180;
        //     road.tabIndex = -90;
        //   }
        //   roadContainer.add(road);
        //   if (i <= 1) {
        //     var roadLevelTwoIndex = 0;
        //     var x, y, y2;
        //     if (i == 1) {
        //       x = 0;
        //       y = 80;
        //       y2 = 40;
        //     } else {
        //       (x = 40), ((y = 0), (y2 = 80));
        //     }

        //     roadTwo = this.add.image(x, y, "roadTexture7").setScale(0.4);
        //     roadTwo.name = "roadTwo" + i.toString() + "x" + j.toString();
        //     roadTwo.angle = i != 0 ? 0 : 90;
        //     //roadTwo.tabIndex = i != 0 ? 0 :-180

        //     roadContainer.add(roadTwo);

        //     roadThree = this.add.image(40, y2, "roadTexture3").setScale(0.4);
        //     roadThree.name = "roadThree" + i.toString() + "x" + j.toString();
        //     roadThree.angle = i != 0 ? -180 : 90;
        //     roadContainer.add(roadThree);

        //     roadLevelTwoIndex++;
        //   }
        // }
      }
    }
    roadContainer.each((e) => {
      const shape = new Phaser.Geom.Circle(50, 50, 50);
      e.setInteractive(shape, Phaser.Geom.Circle.Contains, {
        useHandCursor: true,
      }).on("pointerup", () => {
        e.angle += offset;

        this.checkIfFinished(roadContainer, this);
      });
    });
    this.add.container(350, 300, roadContainer);
  }

  checkIfFinished(container) {
    var isFinished = true;
    container.each((e) => {
      if (e.angle !== e.tabIndex) {
        isFinished = false;
        return;
      }
    });

    if (isFinished) {
      console.log("congratulation you done it");
      setTimeout(() => {
        this.scene.start("GameOver");
      }, 200);
    }
  }
}
