let litros= parseFloat(prompt("Informe a quantidade de litros:"))
let tipo= prompt("Informe o tipo de combustível: (A - Álcool / G - Gasolina)").toUpperCase();
let valor= 0;

if (tipo == "A") {
    if (litros <= 20) {
        valor= litros * 1.9 * 0.97;
      } else {
        valor= litros * 1.9 * 0.95;
      }
} 
else if (tipo == 'G') {
      if (litros <= 20) {
        valor= litros * 2.5 * 0.96;
      } else {
        valor= litros * 2.5 * 0.94;
    }
}

document.write("Valor total a ser pago: R$"+ valor.toFixed(2));