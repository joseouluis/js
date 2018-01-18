debugger

var expData = /^([0-9]){3}\.([0-9]){3}\.([0-9]){3}\-([0-9]){2}$/

var cpfLido = prompt("Digite o CPF: ");

var resultado = expData.test(cpfLido);

if (resultado == false) {
	alert("ERRO");
} else {
	alert("OK!");
}
 