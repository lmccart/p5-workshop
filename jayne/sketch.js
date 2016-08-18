var img2;
var img3; // blurry, don't use.
var img4;
var img5;
var img6;
var img7;
var img8;

var numLocations = 15; // set your total number of locations here
var curLocation = 1;

var locationStarttime = 0;

function preload() {
  img2 = loadImage("img1.jpg");
  img3 = loadImage("img2.jpg");
  img4 = loadImage("img3.jpg");
  img5 = loadImage("img4.jpg");
  img6 = loadImage("img5.jpg");
  img7 = loadImage("img6.jpg");
  img8 = loadImage("img7.jpg");
  nature1 = loadSound("nature1.wav");
  nature2 = loadSound("nature2.wav");
  nature3 = loadSound("nature3.wav");
  nature4 = loadSound("nature4.wav");
}

function setup() {
  createCanvas(980, 1461);
  if (geoCheck() == true) {
    // geolocation is available
    print("connected!");
    addFence(0, 0); // anywhere else // location 1 // location 1
    addFence(39.2137056, -106.93653110); // printmaking // location 2
    addFence(39.21391712, -106.93599236); // woodshop // location 3
    addFence(39.21406986, -106.93579980); // ceramics // location 4
    addFence(39.21427167, -106.93622730); // cafe // location 5
    addFence(39.21434363, -106.93645512); // meeting hall // location 6
    addFence(39.21360107, -106.93650356); // photo // location 7
    addFence(39.21434763, -106.93645504); // dorm lounge // location 8
    addFence(39.21390748, -106.93696689); // admin office / art store // location 9
    addFence(39.21361276, -106.93663605); // library // location 10
    addFence(39.21382954, -106.93677000); // gallery // location 11

    intervalCurrentPosition(positionUpdated, 1000);
  }
}

