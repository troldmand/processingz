/*
 * @name Animation
 * @description The circle moves.
 */
// Where is the circle
let x, y;

function setup() {
  createCanvas(1720, 1400);
  // Starts in the middle
  x = width / 2;
  y = height / 2;
  
  //a = width / 2;
  //b = height / 2;
}

function draw() {
  background(200);
  
  // Draw a circle
  stroke(50);
  fill(100);
  ellipse(x, y, 24, 24);
  //ellipse(a, b, 24, 24);
  
  swimmer = new Swimmers(x, y);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-20, 20);
  // Moving up at a constant speed
  y = y - random(-20, 30);
  
    // Jiggling randomly on the horizontal axis
  //a = a + random(-20, 20);
  // Moving up at a constant speed
  //b = b - random(-20, 30);
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
  
 
    // Reset to the bottom
  //if (b < 0) {
  //  b = height;
  //}
}

class Swimmers{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}