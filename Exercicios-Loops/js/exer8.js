let soma = 0;
for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt("Digite um número:"));
  soma += numero;
}
let media= soma/5;

document.write("A soma dos números é "+soma+" e a média desses números é "+media);