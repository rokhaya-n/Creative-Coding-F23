
//setting as array to hold multiples 
let rectangles = [];
//10 pieces of toast
let pieces = 25

function setup() {
  createCanvas(windowWidth, windowHeight);
  //setting up
  //set up forloop to have multiple objects
  for(let bread = 0; bread < pieces ; bread++){
    //creates new instance of toast as long as there are 0 toasts, keep doing until there are as many toasts as pieces value
    rectangles [bread] = new Toast();
  }  
}

function draw() {
  background(255);
  
  for(let bread = 0; bread < pieces ; bread++){
    //square brackets used because rectangles is st up as array at the very beginning, access info inside array
    rectangles[bread].toastProperties();
    rectangles[bread].wallBoundaries();
    rectangles[bread].theAppearance();
  }
}

//class for Toast

class Toast {
  // calling the constructor
  constructor() {
    this.size = random(50,100)
    this.col = color(255,201,62);
    this.stro = color(126,67,36);
    this.strW = strokeWeight(6);
    //set up vector for x y position
    this.pos =  createVector(width / 2, height / 2);
    /*this.x = random(this.size, width - this.size);
    this.y = random(this.size, height - this.size);*/
    //set up vector for direction of toast pieces
    this.velo = createVector((random(-10,10)), (random(-10,10)));
    /*this.dirX = random(-10,10)
    this.dirY = random(-10,10)*/
  }

toastProperties() {
    this.pos.x += this.velo.x;
    this.pos.y += this.velo.y;
}  

theAppearance() {
  fill(this.col)
  stroke(this.stro)
  strokeWeight(this.strW)
  rect(this.pos.x, this.pos.y, this.size);
}

wallBoundaries() {
  if(this.pos.x >= width - this.size / 2 || this.pos.x <= this.size / 2) {
  //to flip the direction around set up xDir to = xDir * -1
    this.velo.x *= -1
    }

    if(this.pos.y >= height - this.size / 2 || this.pos.y<= this.size / 2) {
    this.velo.y *= -1
    }
  }
}