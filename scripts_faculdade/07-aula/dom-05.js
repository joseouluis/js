debugger

var botao = document.getElementById("botao");
// obtem elemento que vai receber o evento
var onButtonClick = function(){
	botao.textContent = "Clicou !!";
}
// associa a funcao ao evento do elemento
botao.addEventListener("click", onButtonClick);
