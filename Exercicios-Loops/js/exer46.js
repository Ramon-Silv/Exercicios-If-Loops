let n = parseInt(prompt("Informe a quantidade de termos:"));
let soma = 0;
let termos = "";

for (let i = 1; i <= n; i++) {
  let numerador = i;
  let denominador = 2 * i - 1;
  soma += numerador / denominador;
  termos += numerador + "/" + denominador;
  if (i < n) {
    termos += " + ";
  }
}

document.write(termos + "<br>");
document.write("Soma: " + soma.toFixed(2));