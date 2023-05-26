let numero = parseInt(prompt("Informe um número menor que 1000:"))

let centena = Math.floor(numero / 100);
let dezena = Math.floor((numero % 100) / 10);
let unidade = Math.floor(numero % 10);
let extenso = "";

if (numero < 0 || numero >= 1000){
    document.write("O número deve ser maior ou igual a 0 e menor que 1000.");
    location.reload();
} 
else{
    if (centena > 0) {
        extenso += `${centena} ${centena == 1 ? 'centena' : 'centenas'}`;//operador ternário
    }

    if (dezena > 0) {
        if (centena > 0) {
            extenso += ", ";
        }
        extenso += `${dezena} ${dezena == 1 ? 'dezena' : 'dezenas'}`;
    }

    if (unidade > 0) {
        if (centena > 0 || dezena > 0) {
            extenso += " e ";
        }
        extenso += `${unidade} ${unidade == 1 ? 'unidade' : 'unidades'}`;
    }  
}

document.write(extenso);