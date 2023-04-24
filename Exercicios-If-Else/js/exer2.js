let nota1= parseFloat(prompt("Informe a primeira nota: "));
        let nota2= parseFloat(prompt("Informe a segunda nota: "));

        media= (nota1+nota2)/2;

        if(media==10){
            document.write("<h2>A média é de "+ media + " e o aluno está aprovado com distinção</h2>");
            
        }else if(media>=7){
            document.write("<h2>A média é de "+ media + " e o aluno está aprovado</h2>");
        }
        else{
            document.write("<h2>A média é de "+ media + " e o aluno está reprovado</h2>");
        }