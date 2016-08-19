var level = "wellunwell"
var x = 0;
var y = 400;




function setup() {

  createCanvas(800, 800)



}

function draw() {



  if (level == "wellunwell") {
    wellunwell();
  } else if (level == "lvlup1") {
    lvlup1();
  } else if (level == "restedunrested") {
    restedunrested();

  } else if (level == "tireduntired") {
    tireduntired();
  } else if (level == "lvlup2") {
    lvlup2();
  } else if (level == "lvlup3") {
    lvlup3();
  } else if (level == "relaxedunrelaxed") {
    relaxedunrelaxed();
  } else if (level == "lvlup4") {
    lvlup4();
  } else if (level == "confidentunconfident") {
    confidentunconfident();
  } else if (level == "lvlup5") {
    lvlup5();
  } else if (level == "lovedunloved") {
    lovedunloved();
  } else if (level == "lvlup6") {
    lvlup6();
  }
}

function mousePressed() {

  if (level == "wellunwell") {
    var d = dist(0, 0, mouseX, mouseY)
    if (d > 0)
      level = "lvlup1";
  } else if (level == "lvlup1") {
    var d = dist(0, 0, mouseX, mouseY)
    if (d > 0)
      level = "restedunrested";
  } else if (level == "restedunrested") {
    var d = dist(0, 0, mouseX, mouseY)
    if (d > 0)
      level = "lvlup2";
  } else if (level == "lvlup2") {
    var d = dist(0, 0, mouseX, mouseY)
    if (d > 0)
      level = "tireduntired";
  } else if (level == "tireduntired") {
    var d = dist(0, 0, mouseX, mouseY)
    if (d > 0)
      level = "lvlup3";
  } else if (level == "lvlup3") {
    var d = dist(0, 0, mouseX, mouseY)
    if (d > 0)
      level = "relaxedunrelaxed";
  } else if (level == "relaxedunrelaxed") {
    var d = dist(0, 0, mouseX, mouseY)
    if (d > 0)
      level = "lvlup4";
  } else if (level == "lvlup4") {
    var d = dist(0, 0, mouseX, mouseY)
    if (d > 0)
      level = "confidentunconfident";
  } else if (level == "confidentunconfident") {
    var d = dist(0, 0, mouseX, mouseY)
    if (d > 0)
      level = "lvlup5";
  } else if (level == "lvlup5") {
    var d = dist(0, 0, mouseX, mouseY)
    if (d > 0)
      level = "lovedunloved";
  } else if (level == "lovedunloved") {
    var d = dist(0, 0, mouseX, mouseY)
    if (d > 0)
      level = "lvlup6";
  }
}







// FUNCTIONS

function wellunwell() {
  noStroke
  background(0)
  fill(255, 0, 0)
  rect(0, 0, width, height / 2)
  fill(0, 255, 0)
  rect(0, height / 2, width, height / 2)

  textSize(100)
  fill(0, 255, 0)
  text("WELL", width / 4, height / 4, 100, 100)

  textSize(100)
  fill(255, 0, 0)
  text("UNWELL", width / 4, height * 0.6, 100, 100)

}

function lvlup1() {

  background(0)
  noStroke();
  fill(255)
  textSize(250)
  text("LVLUP", 0, height / 4, 1000, 500)


  if (millis() > 1500) {
    stroke(77, 77, 77)
    strokeWeight(10)
    fill(255, 0, 0, 100)
    rect(0, 0, width / 7, 800)
  }
}




function lvlup2() {

  background(0)
  noStroke();
  fill(255)
  textSize(250)
  text("LVLUP", 0, height / 4, 1000, 500)


  if (millis() = 1500) {
    stroke(77, 77, 77)
    strokeWeight(1)
    fill(255, 0, 0, 100)
    rect(x, 0, width / 7, 800)
  }

  if (millis() = 2500) {
    stroke(77, 77, 77)
    strokeWeight(10)
    fill(255, 0, 0, 100)
    rect(x+(width/7), 0, width / 7, 800)
  }
}

function lvlup3() {

  background(0)
  fill(255)
  textSize(250)
  text("LVLUP", 0, height / 4, 1000, 500)

  stroke(77, 77, 77)
  strokeWeight(10)
  fill(255, 0, 0, 100)
  rect(10, height / 4, 175, 400)
  rect(195, height / 4, 175, 400)
  rect(380, height / 4, 175, 400)
}

function lvlup4() {

  background(0)
  fill(255)
  textSize(250)
  text("LVLUP", 0, height / 4, 1000, 500)

  stroke(77, 77, 77)
  strokeWeight(10)
  fill(255, 0, 0, 100)
  rect(0, height / 4, 175, 400)
  rect(200, height / 4, 175, 410)
  rect(400, height / 4, 175, 410)
  rect(600, height / 4, 175, 410)
}

function lvlup5() {

  background(0)
  fill(255)
  textSize(250)
  text("LVLUP", 0, height / 4, 1000, 500)
}

function lvlup6() {

  background(0)
  fill(255)
  textSize(250)
  text("LVLUP", 0, height / 4, 1000, 500)
}



function restedunrested() {

  background(0)
  fill(0, 0, 255)
  rect(0, 0, width, height / 2)
  fill(100, 200, 0)
  rect(0, height / 2, width, height / 2)

  noStroke();
  textSize(100);
  fill(100, 200, 0);
  text("RESTED", width / 4, height / 4, 100, 100);

  noStroke();
  textSize(100)
  fill(0, 0, 255)
  text("UNRESTED", width / 4, height * 0.6, 100, 100)

}


function tireduntired() {
  background(0)
  fill(0, 0, 255)
  rect(0, 0, width, height / 2)
  fill(100, 200, 0)
  rect(0, height / 2, width, height / 2)

  noStroke();
  textSize(100)
  fill(100, 200, 0)
  text("TIRED", width / 4, height / 4, 100, 100)

  textSize(100)
  fill(0, 0, 255)
  text("UNTIRED", width / 4, height * 0.6, 100, 100)

}


function relaxedunrelaxed() {
  background(0)
  fill(0, 0, 255)
  rect(0, 0, width, height / 2)
  fill(100, 200, 0)
  rect(0, height / 2, width, height / 2)

  noStroke();
  textSize(100)
  fill(100, 200, 0)
  text("RELAXED", width / 4, height / 4, 100, 100)

  textSize(100)
  fill(0, 0, 255)
  text("UNRELAXED", width / 4, height * 0.6, 100, 100)

}


function confidentunconfident() {
  background(0)
  fill(0, 0, 255)
  rect(0, 0, width, height / 2)
  fill(100, 200, 0)
  rect(0, height / 2, width, height / 2)

  noStroke();
  textSize(100)
  fill(100, 200, 0)
  text("CONFIDENT", width / 4, height / 4, 100, 100)

  textSize(100)
  fill(0, 0, 255)
  text("UNCONFIDENT", width / 4, height * 0.6, 100, 100)

}

function lovedunloved() {
  background(0)
  fill(0, 0, 255)
  rect(0, 0, width, height / 2)
  fill(100, 200, 0)
  rect(0, height / 2, width, height / 2)

  noStroke();
  textSize(100)
  fill(100, 200, 0)
  text("LOVED", width / 4, height / 4, 100, 100)

  textSize(100)
  fill(0, 0, 255)
  text("UNLOVED", width / 4, height * 0.6, 100, 100)
}