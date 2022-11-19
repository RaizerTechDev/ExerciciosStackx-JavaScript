/*
As maçãs custam R$ 0,30 cada se forem compradas
 menos do que uma dúzia, e R$ 0,25 se forem compradas
  pelo menos doze. 
  Escreva um programa que leia o número de maçãs 
  compradas, calcule e escreva o valor total da
 compra.
*/

let num_maçãs_compradas = 15

let qtdTotal = Math.abs( num_maçãs_compradas * 0.30);
let qtdTotal_1 = Math.abs( num_maçãs_compradas * 0.25);

num_maçãs_compradas < 12 ? console.log(`Valor Total Compra * 0.30 = ${qtdTotal}`): console.log(`Valor Total Compra * 0.25 = ${qtdTotal_1}`);

/*
if (num_maçãs_compradas < 12) {
    console.log("Valor Total Compra =", num_maçãs_compradas * 0.30);
}

if (num_maçãs_compradas >= 12) {
    console.log("Valor Total Compra =", num_maçãs_compradas * 0.25);

}
*/
