let numero = parseInt(prompt("Digite um número inteiro:"));
let divisoes = 0;

for (let i = 2; i <= numero; i++) {
    let primo = true;

    for (let n = 2; n < i; n++) {
        divisoes++;
        if (i % n == 0) {
            primo = false;
            break;
        }
    }

    if (primo) {
        document.write(i +", ");
    }
}

document.write("<br/>Número de divisões: "+ divisoes);