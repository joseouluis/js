debugger

// obtendo elemento pelo id 
var cabecalhoElem = document.querySelector("#cabecalho");
cabecalhoElem.innerHTML = "Digital School";
cabecalhoElem.className = "digCor";
cabecalhoElem.style.textAlign = "center";

// obtendo elementos pelo css
var nomeElems = document.querySelectorAll("p .faculdade");
for(var i = 0; i < nomeElems.length; i++){
	nomeElems[i].innerHTML = "Digital School";
	nomeElems[i].className += " digCor";
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

var imgSimb = document.createElement("img");
imgSimb.src = "simbiose.png";
imgSimb.alt = "Simbiose";
document.body.appendChild(imgSimb);