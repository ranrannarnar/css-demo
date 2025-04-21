let x, y;

function setup()
{
  createCanvas(1000, 1000);
  rectMode(CENTER);
  
}
function draw(){
  background(255);
  push();
  translate(25,25);
  for (let i = 20; i < width; i = i + 100){
    for(let j = 20; j < height; j = j+100){     
    house(i,j);  
  }  
 }
 pop();
}

function house(x, y)
{
  push();
  translate(x, y);
  rotate(-radians(frameCount * 2  % 360));
  triangle(-15, -15, 0, -30, 15, -15);
  rect(0, 0, 30, 30);
  rect(0, 8, 10, 15); 
  pop();
}