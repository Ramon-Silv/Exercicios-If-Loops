let numeros = parseFloat(prompt("Informe quantos números:"));
let maior, menor;
let soma = 0;

for (let i = 1; i <= numeros; i++) {
  let n = parseFloat(prompt("Digite um número:"));

  if (n >= 0 && n <= 1000) {
    if (i === 1) {
      maior = n;
      menor = n;
    } else {
      if (n > maior) {
        maior = n;
      } else{
        menor = n;
      }
    }
    soma += n;
  } else {
    alert("Digite um número entre 0 e 1000!");
    i--;
  }
}

document.write("Menor número: "+ menor +"<br/>Maior número: "+ maior +"<br/>Soma dos números: "+ soma);