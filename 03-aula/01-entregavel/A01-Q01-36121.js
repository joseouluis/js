debugger			
var qtd, preco, total;

do{
	preco = parseFloat(prompt('Digite o preco do produto: '));
}while(isNaN(preco));

do{
	qtd = parseInt(prompt('Quantas unidades deseja comprar: '));
}while(isNaN(qtd));

total = qtd*preco;
alert('O valor total da compra e: ' +total);

if(total > 500){
	do{
		do{
			var parcelas = parseInt(prompt('Quantidade de parcelas que deseja? Ate 3x: '));
		}while(isNaN(parcelas));	
	}while(parcelas > 3);
	
	var totalComDesconto = total;
	switch(parcelas){
		case 1: 
			totalComDesconto -= (totalComDesconto *= 0.2);
			alert('1x '+totalComDesconto);
			break;
		case 2: 
			totalComDesconto -= (totalComDesconto *= 0.15);
			alert('2x '+(totalComDesconto/2));
			break;
		case 3: 
			totalComDesconto -= (totalComDesconto *= 0.12);
			alert('3x '+(totalComDesconto/3));
			break;
		default:
			break;
	}
}
else{
	alert('Valores inferiores a R$500 nao permite parcelar, valor a pagar: '+total);
}