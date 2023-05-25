let salario = parseFloat(prompt("Digite o salário do colaborador:"));
let porcentagem;

if (salario <= 280.00) {
    porcentagem = 20;
} else if (salario <= 700.00) {
    porcentagem = 15;
} else if (salario <= 1500.00) {
    porcentagem = 10;
} else {
    porcentagem = 5;
}

let aumento = (salario * porcentagem) / 100;
let novoSalario = salario + aumento;

document.write("Salário antes do reajuste: R$" + salario+"</br>");
document.write("Percentual de aumento: " + porcentagem + "%</br>");
document.write("Aumento em reais: R$" + aumento+"</br>");
document.write("Salário após o aumento: R$" + novoSalario);