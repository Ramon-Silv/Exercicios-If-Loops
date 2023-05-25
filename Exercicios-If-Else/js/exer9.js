let hora = parseFloat(prompt("Informe a quantidade de hora(s) trabalhada(s):"));
let valor = parseFloat(prompt("Informe o valor da hora de trabalho:"));

let salarioBruto= hora * valor;
document.write("Salário Bruto: R$"+salarioBruto+"</br>");

let IR = 0;
if (salarioBruto <= 900) {
  IR = 0;
  document.write("Imposto de Renda (isento): R$"+IR+".</br>");
} else if (salarioBruto <= 1500) {
  IR = salarioBruto * (5/100);
  document.write("Imposto de Renda (5%): R$"+IR+".</br>");
} else if (salarioBruto <= 2500) {
  IR = salarioBruto * (10/100);
  document.write("Imposto de Renda (10%): R$"+IR+".</br>");
} else if(salarioBruto > 2500){
  IR = salarioBruto * (20/100);
  document.write("Imposto de Renda (20%): R$"+IR+".</br>");
}

let inss = salarioBruto * 0.10;
document.write("INSS (10%): R$"+inss+".</br>");
let fgts = salarioBruto * 0.11;
document.write("FGTS (11%): R$"+fgts+".</br>");
let desconto = IR + inss + (salarioBruto * (3/100)); 
document.write("Total de descontos: R$"+desconto+".</br>");
let salarioLiquido = salarioBruto - desconto;
document.write("Salário Líquido: R$"+salarioLiquido+".");