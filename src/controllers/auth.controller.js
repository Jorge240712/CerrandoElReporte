const { buscarCompradorPorCredenciales } = require("../services/auth.service");

async function login(req, res) {
    const { email, password } = req.body;

    try {
        const comprador = await buscarCompradorPorCredenciales(email, password);

        if (comprador) {
            res.json({ acceso: true, comprador });
        } else {
            res.json({ acceso: false, mensaje: "Email o contraseña incorrectos" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error en el servidor: " + error.message });
    }
}

module.exports = { login };
