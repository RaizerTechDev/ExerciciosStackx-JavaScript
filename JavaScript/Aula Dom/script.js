
let box = document.querySelectorAll('#box');
let box2 = document.querySelectorAll('#box2');
let box3 = document.querySelectorAll('#box3');

box.textContent = '<p>Teste do paragrafo do content</p>';
box.innerHTML = '<br /><br /><p>Teste do paragrafo do innerHTML</p>';
box.innerHTML = '<a href="#">Um link de navegação</a>';

const btn = document.createElement("button")
btn.innerHTML = "Clicar";

const a = document.querySelector("#box > a")
console.log(a);

/*
box2.innerHTML = `
<div class="teste">
<h2>Título do meu teste</h2>
<br />
<p> Estou testando a segunda box</p>
</div>
`;

box3.innerHTML = `
<h2>Box 3<h2>
<p> Este é o paragro do box3</p

`;




console.log(box3);


/* EVENTOS */

//const div = document.querySelector("div");
//const btn = document.querySelector("#btnJs");

//btn.addEventListener("click", function () {
 // div.innerHTML = "<h3>Olá mundo</h3>";
  //div.style.color = "red";
// });

//function criaP() {
  //div.innerHTML += "<p>Olá mundo</p>";
  //div.style.color = '#000';
//}

//const form = document.querySelector("form");
//form.addEventListener("submit", function (event) {
 // event.preventDefault();
  //console.log(document.querySelector("input[type=text]"), value.toString);
//});
