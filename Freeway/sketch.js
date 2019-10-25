function setup() {
 createCanvas(600, 400);
  trilha.setVolume(0.3);
  trilha.loop();
}

function draw(){
  if(frameCount > 400){ // +/= 8s
    if(meuPlacar < 5 && placarOponente <= 5)
    jogar();
    else
      verificaVencedor();
  }else{
    telaInicial();
  }
}

function verificaVencedor(){
  if(placarOponente  >= 5)
    vacaVencedora(); //Tela Final
  else
    touroVencedor(); //Tela Final
}

function vacaVencedora(){
  vitoria.play();
  background("Cian");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("Black");
  textSize(45);
  text("Vaca Venceu" ,300, 190);
  image(imgVaca, 300, 200, 200, 200);
}

function touroVencedor(){
  vitoria.play();
  background("DarkOrchid");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("Green");
  textSize(45);
  text("Touro Venceu" ,300, 190);
  image(imgTouro, 300, 200, 200, 200);
}


function telaInicial(){
  background("black");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("Blue");
  textSize(45);
  text("Jogo da 1º de Maio",300, 190);
  textSize(24);
  text("Desenvolvido por Kamikaze_Gm",300, 230);
}

function jogar(){
  background(imgEstrada);
  movimentarVaca();
  mostarVaca();
  mostrarCarros();
  movimentaCarros();
  mostraPlacar();
  pontuar();
  atropelamento();
}

