let numero = parseInt(prompt("Mostre a tabuada do número:"));
let inicio = parseInt(prompt("Digite o valor inicial da tabuada:"));
let fim = parseInt(prompt("Digite o valor final da tabuada:"));

document.write("Montar a tabuada do: " + numero + "<br/>Começar por: " + inicio + "<br/>Terminar em: " + fim + "<br/><br/>");

for (let i = inicio; i <= fim; i++) {
    document.write(numero + " X " + i + " = " + (numero * i) + "<br>");
}