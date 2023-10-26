/* //will need to create buttons A through L
let reasonButtonA;
*/
//variable to load json file
let movieData;
//array for movie reasons
let movieReason = [];
let reasonPercentage = []

function preload() {
  //loading json file
  movieData = loadJSON("moviedata.json");
}

function setup() {
  createCanvas(800, 800)
  rectMode(CENTER);
  textAlign(CENTER);
/*
  //creating buttons for each reason, will need to set up the rest
  reasonButtonA = createButton("reason A");
  reasonButtonA.position(115,240);
*/

  //set up data array
  for (let i = 0; i < data.movieGoing.length; i++) {
    movieReason[i] = data.movieGoing[i].reason;
    reasonPercentage[i] = data.movieGoing[i].percentage;
  }
}

function draw() {
  background(10);

  //text settings copied
  noStroke();
  textSize(30);
  fill(255);

  //generating text displaying data
  for (let i = 0; i < data.movieGoing.length; i++) {
    text(
      movieReason[i], 20, 40 * (1 + i)
    );
    text(
      reasonPercentage[i], 400,600
    );
  }
  /*
  //reason & percentage text
  noStroke();
  textSize(30);
  fill(255);
  text("percentage:", 400, 470);
  text("reasons:", 400, 120);
  text("XX%", 400,610);

  noFill();
  stroke(255);
  strokeWeight(5);
  //boxes to rep images i will upload to rep reasons
  rect(150,200,50,50);
  rect(300,200,50,50);
  rect(450,200,50,50);
  rect(600,200,50,50);
  rect(150,320,50,50);
  rect(300,320,50,50);
  rect(450,320,50,50);
  rect(600,320,50,50);

  //box to hold generated percentage
  rect(400,600,150,150);
*/
}

//to find coordinates
function mousePressed(){
  console.log(mouseX + "," + mouseY)
}
