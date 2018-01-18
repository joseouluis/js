
nome = prompt('Digite seu nome: ');
//var anoNasc, mes, dia, idade, anoAtual;

do{
	anoNasc = parseInt(prompt('Ola '+nome+' qual o ano do seu nascimento: '));
}while(isNaN(anoNasc));

do{
	do{
		dia = parseInt(prompt(nome+' em que dia voce nasceu: '));
	}while(isNaN(dia));
}while(dia <= 1 || dia >= 31);

do{
	do{
		mes = parseInt(prompt(nome+' em que mes voce nasceu: '));
	}while(isNaN(mes));
}while(mes <= 1 || mes >= 12)

do{
	anoAtual = parseInt(prompt('Em que anos estamos: '));
}while(isNaN(anoAtual));

idade = anoAtual - anoNasc;

alert('Voce completou '+idade+' anos em '+dia+'/'+mes+'/'+anoAtual);
 