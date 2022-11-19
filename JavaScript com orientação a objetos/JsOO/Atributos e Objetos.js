
class Pessoa{
    //Atributos
    constructor ( nome,   nascimento ){
        this.nome = nome;
        this.nascimento = nascimento;
    }

    //Comportamento
    quemévoce(){
        return  'Olá meu nome é ${this.nome} RafaRz76'
    }

}
const novaPessoa = new Pessoa('RafaRz76', '19/01/1976');
console.log(novaPessoa);
console.log(novaPessoa. quemévoce());
//Modo2
/*
class Pessoa {
    //Atributos
    nome
    nascimento
   _cpf

   set  cPF(numero) {
    this._cPF = numero;
    pessoa1._cpf = 222211125401;
   }
}

let pessoa1 = new Pessoa()

pessoa1.nome = 'Rafa';
pessoa1.nascimento =  '19/01/1976';



console.log(pessoa1);


//Modo 3
//Objeto
/*
let pessoa = {
  nome: '',
  nascimento: '',
  cpf: '',
  bens: {
    carro: true,
    casa: true
  }
};

function criarPessoa(nome, nascimento, cpf) {
  const cpfFinal = cpf;

  pessoa.nome = nome;
  pessoa.nascimento = nascimento;
  pessoa.cpf = cpfFinal;
}
criarPessoa("Rafa", "19/01/1976", "222211125401");
//console.log(pessoa);
console.log(pessoa.bens.carro);
*/