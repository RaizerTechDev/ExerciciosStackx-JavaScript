//1º Método
/*
export default class Aluno {
    constructor(nome, email, matricula) {
    this.nome = nome;
    this.email = email;
    this.matricula = matricula;
  }
 
  // Método = nosso comportamento
  exibirinformacoes() {
    return `$nome: ${this.nome}, matricula: ${this.matricula}`;
  }
}

const novoAluno = new Aluno("RafaRz76", "rafaelraizer76@gmail.com", "222");
console.log(novoAluno.exibirinformacoes());
*/

//2º Método Privado e Getter
export default class Aluno {
  //Atributo Privado
  #matricula;
  constructor(nome, email, matricula) {
    this.nome = nome;
    this.email = email;
    this.#matricula = matricula;
  }

  //Precisa de métodos para alterar por ser privado:
  //Getter - Método Acessor para retornar dado(serve apenas para leitura)
  get matricula() {
    return this.#matricula;
  }

  //Setter - Método acessor para alterar dados (serve para escrita)
  set matricula(novaMatricula) {
    if (novaMatricula === "") {
      throw new Error("Preencha uma matricula valida");
    }
    this.#matricula = novaMatricula;
  }

  // Método = nosso comportamento
  exibirinformacoes() {
    return `Nome: ${this.nome}, matricula: ${this.matricula}`;
  }
}

const novoAluno = new Aluno(
  "RafaRz76",
  "rafaelraizer76@gmail.com",
  "11a11a11a"
);
console.log(novoAluno);
console.log(novoAluno.exibirinformacoes());

//Para chamar o Setter (alterando dados)
novoAluno.matricula = "12a12a12a";
console.log(novoAluno.matricula);