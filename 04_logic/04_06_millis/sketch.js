function setup() {
  createCanvas(600, 600); 
  rectMode(CENTER);
  stroke(255);
}

function draw() {
  background(0);
  if (millis() > 3000) {
    ellipse(width/2, height/2, 200, 200);
  }
  print(millis());
}