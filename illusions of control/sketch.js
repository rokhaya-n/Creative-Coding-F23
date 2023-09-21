//an attempt at squash and stretch and slow in slow out

let x, y;
let xPos, yPos
let xDir, yDir;
let speedY = 10;
let speedX = 15;
let squash, stretch;


function setup() {
  createCanvas(400,400);

  x = width / 2;
  y = height / 2;

//makes the ball move in random trajectories
  xDir = 2
  yDir = 4

  size = random(20);
  
  squash = 50
  stretch = 50


}

function draw() {
//purple background with trail
  background(80,0,120,60)

  ellipse(x,y, size * squash, size * stretch)

//"or" in "if" statement is expressed as "||"
  if(x >= width - size / 2 || x <= size / 2) {
  //to flip the direction around set up xDir to = xDir * -1
  xDir = xDir * -1

  //change fill color shade of red everytime ball hits the sides of screen
  fill(random(200),random(0),random(0));
    
    //supposed to squash everytime s axis is hit  
    squash *= 5
    stretch *= -0.5
    squash = squash * -0.1

}

  if(y >= height - size / 2 || y<= size / 2) {
  yDir = yDir * -1

  //change fill color to shade of green everytime ball hits the side floor or ceiling
  fill(random(0),random(200),random(0));
    
   //supposed to stretch everytime y axis is hit  
    squash *= -0.5
    stretch *= 5
    stretch = stretch * -0.1

}

  //an attempt to slow down the ball as it gets close 
  //to the edges by 50 units
  if(yPos >= 50 || yPos <= 350) {
    speedY *= 10
  }
  
  if(yPos <= 49 || yPos >=251) {
    speedY *= -10
  }
  
  if(xPos >= 50 || xPos <= 350) {
    speedY *= 10
  }
  
  if(xPos <= 49 || xPos >=251) {
    speedY *= -10
  }

  
//update x and y values of the ball every time draw loop resets
x = x+xDir;
y = y+yDir

}
