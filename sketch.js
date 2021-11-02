var bottles

function setup() {
  createCanvas(windowWidth,windowHeight);
  bottles = loadImage("bottles.jpg")
}

function draw() {
  background(bottles);  
  drawSprites();
}