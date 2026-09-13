const rateLimit = require("express-rate-limit");

const limitadorLogin = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos dura la ventana
  max: 5,                   // Se permiten 5 intentos en esa ventana
  message: { error: "Demasiados intentos de login. Intenta de nuevo en unos minutos." },
});

module.exports = { limitadorLogin };