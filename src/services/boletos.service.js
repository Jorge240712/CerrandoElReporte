const { pool } = require("../db/conexion");

async function obtenerEvento(eventoId) {
    const resultado = await pool.query("SELECT * FROM eventos WHERE id = $1", [eventoId]);
    return resultado.rows[0] || null;
}

// ============================================================
//  🚨 HALLAZGO DEL REPORTE #2: Falta de validación de inputs
// ============================================================
//  Esta función resta boletos del inventario sin revisar si
//  "cantidad" tiene sentido. Un número negativo suma boletos
//  en lugar de restarlos.
// ============================================================
async function restarBoletos(eventoId, cantidad) {
    await pool.query(
        "UPDATE eventos SET boletos_disponibles = boletos_disponibles - $1 WHERE id = $2",
        [cantidad, eventoId]
    );
}

module.exports = { obtenerEvento, restarBoletos };
