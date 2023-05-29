let maior = Number.NEGATIVE_INFINITY;

for (let n = 0; n <5; n++) {
    let numero = parseInt(prompt("Digite um número:"));
    if (numero > maior) {
        maior = numero;
    }
}

document.write("O maior número é: " + maior);