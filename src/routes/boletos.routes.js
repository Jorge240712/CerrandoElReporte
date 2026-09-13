const express = require("express");
const router = express.Router();
const { comprar, procesarPagoDemo } = require("../controllers/boletos.controller");

router.post("/comprar", comprar);
router.post("/procesar-pago-demo", procesarPagoDemo);

module.exports = router;
