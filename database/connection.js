import "dotenv/config";

import pg from "pg";

const { Pool } = pg;

const connectionString = process.env.PROGRES_URL;

export const pool = new Pool({
    connectionString,
    allowExitOnIdle: true,
});

try {
    await pool.query("select now()");
    console.log("db conectada");
} catch (error) {
    console.error("Error de conexion ", error);
}
