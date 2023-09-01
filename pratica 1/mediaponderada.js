let nota1 = window.prompt('qual foi a sua nota em atividades praticas no laboratorio?');
let nota2 = window.prompt('qual a sua nota de prova no semestre?');
let nota3 = window.prompt('qual a sua nota de trabalhos teoricos?');

let classificacao = (((nota1 * 2)+(nota2 * 5)+(nota3 * 3))/10) ;
x = classificacao

if (classificacao >= 0 && classificacao <= 5 ){
    classificacao = 'f';
}
else if (classificacao <= 6 ){
    classificacao = 'e';
}
else if (classificacao <= 7 ){
    classificacao = 'd';
}
else if (classificacao <= 8 ){
    classificacao = 'c';
}
else if (classificacao <= 9 ){
    classificacao = 'b';
}
else if (classificacao >9 ){
    classificacao = 'a';
}

document.write(`Você está classificado como: ${classificacao}<br>Sua média é: ${x}`);
