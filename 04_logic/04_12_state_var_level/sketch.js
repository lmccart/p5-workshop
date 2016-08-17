var level = 0;

function setup() {
  createCanvas(600, 600);
  textSize(30);
}

function draw() {
  background(255);
  if (level == 0) {
    text("welcome to the game", 100, 100);
  } else if (level == 1) {
    text("you are playing level 1", 100, 100);
  } else if (level == 2) {
    text("you are playing level 2", 100, 100);
  } else {
    text("game over", 100, 100);
  }
}

function mousePressed() {
  level = level + 1;
}