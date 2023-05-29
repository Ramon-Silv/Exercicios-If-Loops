let numero = parseInt(prompt("Digite um número inteiro positivo e menor que 16:"));

if (numero > 0 && numero <= 16) {
    let fatorial = 1;
    let conta = "";

    for (let i = numero; i >= 1; i--) {
        fatorial *= i;
        conta += i;

        if (i !== 1) {
            conta += ".";
        }
    }
    document.write(numero + "!= " + conta + " =" + fatorial);
} else {
    document.write("Digite um número inteiro positivo e menor que 16!");
}