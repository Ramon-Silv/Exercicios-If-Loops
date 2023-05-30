let n = parseInt(prompt("Digite a quantidade de termos:"));
let soma = 0;

for (let i = 1; i <= n; i++) {
  let resultado = i / (2 * i - 1);
  soma += resultado;
}

document.write("A soma da série é: " + soma);