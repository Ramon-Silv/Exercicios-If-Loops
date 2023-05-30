let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
let candidato4 = 0;
let nulo = 0;
let brancos = 0;
let total = 0;

let voto = parseInt(prompt("Digite o código do candidato (ou 0 para encerrar):"));

while (voto !== 0) {
    if (voto == 1) {
        candidato1++;
    } else if (voto == 2) {
        candidato2++;
    } else if (voto == 3) {
        candidato3++;
    } else if (voto == 4) {
        candidato4++;
    } else if (voto == 5) {
        nulo++;
    } else if (voto == 6) {
        brancos++;
    } else {
        alert("Código inválido!");
    }
    total++;
    voto = parseInt(prompt("Informe o código do candidato (ou 0 para encerrar):"));
}
let percentualNulo = (nulo / total) * 100;
let percentualBrancos = (brancos / total) * 100;

document.write("Candidato 1: " + candidato1 + " voto(s)<br/>");
document.write("Candidato 2: " + candidato2 + " voto(s)<br/>");
document.write("Candidato 3: " + candidato3 + " voto(s)<br/>");
document.write("Candidato 4: " + candidato4 + " voto(s)<br/><br/>");
document.write("Votos nulos: " + nulo + "<br/>");
document.write("Votos em branco: " + brancos + "<br/><br/>");
document.write("Percentual de votos nulos: " + percentualNulo.toFixed(2) + "%<br/>");
document.write("Percentual de votos em branco: " + percentualBrancos.toFixed(2) + "%");