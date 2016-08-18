// i still want to flesh out the levels including B,C,d........perhaps striking level5. something revealing thought processes,, deciion making trees..... TO BLANK OR TO BLANK


var level = "1a";


function setup() {
  createCanvas(700, 700)


}

function draw() {
  if (level == "1a") {
    level1a();
  } else if (level == "2a") {
    level2a();
  }else if (level == "2b"){
    level2b();

  } else if (level == "3a") {
    level3a();
  } else if (level == "4a") {
    level4a();
  } else if (level == "5a") {
    level5a();
  }
}


function mousePressed() {
  if (level == "1a") {
    var d = dist(550, 500, mouseX, mouseY)
    if (d < 50) 
      level = "2a";}
    else if (level=="1a"){
      var d =dist(150,100,mouseX,mouseY)
      if (d<50)
      level = "2b";
   else if (level == "2a") {
    var d = dist(250, 500, mouseX, mouseY)
    if (d < 50) {
      level = "3a";
    }
  } else if (level == "3a") {
    var d = dist(450, 400, mouseX, mouseY)
    if (d < 50) {
      level = "4a";
    }
  } else if (level == "4a") {
    var d = dist(250, 600, mouseX, mouseY)
    if (d < 125) {
      level = "5a";
    }
  }
}
}

function level1a() {
  //notwell

  background(102, 102, 153)
  fill(0);
  text("you are doing well", 100, 100, 300, 300)
  text("you are not doing well", 500, 500, 300, 300)
    //ellipseMode(RADIUS);
  // noFill();
  // noStroke();
  ellipse(550, 500, 100, 100);
  ellipse (150,100,100,100);

}


function level2a() {
  background(255, 0, 0);
  fill(255)
  text("hillarys is a jerk", 500, 100, 300, 300)
  text("hillary is not a jerk", 200, 500, 300, 300)

  // noFill();
  // noStroke();
  ellipse(250, 500, 100, 100);

function level2b() {
  background (0,100,200);
  fill(255)
  text ("bleeep bloop", width/2, height/2, 300,300)
  text("schnarrrg", 100,100,300,300)
  
  // noFill();
  // noStroke();
  ellipse (150,100,100,100);
}

}

function level3a() {
  background(0, 255, 0);
  fill(255)
  text("this is hard", 200, 200, 300, 300)
  text("this aint so bad", 400, 400, 300, 300)

  noFill();
  noStroke();
  ellipse(450, 400, 100, 100);
}

function level4a() {
  background(0, 0, 255);
  fill(255)
  text("still though...better practice caution", 150, 600, 300, 300)
  text("WILD N FREE CODER #HACKLYFE #UNTOLDPOSSIBILTIES #TWENTIYFIRSTCENTURY", 50, 50, 300, 300)

  noFill();
  noStroke();
  ellipse(250, 600, 300, 300)
}

function level5a() {
  background(250, 100, 0)
  fill(255)
  text("CONGRATULATIONS YOU STILL DONT KNOW HOW TO CODE", width/2, height/2, 300, 300)
}