// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
function setup(){
  createCanvas(200, 200);
  stroke(255, 0, 0)
  count = 50;
  cycle = 100;
}

function draw(){
  background(255, 150, 150);
  if ( keyIsDown( ' '.charCodeAt(0) ) ){
    count = (count + 1.5) % cycle;
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
  fill(255, 125, 125)
  ellipse(width / 2, height / 2, size);
}