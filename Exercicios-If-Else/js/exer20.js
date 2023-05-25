let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

let conta = prompt(
  "Qual operação deseja realizar?\n 1. Soma\n 2. Subtração\n 3. Multiplicação\n 4. Divisão"
);

let resultado;
let frase = "";

switch (conta) {
  case "1": resultado = numero1 + numero2;
    break;
  case "2": resultado = numero1 - numero2;
    break;
  case "3": resultado = numero1 * numero2;
    break;
  case "4": resultado = numero1 / numero2;
    break;
  default: alert("Operação inválida");
}

if (resultado %2 == 0) {
  frase += "Esse número é par, ";
} else {
  frase += "Esse número é ímpar, ";
}

if (resultado >= 0) {
  frase += "positivo, ";
} else {
  frase += "negativo, ";
}

if (resultado == Math.round(resultado)) {
  frase += "e inteiro.";
} else {
  frase += "e decimal.";
}

document.write("O resultado da operação dos números " +numero1+" e "+numero2+" é " +resultado+". " +frase);