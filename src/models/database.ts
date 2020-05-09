import { Pool } from "pg";
//configurar postgre en mi proyecto y poder hacer consultas a la base de datos creada
export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "admin",
  database: "crud",
  port: 5432,
});
