//Paradgima Procedural

function calcular(a, b, op) {
  if ((op = "*")) {
    console.log(a * b);
  }
}
calcular(2, 8, "*");

function subtrair(a, b, op) {
  if ((op = "-")) {
    console.log(a - b);
  }
}
subtrair(8, 2, "-");

function somar(a, b, op) {
  if ((op = "+")) {
    console.log(a + b);
  }
}
somar(2, 8, "+");
// Ou

const fazerCalculos = {
  calcular: function (a, b, op) {
    if ((op = "*")) {
      console.log(a * b);
    }
  },

  subtrair: function (a, b, op) {
    if ((op = " - ")) {
      console.log(a - b);
    }
  },

  somar: function (a, b, op) {
    if ((op = " - ")) {
      console.log(a + b);
    }
  },
};

