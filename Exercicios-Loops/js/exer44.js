while (true) {
    let nome = prompt("Informe o nome do ginasta: ");
    if (nome == "") {
        break;
    }

    let salto = [];
    let melhorNota = 0;
    let piorNota = 0;
    let media = 0;

    for (let i = 0; i < 7; i++) {
        salto[i] = parseFloat(prompt("Informe a nota do salto: "));
        media = media + salto[i];
    }

    melhorNota = salto[0];
    piorNota = salto[0];

    for (let i = 1; i < 7; i++) {
        if (salto[i] > melhorNota) {
            melhorNota = salto[i];
        } else if (salto[i] < piorNota) {
            piorNota = salto[i];
        }
    }

    media = (media - melhorNota - piorNota) / 3;

    document.write("Atleta: " + nome + "<br/>");
    document.write("Nota: " + salto[0].toFixed(2) + "<br/>");
    document.write("Nota: " + salto[1].toFixed(2) + "<br/>");
    document.write("Nota: " + salto[2].toFixed(2) + "<br/>");
    document.write("Nota: " + salto[3].toFixed(2) + "<br/>");
    document.write("Nota: " + salto[4].toFixed(2) + "<br/>");
    document.write("Nota: " + salto[5].toFixed(2) + "<br/>");
    document.write("Nota: " + salto[6].toFixed(2) + "<br/><br/>");
    document.write("Resultado Final: <br/>");
    document.write("Atleta: " + nome + "<br/>");
    document.write("Melhor nota: " + melhorNota.toFixed(2) + "<br/>");
    document.write("Pior nota: " + piorNota.toFixed(2) + "<br/>");
    document.write("Média: " + media.toFixed(2));
}