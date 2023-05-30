let numero = parseInt(prompt("Digite um número:"));
let invertido = 0;

document.write("Número digitado: " + numero+"<br/>");
while (numero > 0) {
  let digito = numero % 10;
  invertido = invertido * 10 + digito;
  numero = Math.floor(numero / 10);
}
document.write("Número invertido: " + invertido);