// Mostrar números primos
/*
exibirNumerosPrimos(910);

function exibirNumerosPrimos(limite) {
  for (let numero = 2; numero <= limite; numero++) {
    let ehPrimo = true;

    for (let divisor = 2; divisor < numero; divisor++) {
      if(numero % divisor === 0) {
        ehPrimo = false;
        break;

      }
    }
    
     if(ehPrimo) console.log(numero);
      }
}
*/

/*
function NumeroPrimo(numero) {
   
    for (let divisor = 1; divisor < numero; divisor++) {
        if(numero % divisor === 0) {
         return false;
        } 
        if(ehPrimo) console.log(numero);
    } 
    return true;

    }
    */

//Programa para determinar o numero primo

NumeroPrimo(11);

function NumeroPrimo(numero) {
  let NumeroPrimo = true;
  for (let contador = 2; contador < numero; contador++) {
    if (numero % contador === 0) {
      NumeroPrimo = false;
      break;
    }
  }
  if (NumeroPrimo == true && numero !== 1) {
    console.log(`O valor ${numero} é primo -->  saida 1!`);
  } else {
    console.log(`O valor ${numero} não é primo --> saida 0!`);
  }
}
