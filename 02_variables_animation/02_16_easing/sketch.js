var x = 0;
var y = 0;
var diffX;
var diffY;
var easing = 0.01;

function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  
  diffX = mouseX - x;
  diffY = mouseY - y;
  
  x = x + easing*diffX;
  y = y + easing*diffY;
  
  background(255, 0, 0);
  ellipse(x, y, 50, 50);
}