// Ordenando Números Pares e Ímpares em ordem crescente e decrescente

//Exemplo de Entrada    Exemplo de Saída
//10                        4
//4                         32
//32                        34
//34                        98  
//543                       654
//3456                      3456
//654                       6789
//567                       567
//87                        543
//6789                      87
//98                 


let N = [10, 4, 32, 34, 543, 3456, 654, 567, 87, 6789, 98] ;

// sort ordena arrays
 N.sort((pares,impares) => pares - impares) //Ordena a ordem Crescente do menor para o maior
 
//N.sort((pares, impares) => impares - pares )  //Ordena a ordem Descrescente do Maior para o Menor

console.log(N)
