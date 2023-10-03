//p5 kept flagging the curly brackets--not sure why

let rectangle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //setting up
  rectangle = new Toast();
  
}

function draw() {
  background(random(255),random(255),random(255));

  Toast.toastProperties
  Toast.wallBoundaries
  Toast.theAppearance
}

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
    this.dirX = random(-10,10)
    this.dirY = random(-10,10)
  }
}


toastProperties() {
    this.x += this.dirX;
    this.y += this.Diry;
  
}
  

theAppearance() {
  rect(this.x, this.y, this.size);

}

wallBoundaries() {
  if(this.x >= width - this.size / 2 || this.x <= this.size / 2) {
  //to flip the direction around set up xDir to = xDir * -1
    this.xDir *= 2
  }

    if(this.y >= height - this.size / 2 || this.y<= this.size / 2) {
    this.yDir *= 2
  }
}
