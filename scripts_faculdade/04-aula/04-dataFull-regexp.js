debugger

var expData = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([1-9][1-9][1-9][1-9])$/

var dataLida = prompt("Digite a data: ");

var resultado = expData.test(dataLida);

if (resultado == false) {
	alert("ERRO");
} else {
	alert("OK!");
}
