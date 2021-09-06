var img;

function preload() {
  img = loadImage("../code/exercices/chateau-et-soleil.jpeg"); 
}

function setup() {
  createCanvas(600, 600);

  console.log(img)
  image(img, 0, 0);
  frameRate(2);

}

function draw() {

}

function mouseClicked() {
    console.log(`x : ${mouseX}, y : ${mouseY}`); 
    // prevent default
    return false;
  }