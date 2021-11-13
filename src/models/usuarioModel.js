var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT nome, nick, idade, steam, patente, email FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}
function listar2() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select nomeeqp, steamResp, nick, patente from equipe join usuario on fkEquipe = idEquipe;
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function listar3() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select * from equipe where nomeeqp;
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O ENTRAR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", )
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email, idade, nickingame, ptt, id, token) {
    console.log("ACESSEI O CADASTRO MODEL DE JOGADOR \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", );
    var instrucao = `
        INSERT INTO usuario (nome, email, idade, steam, patente, nick, token) VALUES ('${nome}', '${email}', '${idade}', '${id}', '${ptt}', '${nickingame}', '${token}');
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}


function cadastrar2(nome, idsteam, token_time) {
    console.log("ACESSEI O CADASTRO MODEL DE TIME \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", );
    var instrucao = `
        INSERT INTO equipe (nomeeqp, steamResp, idEquipe) VALUES ('${nome}', '${idsteam}', '${token_time}');
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
   return database.executar(instrucao);
}

function cadastrar3(nome, idsteam) {
    console.log("ACESSEI O CADASTRO MODEL ERRADO\n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", );
    var instrucao = `
        INSERT INTO equipe (nomeeqp, steamResp) VALUES ('${nome}', '${idsteam}');
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}
function deletar(email, token) {
    console.log("ACESSEI O DELETAR JOGADOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", );
    var instrucao = `
    DELETE FROM usuario WHERE token = '${token}' AND email = '${email}';
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function deletar2(token) {
    console.log("ACESSEI O DELETAR TIME JOGADORES MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", );
    var instrucao = `
    UPDATE usuario SET fkEquipe = null WHERE fkEquipe = '${token}';
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function deletar3(nome, token) {
    console.log("ACESSEI O DELETAR TIME MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", );
    var instrucao = `
    DELETE FROM equipe WHERE idEquipe = '${token}' AND nomeeqp = '${nome}';
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function insert_j1(token1, token_time) {
    console.log("ACESSEI O INSERT J1 MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", );
    var instrucao = `
    UPDATE usuario SET fkEquipe = '${token_time}' WHERE token = '${token1}';
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function insert_j2(token2, token_time) {
    console.log("ACESSEI O INSERT J1 MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", );
    var instrucao = `
    UPDATE usuario SET fkEquipe = '${token_time}' WHERE token = '${token2}';
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function insert_j3(token3, token_time) {
    console.log("ACESSEI O INSERT J1 MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", );
    var instrucao = `
    UPDATE usuario SET fkEquipe = '${token_time}' WHERE token = '${token3}';
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function insert_j4(token4, token_time) {
    console.log("ACESSEI O INSERT J1 MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", );
    var instrucao = `
    UPDATE usuario SET fkEquipe = '${token_time}' WHERE token = '${token4}';
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function insert_j5(token5, token_time) {
    console.log("ACESSEI O INSERT J1 MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", );
    var instrucao = `
    UPDATE usuario SET fkEquipe = '${token_time}' WHERE token = '${token5}';
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}
module.exports = {
    entrar,
    cadastrar,
    listar,
    deletar,
    listar2,
    listar3,
    deletar2,
    deletar3,
    cadastrar2,
    cadastrar3,
    insert_j5,
    insert_j4,
    insert_j3,
    insert_j2,
    insert_j1
};