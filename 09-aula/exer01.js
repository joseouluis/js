debugger

var botao = document.getElementById("botao");

var onButtonClick = function(){
	
	var campoTexto = document.getElementById("texto").value;
	var campoIndice = parseInt(document.getElementById("indice").value);
	var opcao = document.getElementById("opcao").value;
	
	if(isNaN(campoIndice)){
			mensagem = "Indice inválido";
	}
	else{
		var lis = document.getElementById("lista");
		switch(opcao){
			case "antes": 
					mensagem = "";
					var addAntes = document.createElement("li");
					addAntes.textContent = campoTexto;
					lis.insertBefore(addAntes, lis.childNodes[campoIndice]);
					addAntes.style.color = "blue";
				break;
			case "depois": 
					mensagem = "";
					var addDepois = document.createElement("li");
					addDepois.textContent = campoTexto;
					lis.insertBefore(addDepois, lis.childNodes[campoIndice+1]);
					addDepois.style.color = "blue";
				break;
			case "substituir": 
					mensagem = "";
					var replaceItem = document.createElement("li");
					replaceItem.textContent = campoTexto;
					lis.replaceChild(replaceItem, lis.childNodes[campoIndice]);
					replaceItem.style.color = "red";
				break; 
			case "remover": 
					mensagem = "";
					lis.removeChild(lis.childNodes[campoIndice]);			
				break;
			default: mensagem = "Deu alguma merda ae!";
		}
	}
	document.getElementById("mensagem").textContent = mensagem;
}
botao.addEventListener("click", onButtonClick);
