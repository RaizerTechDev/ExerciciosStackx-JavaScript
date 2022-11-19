// Compras no Supermercado
// Tirar compras duplicadas por ordem crescente e decrescente
let compras = ["carne", "carne", "suco", "uva", "laranja", "banana", "refri", "laranja"];

let comprasunicas = new Set();

compras.forEach((compra) => {
  comprasunicas.add(compra);
});

console.log(comprasunicas);
