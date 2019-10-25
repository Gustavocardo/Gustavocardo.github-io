function pontuar() {
  if(yTouro < 5){
    meuPlacar += 1;
    ponto.play();
    yTouro = 368
    atropelou.play();
  }
   if(yVaca < 5){
    placarOponente += 1;
    ponto.play();
    yVaca = 368
    atropelou.play();
  }
}

function mostraPlacar(){
  textSize(30);
  
  fill("blue");
  text(meuPlacar, 450, 30);
  
  fill("green");
  text(placarOponente, 150, 30);
    
}
