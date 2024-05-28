// Enviar os daods para o arquivo index.html utilizando o atributo id:
document.getElementById("nome-usuario").innerHTML = "<p style='color:green'>Cesar</p>";

// Enviar os daods para o arquivo index.html utilizando o atributo class:
document.getElementsByClassName("turma-usuario")[0].innerHTML = "<p style='color: #8a2be2'>Curso de PHP Developer</p>"

// Enviar dados do JavaScript para o HTML atraves do class - querySelector:
document.querySelector(".modulo").innerHTML = "<p style='color: #8a2be2'>PHP</p>"

// Enviar dados do JavaScript para o HTML utilizando o atributo indicado id:
document.querySelector("#qnt-aula-visualizada").innerHTML = "<p style='color: #dc143c'>7 aula(s)</p>";

// Verificar no JavaScript se existe o atributo com o seletor na pagina HTML. Enviar dados do JavaScript para o HTML  atraves do id - querySelector:
var sitInscricao = document.querySelector("#sit-inscricao");
if(sitInscricao){
    sitInscricao.innerHTML = "<p style='color: green'> Pago</p>";
}