var database = require("../database/config");

function listar() {
    console.log("LISTANDO AVALIACOES:");
    var instrucao = `
    select num_estrelas as 'estrelinhas', titulo, mensagem, nome, dia, mes, ano, fkJogador from avaliacoes join usuario on idUsuario = fkJogador;
    `;
    return database.executar(instrucao);
}

function enviar(titulo, estrelas, mensagem, fkUsuario) {
    console.log("ENVIANDO AVALIACOES:");
    let data = new Date;
    var instrucao = `
    insert into avaliacoes(titulo, num_estrelas, mensagem, dia, mes, ano, fkJogador) values ( '${titulo}', ${estrelas}, '${mensagem}', '${data.getDate()}', '${data.getMonth() + 1}', '${data.getFullYear()}', ${fkUsuario});
    `;
    console.log(instrucao);
    return database.executar(instrucao);
}
module.exports = {
    listar,
    enviar
}
