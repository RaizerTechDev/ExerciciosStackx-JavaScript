// Compras no Supermercado
// Ordenar por ordem alfabetica e ordem crescente e decrescente
let compras = [
  "carne",
  "suco",
  "laranja",
  "banana",
  "refri",
  "pão",
  "uva",
  "pera",
  "bolacha",
  "maçã",
];

compras.sort((x, y) => {
  //Ordem Alfabetica Crescente
  /*if (x > y) {
    return 1;
  }
  if (y > x) {
    return -1;
  }*/

  // Ordem Alfabetica Decrescente

  if (x > y) {
    return -1;
  }
  if (y > x) {
    return 1;
  }
});

console.log(compras);
