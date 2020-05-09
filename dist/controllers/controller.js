"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../models/database");
// funcion de  metodo **GET** que traer todos los usuarios de la base de datos
exports.getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query("SELECT * FROM usuarios");
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("error de server");
    }
});
// funcion de  metodo **GET** que trae  el usuario por su **ID**
exports.getUsuarioId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.pool.query("SELECT * FROM usuarios where id = $1", [id]);
        return res.status(200).json(response.rows);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json("error en la consulta a la base de datos");
    }
});
// funcion de  metodo **POST** que crea un usario en la base de datos
exports.postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, apellido, email, telefono } = req.body;
        const response = yield database_1.pool.query("INSERT INTO usuarios (nombre,apellido,email,telefono) VALUES($1,$2,$3,$4)", [nombre, apellido, email, telefono]);
        return res.json({
            message: "Usuario creado correctamente",
            user: {
                nombre,
                apellido,
                email,
                telefono,
            },
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Error al creal el usuario");
    }
});
//funcion de metodo ***UPDATE** para editar datos de la base de datos
exports.updateUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { nombre, apellido, email, telefono } = req.body;
        const response = yield database_1.pool.query("UPDATE usuarios set nombre = $1, apellido = $2,email =  $3 ,telefono = $4   WHERE id = $5", [nombre, apellido, email, telefono, id]);
        return res.status(500).json(`usuario ${id} actualizado correctamente`);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("usuario no actualizo Error");
    }
});
// funcion de  metodo ***DELETE*** para borrar un usuario
exports.deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.pool.query("DELETE FROM usuarios WHERE id = $1", [id]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Error");
    }
});
