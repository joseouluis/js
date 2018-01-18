debugger
$(document).ready(function(){

    $("#botao").click(function(){
        var primeiroNumero = parseInt($("#pNumero").val());
        var segundoNumero = parseInt($("#sNumero").val());
        var operacao = $("#operacao").val();

        var saudacao;

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
		$("#mensagem").text(saudacao);
    });
});
