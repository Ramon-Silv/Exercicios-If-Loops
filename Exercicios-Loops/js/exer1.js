let nota = parseFloat(prompt("Digite uma nota entre 0 e 10:"));

while (nota < 0 || nota > 10) {
  alert("Nota inválida!");
  nota = parseFloat(prompt("Digite uma nota entre 0 e 10:"));
}

document.write("Nota válida! A nota informada é "+nota);