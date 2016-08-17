var x = 300;
var y = 200;
var s = 50;
var g = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(g);
  rect(x, y, s, s);
}

function mousePressed() {
  if (mouseX > x && mouseX < x + s && mouseY > y && mouseY < y + s) {
    g += 30;
  }
}