//creating a teachable machine that can distinguish hiphop from afrobreats songs

//model url & classifier
let soundModel = 'https://teachablemachine.withgoogle.com/models/ILAnVlQXT/';

//variables for all the artists
let kpop, hiphop, afrobeats;

// Global variable to store the classifier
let classifier;
let label = 'waiting for the music...';

//preloading music machine
function preload() {
  classifier = ml5.soundClassifier(soundModel + 'model.json');

  //load images to rep each genre
  hiphop = loadImage("albumgrids/hiphop.png")
  afrobeats = loadImage("albumgrids/afrobeats.png")
}

function setup() {
  createCanvas(800, 800);
  textAlign(CENTER);
  imageMode(CENTER);

  //classifier for sound input(?)
  classifier.classify(gotResult);
}


function draw() {
  background(20);
  noStroke();
  fill(255);
  textSize(30);
  text('play a Hip-Hop or Afrobeats song into the mic:',400,150);
  textSize(25);
  text(label, 400, 370);
  textSize(100);
  text('🎙️', 400, 300);

  //if statements for genre machine 
  if (label == "Hip-Hop") {
    drawHiphop();
  } 
  if (label == "Afrobeats") {
    drawAfrobeats();
     /*textSize(30);
      text("Afrobeats detected",400,550)*/
  } 
  if (label == "Background Noise") {
    textSize(20);
    fill(255,0,0);
    text("Background noise detetcted, try somewhere quieter",400,500)
  }

}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
}

//functions to generate images based on machine output
function drawHiphop() {
  image(hiphop,400,550,200,300);
}

function drawAfrobeats() {
  image(afrobeats,400,550,200,300);
}
