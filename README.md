## ROAD CONNECT HTML GAME

## Poject Description

This simple project was built using html with Phaser 3, it is a simple and challenging game project where players need to connect roads in every level of the game.

## Poject

![project gif](/assets/gameplay.gif)

## Game demo

[demo](https://judinilson.github.io/RoadConnect-html-game/)

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Available Commands

| Command         | Description                                                                     |
| --------------- | ------------------------------------------------------------------------------- |
| `npm install`   | Install project dependencies                                                    |
| `npm start`     | Build project and open web server running project                               |
| `npm run build` | Builds code bundle with production settings (minification, uglification, etc..) |

## Writing Code

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development server by running `npm start`.

After starting the development server with `npm start`, you can edit any files in the `src` folder and webpack will automatically recompile and reload your server (available at `http://localhost:8080` by default).

## Customizing the Project

I sincerely think that there's a better way to customize this project algorithm. Starting with the most important part **displaying the game levels dynamically**.
Reason behind the project having only one level it's because I do not wanna repeat myself by rendering the game levels manualy,**having to setup each spritesheet position and angle in each level**, tried to improve the algorithm but was encountered with some limitations using Phaser.
Any suggestions and contributions are welcome, base on the issues mentioned bellow.

## ISSUES

1. Phaser spritesheet display correct size.
2. Error rendering image dynamically using custom class
3. Add image to the scene "now its rendering manualy because have to setup each image position and angle"

### TODO

- Create reusable methods to render each level of the game.
- Create Phaser custom image object class to render each road.
- Render each level dynamically with correct positioning and angles.

check the project tab in this repo for more information.
