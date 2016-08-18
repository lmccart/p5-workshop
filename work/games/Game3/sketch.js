var x = -50;
var y = 25;
var speed = 5;
var level = 1;

function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  // title animation
  if (level == 1) {
    background(0)
    rect(x, y, 50, 50);
    x = x + speed * 4;
    
    if (x > width) {
      speed = -5;
      y = y + 150;
      fill(255);
    }
    if (x < -50) {
      speed = 5;
      y = y + 150;
      fill(255);
    }
    
    if (y > height) {
      level = 2;
    }
  }
  // title screen
  else if (level == 2) {
    stroke(0);
    strokeWeight(2);
    textFont("Comic Sans MS");
    textSize(50);
    textAlign(CENTER)
    text("Game", 250, 250);
    rectMode(CENTER);
    rect(300, 450, 250, 50);
    
  }
  
  // first stage
  else if (level == 3) {
    background(0);
    rect(x,200,50,50);
    x = x + speed/2;
    
    if (x > width) {
      level = 4;
    }
  }
  
  //second stage
  else if (level == 4) {
    background(0);
    rect(x,500,50,50);
    x = x  - speed;
    
    if (x > width) {
      level = 5;
    }
  }
}

function mousePressed() {
  if (mouseX > 175 && mouseX < 425 && mouseY > 425 && mouseY < 475) {
    level = 3;
  }
}
  
