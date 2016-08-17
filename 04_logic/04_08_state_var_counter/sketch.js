var clicks = 0;

function setup() {
  
}

function draw() {
  if (clicks > 10) {
    background(255, 0, 0);
  }
  print(clicks);
}

function mousePressed() {
  clicks = clicks + 1;
}