var img;
var showBang = false;
var level = 0;
var timerStart = 0;
var x = 0;



function preload() {
  img = loadImage("jackn2.png");
  img2 = loadImage("jackn.png");
  bang = loadImage("bang.png");

}

function setup() {
  createCanvas(700, 700);
  background(255);
  image(img, 50, 20);

}

function draw() {
  if (level == 0) {
    background(255);
    fill(0);
    textSize(50);
    textFont("Courier New");
    text("put jack", 350, 350);
    text("in a hole", 350, 400);
    textSize(25);
    text("click to start", 350, 430);

  }

  if (level == 1) {
    background(255);
    if (mouseX > 350 && mouseY > 200) {
      stroke(255);
      strokeWeight(2);
      fill(0);
      ellipse(550, 550, 250, 70);


    } else {
      (mouseX < 350 && mouseY < 200)
      stroke(255);
      strokeWeight(2);
      fill(0);
      ellipse(550, 550, 225, 55);
    }

    if (showBang == true) {
      image(bang, mouseX - 125, mouseY + 150);
      fill(0);
      textSize(125);
      textFont("Courier New");
      text("bye", 100, 200);
      if (millis() - startTimer > 1500) {
        showBang = false;
        level = 2;
      }
    } else if (showBang == false) {
      image(img, mouseX - 60, mouseY - 60);
    }

  }

  if (level == 2) {
    background(255);
    ellipse(random(250, 300), random(300, 310), 250, 70);

    if (showBang == true) {
      image(bang, mouseX - 125, mouseY + 100);
      fill(0);
      textSize(125);
      textFont("Courier New");
      text("bye", 260, 500);
      if (millis() - startTimer > 1500) {
        showBang = false;
        level = 3;
      }
    } else if (showBang == false) {
      image(img2, mouseX - 150, mouseY - 150);
    }

  }

  if (level == 3) {
    background(255);
    ellipse(x, random(400, 425), 200, 100);
    x = x + 3;
    if (x > 300 + 500) {
      x = -25;
    }
    if (showBang == true) {
      image(bang, mouseX - 125, mouseY + 150);
      fill(0);
      textSize(150);
      textFont("Courier New");
      text("bye", 350, 600);
      if (millis() - startTimer > 1500) {
        showBang = false;
        level = 4;

      }
    } else if (showBang == false) {
      image(img, mouseX - 60, mouseY - 60);
    }
  }
  if (level == 4) {
    background(255);
    ellipse(170, random(540, 600), 300, 80);

    if (showBang == true) {
      image(bang, mouseX - 125, mouseY + 100);
      fill(0);
      textSize(200);
      textFont("Courier New");
      text("bye", 150, 350);
      if (millis() - startTimer > 1500) {
        showBang = false;
        background(255);
        fill(0);
        textSize(120);
        textFont("Courier New");
        text("you win.", 50, 635);
        level = 5;
      }
    } else if (showBang == false) {
      image(img2, mouseX - 150, mouseY - 150);
    }
  }
  if (level == 5) {
    image(img2, mouseX - 150, mouseY - 150);


  }
}


function mousePressed() {
  if (level == 0) {
    level = 1


  } else if (level == 1) {
    if (mouseX > 350 && mouseY > 200) {
      showBang = true;
      startTimer = millis()

    }
  } else if (level == 2) {
    print(mouseX + " " + mouseY)
    if (mouseX > 125 && mouseX < 425) {
      showBang = true;
      startTimer = millis()
    }
  } else if (level == 3) {

    if (mouseX < x + 100 && mouseX > x - 100) {
      showBang = true;
      startTimer = millis()
    }

  } else if (level == 4) {

    if (mouseX > 20 && mouseX < 320) {
      showBang = true;
      startTimer = millis()
    }

  }

}
//image(img2, mouseX-150, mouseY-150); JACK PICTURE 2