let lado1 = parseFloat(prompt("Digite o primeiro lado do triângulo:"));
let lado2 = parseFloat(prompt("Digite o segundo lado do triângulo:"));
let lado3 = parseFloat(prompt("Digite o terceiro lado do triângulo:"));

if (lado1 + lado2 > lado3 || lado1 + lado3 > lado2 || lado2 + lado3 > lado1) {
    if (lado1 == lado2 && lado1 == lado3) {
        document.write("Triângulo Equilátero.");
    } 
    else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        document.write("Triângulo Isósceles.");
    } 
    else {
        document.write("Triângulo Escaleno.");
    }
} 
else {
    document.write("Não é um triângulo.");
}