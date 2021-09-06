var img;

function preload() {
  img = loadImage("../code/exercices/mondrian.jpeg"); 
}

function setup() {
  createCanvas(722, 722);
  image(img, 0, 0);
  frameRate(2);
}

function draw() {

}

function mouseClicked() {
    console.log(`x : ${mouseX},  y : ${mouseY}`); 
    // prevent default
    return false;
  }