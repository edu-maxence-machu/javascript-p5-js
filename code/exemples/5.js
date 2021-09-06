function setup() {
    createCanvas(800, 600);
}
function draw() {
    background(200);
    stroke(100);
    strokeWeight(1);

    // Dessiner des ellipses - cercles
    ellipse(400, 300, 400, 400);
    
    ellipse(120, 120, 110, 110);
    ellipse(400, 285, 18, 18);

    // Dessiner un point 
    point(300, 300);

    // Dessiner une ligne
    line(20, 50, 760, 510);

    // Dessiner un rectangle
    rect(600, 10, 160, 100);

    // Forme complexe
    //quad(150, 100, 250, 200, 600, 400, 450, 100);

    // Les contours
    stroke(200);
    strokeWeight(2);
    ellipse(444, 333, 110, 110);
    strokeWeight(4);
    ellipse(500, 480, 110, 110);

}