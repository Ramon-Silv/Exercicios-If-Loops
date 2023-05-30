let codigoMaisAlto, codigoMaisBaixo, codigoMaisGordo, codigoMaisMagro;
let alturaMaisAlto = 0;
let alturaMaisBaixo = Infinity;
let pesoMaisGordo = 0;
let pesoMaisMagro = Infinity;
let somaAlturas = 0;
let somaPesos = 0;
let i = 0;

let codigo = parseInt(prompt("Informe o código do cliente (ou digite 0 para encerrar):"));

while (codigo !== 0) {
  let altura = parseFloat(prompt("Informe a altura do cliente em metros:"));
  let peso = parseFloat(prompt("Informe o peso do cliente em quilogramas:"));

  if (altura > alturaMaisAlto) {
    alturaMaisAlto = altura;
    codigoMaisAlto = codigo;
  }

  if (altura < alturaMaisBaixo) {
    alturaMaisBaixo = altura;
    codigoMaisBaixo = codigo;
  }

  if (peso > pesoMaisGordo) {
    pesoMaisGordo = peso;
    codigoMaisGordo = codigo;
  }

  if (peso < pesoMaisMagro) {
    pesoMaisMagro = peso;
    codigoMaisMagro = codigo;
  }

  somaAlturas += altura;
  somaPesos += peso;

  i++;

  codigo = parseInt(prompt("Informe o código do cliente (ou digite 0 para encerrar):"));
}

if (i > 0) {
  let mediaAlturas = somaAlturas / i;
  let mediaPesos = somaPesos / i;

  document.write("Cliente mais alto: " + codigoMaisAlto + ". Altura " + alturaMaisAlto.toFixed(2) + "m<br>");
  document.write("Cliente mais baixo: " + codigoMaisBaixo + ". Altura " + alturaMaisBaixo.toFixed(2) + "m<br>");
  document.write("Cliente mais gordo: " + codigoMaisGordo + ". Peso " + pesoMaisGordo.toFixed(2) + "Kg<br>");
  document.write("Cliente mais magro: " + codigoMaisMagro + ". Peso " + pesoMaisMagro.toFixed(2) + "Kg<br>");
  document.write("Média das alturas: " + mediaAlturas.toFixed(2) + "m<br>");
  document.write("Média dos pesos: " + mediaPesos.toFixed(2) + "Kg");
} else {
  document.write("Código não cadastrado.");
}