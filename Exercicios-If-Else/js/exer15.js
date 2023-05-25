let dia= parseInt(prompt("Digite o dia:"));
let mes= parseInt(prompt("Digite o mês:"));
let ano= parseInt(prompt("Digite o ano:"));

if(mes<1 || mes>12){
        document.write("O mês informado ("+mes+") é inválido<br>");    
}
else if(mes>=1 || mes<=12){
    if (dia<1 || dia>31){
        document.write("O dia informado ("+dia+") não é válido<br>");
    }
    if(mes == 2){
        if(dia<1 || dia>28){
            document.write("O dia informado ("+dia+") não é válido<br>");
        }
    }
    document.write("O mês informado ("+mes+") é válido<br>");
}

if(ano<1 || ano>9999){
    document.write("O ano informado ("+ano+") é inválido<br>");
}
else{
    document.write("O ano informado ("+ano+") é válido");
}