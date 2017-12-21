debugger

// obtendo elemento pelo id 
var cabecalhoElem = document.querySelector("#cabecalho");
cabecalhoElem.innerHTML = "Digital School";

// obtendo elementos pelo css
var nomeElems = document.querySelectorAll("p .faculdade");
for(var i = 0; i < nomeElems.length; i++){
	nomeElems[i].innerHTML = "Digital School";
}

var alterEndereco = document.getElementsByClassName("endereco");
for(var i = 0; i < alterEndereco.length; i++){
	alterEndereco[i].innerHTML = "fica na Rua Haddock lobo, 595";
}

// Alterando a imagem da pagina
var imageElems = document.getElementsByTagName("img");
for(var i = 0; i < imageElems.length; i++){
	imageElems[i].src = "digitalBuild.png";
	imageElems[i].height = "300";
	imageElems[i].alt = "Digital Building";
}

// alterando o link da digital school
var linkElems = document.querySelectorAll("a[href*=\"bandtec\"]")
for(var i = 0; i < linkElems.length; i++){
	linkElems[i].href = "http://www.digitalschool.com.br/faculdade/graduacao";
}

cabecalhoElem.style.color = "#00BACF";
cabecalhoElem.style.backgroundColor = "#e6005a";
cabecalhoElem.style.textAlign = "center";