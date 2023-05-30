let temperatura;
let menor = Infinity;
let maior = -Infinity;
let soma = 0;
let i = 0;

while (true) {
    temperatura = parseFloat(prompt("Informe a temperatura (ou digite 0 para finalizar):"));

    if (temperatura == 0) {
        break;
    } else if (temperatura < menor) {
        menor = temperatura;
    } else if (temperatura > maior) {
        maior = temperatura;
    }
    soma += temperatura;
    i++;
}

document.write("Menor temperatura: " + menor + "<br>Maior temperatura: " + maior + "<br>Média: " + (soma / i).toFixed(2));