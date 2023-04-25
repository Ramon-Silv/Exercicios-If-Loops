let turno= prompt("Em que turno você estuda? Digite M para 'Matutino', V para 'Vespertino' ou N para 'Noturno'.")
turno= turno.toUpperCase();

if(turno=='M'){
    document.write("BOM DIAAA!!!");
}
else if(turno=='V'){
    document.write("BOA TARDE!");
}
else if(turno=='N'){
    document.write("BOA NOITE.");
}
else{
    document.write("Valor inválido!");
}