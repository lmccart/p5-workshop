var s = 20;
var xoff = 0.05;

function setup() {
  createCanvas(600, 600);
  frameRate(6);

}

function draw() {
  background(247, 231, 231, 50);
  xoff = xoff + .1;
  var n = 50 + noise(xoff) * 20;

  //STEMS

  stroke("#8E6161");
  strokeWeight(random(.5));

  line(280, 500, 285, random(370));
  line(281, 450, 250, random(400));
  // strokeWeight(.80);
  line(285, 370, 350, random(310));
  line(280, 480, 310, random(310));
  line(280, 480, 310, random(310));
  line(280, 480, 380, random(310));
  // strokeWeight(.75);
  line(285, 450, 336, random(303));
  line(341, 390, 250, random(290));
  line(50, random(200), 283, 410);
  line(300, 346, 495, random(120));
  line(172, 310, 220, random(285));
  line(380, 250, 280, random(180));
  line(330, 215, 330, random(180));
  line(200, random(400), 300, 410);
  line(300, random(100), 400, random(410));



  // BERRIES

  stroke("#D4ECBD");
  fill("#D4ECBD");
  // strokeWeight(.75);
  ellipse(random(200), random(400), s, s);
  ellipse(random(200), random(400), s, s);
  ellipse(random(400), random(200), s, s);
  ellipse(random(450), random(250), s, s);
  ellipse(random(550), random(275), s, s);
  ellipse(random(550), random(275), s, s);
  ellipse(random(550), random(550), s, s);
  ellipse(random(200), random(275), s, s);
  //  ellipse(random(300), random(300), s, s);
  // ellipse(random(600), random(600), s, s);
  // ellipse(random(100), random(600), s, s);
  // ellipse(random(600), random(300), s, s);

  //PURPLE ACCENTS

  stroke(180, 143, 185, 80);
  fill(180, 143, 185, 80);
  rect(mouseX, mouseY, 10, 15);
  rect(mouseX + 30, mouseY + 30, 15, 10);
  rect(mouseX - 30, mouseY - 30, 10, 15);
  rect(mouseX + 30, mouseY - 30, 15, 10);
  rect(mouseX - 30, mouseY + 30, 10, 15);
  rect(mouseX + 30, mouseY + 30, 15, 10);
  rect(mouseX + 30, mouseY + 30, 15, 10);
  rect(mouseX + 50, mouseY - 35, 5, 7);
  rect(mouseX + 50, mouseY + 35, 5, 7);
  rect(mouseX - 50, mouseY + 35, 5, 7);
  rect(mouseX - 50, mouseY - 35, 5, 7);
  rect(mouseX - 20, mouseY + 50, 5, 7);
  rect(mouseX + 20, mouseY - 50, 5, 7);
  rect(mouseX - 20, mouseY - 50, 5, 7);
  rect(mouseX + 20, mouseY + 50, 5, 7);
  rect(mouseX - 75, mouseY + 100, 5, 7);
  rect(mouseX + 75, mouseY - 100, 7, 5);
  rect(mouseX - 100, mouseY + 100, 5, 7);
  rect(mouseX + 100, mouseY + 100, 5, 7);
  rect(mouseX + 100, mouseY - 100, 5, 7);
  rect(mouseX - 100, mouseY - 100, 5, 7);

  //LIGHT STROBE

  stroke(270, 231, 231, 50);
  //#FFFFE6
  // #8E6161
  strokeWeight(2);
  line(n + 100, 0, n, height);
  line(n + 200, 0, n, height);
  line(n + 300, 0, n, height);
  line(n + 400, 0, n, height);
  line(n + 500, 0, n, height);
  line(n + 600, 0, n, height);
  line(n + 700, 0, n, height);
  line(n + 800, 0, n, height);
  line(n + 100, 0, n + 100, height);
  line(n + 100, 0, n + 200, height);
  line(n + 100, 0, n + 300, height);
  line(n + 100, 0, n + 400, height);
  line(n + 100, 0, n + 500, height);
  line(n + 100, 0, n + 600, height);
  line(n + 100, 0, n + 700, height);
  line(n + 100, 0, n + 800, height);

  // stroke("#566CA7");
  // fill("#566CA7");

  // ellipse(random(200),random (400), 10, 10);
}