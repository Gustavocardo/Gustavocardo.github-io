function mostrarCarros(){
  
  for(let i=0; i < imgCarro.length; i++)
 image(imgCarro[i], xCarro[i],yCarro[i], 50, 25)
}




function movimentaCarros(){
  
  for(let i=0; i <imgCarro.length; i++){
  if(i < 3){
     //Carros para esquerda
      xCarro[i] -= velocidadeCarro[i];
    //Carro para esquerda
      if(xCarro[i] < -55){
    xCarro[i] = 605;
  velocidadeCarro[i] = ceil(random(4,0));
 }

     
     }else{
    //Carros para Direita
   xCarro[i] += velocidadeCarro[i];
      if(xCarro[i] > 605){
        xCarro[i]= -65;
        velocidadeCarro[i] = ceil(random(4,0));
  }
     
     }
  }
  
}  