
do{
	salarioAtual = parseInt(prompt('Digite seu salario: '));
}while(isNaN(salarioAtual));

if(salarioAtual < 500){
	novoSalario = salarioAtual * 1.2;
}
else if (salarioAtual > 1000){
		novoSalario = salarioAtual * 1.1;
	}
	else{
		novoSalario = salarioAtual * 1.15;
	}
	
alert('Seu novo salario '+novoSalario);
		