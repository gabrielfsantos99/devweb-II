let numero1 =  Number (window.prompt('insira o primeiro numero'));
let operador = window.prompt('escreva qual o operador matematico deseja usar');
let numero2 = Number (window.prompt('insira o 2 numero'));

if ( operador == "soma" ){
    resultado = numero1 + numero2;
}

if (operador == 'subtração' || operador == "subtracao"){
    resultado = numero1 - numero2;
}

document.write(`O resultado é: ${resultado}`);
