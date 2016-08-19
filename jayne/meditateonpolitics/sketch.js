var clinton; // 3 LEVELS: 0 = DIRECTIONS ::: 1 = CHOOSE ::: 2 = TRUMP  ::: 3 = CLINTON
var trump;
var cover;
var choose;
var level = 0;
var currentcolor = 255;
var curSize = 6;
var plus;
var minus;
var space;
//var showColo = false;

/// CHANGE THE GREEN COLOR!!!!!!!!!!!!
/// CHNAGE THE PURPLE COLOR!!!!!!!!!!!
/// TEST ALL COLORS BEFORE UPLOAD!!!!!

function preload() {
  clinton = loadImage("clinton.png");
  trump = loadImage("trump.png");
  cover = loadImage("gamecover.png");
  choose = loadImage("choose.png");
  plus = loadImage("plus.png");
  minus = loadImage("minus.png");
  space = loadImage("spacesave.png");
}

function setup() {
  createCanvas(1000, 1000);
  background(255);
}

function draw() {

  if (level == 0) { // DIRECTIONS
    background(255);
    image(cover, 0, 0);
  }

  if (level == 1) { // CHOOSE
    background(255);
    image(choose, 0, 200, 1000, 506);
    noStroke();
    fill(0);
    textSize(50);
    textFont("Courier New");
    text("click on the candidate", 150, 800);
    text("you'd like to meditate on.", 100, 850);

  }
  if (level == 2) { // TRUMP
    blendMode(DARKEST);
    if (mouseIsPressed) {
      fill(currentcolor);
      noStroke();
      ellipse(mouseX, mouseY, curSize, curSize);
    }
    blendMode(BLEND);
    fill(255);
    stroke(0);
    ellipse(92, 822, 40, 40);
    ellipse(183, 822, 40, 40);
    image(plus, 75, 805);
    image(minus, 168, 805);
    strokeWeight(.1);
    fill(255, 0, 0);
    ellipse(50, 900, 40, 40);; // RED
    //  strokeWeight(5);
    // stroke("#FFFC00");
    fill("#FFFC00");
    ellipse(125, 900, 40, 40); //YELLOW
    // strokeWeight(1);
    // stroke("#5CAB10");
    fill("#5CAB10");
    ellipse(200, 900, 40, 40); // GREEN 
    //  stroke(0, 0, 255);
    //   strokeWeight(1);
    fill("#1EA5FF");
    ellipse(275, 900, 40, 40); // BLUE
    fill(0);
    ellipse(350, 900, 40, 40); // BLACK
    fill("#FF8E00");
    ellipse(50, 955, 40, 40); // ORANGE
    fill("#CB65F7");
    ellipse(125, 955, 40, 40); // PURPLE
    fill("#44E9FF");
    ellipse(200, 955, 40, 40); // TURQUOISE
    fill("#FF01DE");
    ellipse(275, 955, 40, 40); // PINK
    fill("#C4C4C4");
    ellipse(350, 955, 40, 40); // GREY
    // if (mouseIsPressed) {
    //   fill(currentcolor);
    //   noStroke();
    //   ellipse(mouseX, mouseY, curSize, curSize);
    // }
  }

  if (level == 3) { // CLINTON
    blendMode(DARKEST);
    if (mouseIsPressed) {
      fill(currentcolor);
      noStroke();
      ellipse(mouseX, mouseY, curSize, curSize);
    }
    blendMode(BLEND);
    fill(255);
    stroke(0);
    ellipse(92, 822, 40, 40);
    ellipse(183, 822, 40, 40);
    image(plus, 75, 805);
    image(minus, 168, 805);
    strokeWeight(.1);
    fill(255, 0, 0);
    ellipse(75, 905, 40, 40); // RED
    // stroke("#FFFC00");
    // strokeWeight(5);
    fill("#FFFC00");
    ellipse(150, 905, 40, 40); // YELLOW
    //  stroke("#5CAB10");
    //  strokeWeight(3);
    fill("#5CAB10");
    ellipse(225, 905, 40, 40); // GREEN
    //  strokeWeight(1);
    //  stroke(0, 0, 255);
    fill("#1EA5FF");
    ellipse(300, 905, 40, 40); // BLUE
    fill(0);
    ellipse(375, 905, 40, 40); // BLACK
    fill("#FF8E00");
    ellipse(75, 960, 40, 40); // ORANGE
    fill("#CB65F7");
    ellipse(150, 960, 40, 40); // PURPLE
    fill("#44E9FF");
    ellipse(225, 960, 40, 40); // TURQUOISE
    fill("#FF01DE");
    ellipse(300, 960, 40, 40); // PINK
    fill("#C4C4C4");
    ellipse(375, 960, 40, 40); // GREY
    //   if (mouseIsPressed) {
    //     fill(currentcolor);
    //     noStroke();
    //     ellipse(mouseX, mouseY, curSize, curSize);
    //   }
  }

}


