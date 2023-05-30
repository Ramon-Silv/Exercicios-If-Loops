let maiorIndiceAcidentes = 0;
let menorIndiceAcidentes = Infinity;
let cidadeMaiorIndice = "";
let cidadeMenorIndice = "";
let totalVeiculos = 0;
let totalAcidentesMenor2000 = 0;
let contadorMenor2000 = 0;

for (let i = 1; i <= 5; i++) {
    let codigoCidade = parseInt(prompt("Digite o código da cidade " + i + ":"));
    let veiculosPasseio = parseInt(prompt("Digite o número de veículos de passeio em 1999 na cidade " + i + ":"));
    let acidentesTransito = parseInt(prompt("Digite o número de acidentes de trânsito com vítimas em 1999 na cidade " + i + ":"));
    let indiceAcidentes = acidentesTransito / veiculosPasseio;
    if (indiceAcidentes > maiorIndiceAcidentes) {
        maiorIndiceAcidentes = indiceAcidentes;
        cidadeMaiorIndice = codigoCidade;
    }
    if (indiceAcidentes < menorIndiceAcidentes) {
        menorIndiceAcidentes = indiceAcidentes;
        cidadeMenorIndice = codigoCidade;
    }
    totalVeiculos += veiculosPasseio;

    if (veiculosPasseio < 2000) {
        totalAcidentesMenor2000 += acidentesTransito;
        contadorMenor2000++;
    }
}

let mediaVeiculos = totalVeiculos / 5;
let mediaAcidentesMenor2000 = totalAcidentesMenor2000 / contadorMenor2000;

document.write("Maior índice de acidentes: " + maiorIndiceAcidentes.toFixed(2) + ". Cidade " + cidadeMaiorIndice + "<br/>");
document.write("Menor índice de acidentes: " + menorIndiceAcidentes.toFixed(2) + ". Cidade " + cidadeMenorIndice + "<br/>");
document.write("Média de veículos nas cidades: " + mediaVeiculos.toFixed(2) + "<br/>");
document.write("Média de acidentes de trânsito nas cidades com menos de 2000 veículos de passeio: " + mediaAcidentesMenor2000.toFixed(2));