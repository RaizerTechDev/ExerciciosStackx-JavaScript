class Cadastro_do_Cliente {
  //Atributos
  constructor(nomecompleto, telefone, cpf) {
    this.nome = nomecompleto;
    this.telefone = telefone;
    this.cpf = cpf;
  }

  // Comportamento
  registrocliente() {
    return (
      console.log("Registro Nome/CPF:"),`Nome: ${this.nome}, cpf: ${this.cpf}`
    );
  }
}
const novoCadastro = new Cadastro_do_Cliente(
  "RafaRz76",
  "47999327137",
  "22222222211"
);
console.log(novoCadastro);
console.log(novoCadastro.registrocliente());
