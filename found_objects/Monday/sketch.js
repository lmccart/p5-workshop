var x = 18

function setup() {
  createCanvas(600, 600);
  background(171, 214, 172);

  // static gradient
  stroke(64, 112, 65);
  line(18, 550, 350, 18);
  line(x + 6, 550, 350, 18);
  line(x + 12, 550, 350, 18);
  line(x + 18, 550, 350, 18);
  line(42, 550, 350, 18);
  line(48, 550, 350, 18);
  line(54, 550, 350, 18);
  line(60, 550, 350, 18);
  line(66, 550, 350, 18);
  line(72, 550, 350, 18);
  line(78, 550, 350, 18);
  line(86, 550, 350, 18);
  line(92, 550, 350, 18);
  line(98, 550, 350, 18);
  line(104, 550, 350, 18);
  line(110, 550, 350, 18);
  line(116, 550, 350, 18);
  line(122, 550, 350, 18);
  line(128, 550, 350, 18);
  line(134, 550, 350, 18);
  line(140, 550, 350, 18);
  line(146, 550, 350, 18);
  line(152, 550, 350, 18);
  line(158, 550, 350, 18);
  line(164, 550, 350, 18);
  
  //triangle
  fill(170,204,33,50)
  triangle(random(340,500), random(200,400),random(500,600),random(90,200), random(340,550),random(400,550))
  fill(219,252,86,80)
  triangle(random(340,500), random(200,400),random(500,600),random(90,200), random(340,550),random(400,550))
  fill(214,232,14,110)
  triangle(random(340,500), random(200,400),random(500,600),random(90,200), random(340,550),random(400,550))

}

function draw() {
  //followingtext
  fill(247, 230, 99);
  stroke(0);
  textStyle(ITALIC);
  textFont("Futura");
  textSize(random(10, 20));
  text("harmony", mouseX, mouseY, mouseX, mouseY);

  // cylinder
  fill(69, 105, 7);
  arc(300, random(600), 64, 64, 50, 2);

  // lines on cylinder
  stroke(170, 199, 131, mouseX);
  line(random(290, 330), 0, random(290, 330), 600);
}