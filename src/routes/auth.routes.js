const express = require("express");
const router = express.Router();
const { login } = require("../controllers/auth.controller");

// TODO: agrega este require arriba, junto a los demás
const { limitadorLogin } = require("../middlewares/rateLimiter.middleware");

// TODO: agrega "limitadorLogin" entre la ruta y "login"
router.post("/login", limitadorLogin, login);

module.exports = router;