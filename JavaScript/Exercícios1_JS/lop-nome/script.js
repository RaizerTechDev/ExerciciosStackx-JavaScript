
var nome = prompt("Digite seu nome: ");
var pergunta = prompt("Quantas vezes deseja imprimir seu nome? ");

var quantidade = parseInt(pergunta);
var i;

for(i = 0; i <= quantidade; i++){
	document.write(nome + "<br>");
}

