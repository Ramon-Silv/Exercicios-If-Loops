let notas = parseInt(prompt("Informe quantas notas:"));
let soma = 0;
let numero=[];

for (let i = 1; i <= notas; i++) {
  let nota = parseFloat(prompt("Digite a nota:"));
  numero.push(nota);
  soma += nota;
}

let media = soma / notas;
document.write("As notas digitadas foram "+numero.join(", ")+"<br/>Média das notas: "+ media);