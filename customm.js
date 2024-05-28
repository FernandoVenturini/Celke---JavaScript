function alterarCont(){
    document.getElementById("exemplo").innerHTML = '<h1 style="color:red;">LVF_Code - Tutorial JavaScript!</h1>';
}

document.write("<h2>Variavel</h2>");

var nome_aluno = "Fernando";
var idadeAluno = 43;
var curso = "Curso de JavaScript";

document.write("Aluno(a): " + nome_aluno + ", tem a idade de " + idadeAluno + ". Esta inscrito no " + curso );
document.write("<hr>");

document.write("<h2>Constante</h2>");

const nome_aluno_const = "Jessica";
const idade_aluno_const = "33";
const curso_const = "Curso de CSS";
document.write("Aluno(a): " + nome_aluno_const + ", tem a idade de " + idade_aluno_const + ". Esta inscrito no " + curso_const);
document.write("<hr>");

document.write("<h2>Let</h2>");
let nome_aluno_let = "Cesar";
let idade_aluno_let = "31";
let curso_let = "Curso PhP";
document.write("Aluno(a): " + nome_aluno_let + ", tem a idade de " + idade_aluno_let + ". Esta inscrito no " + curso_let + " <br> ");


if(true) {
    var situacao_um = 'Ativo';
    const situacao_dois = 'Inativo';
    let situacao_tres = 'Analise';

    document.write("Situacao um: " + situacao_um + "<br>");
    document.write("Situacao dois: " + situacao_dois +  "<br>");
    document.write("Situacao tres: " + situacao_tres + "<br>");
}