while (true) {
    let nome = prompt("Informe o nome do atleta: ");
    if (nome == "") {
        break;
    }

    let salto = [];
    let melhorSalto = 0;
    let piorSalto = 0;
    let media = 0;

    for (let i = 0; i < 5; i++) {
        salto[i] = parseFloat(prompt("Digite a distância do salto: "));
        media = media + salto[i];
    }

    melhorSalto = salto[0];
    piorSalto = salto[0];

    for (let i = 1; i < 5; i++) {
        if (salto[i] > melhorSalto) {
            melhorSalto = salto[i];
        } else if (salto[i] < piorSalto) {
            piorSalto = salto[i];
        }
    }

    media = (media - melhorSalto - piorSalto) / 3;

    document.write("Atleta: " + nome + "<br><br>");
    document.write("Primeiro salto: " + salto[0].toFixed(2) + "m<br>");
    document.write("Segundo salto: " + salto[1].toFixed(2) + "m<br>");
    document.write("Terceiro salto: " + salto[2].toFixed(2) + "m<br>");
    document.write("Quarto salto: " + salto[3].toFixed(2) + "m<br>");
    document.write("Quinto salto: " + salto[4].toFixed(2) + "m<br><br>");
    document.write("Melhor salto: " + melhorSalto.toFixed(2) + "m<br>");
    document.write("Pior salto: " + piorSalto.toFixed(2) + "m<br>");
    document.write("Média dos demais saltos: " + media.toFixed(2) + "m<br><br>");
    document.write("Resultado Final: <br>");
    document.write(nome + ": " + media.toFixed(2) + "m<br>");
}