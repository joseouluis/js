debugger

var botao = document.getElementById("botao");

var butao = document.getElementById("butao");

var onButtonClick = function(){
	
	var n1 = parseFloat(document.getElementById("n1").value);
	var n2 = parseFloat(document.getElementById("n2").value);
	var op = document.getElementById("op").value;

	var resultado;
	switch(op){
		case "1": 
				resultado = n1+n2;
			break;
		case "2": 
				resultado = n1*n2;
			break;
		case "3": 
				resultado = n1-n2;
			break;
		case "4": 
				resultado = n1/n2;
			break;													
		default: mensagem = "Deu algum erro ae!";
	}

	var divA = document.getElementById("divA")
	var count = 0;
	
	var novoDiv = document.createElement("label");
	novoDiv.setAttribute("id", "div"+count);
	novoDiv.textContent = resultado+" ";
	divA.appendChild(novoDiv);
	
	var butao = document.createElement("button");
	butao.setAttribute("id", "btn"+count);
	butao.textContent = "Remover";
	divA.appendChild(butao);

	count++;

	var pulaLinha = document.createElement("br");
	divA.appendChild(pulaLinha);

	var removerBotao = function(){

		butao.removeChild(butao.firstChild);
		divA.removeChild(divA.firstChild);
	}
	butao.addEventListener("click", removerBotao)


}
botao.addEventListener("click", onButtonClick);

