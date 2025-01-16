const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};


let totalFaturamento = 0;
for (let estado in faturamento) {
  totalFaturamento += faturamento[estado];
}


console.log("Percentual de representação por estado:");
for (let estado in faturamento) {
  let percentual = (faturamento[estado] / totalFaturamento) * 100;
  console.log(estado + ": " + percentual.toFixed(2) + "%");
}
