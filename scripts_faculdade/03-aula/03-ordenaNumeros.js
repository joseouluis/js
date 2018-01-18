debugger

function exibeVetor(vet){
	alert(vet);
}

function exibeVetorOrdenado(vet){
	alert(vet.sort(ordenador));
}

function ordenador(x, y){
	return x-y;
}

function exibeVetorInvertido(vet){
	var j = 0;
	var vetInvertido = new Array();
	for(var i = (vet.length-1); i >= 0; i--){
		vetInvertido[j++] = vet[i];		
	}
	alert(vetInvertido);
}


//MAIN
var vetor = new Array();
for (var i = 0; i < 4; i++){
	do{
		var num = parseInt(prompt('Digite o '+(i+1)+'o numero: '));
	}while(isNaN(num));
	
	vetor[i] = num;
}

exibeVetor(vetor);
exibeVetorOrdenado(vetor);
exibeVetorInvertido(vetor);
