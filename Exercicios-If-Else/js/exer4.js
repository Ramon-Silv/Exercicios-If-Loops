let n1= parseFloat(prompt("Digite o primeiro número: "));
        let n2= parseFloat(prompt("Digite o segundo número: "));
        let variavel= n1;

        n1=n2;
        n2=variavel;

        alert("Antes:\n"+ "Primeiro número- "+ n1+ ". Segundo número- "+n2+".\n\n"+
        "Depois:\n"+ "Primeiro número- "+ n1+ ". Segundo número- "+n2+".");