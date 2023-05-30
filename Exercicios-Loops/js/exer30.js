let pao = parseFloat(prompt("Informe o preço do pão:"));

for (let i = 1; i <= 50; i++) {
    document.write(i + " - R$ " + (pao * i).toFixed(2) + "<br>");
}