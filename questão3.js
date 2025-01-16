import { readFile } from 'fs';

readFile('dados.json', 'utf8', (err, data) => {    

    const faturamentoMensal = JSON.parse(data);

    const faturamentoFiltrado = faturamentoMensal.map(item => item.valor);

    //calcula o menor e maior faturamento
    const menorFaturamento = Math.min(...faturamentoFiltrado);
    const maiorFaturamento = Math.max(...faturamentoFiltrado);

    //calcula a média mensal
    const mediaMensal = faturamentoFiltrado.reduce((acc, val) => acc + val, 0) / faturamentoFiltrado.length;

    //conta os dias acima da média mensal
    const diasAcimaMedia = faturamentoFiltrado.filter(valor => valor > mediaMensal).length;

    console.log("Menor faturamento diario:", menorFaturamento);
    console.log("Maior faturamento diario:", maiorFaturamento);
    console.log("Número de dias acima da média mensal:", diasAcimaMedia);
});

// Para rodar o programa, abra o terminal e digite: node questão3.js