let numero = parseFloat(prompt("Digite um número:"));

if(numero !== Math.round(numero)){
    document.write("O número "+numero+" é um número decimal.");
}
else{
    document.write("O número "+numero+" é um número inteiro.")
}