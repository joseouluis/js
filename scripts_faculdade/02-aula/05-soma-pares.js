do{
	num = parseInt(prompt('Digite um numero: '));
}while(isNaN(num));

var somaPares = 0;
for(i = 1; i <= num; i++){
		if(i%2 == 0){
			somaPares += i;
			//alert(somaPares+' '+i);
		}
}

alert(somaPares);