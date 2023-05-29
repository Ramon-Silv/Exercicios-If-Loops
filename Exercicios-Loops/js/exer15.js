let termo = parseInt(prompt("Digite o termo desejado da sequência de Fibonacci:"));
let n1 = 0;
let n2 = 1;

for (let i = 1; i <= termo; i++) {
    document.write(n1 + "<br/>");
    numero = n1 + n2;
    n1 = n2;
    n2 = numero;
}