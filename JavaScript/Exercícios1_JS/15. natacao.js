// Faça um programa que receba a idade de um nadador e 
// mostre sua categoria, para uma competição usando as regras a seguir.
//  Para idade inferior a 5, deverá mostrar alguma mensagem.

// const newLocal = 5;
// CATEGORIA 	IDADE
// Infantil 	5 a 7 anos
// Juvenil - Nivel 1 	8 a 10 anos
// Juvenil - Nivel 2 	11 a  15 anos
// Adulto 	16 a 30 anos
// Sênior 	Acima de 30 anos

let idade = 80

if (idade < 5) {
  console.log("Não é permitido nenhuma categoria");
}

if (idade >= 5 && idade < 7) {
  console.log("Categoria Infantil");
}
if (idade >= 8 && idade < 10) {
  console.log("Categoria Juvenil");
}

if (idade >= 11 && idade < 15) {
  console.log("Categoria Juvenil");
}

if (idade >= 16 && idade < 30) {
  console.log("Categoria Adulto");
}

if (idade > 30) {
  console.log("Categoria Senior");
}
