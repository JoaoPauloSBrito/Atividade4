let altura;
let peso;
let resultado;

let altura;
let peso;
let resultado;

function inicio(){
    resultado = calculo();
    alert("Seu IMC é de: " + resultado); // Mostra o resultado com um alerta na tela
    nivel = classificacao(resultado);
}

function calculo(){
    // Repete a leitura da altura enquanto o usuário nao digitar um número           válido
    while (isNaN(altura)) {
        altura = parseFloat(prompt("Digite a sua altura: "));
    }
    // Enquanto o peso não for um número, pede novamente  
    while (isNaN(peso)) {
        peso = parseFloat(prompt("Digite o seu peso: "));
    }
    // Calcula o IMC
    resultado = peso / (altura * altura);
    return resultado;
}
function classificacao(resultado){
    if(resultado < 18.5){
        alert("Você está abaixo do peso!");
    } else if(resultado >= 18.5 && resultado < 24.9){
        alert("Você está com o peso dentro do normal!");
    } else if(resultado >= 25 && resultado < 29.9){
        alert("Você está com sobrepeso!");
    } else if(resultado >= 30){
        alert("Você está obeso!");
    }
}
inicio();