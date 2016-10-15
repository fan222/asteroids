const Game = require("./game");

function GameView(game, ctx){

  this.game = game;
  this.ctx = ctx;
  // debugger
}
GameView.prototype.start = function () {
  // return window.setInterval(() => {
  //   this.game.moveObjects();
  //   this.game.draw(this.ctx);
  // }, 20);

  // setInterval(() => {
  //   this.game.moveObjects();
  //   this.game.draw(this.ctx);
  // }, 20);

  setInterval(this.game.moveObjects.bind(this.game), 20);
  setInterval(this.game.draw.bind(this.game, ), 20);
}

module.exports = GameView;
