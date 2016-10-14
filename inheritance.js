Function.prototype.inherits = function(superClass) {
  function Surrogate () {};
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}




function MovingObject () {};

function Ship () {};
Ship.inherits(MovingObject);

function Asteroid () {};
Asteroid.inherits(MovingObject);

MovingObject.prototype.move =function() {
  console.log("I moved!");
}

let ship = new Ship();
ship.move();
