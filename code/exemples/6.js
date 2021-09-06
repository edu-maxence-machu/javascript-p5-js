
function setup(){
    createCanvas(windowWidth, windowHeight);
    noFill();
}

function draw(){
    background(255);

    for(x = 30; x < width - 30; x += 50){
        for(y = 30; y < height - 30; y += 50){
            line(x-10, y - 10, x + 5, y + 10);
            line(x + 10, y + 10, x - 5, y - 10);
            
            ellipse(x, y, 15, 15)
            ellipse(x + 5, y, 15, 15)
        }   
    }
}