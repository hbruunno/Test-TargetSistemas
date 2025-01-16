import { readFile } from 'fs';

readFile('dados.json', 'utf8', (err, data) => {    

    const faturamentoMensal = JSON.parse(data);

    //filro dos valores maior que zero
    const faturamentoFiltrado = faturamentoMensal.filter(item => item.valor > 0).map(item => item.valor);

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

// para rodar o programa: node questão3.js