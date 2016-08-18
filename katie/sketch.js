var numLocations = 3; // set your total number of locations here
var curLocation = 1;

//Square grid
var squaregrid = false;
var x = 0;
var y = 0;
var w = 60;
var h = 60;

//Circle grid
var circlegrid = false;
var xc = 30;
var yc = 30;
var wc = 60;
var hc = 60;

//Colors
var hotgreen;
var leafgreen;
var rivergreen;

var currentPiece = 0;

function setup() {
  createCanvas(windowWidth, windowHeight)
  
  if (geoCheck() == true) {
    // geolocation is available
    print("connected!");
    
    // replace with your locations here
    addFence(39.21360107, -106.93650356); // photo
    addFence(39.2137056, -106.93653110); // printmaking
    addFence(39.21391712, -106.93599236); // woodshop
    intervalCurrentPosition(positionUpdated, 1000);
  } 
  
  
  background(30, 70, 150)
  hotgreen = color(80, 255, 80)
  riverblue = color(80, 80, 300)
  leafgreen = color(10, 150, 80)
}

function draw() {
  // background(127);

  if (curLocation == 1) {
    Location1();
    
  } else if (curLocation == 2) {

    Location2();

  } else if (curLocation == 3) {

    Location3();

  }

  // this draws the testing buttons on top of everything
  checkLocations();
  drawButtons();
}

function mousePressed() {

  if (squaregrid == true) {
    squaregrid = false;
    circlegrid = true
  } else {
    squaregrid = true;
    circlegrid = false
  }

  detectButtonPress();
  changeLocation();
}

function changeLocation() {
  // do any cleanup here like stopping sounds or reseting variables
  currentPiece = 0;
}

function Location1() {

  // background(0, 0, 80);
  //Square grid

  if (squaregrid == true) {

    index1 = 0;

    for (var t = 0; t < height / h; t = t + 1) {

      for (var n = 0; n < width / w; n = n + 1) {
        //Location1 color
        var m = random(10)
        if (m < 1) {
          fill(hotgreen);
        } else if (m > 1 && m < 7) {
          fill(leafgreen);
        } else {
          fill(riverblue);
        }
        if (index1 == currentPiece) {
          rect(n * w, t * h, w, h);
        }
        index1 = index1 + 1
      }
    }
    currentPiece = currentPiece + 1
  }

  //Circle grid

  if (circlegrid == true) {
    var u = 0;
    for (var r = 0; r < height / hc; r = r + 1) {
      for (var s = 0; s < width / wc; s = s + 1) {
        //Location1 color
        var n = random(10)
        if (n < 1) {
          fill(hotgreen);
        } else if (n > 1 && n < 7) {
          fill(leafgreen);
        } else {
          fill(riverblue);
        }
        if (u == currentPiece) {
          ellipse(s * wc + xc, r * hc + yc, wc, hc)
        }
        u = u + 1
      }
    }
    currentPiece = currentPiece + 1
  }

}

function Location2() {

  // if (squaregrid == true) {

  //   index1 = 0;

  //   for (var t = 0; t < height / h; t = t + 1) {

  //     for (var n = 0; n < width / w; n = n + 1) {
  //       //Location1 color
  //       var m = random(10)
  //       if (m < 1) {
  //         fill(hotgreen);
  //       } else if (m > 1 && m < 7) {
  //         fill(leafgreen);
  //       } else {
  //         fill(riverblue);
  //       }
  //       if (index1 == currentPiece) {
  //         rect(n * w, t * h, w, h);
  //       }
  //       index1 = index1 + 1
  //     }
  //   }
  //   currentPiece = currentPiece + 1
  // }


  // background(90, 120, 120);
  //Square grid

  if (squaregrid == true) {

    var index2 = 0;

    for (var t = 0; t < height / h; t = t + 1) {

      for (var n = 0; n < width / w; n = n + 1) {
        //Location1 color
        var j = random(10)
        if (j < 1) {
          fill(200, 0, 0);
        } else if (j > 1 && j < 2) {
          fill(0, 0, 200);
        } else if (j > 2 && j < 4) {
          fill(255);
        } else {
          fill(90, 140, 140)
        }
        if (index2 == currentPiece) {
          rect(n * w, t * h, w, h);
        }
        index2 = index2 + 1
      }
    }
    currentPiece = currentPiece + 1
  }

  //Circle grid

  if (circlegrid == true) {
    var k = 0;
    for (var r = 0; r < height / hc; r = r + 1) {
      for (var s = 0; s < width / wc; s = s + 1) {
        //Location2 color
        var n = random(10)
        if (n < 1) {
          fill(200, 0, 0);
        } else if (n > 1 && n < 2) {
          fill(0, 0, 200);
        } else if (n > 2 && n < 4) {
          fill(255);
        } else {
          fill(90, 140, 140)
        }
        if (k == currentPiece) {
          ellipse(s * wc + xc, r * hc + yc, wc, hc)
        }
        k = k + 1
      }
    }
    currentPiece = currentPiece + 1
  }

}

function Location3() {

  //Square grid 3

  if (squaregrid == true) {

    var i = 0;

    for (var t = 0; t < height / h; t = t + 1) {

      for (var n = 0; n < width / w; n = n + 1) {

        //Square Color3
        var m = random(10)
        if (m < 9) {
          fill(30, 10, 10);
        } else {
          fill(255, 200, 0)
        }
        if (i == currentPiece) {
          rect(n * w, t * h, w, h);
        }
        i = i + 1;
      }
    }
    currentPiece = currentPiece + 1;
  }

  //Circle grid 3

  if (circlegrid == true) {

    var o = 0;

    for (var r = 0; r < height / hc; r = r + 1) {
      for (var s = 0; s < width / wc; s = s + 1) {
        //Circle Color3
        var n = random(10)
        if (n < 9) {
          fill(30, 10, 10);
        } else {
          fill(255, 200, 0)
        }
        if (o == currentPiece) {
          ellipse(s * wc + xc, r * hc + yc, wc, hc)
        }
        o = o + 1;
      }
    }
    currentPiece = currentPiece + 1;
  }
}