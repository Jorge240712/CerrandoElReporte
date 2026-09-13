const { pool } = require("../db/conexion");

// ============================================================
//  🚨 HALLAZGO DEL REPORTE #1: Inyección SQL
// ============================================================
//  Esta query arma el SQL concatenando directamente lo que
//  llega del formulario de login. Si alguien manda un email
//  como  ' OR '1'='1' --  el texto que se ejecuta cambia
//  de significado por completo.
//
//  Probar en requests.http → "Checkpoint 1".
// ============================================================
async function buscarCompradorPorCredenciales(email, password) {
    const consulta = "SELECT * FROM compradores WHERE email = $1 AND password = $2";

    const resultado = await pool.query(consulta, [email, password]);
    return resultado.rows[0] || null;
}

module.exports = { buscarCompradorPorCredenciales };
