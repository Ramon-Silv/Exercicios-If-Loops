let CD = parseInt(prompt("Informe a quantidade de CDs"));
let total = 0;

for (let i = 1; i <= CD; i++) {
    let valor = parseFloat(prompt("Informe o valor " + i + " CD:"));
    total += valor;
}

let medio = total / CD;

document.write("Valor investido: R$ " + total.toFixed(2) + "<br>Valor médio por CD: R$ " + medio.toFixed(2));