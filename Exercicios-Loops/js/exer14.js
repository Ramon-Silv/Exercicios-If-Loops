let par = 0;
let impar = 0;

for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt("Digite um número:"));

    if (numero % 2 != 0) {
        impar++;
    } else {
        par++;
    }
}

document.write("Números pares: " + par + "<br>");
document.write("Números ímpares: " + impar);