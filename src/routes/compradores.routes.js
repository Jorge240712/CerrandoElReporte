const express = require("express");
const router = express.Router();
const { obtenerPerfil } = require("../controllers/compradores.controller");

router.get("/:id", obtenerPerfil);

module.exports = router;
