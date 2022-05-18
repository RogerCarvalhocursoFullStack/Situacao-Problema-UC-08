// -Listar participantes e palestrantes por evento.
 

let entrada = require("readline-sync");

let ListaParticipantes = entrada.question("Informe seu Nome: ");

let ListaParticipantesTotal = ListaParticipantes ["console.question"];

let entrada1 = require("readline-sync");

let dataAtual = entrada1.question("Qual Dia voce pretende participar do Evento? ");


if (dataAtual >= 15) {
    console.log("Cadastro de Evento Liberado"); 
} else {
    console.log("Cadastro Nao Realizado Data Inválida");
}
if (dataAtual < 15) {
    let dataAtual = entrada1.question("Qual Dia voce pretende participar do Evento?");
} else {
    console.log("Cadastro de Evento Liberado");
}


// Solicitação da Data de Nascimento

let entrada2 = require("readline-sync");

let dataNascimento = entrada2.question("Informe sua idade?");

if (dataNascimento >= 18){
    console.log("Idade Compativel com o Evento, Continue seu Cadastro");
} else {
    console.log("Idade Não Compativel para Continuar o Cadastro");
} 
if (dataNascimento < 18) {
    let dataNascimento = entrada2.question("informe sua idade?");
} else {
    console.log("Idade Compativel com o Evento, Continue seu Cadastro");

}

let quantInscritoPalestra = 99

if (quantInscritoPalestra < 100){
    console.log("Cadstro permitido");
} else {
    console.log("Desculpe Cadastro não realizado por Excesso de Participantes");
    ListaParticipantes.push [console.question];
};
console.log("lISTA DE PARTICIPANTES INSCRITOS: " + ListaParticipantes  + "  Palestrante Rogerio");

console.log("Fim do Cadastro");

