function setup() {
  createCanvas(600, 600); 
  rectMode(CENTER);
  stroke(255);
}

function draw() {
  background(0);
  if (mouseX < 100 || mouseX > 500) {
    ellipse(width/2, height/2, 200, 200);
  }
}