let total = 0;
let produto = 0;
let i = 1;

while (true) {
    produto = parseFloat(prompt("Informe o valor do " + i + " Produto (ou 0 para finalizar):"));

    if (produto == 0) {
        break;
    }
    total += produto;
    i++;
}
document.write("Total: R$" + total.toFixed(2) + "<br>");

let dinheiro = parseFloat(prompt("Valor em dinheiro fornecido pelo cliente:"));
document.write("Dinheiro: R$" + dinheiro.toFixed(2) + "<br>Troco: R$" + (dinheiro - total).toFixed(2));