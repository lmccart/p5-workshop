// STILL NEED TO MAKE TEXT SIZES PROPORTIONAL TO THE SCREEN SIZE

var numLocations = 6; // set your total number of locations here
var curLocation = 1;

var crayonbackimg;
var crayonbackimg2;

var well;
var come;
var toke;
var keepstrollinimg;

var onetothree;

var madeitimg;
var nscratchimg;
var takeamomentimg
var tochillimg;

var nowimg
var goimg
var intoimg
var theimg
var aetherimg

var congratuimg
var lationsimg
var astoneimg
var forsittingimg


var threetofourimg
var fourtofiveimg
var fivetosiximg

var paperrockimg
var paperrectimg
var paperswooshimg
var paperhouseimg

var paperbit1img
var paperbit2img
var paperbit3img



var perlinNoise;
var perlinNoise2;
var perlinNoise3;
var perlinNoise4;
var perlinNoise5;
var perlinNoise6;





function preload() {
  crayonbackimg = loadImage("crayonsmallest.png");
  crayonbackimg2 = loadImage("crayonsmallestcopy.png");
  well = loadImage("well.png");
  come = loadImage("come.png");
  toke = loadImage("toke.png");
  keepstrollinimg = loadImage("keepstrollin.png");
  onetothree = loadImage("onetothree.png");
  madeitimg = loadImage("madeit.png");
  nscratchimg = loadImage("nscratch.png");
  takeamomentimg = loadImage("takeamoment.png");
  threetofourimg = loadImage("threetofour.png");
  tochillimg = loadImage("tochill.png");
  fourtofiveimg = loadImage("fourtofive.png");
  nowimg = loadImage("now.png");
  goimg = loadImage("go.png");
  ambleimg = loadImage("amble.png");
  intoimg = loadImage("into.png");
  theimg = loadImage("the.png");
  aetherimg = loadImage("aether.png");
  congratuimg = loadImage("congratu.png");
  lationsimg = loadImage("lations.png");
  astoneimg = loadImage("astone.png");
  forsittingimg = loadImage("forsitting.png");
  fivetosiximg = loadImage("fivetosix.png");
  paperrockimg = loadImage("paperrock.png");
  paperrectimg = loadImage("paperrect.png");
  paperswooshimg = loadImage("paperswoosh.png")
  paperhouseimg = loadImage("paperhouse.png")
  paperbit1img = loadImage("paperbit1.png")
  paperbit2img = loadImage("paperbit2.png")
  paperbit3img = loadImage("paperbit3.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (geoCheck() == true) {
    // geolocation is available
    print("connected!");
    addFence(0, 0); // anywhere else

    // replace with your locations here
    addFence(39.21395044, -106.93592758, 0.25); // starting point vball slab
    addFence(39.21521663, -106.93566224); // grassy rock
    addFence(38.21386159, -106.93855183); // church bench
    addFence(39.21376114, -106.93966); // fish bench
    addFence(39.21365997, -106.9366297); // stone undercover and Congrats
    // addFence(39.21360107, -106.93650356); // photo
    intervalCurrentPosition(positionUpdated, 1000);
  }

  image(crayonbackimg, 0, 0, windowWidth * (1.3), windowHeight * (1.4))
}

