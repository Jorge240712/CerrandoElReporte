const { obtenerEvento, restarBoletos } = require("../services/boletos.service");
const { CLAVE_PAGO } = require("../config/pago.config");

async function comprar(req, res) {
    const { eventoId, cantidad } = req.body;

    if (typeof cantidad !== "number" || cantidad <= 0 || cantidad > 10) {
        return res.status(400).json({ error: "Cantidad inválida. Debe ser un número entre 1 y 10." });
    }

    if (!eventoId) {
        return res.status(400).json({ error: "Falta el ID del evento." });
    }

    try {
        const evento = await obtenerEvento(eventoId);

        if (!evento) {
            return res.status(404).json({ error: "Evento no encontrado" });
        }

        await restarBoletos(eventoId, cantidad);

        res.json({
            mensaje: "Compra registrada",
            evento: evento.nombre,
            cantidad: cantidad,
        });
    } catch (error) {
        res.status(500).json({ error: "Error en el servidor: " + error.message });
    }
}

// Ruta simulada de procesamiento de pago — solo para mostrar dónde
// se usa la clave hardcodeada, no llama a ninguna pasarela real.
function procesarPagoDemo(req, res) {
    res.json({
        mensaje: "Pago simulado procesado",
        claveUsada: CLAVE_PAGO.slice(0, 10) + "... (recortada para la demo)",
    });
}

module.exports = { comprar, procesarPagoDemo };
