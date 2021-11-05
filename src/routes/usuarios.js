var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function(req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function(req, res) {
    usuarioController.listar(req, res);
});

router.get("/listar2", function(req, res) {
    usuarioController.listar2(req, res);
});

router.get("/listar3", function(req, res) {
    usuarioController.listar3(req, res);
});

router.post("/cadastrar", function(req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/cadastrar2", function(req, res) {
    usuarioController.cadastrar2(req, res);
});

router.post("/cadastrar3", function(req, res) {
    usuarioController.cadastrar3(req, res);
});

router.post("/autenticar", function(req, res) {
    usuarioController.entrar(req, res);
});

router.post("/deletar", function(req, res) {
    usuarioController.deletar(req, res);
});

router.post("/deletar2", function(req, res) {
    usuarioController.deletar2(req, res);
});

router.post("/insertj1", function(req, res) {
    usuarioController.insert_j1(req, res);
});

router.post("/insertj2", function(req, res) {
    usuarioController.insert_j2(req, res);
});
router.post("/insertj3", function(req, res) {
    usuarioController.insert_j3(req, res);
});
router.post("/insertj4", function(req, res) {
    usuarioController.insert_j4(req, res);
});
router.post("/insertj5", function(req, res) {
    usuarioController.insert_j5(req, res);
});
module.exports = router;