function draw() {
  // background(140, 217, 179);

  if (curLocation == 2) {
    // draw view for location 1
    image(crayonbackimg, 0, 0, windowWidth * (1.3), windowHeight * (1.4))
    image(paperrockimg, windowWidth * (0.1), windowHeight * (0.5), windowWidth * (0.4), windowHeight * (0.20))


    perlinNoise = sin(millis() * 0.007 * 0.05) * 15;
    perlinNoise2 = sin(millis() * 0.007 * 0.075) * 50;
    perlinNoise3 = sin(millis() * 0.007 * 0.1) * 10;

    image(well, perlinNoise, windowHeight * (1 / 8), windowWidth / 3, windowHeight / 4);
    image(come, windowWidth * (1 / 4), perlinNoise2, windowWidth / 3, windowHeight / 4);
    image(toke, windowWidth * (4 / 10) + perlinNoise3, windowHeight * (3 / 5) + perlinNoise, windowWidth / 2, windowHeight / 4);

    if (mouseIsPressed) {
      oneToThree();
    }


  } else if (curLocation == 1) {
    // draw view for location 2
    // image(crayonbackimg2, 300,300,windowWidth*(1.3),windowHeight*(1.4));
    image(crayonbackimg2, 0, 0, windowWidth * (1.3), windowHeight * (1.4));

    keepstrollin();


  } else if (curLocation == 3) {
    // draw view for location 3
    image(crayonbackimg2, -400, -600, windowWidth * (2), windowHeight * (2));
    image(paperrectimg, windowWidth * (0.5), windowHeight * (0.8), windowWidth * (0.5), windowHeight * (0.2));

    // YOU MADE IT, CHILL, WITH A CLICK SEE NEXT INSTRUCTIONS
    perlinNoise = sin(millis() * 0.007 * 0.05) * 30;
    perlinNoise2 = sin(millis() * 0.007 * 0.075) * 20;
    perlinNoise3 = sin(millis() * 0.007 * 0.1) * 10;
    perlinNoise4 = sin(millis() * 0.007 * 0.02) * 250;



    image(nscratchimg, windowWidth * (1 / 5) + perlinNoise3, windowHeight * (1 / 3) + perlinNoise2, windowWidth * (1 / 6), windowHeight * (1 / 6));
    image(tochillimg, windowWidth * (.25), windowHeight * (.30) + perlinNoise4, windowWidth * (0.70), windowHeight * (0.3));
    image(takeamomentimg, windowWidth * (1 / 6) + perlinNoise2, windowHeight * (5 / 10) + perlinNoise3, windowWidth * (.70), windowHeight * (.25));
    image(madeitimg, 100 + perlinNoise, windowHeight * (1 / 6) + perlinNoise2, windowWidth * (3 / 5), windowHeight * (2 / 5));


    if (mouseIsPressed) {
      threeToFour();
    }

  }

  //screen 4
  else if (curLocation == 4) {
    // draw view for location 4
    image(crayonbackimg, -100, -200, windowWidth * (1.3), windowHeight * (1.4));
    image(paperswooshimg, windowWidth * (0.15), windowHeight * (0.15), 100, 100);

    perlinNoise = sin(millis() * 0.007 * 0.05) * 10;
    perlinNoise2 = sin(millis() * 0.007 * 0.075) * 20;
    perlinNoise3 = sin(millis() * 0.007 * 0.1) * 10;
    perlinNoise4 = sin(millis() * 0.007 * 0.2) * 5;


    image(takeamomentimg, windowWidth * (1 / 6) + perlinNoise, windowHeight * (5 / 10) + perlinNoise3, windowWidth * (.50), windowHeight * (.25));
    image(madeitimg, 100 + perlinNoise, windowHeight * (1 / 6) + perlinNoise2, windowWidth * (0.60), windowHeight * (0.4));
    image(tochillimg, windowWidth * (.25) + perlinNoise2, windowHeight * (.70) + perlinNoise4, windowWidth * (2 / 5), windowHeight * (1 / 6));
    image(nscratchimg, windowWidth * (1 / 5) + perlinNoise3, windowHeight * (1 / 3) + perlinNoise2, windowWidth * (1 / 6), windowHeight * (1 / 6));




    // directions to location 5(photolab)
    if (mouseIsPressed) {
      fourToFive();
    }
  } else if (curLocation == 5) {
    // draw view for location 4

    image(crayonbackimg2, -100, -100, windowWidth * (2), windowHeight * (2));
    image(paperhouseimg, windowWidth * (0.05), windowHeight * (0.7), 200, 200);

    perlinNoise = sin(millis() * 0.007 * 0.05) * 10;
    perlinNoise2 = sin(millis() * 0.007 * 0.075) * 20;
    perlinNoise3 = sin(millis() * 0.007 * 0.1) * 10;
    perlinNoise4 = sin(millis() * 0.007 * 0.2) * 5;


    image(takeamomentimg, windowWidth * (1 / 6) + perlinNoise, windowHeight * (5 / 10) + perlinNoise3, windowWidth * (.50), windowHeight * (.25));
    image(madeitimg, 100 + perlinNoise, windowHeight * (1 / 6) + perlinNoise2, windowWidth * (0.60), windowHeight * (0.4));
    image(tochillimg, windowWidth * (.25) + perlinNoise2, windowHeight * (.70) + perlinNoise4, windowWidth * (2 / 5), windowHeight * (1 / 6));
    image(nscratchimg, windowWidth * (1 / 5) + perlinNoise3, windowHeight * (1 / 3) + perlinNoise2, windowWidth * (1 / 6), windowHeight * (1 / 6));




    // directions to location 5(photolab)
    if (mouseIsPressed) {
      fiveToSix();
    }
  } else if (curLocation == 6) {
    // draw view for location 5

    image(crayonbackimg, 0, 0, windowWidth * (1.3), windowHeight * (1.4));
    image(paperbit1img, windowWidth * (1 / 3), 100, 100, 100)
    image(paperbit2img, windowWidth * (.5), 100, 100, 100)
    image(paperbit3img, windowWidth * (2 / 3), 100, 100, 100)


    perlinNoise = sin(millis() * 0.007 * 0.05) * 15;
    perlinNoise2 = sin(millis() * 0.007 * 0.04) * 50;
    perlinNoise3 = sin(millis() * 0.007 * 0.1) * 10;
    perlinNoise4 = sin(millis() * 0.007 * 0.03) * 300;
    perlinNoise5 = sin(millis() * 0.007 * 0.01) * 50;
    perlinNoise6 = sin(millis() * 0.007 * 0.03) * 110;

    // congratulations, a stone!  for sittin on
    image(congratuimg, perlinNoise, windowHeight * (0.37) + perlinNoise3, windowWidth, windowHeight / 3);
    image(lationsimg, windowWidth * (0.7) + perlinNoise3, 200 + perlinNoise2, windowWidth / 3, windowHeight / 4);
    image(astoneimg, windowWidth * (0.10) + perlinNoise5, windowHeight * (0.4) + perlinNoise4, windowWidth / 2, windowHeight / 4);
    image(forsittingimg, windowWidth * (0.55) + perlinNoise, windowHeight * (0.7) + perlinNoise, windowWidth / 2, windowHeight / 4);

    // now go amble into the aether
    if (mouseIsPressed) {
      image(crayonbackimg, -130, -200, windowWidth * (1.3), windowHeight * (1.4));
      image(paperbit1img, windowWidth * (1 / 3), 100, 100, 100)
      image(paperbit2img, windowWidth * (.5), 100, 100, 100)
      image(paperbit3img, windowWidth * (2 / 3), 100, 100, 100)

      image(nowimg, windowWidth * (0.2) + perlinNoise6, windowHeight / 4, windowWidth / 4, windowHeight / 5);
      image(goimg, windowWidth * (0.25), windowHeight * (0.15) + perlinNoise2, windowWidth / 4, windowHeight / 5);
      image(ambleimg, windowWidth * (0.6) + perlinNoise, perlinNoise3, windowWidth / 5, windowHeight / 10);
      image(intoimg, windowWidth * (0.5) + perlinNoise3, windowHeight * (0.5) + perlinNoise4, windowWidth / 5, windowHeight / 8);
      image(theimg, windowWidth * (0.25) + perlinNoise3, windowHeight * (0.5) + perlinNoise, 300, 300);
      image(aetherimg, windowWidth * (0.55) + perlinNoise, windowHeight * (0.55), windowWidth * (0.4), windowHeight * (0.2));

      // still need an image for that text^

    }
  }



  // this draws the testing buttons on top of everything
  checkLocations();
  // drawButtons();

}

