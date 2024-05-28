// Como ler objeto com JavaScript e como criar objeto com JavaScript: Criar objeto de forma literal:
var cadeira = {
    cor: 'Preta',
    altura: 118,
    largura: 74,
    profundidade: 64
}

console.log(cadeira.cor);

// Ler os valores do objeto
document.querySelector("#cor_cadeira").innerHTML = `Cor da cadeira: ${cadeira.cor}`;
document.querySelector("#altura_cadeira").innerHTML = `Altura da cadeira: ${cadeira.altura}`;
document.querySelector("#largura_cadeira").innerHTML = `Largura da cadeira: ${cadeira.largura}`;
document.querySelector("#profundidade_cadeira").innerHTML = `Profundidade da cadeira: ${cadeira.profundidade}`;

document.querySelector("#cor_cadeira-um"
).innerHTML = `Cor da cadeira: ${cadeira.cor}`;
// Apagar um valor do objeto
delete cadeira.cor;
console.log(cadeira);
document.querySelector("#cor_cadeira-dois"
).innerHTML = `Cor da cadeira: ${cadeira.cor}`;

document.querySelector("#peso_cadeira-um"
).innerHTML = `Peso da cadeira: ${cadeira.peso}`;
// Acrescentar um valor do objeto
cadeira.peso = 16;
//console.log(cadeira);
document.querySelector("#peso_cadeira-dois"
).innerHTML = `Peso da cadeira: ${cadeira.peso}`;

// Criar o objeto com construtor object
var mesa = new Object();
mesa.cor = 'Preta';
mesa.largura = 220;
document.getElementById('cor-mesa').innerHTML = `Cor da mesa: ${mesa.cor}`;
document.getElementById('largura-mesa').innerHTML = `Largura da mesa: ${mesa.largura}`;
//console.log(mesa);