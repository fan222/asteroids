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
