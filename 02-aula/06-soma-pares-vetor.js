debugger
function somaPares(n){
	var somaPar = 0;
	
	for(i = 0; i < n; i++){
		do{
			numIn = parseInt(prompt('Digite o '+(i+1)+'o numero: '));
		}while(isNaN(numIn));
		
		if(numIn%2 == 0){
			somaPar += numIn;
			//alert(somaPares+' '+i);
		}
	}
	return somaPar;
}

do{
	do{
		num = parseInt(prompt('Digite a quantidade de numeros: '));
	}while(isNaN(num));
}while(num < 3);

alert(total = somaPares(num));
