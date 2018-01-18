debugger
function Candidato(_nome, _email, _telefone, _notaTes, _notaDin){
	this.nome = _nome;
	this.email = _email;
	this.telefone = _telefone;
	this.notaTes = _notaTes;
	this.notaDin = _notaDin;
	
	this.toString = function(){
		return(("Nome: "+this.nome+" e-mail: "+this.email+" Telefone: "+this.telefone+" Nota Teste Texto: "+this.notaTes+" Nota Teste Dinamico: "+this.notaDin));
	} 
	
	this.exibeMedia = function(){
		var media = (notaTes + notaDin)/2;
		alert("Sua media foi: "+media);		
	}
}

//MAIN

var expNome = /^[^0-9]*$/
var expEmail = /^[a-z0-9](\.?\_?[a-z0-9])*@[a-z0-9][a-z0-9\-]*(\.[a-z]*\.?[a-z]*)$/
var expTel = /^\([0-9]{3}\)[1-9]{4}\-[0-9]{4}$/
var expNota = /^([0-9]\.[0-9]|10)$/

do{
	do{
		var nome = prompt("Digite seu nome: ");
		var ok = expNome.test(nome);
	}while(!ok)
	
	do{
		var email = prompt("Digite seu e-mail: ");
		var ok = expEmail.test(email);
	}while(!ok)
	
	do{
		var telefone = prompt("Digite seu telefone: ");
		var ok = expTel.test(telefone);
	}while(!ok)
	
	do{
		var notaTes = parseFloat(prompt("Digite a nota Teste Texto: "));
		var ok = expNota.test(notaTes);
	}while(!ok)
		
	do{
		var notaDin = parseFloat(prompt("Digite a nota Teste Dinamica: "));
		var ok = expNota.test(notaDin);
	}while(!ok)
		
	var pessoa = new Candidato(nome,email,telefone,notaTes,notaDin);
	alert(pessoa.toString());
	pessoa.exibeMedia();

	var continua = prompt("Se deseja continuar tecle S: ");
}while(continua == "S")
