let nome = window.prompt('qual o seu nome?');
let idade = window.prompt('qual a sua idade?');
let classificacao = '' ;

if (idade >= 0 && idade <=15 ){
    classificacao = 'criança';
}
else if (idade < 30 ){
    classificacao = 'jovem';
}
else if (idade < 60 ){
    classificacao = 'adulto';
}
else if (idade >= 60){
    classificacao = 'idoso';
}

document.write(`você está classificado como: ${classificacao}`);