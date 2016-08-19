var p1;
var p2;
var p3;
var button;
var playing = true;
var sound;

function preload() {
  sound = loadSound('sou/noise.mp3');
}

function setup() {
  createCanvas(1200, 775);
  background(200);
  sound.play();

  //video and video properties
  p1 = createVideo(['vid/phase1.mp4']);
  p2 = createVideo(['vid/phase2.mp4']);
  p3 = createVideo(['vid/phase3.mp4']);

  p1.hide();
  p2.hide();
  p3.hide();
  p1.loop();
  p2.loop();
  p3.loop();

  //button
  button = createButton('no');
  button.mousePressed(toggleVid);
  button.position(255, 712);

  //text
  textSize(20);
  textFont("Futura");
  textStyle(ITALIC);
  text("watch me sleep", 100, 725);
}

function draw() {

  //bottom layer

  //first row l-r
  image(p2, 300, 0, 300, 225);
  image(p2, 600, 0, 300, 225);

  //second row l-r
  image(p2, 0, 225, 300, 225);
  image(p1, 300, 225, 300, 225);
  image(p1, 600, 225, 300, 225);
  image(p2, 900, 225, 300, 225);

  //third row l-r
  image(p2, 300, 450, 300, 225);
  image(p2, 600, 450, 300, 225);

  //middle layer

  //first row l-r
  image(p3, 150, 112.5, 300, 225);
  image(p3, 750, 112.5, 300, 225);
  image(p2, 0, 0, 300, 225);
  image(p2, 900, 0, 300, 225);

  //second row l-r
  image(p3, 150, 337.5, 300, 225);
  image(p3, 750, 337.5, 300, 225);
  image(p2, 0, 450, 300, 225);
  image(p2, 900, 450, 300, 225);

  //top layer l-r

  //first row l-r
  image(p2, 150, 0, 300, 225);
  image(p2, 750, 0, 300, 225);
  image(p1, 300, 0, 300, 225);
  image(p1, 600, 0, 300, 225);

  //second row l-r
  image(p1, 300, 450, 300, 225);
  image(p1, 600, 450, 300, 225);

  //third tow l-r
  image(p2, 150, 450, 300, 225);
  image(p2, 750, 450, 300, 225);

}

function toggleVid() {
  if (playing) {
    p1.pause();
    p2.pause();
    p3.pause();
    button.html('more');
    playing = false;
    sound.stop();
  } else {
    p1.loop();
    p2.loop();
    p3.loop();
    button.html('enough');
    playing = true;
    sound.play();
  }
}