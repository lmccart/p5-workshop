var x1 = 200;
var x2 = 600;
var x3 = 600;
var x4 = 200;
var x5 = 300;
var x6 = 300;
var x7 = 300;
var x8 = 500;
var x9 = 400;
var x10 = 400;
var x11 = 500;
var x12 = 300;
//var x13 = 700;
//var x14 = 100;
var x15 = 100;
var x16 = 700;
var x17 = 200;
var x18 = 400;
var x19 = 100;
var x20 = 500;



function setup() {
  createCanvas(800, 700);
  background(0)

}


function draw() {

  // flower Center
  fill(300, random(200), 0, 50);
  ellipse(400, 300, 100, 100);
  strokeWeight(5);

  // Petals
  stroke(255, 255, 255, 10);
  line(x1, 100, x2, 500);
  stroke(255, 255, 255, 10);
  line(x7, 100, x8, 500);
  stroke(255, 255, 255, 10);
  line(x9, 100, x10, 500);
  stroke(255, 255, 255, 10);
  line(x11, 100, x12, 500);
  //  stroke(255, 255, 255, 10);
  //  line(x3, 100, x4, 500);
  stroke(255, 255, 255, 10);
  line(100, x5, 700, x6);
  //  stroke(255, 255, 255, 10);
  //  line(x13, 100, x14, 500);
  stroke(255, 255, 255, 10);
  line(x15, 100, x16, 500);
  stroke(255, 255, 255, 10);
  line(100, x17, 700, x18);
  stroke(255, 255, 255, 10);
  line(100, x19, 700, x20);

  if (millis() > 3500) {
    background(300, random(200), 0, 50);
    x1 = x1 - 1;
    x2 = x2 + 1;
    x3 = x3 - 1;
    x4 = x4 + 1;
    x5 = x5 - 1;
    x6 = x6 + 1;
    x7 = x7 - 1;
    x8 = x8 + 1;
    x9 = x9 - 1;
    x10 = x10 + 1;
    x11 = x11 - 1;
    x12 = x12 + 1;
    // x13 = x13 + 1;
    // x14 = x14 - 1;
    x15 = x15 - 1;
    x16 = x16 + 1;
    x17 = x17 - 1;
    x18 = x18 + 1;
    x19 = x19 - 1;
    x20 = x20 + 1;
  } else {
    x1 = x1 + 1;
    x2 = x2 - 1;
    x3 = x3 + 1;
    x4 = x4 - 1;
    x5 = x5 + 1;
    x6 = x6 - 1;
    x7 = x7 + 1;
    x8 = x8 - 1;
    x9 = x9 + 1;
    x10 = x10 - 1;
    x11 = x11 + 1;
    x12 = x12 - 1;
    // x13 = x13 + 1;
    // x14 = x14 - 1;
    x15 = x15 + 1;
    x16 = x16 - 1;
    x17 = x17 + 1;
    x18 = x18 - 1;
    x19 = x19 + 1;
    x20 = x20 - 1;
  }



}