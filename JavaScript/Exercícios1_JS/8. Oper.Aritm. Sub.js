/*8. Neste exercício você deve atribuir a subtração da variável elementoB com a variável elementoA 
na variável resultadoSubtracao
var resultadoSubtração;    
var elementoA = 2; 
var elemmentoB = 2; 
Nota: Neste exercício, todas as variáveis necessárias já estão declaradas, você não precisas criá-las, 
apenas completar o código
*/

var resultadoSubtração;    
var elementoA = 2; 
var elemmentoB = 2; 
function subtrair(elementoA, elementoB, resultadoSubtração) {
  if ((resultadoSubtração = "-")) {
    console.log("Resultado Subtração dos elementos A-B =",
      elementoA - elementoB
    );
  }
}

subtrair(2, 2, "-");
