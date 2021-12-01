var database = require("../database/config");

function listar() {
    console.log("LISTANDO AVALIACOES:");
    var instrucao = `
    select num_estrelas as 'estrelinhas', titulo, mensagem, nome, dia, mes, ano, fkToken from avaliacoes join usuario on token = fkToken;
    `;
    return database.executar(instrucao);
}

function enviar(titulo, estrelas, mensagem, fkToken) {
    console.log("ENVIANDO AVALIACOES:");
    let data = new Date;
    var instrucao = `
    insert into avaliacoes(titulo, num_estrelas, mensagem, dia, mes, ano, fkToken) values ( '${titulo}', ${estrelas}, '${mensagem}', '${data.getDate()}', '${data.getMonth() + 1}', '${data.getFullYear()}', '${fkToken}');
    `;
    console.log(instrucao);
    return database.executar(instrucao);
}

function deletar(token) {
    console.log("DELETANDO AVALIACOES:");
    let data = new Date;
    var instrucao = `
    delete from avaliacoes where fkToken = '${token}';
    `;
    console.log(instrucao);
    return database.executar(instrucao);
}
module.exports = {
    listar,
    enviar,
    deletar
}
