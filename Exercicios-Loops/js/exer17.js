let numero = parseInt(prompt("Digite um número inteiro:"));
let fatorial = 1;
let conta = "";

for (let i = numero; i >= 1; i--) {
    fatorial *= i;
    conta += i;

    if (i != 1) {
        conta += ".";
    }
}

document.write(numero + "!= " + conta + " =" + fatorial);