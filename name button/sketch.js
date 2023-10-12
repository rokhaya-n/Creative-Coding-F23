//setting up variables
let coolButton, iceCreamX, iceCreamY;
let nameButton, nameX, nameY;
let eraseButtom, eraseX, eraseY;

//variables for moving name
let xPos
//, yPos;

function setup() {
  createCanvas(400, 400);
  
  //to make my name move accross the screen into the void
  xPos = 0;
  //yPos = (random(50,250));
  
  //create buttons
  coolButton = createButton("ice cream");
  nameButton = createButton("write name");
  eraseButton = createButton("erase all");
  
  //when buttons are pressed
  coolButton.mousePressed(makeIce);
  nameButton.mousePressed(writeName);
  eraseButton.mousePressed(eraseAll);
  
  //button locations
  iceCreamX = 75;
  iceCreamY = 300;
  coolButton.position(iceCreamX, iceCreamY);
  nameX = 175;
  nameY = 300;
  nameButton.position(nameX, nameY);
  eraseX = 275;
  eraseY = 300;
  eraseButton.position(eraseX, eraseY);
  
  //black background here--nothing goes in draw function
  background(20);
}

function draw() {
  
  //leaving this empty--probably impacting moving name function
}

//ice cream generating function
  function makeIce() {
    background(20); 
    fill(255, 220, 0);
    noStroke();
    triangle(176,180,207,180,194,217);
    strokeWeight(30);
    stroke(random(255),random(255),random(255));
    point(180,169);
    stroke(random(255),random(255),random(255));
    point(199,169);
    stroke(random(255),random(255),random(255));
    point(185,152);
}

//name generating function
  function writeName() {
    textSize(random(10,60));
    noStroke();
    fill(random(255), random(255), random(255));
    text("rokhaya", xPos, random(50,300));
    xPos = xPos+5;
}

//erase function
  function eraseAll() {
    background(20);  
  }

//finding mouse position
function mousePressed() {
  console.log(mouseX + "," + mouseY)
  }