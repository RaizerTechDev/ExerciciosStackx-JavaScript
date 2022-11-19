var numeroStr1 = prompt("Primeiro valor: ");
var numeroStr2 = prompt("Segundo valor: ");

var n1 = parseInt(numeroStr1);
var n2 = parseInt(numeroStr2);

var simbolo = prompt("Que operação deseja fazer=> + ;- ;/ ;*");

switch (simbolo) {
	case "+":
		document.write(n1 + n2);
		break;
	case "-":
		document.write(n1 - n2);
		break;

	case "/":
		document.write(n1 / n2);
		break;
	case "*":
		document.write(n1 * n2);
		break;

	default:
		document.write("Essa operação não é valida!");
		break;
}