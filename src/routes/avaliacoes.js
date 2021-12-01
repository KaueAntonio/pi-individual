var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliacaoController");

router.get("/listar", function(req, res) {
    avaliacaoController.listar(req, res);
});

router.post("/enviar", function(req, res){
    avaliacaoController.enviar(req, res);
});

router.post("/deletar", function(req, res){
    avaliacaoController.deletar(req, res);
});


module.exports = router;