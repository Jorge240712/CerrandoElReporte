const { pool } = require("../db/conexion");

async function obtenerCompradorPorId(id) {
    const resultado = await pool.query("SELECT * FROM compradores WHERE id = $1", [id]);
    return resultado.rows[0] || null;
}

module.exports = { obtenerCompradorPorId };
