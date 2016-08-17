var state = 0;

function setup() {
  createCanvas(600, 600);
  textSize(30);
}

function draw() {
  background(255);
  if (state == 0) {
    text("welcome. do you go left or right?", 100, 100);
    text("left", 100, 300);
    text("right", 400, 300);
  } else if (state == 1) {
    text("you went left. click to advance.", 100, 100);
  } else if (state == 2) {
    text("you went right. click to advance.", 100, 100);
  } else {
    text("game over", 100, 100);
  }
}

function mousePressed() {
  if (state == 0 && mouseX < width/2) {
    state = 1;
  } else if (state == 0 && mouseX > width/2) {
    state = 2;
  } else {
    state = 3;
  }
}