// -
// Prima variazione 10PRINT by Ilenia Balella [10PRINT, commodore64]
// 2020 © Ilenia Balella @ileniab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/ileniab
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// 10PRINT book for https://nickm.com/trope_tank/10_PRINT_121114.pdf
// —
//


let x=0;   //coordinata x del rettangolo
let y=0;   //coordinata y del rettangolo
let w=26;  //larghezza rettangolo
let h=26;  //altezza rettangolo
let b="#4E93C4";  //color blu
let v="#6E6CAD";  //color viola
let r="#DF686A";  //color rosso
let g="#E3C368";  //color giallo
let t=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
   background('#F0D7D3');
   noStroke();
  
  //frameRate(5);
}

function draw() {
  x+=w;
 
  if (random(2) <= 0.5){
  fill(b);  
  rect(x,y,w,h);
  
  }
  else if (random(2) > 0.5 && random(2) <= 1){
  fill(r);
  rect(x,y,w,h);
  }
  else if (random(2) > 1 && random(2) <= 1.5){
  fill(v);
  rect(x,y,w,h);
  }
  else {
  fill(g);
  rect(x,y,w,h);
  }
  
  if (x+w>windowWidth) {
    x=0;
    y+=h;}
  if (y+h>windowHeight){
   
    x=0;
    y=0;
    }
  
}
