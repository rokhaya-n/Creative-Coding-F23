//buttons A through L
let reasonButtonA,reasonButtonB,reasonButtonC,reasonButtonD,reasonButtonE,reasonButtonF,reasonButtonG,reasonButtonH,reasonButtonI,reasonButtonJ,reasonButtonK,reasonButtonL;
//variable to load json file
let data;
//array for movie reasons
let movieReason = [];
let reasonPercentage = []

function preload() {
  //loading json file
  data = loadJSON("moviedata.json");
}

function setup() {
  createCanvas(1000, 800)
  rectMode(CENTER);

  //buttons for each reason
  reasonButtonA = createButton("reason A");
  reasonButtonA.position(425,75);
  reasonButtonB = createButton("reason B");
  reasonButtonB.position(425,135);
  reasonButtonC = createButton("reason C");
  reasonButtonC.position(430,195);
  reasonButtonD = createButton("reason D");
  reasonButtonD.position(480,255);
  reasonButtonE = createButton("reason E");
  reasonButtonE.position(530,315);
  reasonButtonF = createButton("reason F");
  reasonButtonF.position(340,375);
  reasonButtonG = createButton("reason G");
  reasonButtonG.position(460,435);
  reasonButtonH = createButton("reason H");
  reasonButtonH.position(570,495);
  reasonButtonI = createButton("reason I");
  reasonButtonI.position(570,555);
  reasonButtonJ = createButton("reason J");
  reasonButtonJ.position(570,615);
  reasonButtonK = createButton("reason K");
  reasonButtonK.position(460,675);
  reasonButtonL = createButton("reason L");
  reasonButtonL.position(470,735);

  //use reasonButton_.mousePressed

  //set up data array
  for (let i = 0; i < data.movieGoing.length; i++) {
    //arrays for reasons and percentages
    movieReason[i] = data.movieGoing[i].reason;
    reasonPercentage[i] = data.movieGoing[i].percentage;
  }
}

function draw() {
  background(10);

  //text settings
  noStroke();
  textSize(15);
  textAlign(LEFT);
  fill(255);

  //text displaying movie going reasons
  for (let i = 0; i < data.movieGoing.length; i++) {
    text(
      movieReason[i], 130, 60 * (1.5 + i)
    );
  }

  function writePercent() {
    //text displaying percentages--need to make this only show up when button is pressed
    /*textSize(60);
    for (let i = 0; i < data.movieGoing.length; i++) {
      text(
        reasonPercentage[i], 690,420
      );
    }*/
  }
  
  //title text
  noStroke();
  textSize(20);
  textAlign(CENTER);
  fill(255);
  text("Top factors for Gen Z to decide on whether or not go to the movies in the U.S. 2021", 500, 40);


  //emojis to represent each reason
  textSize(35);
  text("🎞️",70,90)
  text("🔍",70,150)
  text("💰",70,210)
  text("⭐️",70,270)
  text("🛋️",70,330)
  text("😷",70,390)
  text("🕰️",70,450)
  text("🍿",70,510)
  text("🎖️",70,570)
  text("🥃",70,630)
  text("🎥",70,690)
  text("🎫",70,750)


  //box to hold generated percentage
  noFill();
  stroke(255);
  strokeWeight(3);
  rect(750,400,150,150);
}

//to find coordinates
function mousePressed(){
  console.log(mouseX + "," + mouseY)
}
