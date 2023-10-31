//buttons A through L
let reasonButtonA,reasonButtonB,reasonButtonC,reasonButtonD,reasonButtonE,reasonButtonF,reasonButtonG,reasonButtonH,reasonButtonI,reasonButtonJ,reasonButtonK,reasonButtonL;
//variable to load json file
let data;
//arrays for movie reasons
let movieReason1 = [];
let reasonPercentage1 = [];
let movieReason2 = [];
let reasonPercentage2 = [];
let movieReason3 = [];
let reasonPercentage3 = [];
let movieReason4 = [];
let reasonPercentage4 = [];
let movieReason5 = [];
let reasonPercentage5 = [];
let movieReason6 = [];
let reasonPercentage6 = [];
let movieReason7 = [];
let reasonPercentage7 = [];
let movieReason8 = [];
let reasonPercentage8 = [];
let movieReason9 = [];
let reasonPercentage9 = [];
let movieReason10 = [];
let reasonPercentage10 = [];
let movieReason11 = [];
let reasonPercentage11 = [];
let movieReason12 = [];
let reasonPercentage12 = [];

//variable to display percentages
let percentDisplay = 0;

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

  //when each button is clicked
  reasonButtonA.mouseClicked(buttonAIsPressed)
  reasonButtonB.mouseClicked(buttonBIsPressed);
  reasonButtonC.mouseClicked(buttonCIsPressed);
  reasonButtonD.mouseClicked(buttonDIsPressed);
  reasonButtonE.mouseClicked(buttonEIsPressed);
  reasonButtonF.mouseClicked(buttonFIsPressed);
  reasonButtonG.mouseClicked(buttonGIsPressed);
  reasonButtonH.mouseClicked(buttonHIsPressed);
  reasonButtonI.mouseClicked(buttonIIsPressed);
  reasonButtonJ.mouseClicked(buttonJIsPressed);
  reasonButtonK.mouseClicked(buttonKIsPressed);
  reasonButtonL.mouseClicked(buttonLIsPressed);

  //set up data arrays
  for (let i = 0; i < data.movieGoing1.length; i++) {
    //arrays for reasons and percentages
    movieReason1[i] = data.movieGoing1[i].reason;
    reasonPercentage1[i] = data.movieGoing1[i].percentage;
  }
  for (let i = 0; i < data.movieGoing2.length; i++) {
    //arrays for reasons and percentages
    movieReason2[i] = data.movieGoing2[i].reason;
    reasonPercentage2[i] = data.movieGoing2[i].percentage;
  }
  for (let i = 0; i < data.movieGoing3.length; i++) {
    //arrays for reasons and percentages
    movieReason3[i] = data.movieGoing3[i].reason;
    reasonPercentage3[i] = data.movieGoing3[i].percentage;
  }
  for (let i = 0; i < data.movieGoing4.length; i++) {
    //arrays for reasons and percentages
    movieReason4[i] = data.movieGoing4[i].reason;
    reasonPercentage4[i] = data.movieGoing4[i].percentage;
  }
  for (let i = 0; i < data.movieGoing5.length; i++) {
    //arrays for reasons and percentages
    movieReason5[i] = data.movieGoing5[i].reason;
    reasonPercentage5[i] = data.movieGoing5[i].percentage;
  }
  for (let i = 0; i < data.movieGoing6.length; i++) {
    //arrays for reasons and percentages
    movieReason6[i] = data.movieGoing6[i].reason;
    reasonPercentage6[i] = data.movieGoing6[i].percentage;
  }
  for (let i = 0; i < data.movieGoing7.length; i++) {
    //arrays for reasons and percentages
    movieReason7[i] = data.movieGoing7[i].reason;
    reasonPercentage7[i] = data.movieGoing7[i].percentage;
  }
  for (let i = 0; i < data.movieGoing8.length; i++) {
    //arrays for reasons and percentages
    movieReason8[i] = data.movieGoing8[i].reason;
    reasonPercentage8[i] = data.movieGoing8[i].percentage;
  }
  for (let i = 0; i < data.movieGoing9.length; i++) {
    //arrays for reasons and percentages
    movieReason9[i] = data.movieGoing9[i].reason;
    reasonPercentage9[i] = data.movieGoing9[i].percentage;
  }
  for (let i = 0; i < data.movieGoing10.length; i++) {
    //arrays for reasons and percentages
    movieReason10[i] = data.movieGoing10[i].reason;
    reasonPercentage10[i] = data.movieGoing10[i].percentage;
  }
  for (let i = 0; i < data.movieGoing11.length; i++) {
    //arrays for reasons and percentages
    movieReason11[i] = data.movieGoing11[i].reason;
    reasonPercentage11[i] = data.movieGoing11[i].percentage;
  }
  for (let i = 0; i < data.movieGoing12.length; i++) {
    //arrays for reasons and percentages
    movieReason12[i] = data.movieGoing12[i].reason;
    reasonPercentage12[i] = data.movieGoing12[i].percentage;
  }
}

