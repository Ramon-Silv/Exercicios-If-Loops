let tipo = prompt("Qual carne deseja comprar? (File Duplo, Alcatra ou Picanha)").toLowerCase();
let quantidade = parseFloat(prompt("Quantos Kg de "+tipo+" deseja?"));
let pagamento= prompt("Qual a forma de pagamento? (Cartão Tabajara ou Outro)").toLowerCase();

let precoKg;
let preco;
if (quantidade <= 5){
  if (tipo == "file duplo" || tipo == "filé" || tipo == "file"){
    precoKg = 4.9;
  } else if (tipo == "alcatra"){
    precoKg = 5.9;
  } else if (tipo == "picanha"){
    precoKg = 6.9;
  }
} 
else{
  if (tipo == "file duplo" || tipo == "filé" || tipo == "file"){
    precoKg = 5.8;
  } else if (tipo == "alcatra"){
    precoKg = 6.8;
  } else if (tipo == "picanha"){
    precoKg = 7.8;
  }
}

preco= precoKg * quantidade;

let desconto=0;
if (pagamento== "cartão tabajara" || pagamento== "cartao" || pagamento== "cartão" || pagamento== "tabajara"){
  desconto= preco * 0.05;
}
let valor=preco-desconto;

document.write("Tipo de carne: "+tipo+"</br>");
document.write("Quantidade: "+quantidade.toFixed(2)+" Kg</br>");
document.write("Preço total: R$"+preco.toFixed(2)+"</br>");
document.write("Tipo de pagamento: "+pagamento+"</br>");
document.write("Desconto: R$"+desconto.toFixed(2)+"</br>");
document.write("Valor a pagar: R$"+valor.toFixed(2)+"</br>");