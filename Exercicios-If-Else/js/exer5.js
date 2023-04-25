let n1= parseInt(prompt("Informe o primeiro número: "));
let n2= parseInt(prompt("Informe o segundo número: "));
let n3= parseInt(prompt("Informe o terceiro número: "));

document.write("Os números informados foram "+ n1 + ", " + n2+" e "+n3+".<br/>")

if(n1>n2 && n2>n3){
    document.write("O maior número entre eles é o número "+ n1+". O menor número entre eles é o "+n3+".")
}
else if(n1>n3 && n3>n2){
    document.write("O maior número entre eles é o número "+ n1+". O menor número entre eles é o "+n2+".")
}
else if(n2>n1 && n1>n3){
    document.write("O maior número entre eles é o número "+ n2+". O menor número entre eles é o "+n3+".")
}
else if(n2>n3 && n3>n1){
    document.write("O maior número entre eles é o número "+ n2+". O menor número entre eles é o "+n1+".")
}
else if(n3>n1 && n1>n2){
    document.write("O maior número entre eles é o número "+ n3+". O menor número entre eles é o "+n2+".")
}
else{
    document.write("O maior número entre eles é o número "+ n3+". O menor número entre eles é o "+n1+".")
}