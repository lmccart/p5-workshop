function setup() {
  createCanvas(900, 900);
  background(255, 242, 230)
  angleMode(DEGREES);


}

function draw() {
  // // gill lines moving with mouse (equally distributed lines, relative to my mouse , rather than to the position of the mouse position on the plane)
  // background(243, 230, 255, .25)
  // stroke(0, 0, 0, 10)
  // strokeWeight(1)
  // line(mouseX, mouseY, random(mouseX - width / 2, mouseX + width / 2), random(mouseY - width / 2, mouseY + width / 2));
  // stroke(51, 51, 0, 10)
  // line(mouseX, mouseY, random(width), random(height));
  
  
  
    // gill lines moving with mouse (not equally distributed lines)
  background(243, 230, 255, .25)
  stroke(0, 0, 0, 10)
  strokeWeight(1)
  line(mouseX, mouseY, random(width), random(height));
  stroke(51, 51, 0, 10)
  line(mouseX, mouseY, random(width), random(height));

  // gill lines stationary
  stroke(0, 0, 0, 10)
  line(width / 2, height / 2, random(width), random(height));
  strokeWeight(3)
  stroke(51, 51, 0, 10)
  line(width / 2, height / 2, random(width), random(height));

  // central radial distribution of dirt
  var n = random(660);
  var r = random(100);
  fill(102, 51, 0, 100)
  ellipse(width / 2 + r * cos(n), height / 2 + r * sin(n), 5, 5);
  fill(51, 51, 0, 80)
  rect(width / 2 + r * cos(n), height / 2 + r * sin(n), 5, 5)
  fill(255, 255, 255, 100)
  ellipse(width / 2 + r * cos(n), height / 2 + r * sin(n), 7, 7);
  fill(255, 255, 255, 100)
  ellipse(width / 2 + r * cos(n), height / 2 + r * sin(n), 5, 5);
    fill(51, 51, 0, 100)
  rect(width / 2 + r * cos(n), height / 2 + r * sin(n), 8, 8)


  // mouse controlled dirt (inverted relationship) (smaller)

  fill(255, 255, 255, 100)
  ellipse(mouseY + r * cos(n), mouseX + r * sin(n), 5, 5);
  fill(255, 255, 255, 100)
  ellipse(width / 2 + r * cos(n), height / 2 + r * sin(n), 5, 5);

  // mouse controlled dirt, larger
  fill(255, 255, 255, 100)
  ellipse(mouseY + r * cos(n), mouseX + r * sin(n), 7, 6);

// mouse controlled dark dirt
  fill(51, 51, 0, 70)
  ellipse(mouseY + r * cos(n), mouseX + r * sin(n), 5, 5);


}