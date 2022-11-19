/*
Faça um programa que receba a idade e o peso de 
uma pessoa. De acordo com a tabela a seguir, 
 verifique e mostre em qual grupo de risco essa 
 pessoa se encaixa.
  
IDADE 	             ATÉ 60KG  ENTRE 60 E 90KG  ACIMA DE 90KG 
Menores que 20 anos 	  9 	       8 	         7
De 20 a 50 anos 	      6 	       5 	         4
Maiores  que 50 anos 	  3            2 	         1
*/

let idade = 46;
let peso = 72;

if (idade < 20 && peso <= 60) {
  console.log("Grupo de Risco = 9");
}

if (idade >= 20 && idade <= 50 && peso <= 60) {
  console.log("Grupo de Risco = 6");
}

if (idade > 50 && peso <= 60) {
  console.log("Grupo de Risco = 3");
}

if (idade < 20 && peso >= 60 && peso <= 90) {
  console.log("Grupo de Risco = 8");
}

if (idade >= 20 && idade <= 50 && peso >= 60 && peso <= 90) {
  console.log("Grupo de Risco = 5");
}

if (idade > 50 && peso >= 60 && peso <= 90) {
  console.log("Grupo de Risco = 2");
}

if (idade < 20 && peso > 90) {
  console.log("Grupo de Risco = 7");
}

if (idade >= 20 && idade <= 50 && peso > 90) {
  console.log("Grupo de Risco = 4");
}

if (idade > 50 && peso > 90) {
  console.log("Grupo de Risco = 1");
}
