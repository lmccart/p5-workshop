//Position of circles
var x = 0;
var y = 0;

var x2 = 200;
var y2 = 200;

var x3 = 500;
var y3 = 500;

var x4 = 600;
var y4 = 600;

var x5 = 300;
var y5 = 300;

var x6 = 400;
var y6 = 400;

var x7 = 100;
var y7 = 100;

var x8 = 700;
var y8 = 100;

var x9 = 100;
var y9 = 700;

//Opacity
var a = 255;
var a2 = 100;
var a3 = 60;
var a4 = 60;
var a5 = 60;
var a6 = 60;
var a7 = 60;
var a8 = 60;
var a9 = 60;

//Size
var z = 0;
var z2 = 0;
var z3 = 0;
var z4 = 0;
var z5 = 0;
var z6 = 0;
var z7 = 0;
var z8 = 0;
var z9 = 0;



function setup() {
  createCanvas(700, 700);
  background(65, 69, 62, 255);
  frameRate(10);

}

function draw() {
  background(65, 69, 62, 150)

  line(x3, y3, x4, y4)

  var easing = .09;
  var diffx = mouseX - x;
  var diffy = mouseY - y;

  //First Ellipse
  noStroke();
  fill(100, 100, 255, a);
  ellipse(x, y, 50 + z, 50 + z);
  fill(255, 60, 60);
  ellipse(x, y, 5, 10);
  x = x + 1 + easing * diffx
  y = y + 1 + easing * diffy
  a = a - 0.5
  z = z + 1


  //Second Ellipse
  noStroke();
  fill(80, 100, 255, a2);
  ellipse(x2, y2, 300 + z2, 300 + z2);
  fill(255, 60, 60);
  ellipse(x2, y2, 5, 10);
  x2 = x2 + .9
  y2 = y2 - .5 + easing * diffy
  z2 = z2 - 1
  a2 = a2 + 1

  //Third Ellipse
  noStroke();
  fill(90, 100, 255, a3);
  ellipse(x3, y3, 300 + z3, 300 + z3);
  fill(80);
  ellipse(x3, y3, 5, 10);
  x3 = x3 - 1 + easing * diffx
  y3 = y3 + .5 + easing * diffy
  z3 = z3 + .8
  a3 = a3 - .05

  //Fourth Ellipse
  noStroke();
  fill(100, 60, 255, a4);
  ellipse(x4, y4, 600 + z4, 600 + z4);
  fill(80);
  ellipse(x4, y4, 5, 10);
  x4 = x4 - .8 + easing * diffx
  y4 = y4 - 1 + easing * diffy
  z4 = z4 - 5
  a4 = a4 + 1

  //Fifth Ellipse
  noStroke();
  fill(100, 60, 255, a5);
  ellipse(x5, y5, 600 + z5, 600 + z5);
  fill(80);
  ellipse(x5, y5, 5, 10);
  x5 = x5 - 3 + easing * diffx
  y5 = y5 - 1 + easing * diffy
  z5 = z5 - 3
  a5 = a5 + 1

  //Sixth Ellipse
  noStroke();
  fill(100, 60, 255, a6);
  ellipse(x6, y6, 600 + z6, 600 + z6);
  fill(255, 60, 60);
  ellipse(x6, y6, 5, 10);
  x6 = x6 - 5 + easing * diffx
  y6 = y6 - 1 + easing * diffy
  z6 = z6 + 1
  a6 = a6 - 2

  //Seventh Ellipse
  noStroke();
  fill(100, 60, 255, a7);
  ellipse(x7, y7, 600 + z7, 600 + z7);
  fill(255, 60, 60);
  ellipse(x7, y7, 5, 10);
  x7 = x7 - 1 + easing * diffx
  y7 = y7 - 1 + easing * diffy
  z7 = z7 + .5
  a7 = a7 - .5


  //Eigth Ellipse
  noStroke();
  fill(100, 60, 255, a8);
  ellipse(x8, y8, 600 + z8, 600 + z8);
  fill(80);
  ellipse(x8, y8, 5, 10);
  x8 = x8 - 2 + easing * diffx
  y8 = y8 - 1
  z8 = z8 - 5
  a8 = a8 + .5

  //Ninth Ellipse
  noStroke();
  fill(100, 60, 255, a9);
  ellipse(x9, y9, 600 + z9, 600 + z9);
  fill(80);
  ellipse(x9, y9, 5, 10);
  x9 = x9 - 3 + easing * diffx
  y9 = y9 - 1 + easing * diffy
  z9 = z9 - 3
  a9 = a9 + .3


}