let salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"));
let anoContratacao = 1995;
let ano;
let porcentagem;
let aumento;
let anoAtual = new Date().getFullYear();//ano atual

let salarioAtual = salarioInicial;

for (ano = anoContratacao + 1; ano <= anoAtual; ano++) {
    porcentagem = (ano - anoContratacao) * 2;
    aumento = salarioAtual * (porcentagem / 100);
    salarioAtual += aumento;
}

document.write("Salário atual do funcionário: R$ " + salarioAtual.toFixed(2));