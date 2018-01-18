debugger

// obtendo elemento pelo id 
var cabecalhoElem = document.querySelector("#cabecalho");
cabecalhoElem.innerHTML = "José Luis";
cabecalhoElem.className = "digCor";
cabecalhoElem.style.textAlign = "center";

/* // pega todos Elementos
var testJS = document.getElementsByClassName("test");
for(var i = 0; i < testJS.length; i++){
	testJS[i].style.color = "red" ;
}*/

// obtendo elementos pelo css
var nomeElems = document.querySelectorAll("p .nome");
for(var i = 0; i < nomeElems.length; i++){
	nomeElems[i].innerHTML = "José Luis";
	nomeElems[i].className += " digCor";
}

// Alterando a imagem da pagina
var imageElems = document.getElementsByTagName("img");
for(var i = 0; i < imageElems.length; i++){
	imageElems[i].src = "eu.jpg";
	imageElems[i].height = "200";
	imageElems[i].alt = "Esse sou eu";
}

// alterando o link da digital school
var linkElems = document.querySelectorAll("a[href*=\"minhapagina\"]")
for(var i = 0; i < linkElems.length; i++){
	linkElems[i].href = "https://br.linkedin.com/in/joseluisbarbosa";
}

var imgSimb = document.createElement("img");
imgSimb.src = "digitalschool.jpg";
imgSimb.alt = "Digital School";  
imgSimb.height = "100";
document.body.appendChild(imgSimb);