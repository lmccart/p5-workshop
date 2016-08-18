var numLocations = 4; // set your total number of locations here
var curLocation = 1;



function setup() {
  createCanvas(980, 1461);
}

function draw() {
  background(127);

  if (curLocation == 1) {
    // draw view for location 1
    background(255, 0, 0);
  } else if (curLocation == 2) {
    // draw view for location 2
    background(255, 255, 0);
  } else if (curLocation == 3) {
    // draw view for location 3
    background(255, 0, 255);
  }

  // this draws the testing buttons on top of everything
  drawButtons();
}

function mousePressed() {
  // this detects a click on the testing buttons
  detectButtonPress();
}


