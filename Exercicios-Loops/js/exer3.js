let nome= prompt("Digite seu nome:");
while (nome.length <= 3) {
  alert("O nome precisa ter mais de 3 caracteres. Tente novamente!");
  nome= prompt("Digite seu nome:");
}

let idade= parseInt(prompt("Digite sua idade:"));
while (idade < 0 || idade > 150) {
  alert("A idade precisa estar entre 0 e 150. Tente novamente!");
  idade= parseInt(prompt("Digite sua idade:"));
}

let salario= parseFloat(prompt("Digite seu salário:"));
while (salario <= 0) {
  alert("O salário precisa ser maior que 0. Tente novamente!");
  salario= parseFloat(prompt("Digite seu salário:"));
}

let sexo= prompt("Informe seu sexo (F- Feminino / M- Masculino):").toLowerCase();
while (sexo !== 'f' && sexo !== 'm') {
  alert("O sexo precisa ser 'F' ou 'M'. Tente novamente!");
  sexo= prompt("Informe seu sexo (F- Feminino / M- Masculino):").toLowerCase();
}

let estadoCivil= prompt("Informe seu estado civil (S- Solteiro / C- Casado / V- Viúvo / D- Divorciado):").toLowerCase();
while (estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd') {
  alert("O estado civil precisa ser 's', 'c', 'v' ou 'd'. Tente novamente!");
  estadoCivil= prompt("Informe seu estado civil (S- Solteiro / C- Casado / V- Viúvo / D- Divorciado):").toLowerCase();
}

document.write("Informações válidas!<br/>Nome: "+nome+"<br/>Idade: "+idade+"<br/>Salário: "+salario+"<br/>Sexo: "+sexo+"<br/>Estado Civil: "+estadoCivil);