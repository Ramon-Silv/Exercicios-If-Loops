let usuario= prompt("Informe seu nome de usuário:");
let senha= prompt("Informe sua senha:");

while (senha == usuario) {
  alert("A senha não pode ser igual ao nome de usuário. Tente novamente!");
  usuario= prompt("Informe seu nome de usuário:");
  senha= prompt("Informe sua senha:");
}

document.write("Acesso liberado, "+usuario+"!");