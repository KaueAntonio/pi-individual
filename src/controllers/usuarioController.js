var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar (req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function listar2(req, res) {
    usuarioModel.listar2()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function listar3(req, res) {
    usuarioModel.listar3()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function entrar (req, res) {
    var email = req.body.email;
    var senha = req.body.token;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.entrar(email, senha)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                if (resultado.length == 1) {
                    console.log(resultado);
                    res.json(resultado[0]);
                } else if (resultado.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }

}

function cadastrar(req, res) {
    var nome = req.body.nome;
    var email = req.body.email;
    var idade = req.body.idade;
    var nickingame = req.body.nick;
    var ptt = req.body.patente;
    var id = req.body.idsteam;
    var token = req.body.token;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (idade == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (nickingame == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (ptt == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (id == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (token == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }{

        usuarioModel.cadastrar(nome, email, idade, nickingame, ptt, id, token)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function cadastrar3(req, res) {
    var nome = req.body.nome;
    var idsteam = req.body.idsteam;
    var token1 = req.body.token1;
    var token2 = req.body.token2;
    var token3 = req.body.token3;
    var token4 = req.body.token4;
    var token5 = req.body.token5;
    var token_time = req.body.token_time;


    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (idsteam == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (token1 == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (token2 == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (token3 == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (token4 == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (token5 == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (token_time == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }{


        usuarioModel.cadastrar3(nome, idsteam, token1, token2, token3, token4, token5, token_time)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function deletar(req, res) {
    var token = req.body.token;
    var email = req.body.email;



    if (token == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else{







        usuarioModel.deletar(email, token)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}
function deletar2(req, res) {
    var token = req.body.token;



    if (token == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else{







        usuarioModel.deletar2(token)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function deletar3(req, res) {
    var token = req.body.token;
    var nome = req.body.nome;



    if (token == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else{







        usuarioModel.deletar3(nome ,token)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function cadastrar2(req, res) {
    var nome = req.body.nome;
    var idsteam = req.body.idsteam;
    var token_time = req.body.token_time;





    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (idsteam == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (token_time == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else{







        usuarioModel.cadastrar2(nome, idsteam, token_time)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}







function insert_j1(req, res) {
    var token1 = req.body.token1;
    var token_time = req.body.token_time;



    if (token1 == undefined) {
        res.status(400).send("Seu token está undefined!");
    }  if (token_time == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else{







        usuarioModel.insert_j1(token1, token_time)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o insert do jogador 1! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}


function insert_j2(req, res) {
    var token2 = req.body.token2;
    var token_time = req.body.token_time;


    if (token2 == undefined) {
        res.status(400).send("Seu token2 está undefined!");
    } if (token_time == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else{







        usuarioModel.insert_j2(token2, token_time)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o insert do jogador 2! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function insert_j3(req, res) {
    var token3 = req.body.token3;
    var token_time = req.body.token_time;


    if (token3 == undefined) {
        res.status(400).send("Seu token3 está undefined!");
    } if (token_time == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else{







        usuarioModel.insert_j3(token3, token_time)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o insert do jogador 3! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function insert_j4(req, res) {
    var token4 = req.body.token4;
    var token_time = req.body.token_time;


    if (token4 == undefined) {
        res.status(400).send("Seu token4 está undefined!");
    } if (token_time == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else{







        usuarioModel.insert_j4(token4, token_time)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o insert do jogador 4! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function insert_j5(req, res) {
    var token5 = req.body.token5;
    var token_time = req.body.token_time;


    if (token5 == undefined) {
        res.status(400).send("Seu token está undefined!");
    } if (token_time == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else{







        usuarioModel.insert_j5(token5, token_time)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o insert do jogador 5! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}











module.exports = {
    entrar,
    cadastrar,
    listar,   
    listar2,   
    listar3,   
    testar,
    deletar,
    deletar2,
    deletar3,
    cadastrar2,
    cadastrar3,
    insert_j5,
    insert_j4,
    insert_j3,
    insert_j2,
    insert_j1
}