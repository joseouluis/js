debugger
$(document).ready(function(){

    $("#btnCorTexto").click(function(){

    	var cor = $("#cor").val();
		if(cor == "azul")
    		$("#cabec").addClass('azul');
       	else if (cor == "vermelho")
   			$("#cabec").addClass('vermelho');
        else if (cor == "verde")
    		$("#cabec").addClass('verde');
    });

	$("#btnCorFundo").click(function(){

    	var cor = $("#cor").val();
		if(cor == "azul")
    		$("#cabec").addClass('backAzul');
       	else if (cor == "vermelho")
   			$("#cabec").addClass('backVermelho');
        else if (cor == "verde")
    		$("#cabec").addClass('backVerde');
    });

	$("#btnImagemOut").click(function(){
		$("#imagem").hide();		
    });

    $("#btnImagemIn").click(function(){
		$("#imagem").show();		
    });

	$("#btnTexto").click(function(){
		var texto = $("#texto").val();
		if(texto == ""){
			alert("Campo texto vazio!")
		}else{
			$("#textoAntesImg").text(texto);
		}
    });

});


