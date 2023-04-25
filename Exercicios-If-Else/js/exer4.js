let n1= parseInt(prompt("Digite o primeiro número: "));
let n2= parseInt(prompt("Digite o segundo número: "));
        
let variavel= n1;//essa variável está com o número 1

n1=n2;//número 1 recebe valor do número 2
n2=variavel;//número 2 recebe valor da variavel

alert("Antes:\n"+ "Primeiro número- "+ n1+ ". Segundo número- "+n2+".\n\n"+
"Depois:\n"+ "Primeiro número- "+ n2+ ". Segundo número- "+n1+".");