// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.
// Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal
//Com Entradas  x1 = 1.0 |  y1 = 7.0 E  x2 = 5.0 |  y2 = 9.0  
//    Saída = 4.4721
          
let x1 = 1.0;
let x2 = 5.0;
let y1 = 7.0;
let y2 = 9.0;

let distancia = Math.hypot(x1 - x2, y1 - y2).toFixed(4);
console.log(`A Distância entre Dois Pontos fica--> ${distancia}`);