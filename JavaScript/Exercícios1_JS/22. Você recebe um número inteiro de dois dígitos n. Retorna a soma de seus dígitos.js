// 22. Você recebe um número inteiro de dois dígitos n.
// Retorne a soma de seus dígitos com 4 casas após o ponto decimal
//Com Entradas  n = 29 / a = 10 E n = 29 % 10
// Saída = 11.900

let n = 29;
let a = 10;
let b = 10;

let resultadoSoma = Math.hypot(n / a + (n % b)).toFixed(4);
console.log(`Retorne a soma dos dígitos--> ${resultadoSoma}`);
