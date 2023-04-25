let n1 = parseFloat(prompt("Digite a primeira nota: "));
let n2 = parseFloat(prompt("Digite a segunda nota: "));
media = (n1 + n2) / 2;

if(media>=9 && media<=10){
    alert("As notas informadas foram " + n1 + " e " + n2+".\nA média dessas notas é " + media+", equivalendo ao conceito 'A', portanto o aluno está APROVADO");
}
else if(media>=7.5 && media<=8.9){
    alert("As notas informadas foram " + n1 + " e " + n2+".\nA média dessas notas é " + media+", equivalendo ao conceito 'B', portanto o aluno está APROVADO");
}
else if(media>=6 && media<=7.4){
    alert("As notas informadas foram " + n1 + " e " + n2+".\nA média dessas notas é " + media+", equivalendo ao conceito 'C', portanto o aluno está APROVADO");
}
else if(media>=4 && media<=5.9){
    alert("As notas informadas foram " + n1 + " e " + n2+".\nA média dessas notas é " + media+", equivalendo ao conceito 'D', portanto o aluno está REPROVADO");
}
else if(media>=0 && media<=3.9){
    alert("As notas informadas foram " + n1 + " e " + n2+".\nA média dessas notas é " + media+", equivalendo ao conceito 'E', portanto o aluno está REPROVADO");
}