		
function leNumeros(vet){
	var x;
	for(i=0;i < vet.length;i++){				
		do{
			x = parseInt(prompt('Digite o '+(i+1)+'o numero: '));
		}while(isNaN(x));
		vet[i]=x;
	}
}			

function calcMedia(vet){
	var media=0;
	for(i=0;i < vet.length;i++){
		media += vet[i];
	}
	return media;
}
			
var tam, vet;
do{
	tam = parseInt(prompt('Digite o tamanho do vetor'));
}while(isNaN(tam));

vet = new Array(tam);
leNumeros(vet);
var media = calcMedia(vet);
alert('Media: ' +(media/tam));

//for(i=0;i < vet.length;i++){
	//alert((i+1) + 'o. elemento= ' + vet[i]);
//}
