let numero = parseInt(prompt("Digite um número:"));
let divisao = [];

for (let i = 2; i <= numero; i++) {
  if (numero % i == 0) {
    divisao.push(i);
  }
}

if (divisao.length > 1) {
  document.write(numero + " não é um número primo. É divisível por: " + divisao.join(", "));
} else {
  document.write(numero + " é um número primo.");
}