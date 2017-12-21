debugger

var botao = document.getElementById("botao");

var onButtonClick = function(){
	var nome = document.getElementById("nome").value;
	var idioma = document.getElementById("idioma").value;
	
	if(idioma === "pt"){
		saudacao = "Ola, "+nome;
	}
	else if(idioma === "in"){
		saudacao = "Hello, "+nome;
	}
	else {
		saudacao = "Hola, "+nome;
	}
	document.getElementById("mensagem").textContent = saudacao;
}
botao.addEventListener("click", onButtonClick);