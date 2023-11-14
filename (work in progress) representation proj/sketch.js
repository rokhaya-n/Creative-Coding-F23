//variable for video
let spongebobVid, vidPlay;
//variable for play and stop buttons
let stopButton, playButton;

//preload video
function preload(){
 spongebobVid = createVideo(['spongebob.mp4']);
}

function setup() {
  createCanvas(1000, 800);
  spongebobVid.hide(); 
  spongebobVid.loop();

  ellipseMode(CENTER);
  colorMode(HSB);
}


function draw() {
  background(220);
  
  image(spongebobVid, 0, 0, 1000, 800);
  spongebobVid.loadPixels();

  //inspired by: https://creative-coding.decontextualize.com/video/
  for (let y = 0; y < height; y += 10) {
    for (let x = 0; x < width; x += 10) {
      let offset = ((y * width) + x) * 4;
      noStroke();
      //ellipse fill should be the inverse of pixels
      push();
      //i have no idea what this does but its cool
      blendMode(DIFFERENCE);
      ellipse(x, y, 15, 10 * (spongebobVid.pixels[offset+1]/255));
      pop();
    }
  }
}

function mouseClicked() {
  if(vidPlay){
    spongebobVid.stop();
    vidPlay = false;
  } else {
    spongebobVid.play();
    vidPlay = true;
  }

}
