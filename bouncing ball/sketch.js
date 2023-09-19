//a good chunk of this inspired by the demo we did in class

let x, y;
let xPos, yPos
let xDir, yDir;


function setup() {
  createCanvas(windowWidth, windowHeight);

  x = width / 5;
  y = height / 5;

//makes the ball move in random trajectories
  xDir = random(-15,16);
  yDir = random(-16,15);

  size = random(100);
}

function draw() {
//light background, slight trail
  background(80,0,90,80)

  ellipse(x, y, 150);

//"or" in "if" statement is expressed as "||"
if(x >= width - size / 2 || x <= size / 2) {
  //to flip the direction around set up xDir to = xDir * -1
  xDir = xDir * -1

  //change fill color shade of red everytime ball hits the sides of screen
  fill(random(200),random(0),random(0));
}

if(y >= height - size / 2 || y<= size / 2) {
  yDir = yDir * -1

  //change fill color to shade of green everytime ball hits the side floor or ceiling
  fill(random(0),random(200),random(0));
}


//update x and y values of the ball every time draw loop resets
x = x+xDir;
y = y+yDir

}