// 最終課題を制作しよう

function setup() {
  createCanvas(400, 400);
  count = 50;
  cycle = 100;
}



function draw() {
  background(0, 160, 250);
  for(var i = 0; i < 12; i++){
    var theta = TWO_PI * i / 12;
    var x = 100 + cos(theta) * 100;
    var y = 100 + sin(theta) * 100;
    strokeWeight(0);
    fill(i * 30, (255 - i * 15), 
         (255 - i * 50))
    star(x + 100, y + 100, 20);
  }
  if ( keyIsDown( ' '.charCodeAt(0) ) ){
    count = (count + 2) % cycle;
  }
  else{
    count = (count + 1) % cycle;
  }
  let size;
  size = 10
  if(count >= 40){
    size = count
  }
  else{
    size = cycle - 1.5 * count
  }
fill(30, 200, 70)
  ellipse(width / 2, height / 2, size);
  }

function star(cx, cy, r){
  beginShape();
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2　/ 5 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y)
  }
   endShape(CLOSE)
}