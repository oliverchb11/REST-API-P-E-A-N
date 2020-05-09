"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
//configurar postgre en mi proyecto y poder hacer consultas a la base de datos creada
exports.pool = new pg_1.Pool({
    user: "postgres",
    host: "localhost",
    password: "admin",
    database: "crud",
    port: 5432,
});
