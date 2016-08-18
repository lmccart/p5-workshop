var numLocations = 3; // set your total number of locations here
var curLocation = 1;
var sound1; 
var sound2;
var wavy;
var gun;
var sound3;

function preload() {
  sound1 = loadSound("radio_noise.mp3");
  sound2 = loadSound("music_box.mp3");
  wavy = loadImage("wavy.jpg");
  gun = loadImage("transparent_gun.png");
  sound3 = loadSound("jungle.mp3");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(127);

  if (curLocation == 1) {
  background(0);
  stroke(255, 0, 0, 127+127*sin(0.9*frameCount));
  strokeWeight(10);
  line(0, 250, 980, 250);  
  line(0, 500, 980, 500);
  line(0,750, 980, 750);
  line(0, 1000, 980, 1000);
  line(0, 1250, 980, 1250);
  
  stroke(255, 0, 0, 127+127*sin(0.9*frameCount));
  textSize(32);
  text("SIT, SEE RED LINES, GO.", 270, 500);
  
  stroke(51, 255, 255);
  textSize(24);
  text("W", random(980), random(250));
  text("A", random(980), random(250, 500));
  text("T", random(980), random(500, 750));
  text("E", random(980), random(750, 1000));
  text("R", random(980), random(1000, 1250));
  text("!", random(980), random(1250, 1461));


  } else if (curLocation == 2) {
  background(random(255));
  noStroke();
  textSize(40);
  textFont("Gothika");
  fill(52, 255, 255);
  text("YOU LOOK THIRSTY...", 330, 600);
  text("RUN! GET TO THE FUCKING WATER!", 200, 650);
  image(wavy, random(980), random(1461), 500, 500)
  
  
    
  } else if (curLocation == 3) {
    // draw view for location 3
  background(0);
  fill(0, 100, random(255), 200);
  ellipse(340, 900, 300, 150);
  textSize(40);
  textFont("LittleBlueJay")
  fill(0, 100, random(255), 200);
  text("YOU MADE IT, DIVE IN...", 190, 200);
  image(gun, 0, 0, 150, 150);
  }

  // this draws the testing buttons on top of everything
  drawButtons();
}

function mousePressed() {
  // this detects a click on the testing buttons
  detectButtonPress();
  sound1.stop();
  sound2.stop();
  sound3.stop();
  if (curLocation == 1) {
    frameRate(5);
    sound1.play();
  } if (curLocation == 2) {
    frameRate(60);
    sound2.play();
  } if (curLocation == 3) {
    frameRate(60);
    sound3.play();
  }
}