function draw() {
  background(10);

//title text
  noStroke();
  textSize(20);
  textAlign(CENTER);
  fill(255);
  text("Top factors for Gen Z to decide on whether or not go to the movies in the U.S. 2021", 500, 40);

  //text settings
  noStroke();
  textSize(15);
  textAlign(LEFT);
  fill(255);

  //text displaying movie going reasons
  for (let i = 0; i < data.movieGoing1.length; i++) {
    text(
      movieReason1[i], 130, 60 * (1.5 + i)
    );
  }
  for (let i = 0; i < data.movieGoing2.length; i++) {
    text(
      movieReason2[i], 130, 100 * (1.5 + i)
    );
  }
  for (let i = 0; i < data.movieGoing3.length; i++) {
    text(
      movieReason3[i], 130, 140 * (1.5 + i)
    );
  }
  for (let i = 0; i < data.movieGoing4.length; i++) {
    text(
      movieReason4[i], 130, 180 * (1.5 + i)
    );
  }
  for (let i = 0; i < data.movieGoing5.length; i++) {
    text(
      movieReason5[i], 130, 220 * (1.5 + i)
    );
  }
  for (let i = 0; i < data.movieGoing6.length; i++) {
    text(
      movieReason6[i], 130, 260 * (1.5 + i)
    );
  }
  for (let i = 0; i < data.movieGoing7.length; i++) {
    text(
      movieReason7[i], 130, 300 * (1.5 + i)
    );
  }
  for (let i = 0; i < data.movieGoing8.length; i++) {
    text(
      movieReason8[i], 130, 340 * (1.5 + i)
    );
  }
  for (let i = 0; i < data.movieGoing9.length; i++) {
    text(
      movieReason9[i], 130, 380 * (1.5 + i)
    );
  }
  for (let i = 0; i < data.movieGoing10.length; i++) {
    text(
      movieReason10[i], 130, 420 * (1.5 + i)
    );
  }
  for (let i = 0; i < data.movieGoing11.length; i++) {
    text(
      movieReason11[i], 130, 460 * (1.5 + i)
    );
  }
  for (let i = 0; i < data.movieGoing12.length; i++) {
    text(
      movieReason12[i], 130, 500 * (1.5 + i)
    );
  }

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

  //btv emoji to hold generated percentages
  textSize(180);
  text("📺", 710, 430)

  //to draw percentages
  textSize(50);
  text(percentDisplay,750,360);
}

  //to generate percentage that matches each reason
function buttonAIsPressed() {
  percentDisplay = reasonPercentage1[0];
}

function buttonBIsPressed() {
  percentDisplay = reasonPercentage2[0];
}

function buttonCIsPressed() {
  percentDisplay = reasonPercentage3[0];
}

function buttonDIsPressed() {
  percentDisplay = reasonPercentage4[0];
}

function buttonEIsPressed() {
  percentDisplay = reasonPercentage5[0];
}

function buttonFIsPressed() {
  percentDisplay = reasonPercentage6[0];
}

function buttonGIsPressed() {
  percentDisplay = reasonPercentage7[0];
}

function buttonHIsPressed() {
  percentDisplay = reasonPercentage8[0];
}

function buttonIIsPressed() {
  percentDisplay = reasonPercentage9[0];
}

function buttonJIsPressed() {
  percentDisplay = reasonPercentage10[0];
}

function buttonKIsPressed() {
  percentDisplay = reasonPercentage11[0];
}

function buttonLIsPressed() {
  percentDisplay = reasonPercentage12[0];
}

//to find coordinates
function mousePressed(){
  console.log(mouseX + "," + mouseY)
}