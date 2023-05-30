let cardapio = {
    100: { descricao: "Cachorro Quente", preco: 1.20 },
    101: { descricao: "Bauru Simples", preco: 1.30 },
    102: { descricao: "Bauru com Ovo", preco: 1.50 },
    103: { descricao: "Hambúrguer", preco: 1.20 },
    104: { descricao: "Cheeseburguer", preco: 1.30 },
    105: { descricao: "Refrigerante", preco: 1.00 }
};//uso de objeto, cada propriedade representa um item

let totalGeral = 0;

while (true) {
    let codigo = parseInt(prompt("Digite o código do item (ou 0 para encerrar o pedido):"));

    if (codigo == 0) {
        break;
    }

    let quantidade = parseInt(prompt("Informe a quantidade do item:"));

    let item = cardapio[codigo];

    if (item) {
        let precoItem = item.preco * quantidade;
        totalGeral += precoItem;

        document.write("Item: " + item.descricao + "<br>");
        document.write("Quantidade: " + quantidade + "<br>");
        document.write("Preço unitário: R$" + item.preco.toFixed(2) + "<br>");
        document.write("Total do item: R$" + precoItem.toFixed(2) + "<br><br>");
    } else {
        document.write("Código inválido!<br><br>");
    }
}

document.write("Total do pedido: R$" + totalGeral.toFixed(2));  