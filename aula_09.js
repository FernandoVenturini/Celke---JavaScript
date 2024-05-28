// Loop for basico:
var total = 0;
var resultadoA = '';

for(let i = 0; i <= 5; i++){
    //console.log("Valor da variavel i: " + i + "<br>");

    resultadoA += "Valor da variavel i: " + i + "<br>";
}
// console.log(resultadoA);

// Enviando os dados para o arquivo index.html:
document.getElementById("listar").innerHTML = resultadoA;


/*************LER O ARRAY COM FOR******************/
// Listar os produtos que estao no array:
var carrinho = new Array();
carrinho[0] = ["Curso de PHP Developer", 329, 1];
carrinho[1] = ["Curso de Node.js, React e React Native", 439, 1];
console.log(carrinho);

var resultadoB = '';
for(let i = 0; i < carrinho.length; i++){
    resultadoB += 
    "Nome do produto: " + carrinho[i][0] + 
    " - Preco do produto: R$ " + carrinho[i][1] + 
    " - Quantidade: " + carrinho[i][2] + "<br>";
}
//console.log(resultadoB);
// Enviando os dados para o arquivo index.html:
document.getElementById("listar-produtos").innerHTML = resultadoB;


/*************LER O OBJETO COM FOR*****************/
// Listar as caracteristicas do imovel que es no objeto:
var imovel = {tipo: "Tipo do imovel - Casa", dormitorios: "Numero de dormitorios - 3", mobiliado: "Mobiliado - Nao"};
//console.log(imovel);
for(let caracteristica in imovel){
    //document.getElementById("listar-caract-imovel").innerHTML = imovel[caracteristica] + "<br>.";
    document.getElementById("listar-caract-imovel").insertAdjacentHTML("beforeend", imovel[caracteristica] + "<br>");
}