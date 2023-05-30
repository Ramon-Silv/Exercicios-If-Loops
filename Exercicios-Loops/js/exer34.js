let limite = parseInt(prompt("Digite um número:"));
let primos = [];

for (let numero = 2; numero <= limite; numero++) {
  let primo = 0;

  for (let i = 2; i <= numero; i++) {
    if (numero % i == 0) {
      primo++;
    }
  }

  if (primo == 1) {
    primos.push(numero);
  }
}

if (primos.length > 0) {
  document.write("Números primos entre 1 e " + limite + ": " + primos.join(", "));
} else {
  document.write("Não existem números primos entre 1 e " + limite);
}