function mousePressed() {
  // this detects a click on the testing buttons
  detectButtonPress();
  changeLocation();
}

function changeLocation() {
  // do any cleanup here like stopping sounds or reseting variables
}



function keepstrollin() {
  image(crayonbackimg2, 0, 0, windowWidth * (1.3), windowHeight * (1.4));;
  perlinNoise = sin(millis() * 0.007 * 0.05) * 15;
  perlinNoise2 = sin(millis() * 0.007 * 0.075) * 50;

  image(keepstrollinimg, 100 + perlinNoise, 100 + perlinNoise2, windowWidth * (7 / 8), windowHeight * (7 / 8));
}


function oneToThree() {
  image(crayonbackimg2, -50, -200, windowWidth * (1.3), windowHeight * (1.4));;
  image(paperrockimg, windowWidth * (0.1), windowHeight * (0.5), windowWidth * (0.4), windowHeight * (0.20))

  perlinNoise = sin(millis() * 0.007 * 0.05) * 15;
  perlinNoise2 = sin(millis() * 0.007 * 0.075) * 50;

  image(onetothree, windowWidth * (1 / 11) + perlinNoise, windowHeight * (1 / 11) + perlinNoise2, windowWidth * (7 / 8), windowHeight * (7 / 8));
}



function threeToFour() {
  image(crayonbackimg2, -100, -100, windowWidth * (2), windowHeight * (2));
  image(paperrectimg, windowWidth * (0.5), windowHeight * (0.8), windowWidth * (0.5), windowHeight * (0.2));
  perlinNoise = sin(millis() * 0.007 * 0.05) * 15;
  perlinNoise2 = sin(millis() * 0.007 * 0.075) * 30;

  image(threetofourimg, windowWidth * (1 / 11) + perlinNoise, windowHeight * (1 / 11) + perlinNoise2, windowWidth * (7 / 8), windowHeight * (7 / 8));
}

function fourToFive() {
  image(crayonbackimg2, -100, -200, windowWidth * (1.3), windowHeight * (1.4));
  image(paperswooshimg, windowWidth * (0.15), windowHeight * (0.15), 100, 100)
  perlinNoise = sin(millis() * 0.007 * 0.05) * 25;
  perlinNoise2 = sin(millis() * 0.007 * 0.075) * 20;

  image(fourtofiveimg, windowWidth * (0.10) + perlinNoise, windowHeight * (0.1) + perlinNoise2, windowWidth * (7 / 8), windowHeight * (7 / 8))

}


function fiveToSix() {
  image(crayonbackimg, -100, -200, windowWidth * (1.3), windowHeight * (1.4));
  image(paperhouseimg, windowWidth * (0.05), windowHeight * (0.7), 200, 200);
  perlinNoise = sin(millis() * 0.007 * 0.05) * 15;
  perlinNoise2 = sin(millis() * 0.007 * 0.075) * 30;

  image(fivetosiximg, windowWidth * (1 / 11) + perlinNoise, windowHeight * (1 / 11) + perlinNoise2, windowWidth * (7 / 8), windowHeight * (7 / 8));
}