let letra= prompt("Informe uma letra: ");
        letra= letra.toLowerCase();

        if(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u'){
            document.write("<h2>A letra "+ letra + " é uma vogal</h2>");
        }
        else{
            document.write("<h2>A letra "+ letra + " é uma consoante</h2>");
        }