let pessoas = parseInt(prompt("Informe a quantidade de pessoas na turma:"));
let soma = 0;

for (let i = 1; i <= pessoas; i++) {
    let idade = parseInt(prompt("Digite a idade da pessoa:"));
    soma += idade;
}

let media = soma / pessoas;
let classificacao;

if (media >= 0 && media <= 25) {
    document.write("A média de idade da turma é de "+media+". Essa é uma turma jovem.")
} else if (media >= 26 && media <= 60) {
    document.write("A média de idade da turma é de "+media+". Essa é uma turma adulta.")
} else {
    document.write("A média de idade da turma é de "+media+". Essa é uma turma idosa.")
}