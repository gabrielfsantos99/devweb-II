let turno = window.prompt('Insira a sigla referente ao seu turno');
let salariomin = parseFloat(window.prompt('insira o valor do salario minimo:'));
let categoria = window.prompt('insira a sigla correspondente a sua categoria');
let horaTrabalhada = parseFloat(window.prompt('qual a quantidade de horas trabalhadas?'));

let salariopc, salario, auxilio, valorHora, valorFinal;

switch (categoria) {
    case 'f':
        if (turno === 'n') {
            salariopc = 0.2;
        } else {
            salariopc = 0.1;
        }
        break;
    case 'g':
        salariopc = 0.4;
        break;
}

salario = salariomin + (salariomin * salariopc);

switch (true) {
    case salario <= 800:
        auxilio = salario * 0.25;
        break;
    case salario > 800 && salario <= 1200:
        auxilio = salario * 0.2;
        break;
    case salario > 1200:
        auxilio = salario * 0.15;
        break;
}

valorHora = salario / horaTrabalhada;
valorFinal = salario + auxilio;

document.write(`Quantidade de horas trabalhadas: ${horaTrabalhada}<br> 
                O valor da hora trabalhada: ${valorHora}<br> 
                O valor do salario inicial é igual a: ${salario}<br> 
                O valor do auxilio é igual a: ${auxilio}<br> 
                Portanto, o valor final é: ${valorFinal}`);
