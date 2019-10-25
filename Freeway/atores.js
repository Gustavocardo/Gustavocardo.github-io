function mostarVaca(){
  image(imgVaca, xVaca,yVaca, 30, 30);
  image(imgTouro, xTouro,yTouro, 30, 30);

}

function movimentarVaca(){
  //vacaE
  if(keyIsDown(87)){//Para cima
    if(yVaca > 0)//Teto
      yVaca -= 5;
    }
  if(keyIsDown(83)){//Para baixo
    if(yVaca < 365)//Chão
      yVaca += 5;
  }
  //VacaE
   if(keyIsDown(UP_ARROW)){//Para cima
    if(yTouro > 0)//Teto
      yTouro -= 5;
    }
  if(keyIsDown(DOWN_ARROW)){//Para baixo
    if(yTouro < 365)//Chão
      yTouro += 5;
  }
}