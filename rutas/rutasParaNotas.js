const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const funcionesControladorasNotas = require("../controladores/nota");

router.route("/").get(funcionesControladorasNotas.notaPadre);
router.route("/:ID").get(funcionesControladorasNotas.traerNota);
router.route("/:ID").delete(funcionesControladorasNotas.borrarNota);
router.route("/:ID").patch(funcionesControladorasNotas.ajustarNota);
router.route("/:IDP/:ID").post(funcionesControladorasNotas.crearNota);
//router.route("/:IDP/nueva").post(funcionesControladorasNotas.crearNota); pero no se como ocupar el body para poder pasarle un objeto a la base de datos =======> duda con body parser

module.exports = router;