// ============================================================
//  EventHive — Conexión a base de datos
// ============================================================
//  Usamos pg-mem, una base de datos Postgres en memoria.
//  ¿Por qué no Supabase directo? Porque esta es una demo de
//  auditoría en vivo — no queremos perder tiempo de clase
//  configurando credenciales. pg-mem habla el mismo SQL y usa
//  el mismo driver (pg) que usarías contra un Postgres real,
//  así que todo lo que ves aquí aplica igual a Supabase.
// ============================================================

const { newDb } = require("pg-mem");

const db = newDb();
const { Pool } = db.adapters.createPg();
const pool = new Pool();

// ── Datos semilla ──────────────────────────────────────────
// Nota pedagógica: en un backend real las contraseñas se guardan
// hasheadas con bcrypt (como en Misión 24). Aquí las dejamos en
// texto plano a propósito, para no mezclar dos lecciones en una:
// hoy el foco es inyección SQL, no hashing.

async function inicializarBaseDeDatos() {
    await pool.query(`
        CREATE TABLE compradores (
            id SERIAL PRIMARY KEY,
            nombre TEXT NOT NULL,
            email TEXT NOT NULL,
            password TEXT NOT NULL,
            token_tarjeta TEXT NOT NULL
        );
    `);

    await pool.query(`
        CREATE TABLE eventos (
            id SERIAL PRIMARY KEY,
            nombre TEXT NOT NULL,
            boletos_disponibles INTEGER NOT NULL
        );
    `);

    await pool.query(`
        INSERT INTO compradores (nombre, email, password, token_tarjeta) VALUES
        ('Camila Ríos', 'camila@correo.com', 'concierto2026', 'tok_4f9a2b8c7e1d'),
        ('Julián Torres', 'julian@correo.com', 'miPasswordSegura', 'tok_9c3d1a0b5e2f');
    `);

    await pool.query(`
        INSERT INTO eventos (nombre, boletos_disponibles) VALUES
        ('Festival Cumbia Fest', 120),
        ('Rock al Parque Edición Especial', 45);
    `);

    console.log("📦 Base de datos en memoria lista, con compradores y eventos de prueba.");
}

module.exports = { pool, inicializarBaseDeDatos };
