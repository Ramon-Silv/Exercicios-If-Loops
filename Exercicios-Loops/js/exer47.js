let n = parseInt(prompt("Digite a quantidade de termos:"));
let h = 0;

for (let i = 1; i <= n; i++) {
  h += 1 / i;
}

document.write("Valor de H com " + n + " termos: " + h.toFixed(2));