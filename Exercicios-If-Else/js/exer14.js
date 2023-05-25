let ano = parseInt(prompt("Digite o ano:"));

if (ano % 4 == 0 && ano % 100 !== 0 || ano % 400 == 0) {
    document.write(ano+" é um ano bissexto"); 
} else {
    document.write(ano+" não é um ano bissexto");
}