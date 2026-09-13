const { obtenerCompradorPorId } = require("../services/compradores.service");

// ============================================================
//  🚨 HALLAZGO DEL REPORTE #4: Exposición de datos sensibles
// ============================================================
//  Este endpoint devuelve el objeto "comprador" completo, tal
//  como sale de la base de datos — incluyendo password y el
//  token de la tarjeta guardada.
// ============================================================
async function obtenerPerfil(req, res) {
    const { id } = req.params;

    try {
        const comprador = await obtenerCompradorPorId(id);

        if (!comprador) {
            return res.status(404).json({ error: "Comprador no encontrado" });
        }

        const compradorPublico = {
            id: comprador.id,
            nombre: comprador.nombre,
            email: comprador.email,
        };

        res.json(compradorPublico);
    } catch (error) {
        res.status(500).json({ error: "Error en el servidor: " + error.message });
    }
}

module.exports = { obtenerPerfil };
