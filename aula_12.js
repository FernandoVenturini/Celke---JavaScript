var cadeira = {
    cor: 'Preta',
    altura: 118,
    largura: 74,
    profundidade: 64
};
console.log(cadeira);
console.log(cadeira.cor);

document.getElementById("cor-cadeira").innerHTML = "Cor da cadeira: " + cadeira.cor + "<br>";
document.getElementById("altura-cadeira").innerHTML = "Altura da cadeira: " + cadeira.altura + "<br>";
document.getElementById("largura-cadeira").innerHTML = "Largura da cadeira: " + cadeira.largura + "<br>";
document.getElementById("profundidade-cadeira").innerHTML = "Profundidade da cadeira: " + cadeira.profundidade + "<br>";

document.getElementById("cor-cadeira-um").innerHTML = "Cor cadeira " + cadeira.cor + "<br>";
// Apagar um valor do objeto:
delete cadeira.cor;
document.getElementById("cor-cadeira-dois").innerHTML = "Cor cadeira " + cadeira.cor + "<br>";

document.getElementById("peso-cadeira-um").innerHTML = "Peso cadeira " + cadeira.peso + "<br>";
// Acrescenta valor no objeto:
cadeira.peso = 16;
document.getElementById("peso-cadeira-dois").innerHTML = "Peso cadeira " + cadeira.peso + "<br>";

var mesa = new Object();
mesa.cor = "Preta";
mesa.largura = 220;
document.getElementById("cor-mesa").innerHTML = "Cor mesa " + mesa.cor + "<br>";
document.getElementById("largura-mesa").innerHTML = "Largura mesa " + mesa.largura + "<br>";

