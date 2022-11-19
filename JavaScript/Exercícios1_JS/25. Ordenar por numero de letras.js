// Compras no Supermercado
// Ordenar por palavras em ordem crescente e decrescente
let compras  = ['carne', 'laranja', 'suco', 'picles', 'pera']

// compras.sort((x,y) => x.length - y.length) //Ordena a ordem Crescente do menor para o maior por numero de letras
compras.sort((x,y) => y.length - x.length) // //Ordena a ordem Descrescente do Maior para o Menor por numero de letras

console.log(compras)
