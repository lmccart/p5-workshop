var showRect = false;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  if (showRect == true) {
    rect(100, 100, 50, 50);
  }
}

function mousePressed() {
  showRect = true;
}