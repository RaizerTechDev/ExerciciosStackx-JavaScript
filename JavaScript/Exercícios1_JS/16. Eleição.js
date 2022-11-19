/*Escreva um programa para ler o ano de nascimento
 de uma pessoa e escrever uma mensagem que diga se 
 ela poderá ou não votar este ano (não é necessário 
    considerar o mês em que ela nasceu).
*/
 let anoAtual = 2022
let anonascimento = 1976;

 let idade = Math.abs(anonascimento - 2022);
 idade > 18  ? console.log(`Você tem ${idade} anos, então é Permitido votar`):console.log(`Você tem ${idade} anos, Não Permitido`);

/*let idade = anoAtual - anonascimento
if (idade >= 18 ) {
    console.log("idade:", anoAtual - anonascimento);
    console.log("É Permitido votar");

} else{
    (idade < 18) 
    console.log("idade: ", anoAtual - anonascimento);
    console.log(" Não é Permitido votar");
}*/