alert("Responda as seguintes perguntas com sim ou não");

let pergunta1 = prompt("Telefonou para a vítima? (sim ou não)").toLowerCase();
let pergunta2 = prompt("Esteve no local do crime? (sim ou não)").toLowerCase();
let pergunta3 = prompt("Mora perto da vítima? (sim ou não)").toLowerCase();
let pergunta4 = prompt("Devia para a vítima? (sim ou não)").toLowerCase();
let pergunta5 = prompt("Já trabalhou com a vítima? (sim ou não)").toLowerCase();

let cont = 0;

if (pergunta1 == "sim"){
  cont++;
}
if (pergunta2 == "sim"){
  cont++;
}
if (pergunta3 == "sim"){
  cont++;
}
if (pergunta4 == "sim"){
  cont++;
}
if (pergunta5 == "sim"){
  cont++;
}
if (cont == 2) {
  document.write("Você é suspeito(a) do crime.");
} else if (cont >= 3 && cont <= 4) {
  document.write("Você é cúmplice do crime.");
} else if (cont == 5) {
  document.write("Você é o assassino(a)!");
} else {
  document.write("Você é inocente.");
}