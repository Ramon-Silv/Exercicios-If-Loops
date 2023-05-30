let gabarito = ["A", "B", "C", "D", "E", "E", "D", "C", "B", "A"];
let alunos = 0;
let maiorAcerto = 0;
let menorAcerto = 10;
let soma = 0;

while (true) {
    let acertos = 0;
    for (let i = 0; i < 10; i++) {
        let resposta = prompt("Informe a resposta da questão " + (i + 1) + ":");
        if (resposta.toUpperCase() == gabarito[i]) {
            acertos++;
        }
    }

    if (acertos > maiorAcerto) {
        maiorAcerto = acertos;
    } else if (acertos < menorAcerto) {
        menorAcerto = acertos;
    }
    alunos++;
    soma += acertos;

    let continuar = prompt("Outro aluno utilizará o sistema? (S- Sim ou N- Não)").toLowerCase();
    if (continuar != "s") {
        break;
    }
}

let media = soma / alunos;
document.write("Maior acerto: " + maiorAcerto + "<br/>");
document.write("Menor acerto: " + menorAcerto + "<br/><br/>");
document.write("Total de alunos: " + alunos + "<br/>");
document.write("Média das notas: " + media.toFixed(2) + "<br/><br/>");
document.write("Gabarito:<br/>");
for (let i = 0; i < 10; i++) {
    document.write((i + 1) + " - " + gabarito[i] + "<br/>");
}