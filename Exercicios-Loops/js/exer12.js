let numero = parseInt(prompt("Digite um número entre 1 e 10:"));

if (numero >= 1 && numero <= 10) {
    document.write("Tabuada do " + numero + ":<br>");

    for (let i = 1; i <= 10; i++) {
        let resul = numero * i;
        document.write(numero + " X " + i + " = " + resul + "<br>");
    }
} else {
    document.write("Digite um número entre 1 e 10!");
}