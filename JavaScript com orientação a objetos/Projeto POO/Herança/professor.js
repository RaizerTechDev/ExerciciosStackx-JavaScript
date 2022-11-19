//Herança --> classe possa herdar objetos e propriedades e metodos de outras classes
/*
import Aluno from "./aluno.js";

class Professor extends Aluno {
  constructor(nome, email, matricula) {
    super(nome, email, matricula);
  }
}

const novoprofessor = new Professor("Rafa Profe", "rafprof76@gmail.com", "111");
console.log(novoprofessor.exibirinformacoes());
*/

//2º Método Polimorfismo (subclasse)
/*
import Aluno from "./aluno.js";

class Professor extends Aluno {
  constructor(nome, email, matricula) {
    super(nome, email, matricula);
  }
  exibirinformacoes() {
    return `Professor: ${this.nome}`;
  }
}
const novoprofessor = new Professor("Rafa Profe", "rafprof76@gmail.com", "111");
console.log(novoprofessor.exibirinformacoes());
*/