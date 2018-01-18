debugger

var botao = document.getElementById("botao");

var onButtonClick = function(){
	var saudacao;
	var primeiroNumero = parseInt(document.getElementById("pNumero").value);
	var segundoNumero = parseInt(document.getElementById("sNumero").value);
	var operacao = document.getElementById("operacao").value;
	
	if(isNaN(primeiroNumero) || isNaN(segundoNumero)){
			saudacao = "Digite apenas numeros nos campos!";
	}
	else{
		switch(operacao){
			case "soma": saudacao = "Resultado = "+(primeiroNumero+segundoNumero);
					break;
			case "sub": saudacao = "Resultado = "+(primeiroNumero-segundoNumero);
					break;
			case "multi": saudacao = "Resultado = "+(primeiroNumero*segundoNumero);
					break; 
			case "div": saudacao = "Resultado = "+(primeiroNumero/segundoNumero);
					break;
			case "pot": saudacao = "Resultado = "+(Math.pow(primeiroNumero, segundoNumero));
					break;
			default: saudacao = "ERRO";
		}
	}
	document.getElementById("mensagem").textContent = saudacao;
}
botao.addEventListener("click", onButtonClick);