function draw() {

  // LOCATION 1 = EVERYWHERE - GEOTAGGED SPOTS
  if (curLocation == 1) {
    background("#E6FFFD");
    stroke("#A4A6A6");
    strokeWeight(3);
    fill(255);
    textSize(50);
    textFont("Courier New");
    text("put your", 100, 500);
    text("phone away.", 100, 550);
    text("enjoy nature.", 100, 600);

    // START OF GEOLOCATIONS

  } else if (curLocation == 2) {
    //  nature1.setVolume(0.1);
    //  nature1.play();

    background("#E6FFFD");
    if (millis() - locationStarttime < 4500) {
      stroke("#A4A6A6");
      strokeWeight(3);
      fill(255);
      textSize(50);
      textFont("Courier New");
      text("pretend you're", 100, 500);
      text("outside.", 100, 550);


    } else {
      (millis() - locationStarttime > 4500)
      background("#E6FFFD");
      image(img2, 0, 0, 980, 1461);
    }

  } else if (curLocation == 3) {
    background("#E6FFFD");
    if (millis() - locationStarttime < 4500) {
      stroke("#A4A6A6");
      strokeWeight(3);
      fill(255);
      textSize(50);
      textFont("Courier New");
      text("pretend you're", 100, 500);
      text("outside.", 100, 550);
    } else {
      (millis() - locationStarttime > 4500)
      background("#E6FFFD");
      image(img4, 0, 0, 980, 1461);
    }

  } else if (curLocation == 4) {
    background("#E6FFFD");
    if (millis() - locationStarttime < 4500) {
      stroke("#A4A6A6");
      strokeWeight(3);
      fill(255);
      textSize(50);
      textFont("Courier New");
      text("pretend you're", 100, 500);
      text("outside.", 100, 550);
    } else {
      (millis() - locationStarttime > 4500)
      background("#E6FFFD");
      image(img5, 0, 0, 980, 1461);
    }

  } else if (curLocation == 5) {
    background("#E6FFFD");
    if (millis() - locationStarttime < 4500) {
      stroke("#A4A6A6");
      strokeWeight(3);
      fill(255);
      textSize(50);
      textFont("Courier New");
      text("pretend you're", 100, 500);
      text("outside.", 100, 550);
    } else {
      (millis() - locationStarttime > 4500)
      background("#E6FFFD");
      image(img6, 0, 0, 980, 1461);
    }

  } else if (curLocation == 6) {
    background("#E6FFFD");
    if (millis() - locationStarttime < 4500) {
      stroke("#A4A6A6");
      strokeWeight(3);
      fill(255);
      textSize(50);
      textFont("Courier New");
      text("pretend you're", 100, 500);
      text("outside.", 100, 550);
    } else {
      (millis() - locationStarttime > 4500)
      background("#E6FFFD");
      image(img7, 0, 0, 980, 1461);
    }

  } else if (curLocation == 7) {
    background("#E6FFFD");
    if (millis() - locationStarttime < 4500) {
      stroke("#A4A6A6");
      strokeWeight(3);
      fill(255);
      textSize(50);
      textFont("Courier New");
      text("pretend you're", 100, 500);
      text("outside.", 100, 550);
    } else {
      (millis() - locationStarttime > 4500)
      background("#E6FFFD");
      image(img2, 0, 0, 980, 1461);

    }
  } else if (curLocation == 8) {
    background("#E6FFFD");
    if (millis() - locationStarttime < 4500) {
      stroke("#A4A6A6");
      strokeWeight(3);
      fill(255);
      textSize(50);
      textFont("Courier New");
      text("pretend you're", 100, 500);
      text("outside.", 100, 550);
    } else {
      (millis() - locationStarttime > 4500)
      background("#E6FFFD");
      image(img4, 0, 0, 980, 1461);
    }
  } else if (curLocation == 9) {
    background("#E6FFFD");
    if (millis() - locationStarttime < 4500) {
      stroke("#A4A6A6");
      strokeWeight(3);
      fill(255);
      textSize(50);
      textFont("Courier New");
      text("pretend you're", 100, 500);
      text("outside.", 100, 550);
    } else {
      (millis() - locationStarttime > 4500)
      background("#E6FFFD");
      image(img5, 0, 0, 980, 1461);
    }
  } else if (curLocation == 10) {
    background("#E6FFFD");
    if (millis() - locationStarttime < 4500) {
      stroke("#A4A6A6");
      strokeWeight(3);
      fill(255);
      textSize(50);
      textFont("Courier New");
      text("pretend you're", 100, 500);
      text("outside.", 100, 550);
    } else {
      (millis() - locationStarttime > 4500)
      background("#E6FFFD");
      image(img6, 0, 0, 980, 1461);
    }
  } else if (curLocation == 11) {
    background("#E6FFFD");
    if (millis() - locationStarttime < 4500) {
      stroke("#A4A6A6");
      strokeWeight(3);
      fill(255);
      textSize(50);
      textFont("Courier New");
      text("pretend you're", 100, 500);
      text("outside.", 100, 550);
    } else {
      (millis() - locationStarttime > 4500)
      background("#E6FFFD");
      image(img7, 0, 0, 980, 1461);
    }
    // } else if (curLocation == 12) {
    //   background("#E6FFFD");
    //   if (millis() - locationStarttime < 4500) {
    //     stroke("#A4A6A6");
    //     strokeWeight(3);
    //     fill(255);
    //     textSize(50);
    //     textFont("Courier New");
    //     text("pretend you're", 100, 500);
    //     text("outside.", 100, 550);
    //   } else {
    //     (millis() - locationStarttime > 4500)
    //     background("#E6FFFD");
    //     image(img2, 0, 0, 980, 1461);
    //   }
    // } else if (curLocation == 13) {
    //   background("#E6FFFD");
    //   if (millis() - locationStarttime < 4500) {
    //     stroke("#A4A6A6");
    //     strokeWeight(3);
    //     fill(255);
    //     textSize(50);
    //     textFont("Courier New");
    //     text("pretend you're", 100, 500);
    //     text("outside.", 100, 550);
    //   } else {
    //     (millis() - locationStarttime > 4500)
    //     background("#E6FFFD");
    //     image(img4, 0, 0, 980, 1461);
    //   }
    // } else if (curLocation == 14) {
    //   background("#E6FFFD");
    //   if (millis() - locationStarttime < 4500) {
    //     stroke("#A4A6A6");
    //     strokeWeight(3);
    //     fill(255);
    //     textSize(50);
    //     textFont("Courier New");
    //     text("pretend you're", 100, 500);
    //     text("outside.", 100, 550);
    //   } else {
    //     (millis() - locationStarttime > 4500)
    //     background("#E6FFFD");
    //     image(img5, 0, 0, 980, 1461);
    //   }
    // } else if (curLocation == 15) {
    //   background("#E6FFFD");
    //   if (millis() - locationStarttime < 4500) {
    //     stroke("#A4A6A6");
    //     strokeWeight(3);
    //     fill(255);
    //     textSize(50);
    //     textFont("Courier New");
    //     text("pretend you're", 100, 500);
    //     text("outside.", 100, 550);
    //   } else {
    //     (millis() - locationStarttime > 4500)
    //     background("#E6FFFD");
    //     image(img6, 0, 0, 980, 1461);
    //   }
    // } else if (curLocation == 16) {
    //   background("#E6FFFD");
    //   if (millis() - locationStarttime < 4500) {
    //     stroke("#A4A6A6");
    //     strokeWeight(3);
    //     fill(255);
    //     textSize(50);
    //     textFont("Courier New");
    //     text("pretend you're", 100, 500);
    //     text("outside.", 100, 550);
    //   } else {
    //     (millis() - locationStarttime > 4500)
    //     background("#E6FFFD");
    //     image(img6, 0, 0, 980, 1461);
    //   }
  }

  checkLocations();
  drawButtons();
  //text(_lat + "," + _lon + "," + curLocation, 50, 250);

}