function mousePressed() {
  if (level == 0) {
    level = 1

  } else if (level == 1) {
    if (mouseX < 500) {
      level = 2
      background(255);
      image(trump, 0, 0);
      image(space, 700, 960);

    } else {
      if (mouseX > 500) {
        level = 3
        background(255);
        image(clinton, 0, 0);
        image(space, 730, 15);

      }
    }

  } else if (level == 2) {
    //  showColo = true;
    if (dist(mouseX, mouseY, 50, 900) < 20) {
      currentcolor = color(255, 0, 0); // RED
      cursor("red.png");
    }
    if (dist(mouseX, mouseY, 125, 900) < 20) {
      currentcolor = color("#FFFC00"); // YELLOW
      cursor("yellow.png");
    }
    if (dist(mouseX, mouseY, 200, 900) < 20) {
      currentcolor = color("#5CAB10"); // GREEN
      cursor("green.png");
    }
    if (dist(mouseX, mouseY, 275, 900) < 20) {
      currentcolor = color("#1EA5FF"); // BLUE
      cursor("blue.png");
    }
    if (dist(mouseX, mouseY, 350, 900) < 20) {
      currentcolor = color(0); // BLACK
      cursor("black.png");
    }
    if (dist(mouseX, mouseY, 50, 955) < 20) {
      currentcolor = color("#FF8E00"); // ORANGE
      cursor("orange.png");
    }
    if (dist(mouseX, mouseY, 125, 955) < 20) {
      currentcolor = color("#CB65F7"); // PURPLE
      cursor("purple.png");
    }
    if (dist(mouseX, mouseY, 200, 955) < 20) {
      currentcolor = color("#44E9FF"); // TURQUOISE
      cursor("tur.png");
    }
    if (dist(mouseX, mouseY, 275, 955) < 20) {
      currentcolor = color("#FF01DE"); // PINK
      cursor("pink.png");
    }
    if (dist(mouseX, mouseY, 350, 955) < 20) {
      currentcolor = color("#C4C4C4"); // GREY
      cursor("grey.png");
    }
    if (dist(mouseX, mouseY, 92, 822) < 20) {
      (curSize = curSize + 1)
    }
    if (dist(mouseX, mouseY, 183, 822) < 20) {
      (curSize = curSize - 1);
    }

  } else if (level == 3) {
    // showColo = true;
    if (dist(mouseX, mouseY, 75, 905) < 20) {
      currentcolor = color(255, 0, 0); // RED
      cursor("red.png");
    }
    if (dist(mouseX, mouseY, 150, 905) < 20) {
      currentcolor = color("#FFFC00"); // YELLOW
      cursor("yellow.png");
    }
    if (dist(mouseX, mouseY, 225, 905) < 20) {
      currentcolor = color("#5CAB10"); // GREEN
      cursor("green.png");
    }
    if (dist(mouseX, mouseY, 300, 905) < 20) {
      currentcolor = color("#1EA5FF"); // BLUE
      cursor("blue.png");
    }
    if (dist(mouseX, mouseY, 375, 905) < 20) {
      currentcolor = color(0); // BLACK
      cursor("black.png");
    }
    if (dist(mouseX, mouseY, 75, 960) < 20) {
      currentcolor = color("#FF8E00"); // ORANGE
      cursor("orange.png");
    }
    if (dist(mouseX, mouseY, 150, 960) < 20) {
      currentcolor = color("#CB65F7"); // PURPLE
      cursor("purple.png");
    }
    if (dist(mouseX, mouseY, 225, 960) < 20) {
      currentcolor = color("#44E9FF"); // TURQUOISE
      cursor("tur.png");
    }
    if (dist(mouseX, mouseY, 300, 960) < 20) {
      currentcolor = color("#FF01DE"); // PINK  
      cursor("pink.png");
    }
    if (dist(mouseX, mouseY, 375, 960) < 20) {
      currentcolor = color("#C4C4C4"); // GREY
      cursor("grey.png");
    }
    if (dist(mouseX, mouseY, 92, 822) < 20) {
      (curSize = curSize + 1)
    }
    if (dist(mouseX, mouseY, 183, 822) < 20) {
      (curSize = curSize - 1);
    }
  }
}

function keyPressed() {
  if (key == " ") {
    save();
  }
}



//function keyTyped() {
// if (key == "+") {
//    (curSize = curSize + 1)
//  }
// if (key == "-") {
//   (curSize = curSize - 1)
//}
//}