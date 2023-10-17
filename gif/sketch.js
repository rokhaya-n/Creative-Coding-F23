//code used to make gif move inspired by class demo
//code used to 

//image variable
let spongePic;
let antPic;
let x, y;
let xDir, yDir;

function preload() {

  //preload images
  spongePic = loadImage("images/spongebob.png");
  antPic = loadImage("images/tired_ant.jpg")

  //preload sounds
  bonk = loadSound("sounds/bonk.mp3");
  boowomp = loadSound("sounds/boowomp.mp3");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);

  //image size variables
  spongeWidth = spongePic.width;
  spongeHeight = spongePic.height;
  antWidth = antPic.width;
  antHeight = antPic.height;

  y = width / 3;
  x = height / 3;

  xDir = random(3, 8);
  yDir = random(3, 8);

}

function draw() {
  //slightest trail
  background(10, 100);

  //drawing images
  image(spongePic, x,y, spongeWidth / 3, spongeHeight / 3);
  image(antPic, x+300, y+300, antWidth / 4, antHeight / 4);


  //x += xDir;
  //y += ySDir;

  if (x >= width || x <= 0) {
    xDir *= -1;
    bonk.play();
    textSize(100);
    fill(255);
    text("bonk", width / 2, height / 2);
  }
  if (y >= height || y <= 0) {
    yDir *= -1;
    boowomp.play();
    textSize(100);
    fill(255);
    text("boowomp", width / 2, height / 2);
  }


  x = x+xDir;
  y = y+yDir

}
