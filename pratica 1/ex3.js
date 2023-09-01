let quantidade = window.prompt('Insira a quantidade de peças desejada ');
let restreamento  = parseFloat(window.prompt('Deseja que a carga seja rastreada? (obs: o valor adicional para a inclusão deste serviço é R$200 reais) '));
let regiao = parseFloat(window.prompt('insira o codigo correspondente á região de entrega'));
let quilometro = parseFloat(window.prompt('insira a distancia do local de entrega. (em KM)'));
let valorgasolina = parseFloat(window.prompt('insira o valor do litro de gasolina'));

let valortotal = '';
let valortransporte = '';

quilometro = quilometro * valorgasolina

if (quantidade <=1000 && regiao == 1){
    valortransporte = (quantidade * 1 );
}
else if (quantidade <=1000 && regiao == 2){
    valortransporte = (quantidade * 1.2 );
}
else if (quantidade <=1000 && regiao == 3){
    valortransporte = (quantidade * 1.3 );
}


else if (quantidade >1000 && regiao ==1){
    valortransporte = ((1000 *1) + (quantidade-1000)*0.9);
}
else if (quantidade >1000 && regiao ==2){
    valortransporte = ((1000 *1.2) + (quantidade-1000)*(1.2 * 0.9));
}
else if (quantidade >1000 && regiao ==3){
    valortransporte = ((1000 *1.3) + (quantidade-1000)*(1.3 * 0.87));
}

if (restreamento == 'sim'){
    valortotal = valortransporte + quilometro + 200;
}
else {
    valortotal = valortransporte + quilometro;
}

document.write(`Rastreamento foi pedido? ${rastreamento}<br> o valor fixo do frete das peças é igual a: ${valortransporte}<br> o valor do frete por quilometro é igual a: ${quilometro} <br> portanto o valor final é: ${valortotal} `);