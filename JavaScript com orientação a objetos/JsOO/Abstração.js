//Entidade                    //Identidade                      //Características
// Carro                       //x = new Carro()                //marca, modelo, qtdportas
//Sonho                       //z = new Sonho()                //tipo, história, gostaria_sonhar_denovo
//Conta Bancária             //y = new ContaBancaria()        //agencia, numeroConta, saldo, limite

//Paradgima orientado a objetos

class Calculadora {
  constructor(a, b, op) {
    (this.a = a), (this.b = b), (this.op = op);
  }

  calcular() {
    if ((this.op = "*")) {
      console.log(this.a * this.b);
    }
  }
}

const calculadora = new Calculadora(10, 12, "*");
const calculadora2 = new Calculadora(200, 50, "*");
calculadora.calcular();
calculadora2.calcular();
