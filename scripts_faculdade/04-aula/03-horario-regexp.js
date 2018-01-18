debugger

// define a regexp
var expHora = /^[012][0-9]:[0-5][0-9]$/
// recebe entrada do front
var str = prompt("Digite o horario");
// valida a entrada com o regexp
var res = expHora.test(str);
if (res == false) {
	alert("ERRO");
} else {
	alert("OK!");
}
