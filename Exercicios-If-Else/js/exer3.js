let n1= parseFloat(prompt("Digite o primeiro valor: "));
        let n2= parseFloat(prompt("Digite o segundo valor: "));
        let n3= parseFloat(prompt("Digite o terceiro valor: "));

        document.write("<h2>Os números informados foram "+ n1 + ", " + n2+ " e " +n3+ ".</h2>");
        document.write("<br>");
        if(n1>n2 && n1>n3){
            document.write("<h2>O maior número entre eles é o número "+ n1+".</h2>")
        }
        else if(n2>n3 && n2>n1){
            document.write("<h2>O maior número entre eles é o número "+ n2+".</h2>")
        }
        else{
            document.write("<h2>O maior número entre eles é o número "+ n3+".</h2>")
        }