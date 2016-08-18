var numLocations = 6; // set your total number of locations here
var curLocation = 1;



function setup() {
  createCanvas(windowWidth, windowHeight);
  addFence(39.2137056, -106.93653110); // printmaking
  addFence(39.21391712, -106.93599236); // woodshop
  addFence(39.21406986, -106.93579980); // ceramics
  addFence(39.21427167, -106.93622730); // cafe
  addFence(39.21434363, -106.93645512); // meeting hall
  addFence(39.21360107, -106.93650356); // photo
}

function draw() {
  background(127);
  textSize(30);
  text(curLocation, 20, 20);

  if (curLocation == 1) {
    // draw view for location 1
    background(255, 0, 0);
    text("printmaking", 50, 50);
  } else if (curLocation == 2) {
    // draw view for location 2
    background(255, 255, 0);
    text("woodshop", 50, 50);
  } else if (curLocation == 3) {
    // draw view for location 3
    background(255, 0, 255);
    text("ceramics", 50, 50);
  } else if (curLocation == 4) {
    background(10, 230, 100);
    text("cafe", 50, 50);
  } else if (curLocation == 5) {
    background(100, 250, 200);
    text("meeting hall", 50, 50);
  } else if (curLocation == 6) {
    background(200, 250, 200);
    text("photo", 50, 50);
  }

  checkLocations();
  drawButtons();
}

function mousePressed() {
  // this detects a click on the testing buttons
  detectButtonPress();
}

function resetLocation() {
  // do any cleanup here like stopping sounds or reseting variables
}