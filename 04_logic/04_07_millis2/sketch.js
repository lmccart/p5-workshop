function setup() {
  createCanvas(600, 600); 
  rectMode(CENTER);
  stroke(255);
}

function draw() {
  background(0);
  if (millis() < 2000) {
    ellipse(width/2, height/2, 200, 200);
  } else if (millis() < 4000) {
    rect(width/2, height/2, 200, 200);
  } else if (millis() < 6000) {
    line(0, 0, width, height);
  }
  print(millis());
}