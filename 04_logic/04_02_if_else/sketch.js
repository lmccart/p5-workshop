function setup() {
  createCanvas(600, 600); 
  rectMode(CENTER);
}

function draw() {
  background(0);
  if (mouseX > width/2) {
    ellipse(width/2, height/2, 200, 200);
  } else {
    rect(width/2, height/2, 200, 200);
  }
}