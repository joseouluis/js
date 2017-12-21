
vet = new Array(3);
alert('Digite 3 numeros');
for(i = 0; i < vet.length; i++){
	do{
		vet[i] = parseInt(prompt('Digite o '+(i+1)+'o numero: '));
	}while(isNaN(vet[i]));
}

ladoA = vet[0];
ladoB = vet[1];
ladoC = vet[2];

if((ladoA+ladoB) > ladoC && (ladoA+ladoC) > ladoB && (ladoB+ladoC) > ladoA){
	if(ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){
		alert('Triangulo Escaleno');
	}
	else if(ladoA == ladoB && ladoA == ladoC){
		alert('Triangulo Equilatero');
	}
	else{
		alert('Triangulo Isosceles');
	}
}
else{
	alert('Não é possivel formar um triangulo');
}
