const Departamento = require('./departamento');

(async () => {
    const database = require('./db');
    const Pessoas = require('./pessoas');
    const resultado = await database.sync();

    //CREATE
    const pessoa = await Pessoas.create({
        nome: 'Adalberto',
        nascimento: '1993-10-12',
        cargo: 'Estagiário',
        salario: 1000.00
    });
    const departamento = await Departamento.create({
        dep_nome: 'TI',
        dep_local: 'São Paulo',
    });

const resultadoP1 = await Pessoas.create({
        nome: 'Bruna',
        nascimento: '1999-07-05',
        cargo: 'Estagiário',
        salario: 1000.00
    });
const resultadoD1 = await Departamento.create({
        dep_nome: 'FINANCEIRO',
        dep_local: 'Rio de Janeiro',
    });

    //READ
    const pessoas = await Pessoas.findAll();
    console.log(pessoas);
    const departamentos = await Departamento.findAll();
    console.log(departamentos);

    //UPDATE
    const pessoa1 = await Pessoas.findByPk(1);
    pessoa.nome = 'João Silva';
    const resultadoUpdate = await pessoa.save();
    console.log(resultadoUpdate);
    const departamento1 = await Departamento.findByPk(1);
    departamento.dep_nome = 'TECNOLOGIA DA INFORMAÇÃO';
    const resultadoUpdateD = await departamento.save();
    console.log(resultadoUpdateD);

    //DELETE
    const pessoa2 = await Pessoas.findByPk(1);
    pessoa2.destroy();
    const departamento2 = await Departamento.findByPk(1);
    departamento2.destroy();
})();