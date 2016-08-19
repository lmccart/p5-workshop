var numLocations = 6; // set your total number of locations here
var curLocation = 1;

var timeStart = 0;
var pot1;
var pot2;
var pot3;
var pot4;
var pot5;
var lot1;
var lot2;
var lot3;
var lot4;
var lot5;
var spot1;
var spot2;
var spot3;
var spot4;
var spot5;
var watt1;
var watt2;
var watt3;
var watt4;
var watt5;
var pit1;
var pit2;
var pit3;
var pit4;
var pit5;
var potShown;
var lotShown;
var spotShown;
var wattShown;
var pitShown;

function preload() {
  // images
  pot1 = loadImage("img/pot1.png");
  pot2 = loadImage("img/pot2.gif");
  pot3 = loadImage("img/pot3.png");
  pot4 = loadImage("img/pot4.png");
  pot5 = loadImage("img/pot5.png");
  lot1 = loadImage("img/lot1.png");
  lot2 = loadImage("img/lot2.png");
  lot3 = loadImage("img/lot3.png");
  lot4 = loadImage("img/lot4.jpg");
  lot5 = loadImage("img/lot5.png");
  spot1 = loadImage("img/spot1.png");
  spot2 = loadImage("img/spot2.png");
  spot3 = loadImage("img/spot3.png");
  spot4 = loadImage("img/spot4.jpg");
  spot5 = loadImage("img/spot5.png");
  watt1 = loadImage("img/watt1.png");
  watt2 = loadImage("img/watt2.gif");
  watt3 = loadImage("img/watt3.png");
  watt4 = loadImage("img/watt4.gif");
  watt5 = loadImage("img/watt5.png");
  pit1 = loadImage("img/pit1.png");
  pit2 = loadImage("img/pit2.png");
  pit3 = loadImage("img/pit3.png");
  pit4 = loadImage("img/pit4.png");
  pit5 = loadImage("img/pit5.png");
  welcomeMu = loadSound("sou/welcome.wav");
  seekMu = loadSound("sou/seek.wav");
}

function setup() {
  createCanvas(768, 1024);
  potShown = pot1;
  lotShown = lot1;
  spotShown = spot1;
  wattShown = watt1;
  pitShown = pit1;
  seekMu.play();
}

function draw() {
  background(171, 209, 222);

  if (curLocation == 1) {
    // draw view for location 1
    
    fill(255);
    textSize(50);
    textStyle(ITALIC);
    textAlign(CENTER);
    textFont("Comic Sans MS");
    text("seek...", 380, 500);

  } else if (curLocation == 2) {
    // draw view for location 2
    background(171, 209, 222);
    image(potShown, 170, 300)
    fill(255)
    textSize(50);
    textStyle(ITALIC);
    textAlign(CENTER);
    textFont("Comic Sans MS");
    text("welcome to...", 380, 125);
    text("the pot", 380, 200);
    text("stick around", 380, 800)
    if (millis() - timeStart > 5000) {
      var n = random(5);
      if (n < 1) {
        potShown = pot1;
      } else if (n < 2) {
        potShown = pot2;
      } else if (n < 3) {
        potShown = pot3;
      } else if (n < 4) {
        potShown = pot4;
      } else if (n < 5) {
        potShown = pot5;
      }
      timeStart = millis();
    }

  } else if (curLocation == 3) {
    // draw view for location 3
    background(171, 209, 222);
    image(lotShown, 170, 300)
    fill(255)
    textSize(50);
    textStyle(ITALIC);
    textAlign(CENTER);
    textFont("Comic Sans MS");
    text("welcome to...", 380, 125);
    text("the lot", 380, 200);
    text("stick around", 380, 800);
    if (millis() - timeStart > 5000) {
      var n = random(5);
      if (n < 1) {
        lotShown = lot1;
      } else if (n < 2) {
        lotShown = lot2;
      } else if (n < 3) {
        lotShown = lot3;
      } else if (n < 4) {
        lotShown = lot4;
      } else if (n < 5) {
        lotShown = lot5;
      }
      timeStart = millis();
    }
  } else if (curLocation == 4) {
    // draw view for location 4
    background(171, 209, 222);
    image(spotShown, 170, 300)
    fill(255)
    textSize(50);
    textStyle(ITALIC);
    textAlign(CENTER);
    textFont("Comic Sans MS");
    text("welcome to...", 380, 125);
    text("the spot", 380, 200);
    text("stick around", 380, 800);
    if (millis() - timeStart > 5000) {
      var n = random(5);
      if (n < 1) {
        spotShown = spot1;
      } else if (n < 2) {
        spotShown = spot2;
      } else if (n < 3) {
        spotShown = spot3;
      } else if (n < 4) {
        spotShown = spot4;
      } else if (n < 5) {
        spotShown = spot5;
      }
      timeStart = millis();
    }
  } else if (curLocation == 5) {
    // draw view for location 5
    background(171, 209, 222);
    image(wattShown, 170, 300)
    fill(255)
    textSize(50);
    textStyle(ITALIC);
    textAlign(CENTER);
    textFont("Comic Sans MS");
    text("welcome to...", 380, 125);
    text("the watt", 380, 200);
    text("stick around", 380, 800);
    if (millis() - timeStart > 5000) {
      var n = random(5);
      if (n < 1) {
        wattShown = watt1;
      } else if (n < 2) {
        wattShown = watt2;
      } else if (n < 3) {
        wattShown = watt3;
      } else if (n < 4) {
        wattShown = watt4;
      } else if (n < 5) {
        wattShown = watt5;
      }
      timeStart = millis();
    }
  } else if (curLocation == 6) {
    // draw view for location 6
    background(171, 209, 222);
    image(pitShown, 170, 300)
    fill(255)
    textSize(50);
    textStyle(ITALIC);
    textAlign(CENTER);
    textFont("Comic Sans MS");
    text("welcome to...", 380, 125);
    text("the pit", 380, 200);
    text("stick around", 380, 800);
    if (millis() - timeStart > 5000) {
      var n = random(5);
      if (n < 1) {
        pitShown = pit1;
      } else if (n < 2) {
        pitShown = pit2;
      } else if (n < 3) {
        pitShown = pit3;
      } else if (n < 4) {
        pitShown = pit4;
      } else if (n < 5) {
        pitShown = pit5;
      }
      timeStart = millis();
    }
  }
  
  // this draws the testing buttons on top of everything
  drawButtons();
}

function mousePressed() {
  // this detects a click on the testing buttons
  detectButtonPress();
  seekMu.stop();
  welcomeMu.stop();
  if (curLocation == 1) {
    seekMu.loop();
  } else if (curLocation > 1) {
    welcomeMu.loop();
  }
}