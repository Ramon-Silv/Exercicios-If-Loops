let paisA = parseInt(prompt("Digite a população da cidade A:"));
let paisB = parseInt(prompt("Digite a população da cidade B:"));
let taxaA = parseFloat(prompt("Digite a taxa de crescimento da cidade A (%):"));
let taxaB = parseFloat(prompt("Digite a taxa de crescimento da cidade B (%):"));
let anos = 0;

if (paisA < paisB) {
    while (paisA < paisB) {
        paisA += paisA * (taxaA / 100);
        paisB += paisB * (taxaB / 100);
        anos++;
    }
    document.write("Serão necessários " + anos + " anos para a população do país A ultrapassar ou igualar a população do país B.");
} else {
    while (paisB < paisA) {
        paisA += paisA * (taxaA / 100);
        paisB += paisB * (taxaB / 100);
        anos++;
    }
    document.write("Serão necessários " + anos + " anos para a população do país B ultrapassar ou igualar a população do país A.");
}