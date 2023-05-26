let saque=parseInt(prompt("Qual valor deseja sacar?"));

if (saque<10 || saque>600){
    alert("O valor mínimo de saque é de R$10,00 e o máximo é de R$600,00.");
    location.reload();
}
else{
    let notas1, notas5, notas10, notas50, notas100= 0;

    if (saque >= 100){
        notas100 = Math.floor(saque/ 100);
        saque %= 100;
    }
    if (saque >= 50){
        notas50 = Math.floor(saque/ 50);
        saque %= 50;
    }
    if (saque >= 10){
        notas10 = Math.floor(saque/ 10);
        saque %= 10;
    }
    if (saque >= 5){
        notas5 = Math.floor(saque/ 5);
        saque %= 5;
    }
    if (saque >= 1){
        notas1 = Math.floor(saque/ 1);
        saque %= 1;
    }

    if (notas100 > 0){
        document.write(notas100 + " nota(s) de R$100.<br/>");
    } 
    if (notas50 > 0){
        document.write(notas50 + " nota(s) de R$50.<br/>");
    }
    if (notas10 > 0){
        document.write(notas10 + " nota(s) de R$10.<br/>");
    }
    if (notas5 > 0){
        document.write(notas5 + " nota(s) de R$5.<br/>");
    }
    if (notas1 > 0){
        document.write(notas1 + " nota(s) de R$1.");
    }   
}