// ============================================================
//  EventHive — Config de pasarela de pagos
// ============================================================
//  🚨 HALLAZGO DEL REPORTE #3: Variables de entorno
//  La clave de la pasarela de pagos está escrita directo aquí.
//  Si este archivo llega a un repo de GitHub, la clave queda
//  expuesta y cualquiera puede cobrar a nombre de EventHive.
// ============================================================

const CLAVE_PAGO = process.env.CLAVE_PAGO;

module.exports = { CLAVE_PAGO };