function mousePressed() {
  // this detects a click on the testing buttons
  detectButtonPress();
  changeLocation();
}

function changeLocation() {
  // do any cleanup here like stopping sounds or reseting variables

  nature1.stop();
  nature2.stop();
  nature3.stop();
  nature4.stop();

  if (curLocation == 2) {
    nature1.setVolume(0.7);
    nature1.play();
  } else if (curLocation == 3) {
    nature2.setVolume(0.7);
    nature2.play();
  } else if (curLocation == 4) {
    nature3.setVolume(0.7);
    nature3.play();
  } else if (curLocation == 5) {
    nature4.setVolume(0.7);
    nature4.play();
  } else if (curLocation == 6) {
    nature1.setVolume(0.7);
    nature1.play();
  } else if (curLocation == 7) {
    nature2.setVolume(0.7);
    nature2.play();
  } else if (curLocation == 8) {
    nature3.setVolume(0.7);
    nature3.play();
  } else if (curLocation == 9) {
    nature4.setVolume(0.7);
    nature4.play();
  } else if (curLocation == 10) {
    nature1.setVolume(0.7);
    nature1.play();
  } else if (curLocation == 11) {
    nature2.setVolume(0.7);
    nature2.play();
    // } else if (curLocation == 12) {
    //   nature3.setVolume(0.7);
    //   nature3.play();
    // } else if (curLocation == 13) {
    //   nature4.setVolume(0.7);
    //   nature4.play();
    // } else if (curLocation == 14) {
    //   nature1.setVolume(0.7);
    //   nature1.play();
    // } else if (curLocation == 15) {
    //   nature2.setVolume(0.7);
    //   nature2.play();
    // } else if (curLocation == 15) {
    //   nature3.setVolume(0.7);
    //   nature3.play();
    // }
  }
}