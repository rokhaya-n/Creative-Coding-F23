/*Rules:
Moving your mouse (without pressing) around the screen 
will automatically draw points using d variable and HSB 
but pressing the mouse will start to draw rectangles 
instead with a different stroke weight.
Pressing and holding 'r' will change the HSB color scale of the points & rectangles
Pressing 'b' will erase the drawing with a black background
Pressing 'w' will erase the drawing with a white background
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function draw() {

  /*if 'b' is pressed, drawing erased and 
  background switches to black
  if 'w' is pressed, drawing erased and
  background switches to white*/
  if ((keyIsPressed == true) & (key == 'b')) {
    background(0)
    //strokeWeight(d + 5);
  }

  if ((keyIsPressed == true) & (key == 'w')) {
    background(255)
    //strokeWeight(15 - d);
  }

  //inspired by pmouse HSB demo from class
  let d = dist(pmouseX, pmouseY, mouseX, mouseY);
  stroke(255,d,130);
  point(pmouseX, pmouseY, mouseX, mouseY,);

  /*if 'r' is pressed and HELD, HSB switches to 
  different color scale */
  if ((keyIsPressed == true) & (key == 'r')) {
    stroke(d,random(100,250),random(50,200));
  }

  /*if mouse is NOT pressed when moving mouse 
  around the screen, points are drawn with 
  strokeWeight d+5 
  if mouse IS pressed when moving mouse, 
  rectangles are drawn with strokeWeight 20-d.*/
  if(!mouseIsPressed){
    strokeWeight(d + random(0,5));
    point(pmouseX, pmouseY, mouseX, mouseY,);
  }else{
    rectMode(CENTER);
    strokeWeight(random(5,20) - d);
    fill(random(20,200), d, random(100,230))
    rect(pmouseX, pmouseY, mouseX, mouseY,);
  }

}