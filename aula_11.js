// Receber dados do campo "form_nome_usuario" do formulario:
let nomeUsuario = document.getElementsByName("form_nome_usuario");
console.log(nomeUsuario);

// Enviar os dados para o arquivo index.html utilizando o atributo ID:
document.getElementById("valor_form_nome_usuario").innerHTML = nomeUsuario[0].defaultValue;

// Chamar a funcao quando usuario digitar algum valor no campo "form_turma_usuario":
function receberTurmaUsuario(){
    // Receber dados do campo "form_turma_usuario" do formulario quando usuario digitar valor no campo:
    var turmaUsuario = document.getElementById("form_turma_usuario").value;
    //console.log(turmaUsuario);

    // Enviar os dados para o formulario do arquivo index.html utilizando o atributo ID:
    document.getElementById("receber_turma_usuario").value = turmaUsuario;

    // Enviar os dados para o arquivo index.html utilizando o atributo ID:
    document.getElementById("valor_form_turma_usuario").innerHTML = turmaUsuario;
}