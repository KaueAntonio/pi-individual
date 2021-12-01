var database = require("../database/config")

function listar() {
     var instrucao = `
    select * from usuario left join equipe on fkEquipe = idEquipe;
    `;
    console.log('Listando Usuários');
    return database.executar(instrucao);
}
function listar2() {
    var instrucao = `
    select nomeeqp, steamResp, nick, patente from equipe join usuario on fkEquipe = idEquipe order by nomeeqp;
    `;
    console.log('Listando Times');
    return database.executar(instrucao);
}

function listar3() {
    var instrucao = `
    select * from equipe;
    `;
    console.log('Listando Usuários3');
    return database.executar(instrucao);
}



function entrar(email, token) {
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND token = '${token}';
    `;
    console.log('Logando Jogador');
    return database.executar(instrucao);
}

function cadastrar(nome, email, idade, nickingame, ptt, id, token) {
    var instrucao = `
        INSERT INTO usuario (nome, email, idade, steam, patente, nick, token) VALUES ('${nome}', '${email}', '${idade}', '${id}', '${ptt}', '${nickingame}', '${token}');
    `;
    console.log('Cadastrando Jogador: ' + nome);
    return database.executar(instrucao);
}


function cadastrar2(nome, idsteam, token_time) {
    var instrucao = `
        INSERT INTO equipe (nomeeqp, steamResp, idEquipe) VALUES ('${nome}', '${idsteam}', '${token_time}');
    `;
    console.log('Cadastrando time: '+ nome);
   return database.executar(instrucao);
}

function cadastrar3(nome, idsteam) {
    var instrucao = `
        INSERT INTO equipe (nomeeqp, steamResp) VALUES ('${nome}', '${idsteam}');
    `;
    console.log('Cadastrando Time: '+ nome);
    return database.executar(instrucao);
}
function deletar(email, token) {
    var instrucao = `
    DELETE FROM usuario WHERE token = '${token}' AND email = '${email}';
    `;
    console.log('Deletando Jogador de Email: '+ email);
    return database.executar(instrucao);
}

function deletar2(token) {
    var instrucao = `
    UPDATE usuario SET fkEquipe = null WHERE fkEquipe = '${token}';
    `;
    console.log('Deletando Jogadores da Equipe de Token: '+ token);
    return database.executar(instrucao);
}

function deletar3(nome, token) {
    var instrucao = `
    DELETE FROM equipe WHERE idEquipe = '${token}' AND nomeeqp = '${nome}';
    `;
    console.log('Deletando Time: '+ nome);
    return database.executar(instrucao);
}

function insert_j1(token1, token_time) {
    var instrucao = `
    UPDATE usuario SET fkEquipe = '${token_time}' WHERE token = '${token1}';
    `;
    console.log('Inserindo Jogador 1 na Equipe de Token: '+ token1);
    return database.executar(instrucao);
}

function insert_j2(token2, token_time) {
    var instrucao = `
    UPDATE usuario SET fkEquipe = '${token_time}' WHERE token = '${token2}';
    `;
    console.log('Inserindo Jogador 2 na Equipe de Token: '+ token2);
    return database.executar(instrucao);
}

function insert_j3(token3, token_time) {
    var instrucao = `
    UPDATE usuario SET fkEquipe = '${token_time}' WHERE token = '${token3}';
    `;
    console.log('Inserindo Jogador 3 na Equipe de Token: '+ token3);
    return database.executar(instrucao);
}

function insert_j4(token4, token_time) {
    var instrucao = `
    UPDATE usuario SET fkEquipe = '${token_time}' WHERE token = '${token4}';
    `;
    console.log('Inserindo Jogador 4 na Equipe de Token: '+ token4);
    return database.executar(instrucao);
}

function insert_j5(token5, token_time) {
    var instrucao = `
    UPDATE usuario SET fkEquipe = '${token_time}' WHERE token = '${token5}';
    `;
    console.log('Inserindo Jogador 5 na Equipe de Token: '+ token5);
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