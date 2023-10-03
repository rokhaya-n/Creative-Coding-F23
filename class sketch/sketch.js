//p5 kept flagging the curly brackets--not sure why

let square;

//class for Toast

class Toast {
  // calling the constructor
  constructor() {
    this.size = random(5,15)
    this.color = color(200,200,200);
    this.stroke = stroke(100,100,100);
    this.strokeWeight = strokeWeight(5);
    this.x = random(this.size, width - this.size);
    this.y = random(this.size, height - this.size);
    this.xDir = random(-10,10)
    this.yDir = random(-10,10)
  }
}


properties() {
    this.x += this.xDir;
    this.y += this.yDir;
  
}
  

look() {
  rect(this.x, this.y, this.size);

}

boundaries() {
  if(this.x >= width - this.size / 2 || this.x <= this.size / 2) {
  //to flip the direction around set up xDir to = xDir * -1
    this.xDir *= 0.5
  }

    if(this.y >= height - this.size / 2 || this.y<= this.size / 2) {
    this.yDir = *= 0.5
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  //setting up
  square = new Toast();

  fill(this.color);
  stroke(this.stroke);
  strokeWeight(this.strokeWeight);
  
}

function draw() {
  background(random(255),random(255),random(255));

  Toast.properties
  Toast.boundaries
  Toast.look
}