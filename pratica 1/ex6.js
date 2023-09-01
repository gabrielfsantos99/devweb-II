// Função para converter um número de mês em texto
function numeroParaMes(numero) {
    const meses = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    return meses[numero - 1]; // Os meses em JavaScript são indexados a partir de 0
}

// Função para converter uma data no formato "dd/mm/aaaa" em extenso
function dataPorExtenso(data) {
    const partes = data.split('/'); // Divide a data em dia, mês e ano
    if (partes.length === 3) {
        const dia = parseInt(partes[0], 10);
        const mes = parseInt(partes[1], 10);
        const ano = partes[2];

        // Validação do dia e mês
        if (dia > 0 && dia <= 31 && mes > 0 && mes <= 12) {
            const mesPorExtenso = numeroParaMes(mes);
            return `${dia} de ${mesPorExtenso} de ${ano}`;
        } else {
            return 'Data inválida';
        }
    } else {
        return 'Formato de data inválido';
    }
}

// Solicita a data ao usuário
const dataEntrada = window.prompt('Digite uma data no formato "dd/mm/aaaa":');

// Verifica se a entrada não é nula ou vazia antes de prosseguir
if (dataEntrada !== null && dataEntrada !== '') {
    const dataExtenso = dataPorExtenso(dataEntrada);
    document.write(`A data por extenso é: ${dataExtenso}`);
} else {
    document.write('Entrada inválida.');
}

