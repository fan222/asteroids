/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const MovingObject = __webpack_require__(1);
	const Game = __webpack_require__(4);
	const Util = __webpack_require__(3);
	const GameView = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./game_view\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))

	document.addEventListener("DOMContentLoaded", (event) => {
	  // debugger
	    let canvas = document.getElementById("game-canvas");
	    let ctx = canvas.getContext('2d');
	    let game = new Game();
	    let gameView = new GameView(game, ctx);
	    gameView.start();
	  });


/***/ },
/* 1 */
/***/ function(module, exports) {

	// Base class for anything that moves.
	// Most important methods are MovingObject.prototype.move,
	// MovingObject.prototype.draw(ctx), MovingObject.prototype.isCollidedWith(otherMovingObject).

	function MovingObject(obj){
	  this.pos = obj[pos];
	  this.vel = obj[vel];
	  this.radius = obj[radius];
	  this.color = obj[color];
	}

	MovingObject.prototype.draw = function(ctx){
	  ctx.fillStyle = this.color;
	  ctx.beginPath();

	  ctx.arc(
	    this.pos[0],
	    this.pos[1],
	    this.radius,
	    0,
	    2 * Math.PI,
	    false
	  );

	  ctx.fill();
	}

	MovingObject.prototype.move = function(){
	  let dx = this.vel[0];
	  let dy = this.vel[1];

	  this.pos[0] = this.pos[0] + dx;
	  this.pos[1] = this.pos[1] + dy;
	}

	module.exports = MovingObject;


/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	// function inherits (superClass) {
	//   function Surrogate () {};
	//   Surrogate.prototype = superClass.prototype;
	//   subClass.prototype = new Surrogate();
	//   subClass.prototype.constructor = subClass;
	// }
	const Util = {
	  inherits (subClass, superClass) {
	      function Surrogate () {};
	      Surrogate.prototype = superClass.prototype;
	      subClass.prototype = new Surrogate();
	      subClass.prototype.constructor = subClass;
	  },

	  randomVec (length) {
	    let dx = ((Math.random() * 2) - 1) * length;
	    let dy = Math.sqrt(Math.pow(length, 2) - Math.pow(dx, 2));
	    return [dx, dy];
	  }
	}

	module.exports = Util;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const Asteroid = __webpack_require__(5)

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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// Spacerock. It inherits from MovingObject.

	const Util = __webpack_require__(3)
	const MovingObject = __webpack_require__(1)

	function Asteroid (posObj) {
	  let obj = {
	    color: "black", radius: 100, pos: posObj[pos], vel: Util.randomVec(5)
	  };
	  MovingObject.call(this, obj);
	}

	Util.inherits(Asteroid, MovingObject)

	module.exports = Asteroid;


/***/ }
/******/ ]);