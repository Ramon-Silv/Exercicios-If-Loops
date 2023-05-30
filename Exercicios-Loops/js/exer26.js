let eleitores = parseInt(prompt("Digite o número total de eleitores:"));
let candidato1= 0;
let candidato2= 0;
let candidato3 = 0;

for (let i = 1; i <= eleitores; i++) {
    let voto = parseInt(prompt("Informe o número do seu candidato (1, 2 ou 3):"));

    if (voto == 1) {
        candidato1++;
    } else if (voto == 2) {
        candidato2++;
    } else if (voto == 3) {
        candidato3++;
    } else {
        alert("Nenhum candidato corresponde a esse número!");
    }
}

document.write("Candidato 1 recebeu " + candidato1 + " votos.<br/> Candidato 2 recebeu " + candidato2 + " votos.<br/> Candidato 3 recebeu " + candidato3 + " votos.");