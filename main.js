let altura;
let peso;
let resultado;

function inicio(){
    resultado = calculo(); // Chama a função de cálculo
    alert("Seu IMC é de: " + resultado); // Mostra o resultado com um alerta na tela
}

function calculo(){
    // Repete a leitura da altura enquanto o usuário nao digitar um número válido
    while (isNaN(altura)) {
        altura = parseFloat(prompt("Digite a sua altura: "));
    }
    // Repete a leitura do peso enquanto o usuário nao digitar um número válido
    while (isNaN(peso)) {
        peso = parseFloat(prompt("Digite o seu peso: "));
    } // Enquanto o peso não for um número, pede novamente
    // Calcula o IMC
    resultado = peso / (altura * altura);
    return resultado;
}
inicio();