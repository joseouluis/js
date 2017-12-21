debugger

var botao = document.getElementById("botao");

var onButtonClick = function(){
	
	var campoTexto = document.getElementById("texto").value;
	var opcao = document.getElementById("opcao").value;
	
	var lis = document.getElementById("lista");
	if(campoTexto == ""){
			var flag = 1;
			//mensagem = "Preencha o campo texto";
	}else {flag = 0;}
	switch(opcao){
		case "final": 
				mensagem = "Preencha o campo texto";
				if(!flag){
					mensagem = "";
					var addFinal = document.createElement("li");
					addFinal.textContent = campoTexto;
					lis.appendChild(addFinal);
				}
			break;				
		case "antesSegundo": 
				mensagem = "Preencha o campo texto";
				if(!flag){						
					mensagem = "";
					var antesSegundo = document.createElement("li");
					antesSegundo.textContent = campoTexto;
					lis.insertBefore(antesSegundo, lis.childNodes[2]);
					antesSegundo.style.color = "blue";
				}
			break;
		case "inicio": 
				mensagem = "Preencha o campo texto";
				if(!flag){		
					mensagem = "";
					var addInicio = document.createElement("li");
					addInicio.textContent = campoTexto;
					lis.insertBefore(addInicio, lis.childNodes[0]);
					addInicio.style.color = "blue";
				}
			break;
		case "remTerceiro": 
				mensagem = "Não tem terceiro!";
				if(lis.childNodes[3]){
					mensagem = "";
					lis.removeChild(lis.childNodes[3]);			
				}
			break;				
		case "subsQuarto": 
				mensagem = "Preencha o campo texto";
				if(!flag){		
					if(lis.childNodes[4]){
						mensagem = "";
						var replaceItem = document.createElement("li");
						replaceItem.textContent = campoTexto;
						lis.replaceChild(replaceItem, lis.childNodes[4]);
						replaceItem.style.color = "red";
					}else{mensagem = "Não tem Quarto!";}
				}
			break; 
		default: mensagem = "Deu algum erro ae!";
	}
	document.getElementById("mensagem").textContent = mensagem;
}
botao.addEventListener("click", onButtonClick);
