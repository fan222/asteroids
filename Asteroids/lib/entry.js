const MovingObject = require("./moving_object");
const Game = require("./game");
const Util = require("./util");
const GameView = require("./game_view")

document.addEventListener("DOMContentLoaded", (event) => {
  // debugger
    let canvas = document.getElementById("game-canvas");
    let ctx = canvas.getContext('2d');
    let game = new Game();
    let gameView = new GameView(game, ctx);
    gameView.start();
  });
