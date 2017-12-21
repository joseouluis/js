debugger

var cabecalhoElem = document.querySelector("#cabecalho");
cabecalhoElem.innerHTML = "Digital School";

var nomeElems = document.querySelectorAll("p .faculdade");
for(var i = 0; i < nomeElems.length; i++){
	nomeElems[i].innerHTML = "Digital School";
}

var alterEndereco = document.getElementsByClassName("endereco");
for(var i = 0; i < alterEndereco.length; i++){
	alterEndereco[i].innerHTML = "fica na Rua Haddock lobo, 595";
}
