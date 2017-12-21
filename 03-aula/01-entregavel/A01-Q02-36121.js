debugger			

function multiplicaImpares(vet){
	var somaImpares = 0;
	
	for(var i = 0; i < vet.length; i++){
		if(vet[i]%2){
			somaImpares += vet[i];
		}
	}
	return somaImpares;
}

var vet = new Array();
var i = -1;
do{
	i++;
	do{
		vet[i] = parseInt(prompt('Vai digitando, se quiser parar digite 0: '));
	}while(isNaN(vet[i]));
}while(vet[i] != 0);

alert(multiplicaImpares(vet));