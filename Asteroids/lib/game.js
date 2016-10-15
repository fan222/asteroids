const Asteroid = require("./asteroid")

function Game () {
  this.DIM_X = 1000;
  this.DIM_Y = 1000;
  this.NUM_ASTEROIDS = 25;
  this.asteroids = [];
}

Game.prototype.addAsteroids = function(){
  while (this.asteroids.length < this.NUM_ASTEROIDS) {
    this.asteroids.push(new Asteroid(this.randomPosition()));
  }
}

Game.prototype.randomPosition = function () {
  let ranX = Math.random() * DIM_X;
  let ranY = Math.random() * DIM_Y;
  return {pos: [ranX, ranY]};
}

Game.prototype.draw = function (ctx){
  console.log('drawing');
  ctx.clearRect(0, 0, 1000, 1000);
  this.asteroids.forEach(asteroid => asteroid.draw(ctx));
}

Game.prototype.moveObjects = function(){
  console.log('moving objects')
  this.asteroids.forEach(asteroid => asteroid.move());
}

module.exports = Game;
