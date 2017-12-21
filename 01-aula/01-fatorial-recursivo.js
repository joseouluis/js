// por recursividade
function somaFatorial(num){
	// se for 1 ou 0 retorna 1
	if (num === 0 || num === 1)
		return 1;
	else
		return num * somaFatorial(num-1);
}
//MAIN
var num;
// só aceita se for um numero
do{
	num = parseInt(prompt('Digite 1 numero: '));
} while(isNaN(num));
	
// exibe já chamando a função
alert(somaFatorial(num));
		
