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
