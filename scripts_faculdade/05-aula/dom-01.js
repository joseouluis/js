debugger

// obtendo elemento pelo id - getElementById
var cabecalhoElem = document.getElementById("cabecalho");
cabecalhoElem.innerHTML = "Digital School";

var alterEndereco = document.getElementsByClassName("endereco");
for(var i = 0; i < alterEndereco.length; i++){
	alterEndereco[i].innerHTML = "fica na Rua Haddock lobo, 595";
}

// obtendo elementos pelo nome da TAG - getElementsByTagName
var nomeElems = document.getElementsByClassName("faculdade");
for(var i = 0; i < nomeElems.length; i++){
	nomeElems[i].innerHTML = "Digital School";
}
