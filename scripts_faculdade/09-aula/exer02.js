debugger

var botao = document.getElementById("botao");

var onButtonClick = function(){
	
	var divA = document.getElementById("divA");
	divA.removeChild(divA.firstChild);
	divA.firstChild.removeChild(divA.firstChild.firstChild);
	var divB = document.createElement("li");
	divB.textContent = 3;
	divB.textContent += "Y";
	divA.appendChild(divB);
}
botao.addEventListener("click", onButtonClick);
