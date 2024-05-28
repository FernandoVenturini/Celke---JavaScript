async function carregar(){
    calcular(5, 2);
    var retorno = await requisicaoApi(3000);
    console.log(retorno);
    calcular(3, 5);
}

function requisicaoApi(ms) {
    return new Promisse(resolve => {
        setTimeout(() => {
            resolve("Retorno pausar o tempo: " + ms);
            console.log("Pausar o tempo:  " + ms);
        }, ms);
    });
};

function calcular(a, b) {
    console.log(a + b);
}