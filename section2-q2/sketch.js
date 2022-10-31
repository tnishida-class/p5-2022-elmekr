// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if((i + j) % 2 == 0){
        fill(255)
      }
      else{
          fill(140, 140, 140)
        }
        rect(size * i, size * j, 25, 25)
      }
    }
  for(let k = 0; k< 4; k++){
    fill(255, 0, 0)
    ellipse(37.5 + 50 * k, 12.5, 22)
    ellipse(12.5 + 50 * k, 37.5, 22)
    ellipse(37.5 + 50 * k, 62.5, 22)
    fill(0)
    ellipse(12.5 + 50 * k, 137.5, 22)
    ellipse(37.5 + 50 * k, 162.5, 22)
    ellipse(12.5 + 50 * k, 187.5, 22)
  }
}