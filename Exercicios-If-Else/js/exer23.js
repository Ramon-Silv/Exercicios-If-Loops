let morango = parseFloat(prompt("Informe quantos Kg de morango deseja:"));
let macas = parseFloat(prompt("Informe quantos Kg de maçã deseja:"));
let precoMorango, precoMaca= 0;

if (morango <= 5) {
    precoMorango = 2.5;
} else {
    precoMorango = 2.2;
}
let valorMorango = morango * precoMorango;

if (macas <= 5) {
    precoMaca = 1.8;
} else {
    precoMaca = 1.5;
}
let valorMaca = macas * precoMaca;
let total = valorMorango + valorMaca;

if (morango + macas > 8 || total > 25) {
    total = total - (total * (0.10)); // Aplica o desconto de 10%
}
document.write("O valor a ser pago é de R$" + total.toFixed(2));