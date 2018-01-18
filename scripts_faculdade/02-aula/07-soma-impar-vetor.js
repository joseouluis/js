debugger
function somarMediaImpares(n){
	var somaImpar = 0;
	
	for(i = 0; i < n; i++){
		do{
			numIn = parseInt(prompt('Digite o '+(i+1)+'o numero: '));
		}while(isNaN(numIn));
		
		if(numIn%2){
			somaImpar += numIn;
			//alert(somaPares+' '+i);
		}
	}
	return (somaImpar/n);
}

do{
	do{
		num = parseInt(prompt('Digite a quantidade de numeros: '));
	}while(isNaN(num));
}while(num < 2 || num > 7);

var media = somarMediaImpares(num)
//var mediaArredondada = parseFloat(media.toFixed(2));

alert(media);
