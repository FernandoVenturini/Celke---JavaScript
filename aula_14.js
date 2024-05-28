var frutas = ["Abacate", "Abacaxi", "Amora", "Acai", "Cereja", "Figo"];
console.log(frutas); //Imprime o array de frutas

// Contar a qtd de itens do array;
document.getElementById("qnt-itens").innerHTML = "<p>Quantidade de frutas: "+ frutas.length + "</p>";

// Acessar primeiro item do array:
document.getElementById("item1").innerHTML = "<p>Primeira Fruta: " + 
frutas[0] + "</p>";

// Acessar o segundo item do Array:
document.getElementById("item2").innerHTML = "<p>Segunda Fruta: " + frutas[1] + "</p>";

// Acessar o ultimo item do Array:
document.getElementById("ultimoItem").innerHTML = "<p>Ultima Fruta: " +  
frutas[frutas.length - 1] + "</p>";

// Adicionarum item no final do array:
document.getElementById("aui").innerHTML = "<p>Adicionando ultimo item no array: " + frutas.push('maca') + "</p>";

// Adicionando no inicio:
document.getElementById("ani").innerHTML = "<p>Adicionando item no inicio do Array: " + frutas.unshift('Kiwi') + "</p>";

// Removendo item no final do array:
document.getElementById("rfa").innerHTML = "<p>Removendo item no final do array: " + frutas.pop() + "</p>";

// Removendo item no inicio do array:
document.getElementById("ria").innerHTML = "<p>Removendo item no final do array: " + frutas.shift() + "</p>";

// Remover um item pela posicao do indice:
frutas.splice(2, 3);
console.log(frutas);  

// Ler todo o array:
frutas.forEach((item, indice, array) => {
    console.log(item, indice);
    document.getElementById("ler").insertAdjacentElement('beforeend', indice + " - " + item + "<br>");
});

var cars = ["Aston Martin", "Ferrari", "Lamborghini", "Audi", " BMW"];
console.log(cars);

// Adicionar um item ao final do Array:
cars.push("Mercedez");
console.log(cars);

// Ler um Array:
cars.forEach((item, indice, array) => {
    console.log(cars);
    document.querySelector(".listar-cars").insertAdjacentHTML('beforeend', cars + "<br>");
});
