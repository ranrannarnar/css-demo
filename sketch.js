function setup() {
    createCanvas(500, 500);
    noStroke();
  }
  
  function draw() {
    let x = mouseX;
    let y = mouseY;
    let ix = width-mouseX;
    let iy = height - mouseY;
    
    background(220);
    fill(255, 150);
    ellipse(x, x, x, x);
    fill(0, 159);
    ellipse(ix, ix, ix, ix);
    
  }