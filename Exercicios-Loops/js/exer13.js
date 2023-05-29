let base = parseInt(prompt("Digite a base da operação:"));
let expoente = parseInt(prompt("Digite o expoente da operação:"));
let resultado = base;

for (let i = 1; i < expoente; i++) {
  resultado *= base;
}

document.write("O número "+base + " elevado a " + expoente + " é igual a " + resultado);