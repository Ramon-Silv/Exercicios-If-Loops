let turma = parseInt(prompt("Informe a quantidade de turmas:"));
let alunos = 0;

for (let i = 1; i <= turma; i++) {
    let alunosTurma = parseInt(prompt("Informe a quantidade de alunos da turma "+i+":"));

    while (alunosTurma > 40) {
        alert("A quantidade de alunos por turma não pode ser maior que 40!");
        alunosTurma = parseInt(prompt("Informe a quantidade de alunos da turma "+i+":"));
    }
    alunos += alunosTurma;
}
let media= alunos / turma;

document.write("A média de alunos por turma é: " + media.toFixed(2));