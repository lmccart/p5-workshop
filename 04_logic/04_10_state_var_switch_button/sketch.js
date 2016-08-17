var showRect = false;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  ellipse(300, 300, 100, 100);
  if (showRect == true) {
    rect(100, 100, 100, 100);
  }
}

function mousePressed() {
  var d = dist(300, 300, mouseX, mouseY);
  if (d < 50) {
    showRect = true;
  }
}