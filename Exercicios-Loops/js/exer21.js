let numero = parseInt(prompt("Digite um número: "));
let primo = 0;

for (let i = 2; i <= numero; i++) {
  if (numero % i == 0) {
    primo++;
  }
}

if (primo != 1) {
  document.write(numero +" não é um número primo.");
} else {
  document.write(numero +" é um número primo.");
}