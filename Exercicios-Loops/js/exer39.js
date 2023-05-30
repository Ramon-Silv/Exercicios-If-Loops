let valorDivida = parseFloat(prompt("Informe o valor da dívida:"));
let tabelaParcelas = [
    { parcelas: 1, juros: 0 },
    { parcelas: 3, juros: 10 },
    { parcelas: 6, juros: 15 },
    { parcelas: 9, juros: 20 },
    { parcelas: 12, juros: 25 }
];//objetos dentro de um array

for (let i = 0; i < tabelaParcelas.length; i++) {
    let parcelas = tabelaParcelas[i].parcelas;
    let juros = tabelaParcelas[i].juros;
    let valorJuros = (valorDivida * juros) / 100;
    let valorParcela = (valorDivida + valorJuros) / parcelas;

    document.write("Valor da Dívida: R$ " + valorDivida.toFixed(2) + "<br/>");
    document.write("Valor dos Juros: R$ " + valorJuros.toFixed(2) + "<br/>");
    document.write("Quantidade de Parcelas: " + parcelas + "<br/>");
    document.write("Valor da Parcela: R$ " + valorParcela.toFixed(2) + "<br/><br/>");
}