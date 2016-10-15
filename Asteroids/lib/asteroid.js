// Spacerock. It inherits from MovingObject.

const Util = require("./util")
const MovingObject = require("./moving_object")

function Asteroid (posObj) {
  let obj = {
    color: "black", radius: 100, pos: posObj[pos], vel: Util.randomVec(5)
  };
  MovingObject.call(this, obj);
}

Util.inherits(Asteroid, MovingObject)

module.exports = Asteroid;
