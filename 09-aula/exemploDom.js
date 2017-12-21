debugger

console.log(document.body.firstChild);

var bodyChild = document.body.childNodes;
console.log(bodyChild);

var lis = document.getElementById("lista");
lis.removeChild(lis.firstChild);

var lisChild = lis.childNodes;
console.log(lisChild);

console.log(lis.previousSibling);
console.log(lis.nextSibling);
console.log(lis.parentNode);

var ultimoItem = document.createElement("li");
ultimoItem.textContent = "Ultimo Item";
lis.appendChild(ultimoItem);

var primeiroItem = document.createElement("li");
primeiroItem.textContent = "Primeiro Item";
lis.insertBefore(primeiroItem, lis.firstChild);

var replaceItem = document.createElement("li");
replaceItem.textContent = "Item trocado";
lis.replaceChild(replaceItem, lis.childNodes[2]);
