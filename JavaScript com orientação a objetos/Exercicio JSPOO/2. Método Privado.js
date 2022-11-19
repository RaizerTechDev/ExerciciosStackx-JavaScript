//Método Privado, Getters e Setters
class Cadastrar_Produto {
  //Atributo Privado
  #produto;
  constructor(codigo, produto, preço) {
    this.codigo = codigo;
    this.#produto = produto;
    this.preço = preço;
  }

  //Precisa de métodos para alterar por ser privado:
  //Getter - Método Acessor para retornar dado(serve apenas para leitura)
  get produto() {
    return this.#produto;
  }

  //Setter - Método acessor para alterar dados (serve para escrita)

  set produto(novoProduto) {
    if (novoProduto === "") {
      throw new Error("Preencha um codigo valido");
    }
    this.#produto = novoProduto;
  }

  // Método = nosso comportamento
  exibirinformacoes() {
    return (
      console.log("Informações Código/Produto:"),
      `Codigo: ${this.codigo}, Produto: ${this.produto}`
    );
  }
}

const novoProduto = new Cadastrar_Produto(
  "1010",
  "Casaco com Capuz Moletinho Rosa Feminino",
  "R$ 112.00"
);
console.log(novoProduto);

console.log(novoProduto.exibirinformacoes());

//Para chamar o Setter (alterando dados: ex--> Cadastrar um novo produto )
novoProduto.produto = "Blusa de Frio Moletom Cordão Masculino";
console.log("Produto Novo Cadastrado:", novoProduto.produto);
