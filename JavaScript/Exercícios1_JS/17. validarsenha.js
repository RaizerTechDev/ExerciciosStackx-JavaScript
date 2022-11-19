/*
Escreva um programa que verifique a validade de uma 
senha fornecida pelo usuário. A senha válida é o 
número 1234. Devem ser impressas as seguintes mensagens:
ACESSO PERMITIDO caso a senha seja válida e  ACESSO 
NEGADO caso a senha seja inválida.
*/
let usuario = "RafaRz7";
let senhaválida = 1234;

  usuario === "RafaRz76" && senhaválida === 1234   ? console.log(`Nome ${usuario} e senha ${senhaválida}, Acesso permitido!`):console.log(`Acesso Negado!`);

    
/*
if (usuario === "RafaRz76" && senhaválida === 1234) {
  console.log(`Nome ${usuario} e senha ${senhaválida}, Acesso permitido!`);
} else {
  senhaválida !== 1234;
  console.log(`Acesso Negado!`);
}
*/