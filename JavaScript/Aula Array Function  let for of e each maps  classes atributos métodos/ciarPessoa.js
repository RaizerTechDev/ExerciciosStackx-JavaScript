//Arrows Functions

/*function criaPessoa() {
    return{
        nome: 'Rafa',
        sobrenome: 'Raizer',
        idade: 46

    }
}
console.log(criaPessoa());


const criaPessoa = () => {
  return {
    nome: "Rafa",
    sobrenome: "Raizer",
    idade: 46,
  };
};

console.log(criaPessoa());

*/

/*function soma(){
    return a + b
}
*/
const soma = (a, b) => a + b;
console.log(soma(2, 4)); // Soma os valores

/*const form = document.querySelector('form');
/*form.addEventListener('submit' , function(event) {
event.preventDefault();
})

form.addEventListener('submit' , e => e.preventDefault());
*/
/*
const nomes = ["nome1", "nome2", "nome3"];

nomes.forEach((value, index) => console.log(value, index)); // Com uma linha de código o forEach

nomes.map(nome => console.log(nome)); //devolve o array com os 3 nomes e os vetores
*/

// Aplicação de Arrows Functions com texto
const nomes = ["nome1", "nome2", "nome3"];
const pessoas = [
  {
    nome: "Rafa",
    sobrenome: "Raizer",
    idade: 46,
  },

  {
    nome: "Márcia",
    sobrenome: "Raizer",
    idade: 40,
  },

  {
    nome: "Miroquinha",
    sobrenome: "Raizer",
    idade: 37,
  },
];

console.log(pessoas); //devolve o array com nomes, sobrenomes e idades
console.log(pessoas.map((pessoa) => pessoa.nome)); //devolve o array só com nomes
console.log(pessoas.map((pessoa) => pessoa.sobrenome)); //devolve o array só com sobrenomes
console.log(pessoas.map((pessoa) => pessoa.idade)); //devolve o array só com idades

//Let for of / for Each
const carros = ["Corolla", "New Fusca", "Fusion"];
let texto = "";
console.log("texto");
console.log("_______________________________");
//carros.forEach(carro => texto += ' | ' + carro); // Com uma linha de código o forEach com laço de repetição e vetores

for (let carro of carros) {
  texto += " | " + carro; //// for let trabalhado em 2 linhas com laço de repetição e vetores
}
console.log(texto);


//Map() - coleção
// Create a Map
const maçãs = ["name", "maçãs"];
const bananas = ["name", "bananas"];
const laranjas = ["name", "laranjas"];

const frutas = new Map();

// Set Map Values

frutas.set(maçãs, 500);
frutas.set(bananas, 300);
frutas.set(laranjas, 200);


console.log(frutas);
console.log(frutas.size);
console.log(frutas.get(bananas)); //Retorna o valor da banana
console.log(frutas.get(laranjas)); //Retorna o valor da banana

/*
frutas.delete(laranjas); 
console.log(frutas); //deleta a laranja

console.log(frutas.has (laranjas)); //Retorna verdadeiro ou falso
*/

// Create a Map
/*
const calças = [
    {
        name: 'Jogging'
    },
    {
        name: 'Trashed'
    },

    {
        name: 'Casual Jeans '
    },

    {
        name: 'Militar'
    },

];

const camisetas = ["name", "camisetas"];
const tenis = ["name", "tenis"];

const roupas = new Map();

// Set Map Values

roupas.set(calças, 50);
roupas.set(camisetas, 450)
roupas.set(tenis, 200);

console.log(roupas);
console.log(roupas.size);
console.log(roupas.get(tenis)); //Retorna o valor da banana
console.log(roupas.get(camisetas)); //Retorna o valor da banana


//roupas.delete(calças); 
//console.log(roupas); //deleta a laranja

console.log(roupas.has (tenis)); //Retorna verdadeiro ou falso
*/

/*
//Classes

const obj = {
  nome: "Rafa",
  idade: 46,
  talk: function () {
    console.log("hello");
   
  },
}

console.log(obj.nome);

//factory function
function criaObj(nome, idade, talk) {
    return {
       nome,
       idade,
       talk
    }
}

console.log(criaObj('Rafa', 46));

//funções construtores
function CriaObj2(nome, idade) {
    this.nome = nome,
    this.idade = idade
}

const criaObj2 = new CriaObj2('Rafa', 46);
console.log(criaObj2.nome); //imprimi o nome
console.log(criaObj2.idade); //imprimi idade

//Atributos

class CriaObj3 {
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade;
    }
}
//Métodos

const criaObj3 = new CriaObj3('Rafa', 46);
console.log (criaObj3.idade); //imprimi idade
console.log (criaObj3.nome);  //imprimi nome

*/
/*
class Animal {
    //construtor (modelo)
    constructor(nome, raça) {
        this.nome = nome,
        this.raça = raça
    }
}


class Humano extends Animal {
  constructor() {

  }
}
*/

/* ES6 Recurso */
// uma string ${umaVariável (Javascript)}

if(true) {
    console.log('Deu');
} else {

}

function teste() {
    if(true) console.log('Deu');
    return;
}

//Operador Ternário
true ? console.log('Deu'): '';

