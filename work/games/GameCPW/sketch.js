//Ball variables
var showellipse = false;
var showrect = false;
var x1 = 0;
var y1 = 0;
var x2 = 0;
var y2 = 0;
var x3 = 0;
var y3 = 0;
var speedx1 = .2;
var speedy1 = .2;
var speedx2 = -.3;
var speedy2 = .3;
var speedx3 = -.25;
var speedy3 = -.25;

//Hoop variables
var showhoop1 = false;
var showhoop2 = false;
var showhoop3 = false;
var redHoopColor;
var blueHoopColor;
var greenHoopColor;
var hy1 = 0;
var hx1 = 0;
var hy2 = 0;
var hx2 = 0;
var hy3 = 0;
var hx3 = 0;

//Moving Balls
var b1 = 0;
var b2 = 0;
var b3 = 0;
var diffx = 0;
var diffy = 0;
var followingGreen = false;
var followingRed = false;
var followingBlue = false;

//Hoops Opacity
H1 = 0;
H2 = 0;
H3 = 0;

function setup() {
  createCanvas(1000, 700)
  background(0, 0, 0)
  redHoopColor = color(255);
  blueHoopColor = color(255);
  greenHoopColor = color(255);
}

function draw() {

  background(0, 0, 0)

  //Setup for hoops

  if (dist(mouseX, mouseY, 500, 150) < 50) {
    showhoop1 = true
  }

  if (showhoop1 == true) {

    //Red Hoop
    //Exterior
    fill(redHoopColor);
    ellipse(500 + hx1, 150 + hy1, 100, 100);
    //Interior
    fill(0);
    ellipse(500 + hx1, 150 + hy1, 70, 70)

  }

  if (dist(mouseX, mouseY, 750, 600) < 50) {
    showhoop2 = true
  }

  if (showhoop2 == true) {

    //Blue Hoop
    //Exterior
    fill(blueHoopColor);
    ellipse(750 + hx2, 600 + hy2, 100, 100);
    //Interior
    fill(0);
    ellipse(750 + hx2, 600 + hy2, 70, 70)

  }

  if (dist(mouseX, mouseY, 250, 100) < 50) {
    showhoop3 = true
  }

  if (showhoop3 == true) {

    //Green Hoop
    //Exterior
    fill(greenHoopColor);
    ellipse(250 + hx3, 100 + hy3, 100, 100)
      //Interior
    fill(0);
    ellipse(250 + hx3, 100 + hy3, 70, 70)

  }



  //Setup for ellipses replace rect 

  if (showellipse == true) {

    //Red Ball
    fill(80, 225, 80);
    ellipse(500 + x1, 300 + y1, 30 + b1, 30 + b1);
    x1 = x1 + speedx1
    y1 = y1 + speedy1
      //Green Ball
    fill(225, 80, 80);
    ellipse(500 + x2, 300 + y2, 30 + b2, 30 + b2);
    x2 = x2 + speedx2
    y2 = y2 + speedy2
      //Blue Ball
    fill(80, 80, 225);
    ellipse(500 + x3, 300 + y3, 30 + b3, 30 + b3)
    x3 = x3 + speedx3
    y3 = y3 + speedy3

  } else if (mouseX > 500 && mouseX < 530 && mouseY > 300 && mouseY < 330) {
    showrect = true
  }

  //Bouncing balls (do not go off screen)
  //Green Ball

  if ((500 + x1) > 1000) {
    speedx1 = -.3
  } else if ((500 + x1) < 15) {
    speedx1 = .5

  }

  if ((300 + y1) > 750) {
    speedy1 = -.4
  } else if ((300 + y1) < 15) {
    speedy1 = .4
  }

  if (followingGreen == true) {
    x1 = mouseX - 500;
    y1 = mouseY - 300;
  }

  //Red Ball 

  if ((500 + x2) > 1000) {
    speedx2 = -.5
  } else if ((500 + x2) < 15) {
    speedx2 = .3

  }

  if ((300 + y2) > 750) {
    speedy2 = -.7
  } else if ((300 + y2) < 15) {
    speedy2 = .8
  }

  if (followingRed == true) {
    x2 = mouseX - 500;
    y2 = mouseY - 300;
  }

  //Blue Ball

  if ((500 + x3) > 1000) {
    speedx3 = -1
  } else if ((500 + x3) < 15) {
    speedx3 = 1

  }

  if ((300 + y3) > 750) {
    speedy3 = -1
  } else if ((300 + y3) < 15) {
    speedy3 = .8
  }

  if (followingBlue == true) {
    x3 = mouseX - 500;
    y3 = mouseY - 300;
  }

  //Show Rectangle

  if (showrect == true) {
    fill(80);
    rect(500, 300, 30, 30)
  }

  //Final Olympic Ring Finale
  
  if (speedx1 == 0 && speedx2 == 0 && speedx3 == 0) {
    hy1 = -1;
    hy2 = -1;
    hy3 = +1
  }
}

//What happens when mouse is clicked or released 

function mousePressed() {

  if (mouseX > 500 && mouseX < 530 && mouseY > 300 && mouseY < 330) {
    showellipse = true;
    showrect = false
      //Changing hoop colors
  } else if (dist(mouseX, mouseY, 500, 150) < 50) {
    redHoopColor = color(255, 0, 0);
  } else if (dist(mouseX, mouseY, 750, 600) < 50) {
    blueHoopColor = color(0, 0, 255)
  } else if (dist(mouseX, mouseY, 250, 100) < 50) {
    greenHoopColor = color(0, 255, 0)
  }
  //Balls follow mouse when mouse clicked
  else if (dist(mouseX, mouseY, 500 + x1, 300 + y1) < 15) {
    followingGreen = true
  } else if (dist(mouseX, mouseY, 500 + x2, 300 + y2) < 15) {
    followingRed = true
  } else if (dist(mouseX, mouseY, 500 + x3, 300 + y3) < 15) {
    followingBlue = true
  }
}

function mouseReleased() {
  if (dist(250, 100, mouseX, mouseY) < 50 && (followingGreen == true)) {
    speedy1 = 0;
    speedx1 = 0
  } else if (dist(500, 150, mouseX, mouseY) < 50 && (followingRed == true)) {
    speedy2 = 0;
    speedx2 = 0
  } else if (dist(750, 600, mouseX, mouseY) < 50 && (followingBlue == true)) {
    speedy3 = 0;
    speedx3 = 0
  }
  followingGreen = false
  followingRed = false
  followingBlue = false


}