let nome = window.prompt('Qual o seu nome? ');
let altura = parseFloat(window.prompt('Insira a sua altura (em cm): '));
let peso = parseFloat(window.prompt('Insira o seu peso (em kg): '));

altura = altura / 100; // Convertendo para metros
let indice = peso / (altura ** 2);

let classificacao = '';

if (indice < 16) {
    classificacao = 'Baixo peso muito grave';
} else if (indice < 17) {
    classificacao = 'Baixo peso grave';
} else if (indice < 18.5) {
    classificacao = 'Baixo peso';
} else if (indice < 25) {
    classificacao = 'Peso normal';
} else if (indice < 30) {
    classificacao = 'Sobrepeso';
} else if (indice < 35) {
    classificacao = 'Obesidade grau I';
} else if (indice < 40) {
    classificacao = 'Obesidade grau II';
} else {
    classificacao = 'Obesidade grau III';
}

document.write(`${nome} possui índice de massa corporal igual a ${indice.toFixed(2)}, sendo classificado como: ${classificacao}`);
