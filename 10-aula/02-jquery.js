debugger
$(document).ready(function(){

    $("#botao").click(function(){
        var mensagem = $("#txtTexto").val();
        var form = ($("#form").val();
        var cor = $("#cor").val();

        alert(mensagem+form+cor);
/*
		switch(form){
			case "negrito":

					mensagem = $("#mensagem").addClass("format");
					break;

			default: mensagem = "ERRO";
		}

		$("#mensagem").text(mensagem);*/
    });
});
