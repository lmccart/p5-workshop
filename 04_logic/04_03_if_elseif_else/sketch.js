function setup() {
  createCanvas(600, 600); 
  rectMode(CENTER);
  stroke(255);
}

function draw() {
  background(0);
  if (mouseX < 200) {
    ellipse(width/2, height/2, 200, 200);
  } else if (mouseX < 400) {
    rect(width/2, height/2, 200, 200);
  } else {
    line(0, 0, width, height);
  }
}