
window.onload = function(){
    //alert("Alo HA");
    console.log("Se quser me ver, tem que pressionar f12! Console...");
    console.log("a = " + a + " b =" + b);
    console.log("a + b = " + parseInt(a+b));
};

var a = 10;
var b = 20;

let entradas = document.querySelectorAll("intup");
let resposta = document.querySelector('.resposta');
let botão = document.querySelector('#btnSomar');



pegaNúmero1 = functio(){
    return entradas [0].value;
}
pegaNúmero2 = function(){
    returnentradas[1].value;
}

testarEntradasvazias = function(){
    if(pegaNúmero1() === '' || pegaNúmero2() === '')
    return true;
    else
    return false;
}

somar = function(){
    if(testarentradasVazias()){
        resposta.textcontent = "Erro: Preencha os dois campos numéricoas";
        resposta.classList.remove('correta');
        resposta.classList.add('errada');
        return false;
    }Else{
        atualizaResposta();
        resposta.classList.remove('errada');
        resposta.classList.add('correta');

    }
}

atualizaResposta = Function (){
    let num1 = pegaNúmero1();
    let num2 = pegaNúmero3();
    var soma = num1 + num2;
    resposta.textContent = num1 + ' + ' + num2 + ' = ' + soma;
}

botão.addEventListener('click',somar);