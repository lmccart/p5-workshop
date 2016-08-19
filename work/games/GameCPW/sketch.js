//Balls

var showellipse = false;
var showrect = false;

//Redball

function Ball(_speedx, _speedy) {

  var ball = {
    speedx: _speedx,
    speedy: _speedy,
    xreboundleft: -.3,
    xreboundright: .5,
    yreboundup: -.4,
    yrebounddown: .4,
    xcoordinateofmatchinghoop: 250,
    ycoordinateofmatchinghoop: 100,
    ballcolor: "red",
    
    x: 500,
    y: 300,
    following: false,
    diameter: 30,
    display: function() {
      fill(this.ballcolor);
      ellipse(this.x, this.y, this.diameter, this.diameter)
    },
    move: function() {
      this.x = this.x + this.speedx
      this.y = this.y + this.speedy

      if ((this.x) > 1000) {
        this.speedx = this.xreboundleft
      } else if ((this.x) < 15) {
        this.speedx = this.xreboundright
      }
      if ((this.y) > 750) {
        this.speedy = this.yreboundup
      } else if ((this.y) < 15) {
        this.speedy = this.yrebounddown
      }
      if (this.following == true) {
        this.x = mouseX;
        this.y = mouseY;
      }
    },
    checkPress: function() {
      if (dist(mouseX, mouseY, this.x, this.y) < 15) {
        this.following = true
      }
    },
    checkRelease: function() {
      if (dist(this.xcoordinateofmatchinghoop, this.ycoordinateofmatchinghoop, mouseX, mouseY) < 50 && (this.following == true)) {
        this.speedy = 0;
        this.speedx = 0
      }
      this.following = false
    }
  };

  return ball;

}


var x2 = 0;
var y2 = 0;
var x3 = 0;
var y3 = 0;
var speedx2 = -.3;
var speedy2 = .3;
var speedx3 = -.25;
var speedy3 = -.25;

//Hoop variables

//Hoop1 ()
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
var hoopwidth1 = 100;
var hoopheight1 = 100;
var hoopwidth10 = 70;
var hoopheight10 = 70;
var hoopwidth2 = 100;
var hoopheight2 = 100;
var hoopwidth20 = 70;
var hoopheight20 = 70;
var hoopwidth3 = 100;
var hoopheight3 = 100;
var hoopwidth30 = 70;
var hoopheight30 = 70;
var movingHoops = false;
var expandingHoops = false;

//Moving Balls
var followingGreen = false;
var followingBlue = false;

var redball;
var blueball;

function setup() {
  createCanvas(1000, 700)
  background(0, 0, 0)
  redHoopColor = color(255);
  blueHoopColor = color(255);
  greenHoopColor = color(255);
  
  redball = new Ball(.2, .2);
  blueball = new Ball();
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
    ellipse(500 + hx1, 150 + hy1, hoopwidth1, hoopheight1);
    //Interior
    fill(0);
    ellipse(500 + hx1, 150 + hy1, hoopwidth10, hoopheight10)

  }

  if (dist(mouseX, mouseY, 750, 600) < 50) {
    showhoop2 = true
  }

  if (showhoop2 == true) {

    //Blue Hoop
    //Exterior
    fill(blueHoopColor);
    ellipse(750 + hx2, 600 + hy2, hoopwidth2, hoopheight2);
    //Interior
    fill(0);
    ellipse(750 + hx2, 600 + hy2, hoopwidth20, hoopheight20)

  }

  if (dist(mouseX, mouseY, 250, 100) < 50) {
    showhoop3 = true
  }

  if (showhoop3 == true) {

    //Green Hoop
    //Exterior
    fill(greenHoopColor);
    ellipse(250 + hx3, 100 + hy3, hoopwidth3, hoopheight3)
      //Interior
    fill(0);
    ellipse(250 + hx3, 100 + hy3, hoopwidth30, hoopheight30)

  }



  //Setup for ellipses replace rect 

  if (showellipse == true) {

    //Redball
    redball.display();
    redball.move();
    
    blueball.display();
    blueball.move();

    //Green Ball
    fill(0, 255, 0);
    ellipse(500 + x2, 300 + y2, 30, 30);
    x2 = x2 + speedx2
    y2 = y2 + speedy2
      //Blue Ball
    fill(80, 80, 225);
    ellipse(500 + x3, 300 + y3, 30, 30)
    x3 = x3 + speedx3
    y3 = y3 + speedy3

  } else if (mouseX > 500 && mouseX < 530 && mouseY > 300 && mouseY < 330) {
    showrect = true
  }

  //Bouncing balls (do not go off screen)

  //Green Ball 

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

  if (followingGreen == true) {
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

  if (redball.speedx == 0 && speedx2 == 0 && speedx3 == 0) {
    movingHoops = true
  }

  if (movingHoops == true) {
    if (hy1 != 150) {
      hy1 = hy1 + 1;
    }
    if (hy2 != -300) {
      hy2 = hy2 - 1;
    }
    if (hy3 != 200) {
      hy3 = hy3 + 1;
    }
    showellipse = false
  }


  if (hy1 == 150 && hy2 == -300 && hy3 == 200) {
    //Hoop1
    if (hoopwidth1 != 300) {
      hoopwidth1 = hoopwidth1 + 1
    }
    if (hoopheight1 != 300) {
      hoopheight1 = hoopheight1 + 1
    }
    if (hoopwidth10 != 270) {
      hoopwidth10 = hoopwidth10 + 1
    }
    if (hoopheight10 != 270) {
      hoopheight10 = hoopheight10 + 1
    }
    //Hoop2
    if (hoopwidth2 != 300) {
      hoopwidth2 = hoopwidth2 + 1
    }
    if (hoopheight2 != 300) {
      hoopheight2 = hoopheight2 + 1
    }
    if (hoopheight20 != 270) {
      hoopwidth20 = hoopwidth20 + 1
    }
    if (hoopheight20 != 270) {
      hoopheight20 = hoopheight20 + 1
    }
    //Hoop3
    if (hoopwidth3 != 300) {
      hoopwidth3 = hoopwidth3 + 1
    }
    if (hoopheight3 != 300) {
      hoopheight3 = hoopheight3 + 1
    }
    if (hoopheight30 != 270) {
      hoopwidth30 = hoopwidth30 + 1
    }
    if (hoopheight30 != 270) {
      hoopheight30 = hoopheight30 + 1
    }

  }

}

//Mouse pressed 

function mousePressed() {

  redball.checkPress();

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
  } else if (dist(mouseX, mouseY, 500 + x2, 300 + y2) < 15) {
    followingGreen = true
  } else if (dist(mouseX, mouseY, 500 + x3, 300 + y3) < 15) {
    followingBlue = true
  }
}

function mouseReleased() {

  redball.checkRelease();

  if (dist(500, 150, mouseX, mouseY) < 50 && (followingGreen == true)) {
    speedy2 = 0;
    speedx2 = 0
  } else if (dist(750, 600, mouseX, mouseY) < 50 && (followingBlue == true)) {
    speedy3 = 0;
    speedx3 = 0
  }
  followingGreen = false
  followingBlue = false


}