var valorSTR = prompt("Digite um valor qualquer: ");
var valor = parseInt(valorSTR);

if(valor > 10){
	document.write("Maior que 10");
}else if(valor < 10){
	document.write("Menor que 10");
}else{
	document.write("igual à 10");
}