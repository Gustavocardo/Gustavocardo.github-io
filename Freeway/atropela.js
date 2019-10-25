let atropelaVaca = false;
let atropelaTouro = false;

function atropelamento(){
  for(let i=0; i<imgCarro.length; i++){
   
    atropelaVaca = collideRectRect(xVaca, yVaca, 28, 28, xCarro[i], yCarro[i], 50,25);
    
    if(atropelaVaca){
    //VacaAtropelada
      yVaca = 367;
      if(placarOponente > 0 )
        placarOponente -= 1;
    }
    
    atropelaTouro = collideRectRect(xTouro, yTouro, 28, 28, xCarro[i], yCarro[i], 50, 25);
    
      if(atropelaTouro){
    //Touro Atropelado
        yTouro = 367;
      if(meuPlacar > 0 )
        meuPlacar -= 1;

          
  }//for   
}
}//atropelamento