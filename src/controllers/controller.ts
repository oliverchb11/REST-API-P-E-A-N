import { Request, Response } from "express";
import { QueryResult } from "pg";
import { pool } from "../models/database";
// funcion de  metodo **GET** que traer todos los usuarios de la base de datos
export const getUsuario = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query("SELECT * FROM usuarios");
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("error de server");
  }
};
// funcion de  metodo **GET** que trae  el usuario por su **ID**
export const getUsuarioId = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query(
      "SELECT * FROM usuarios where id = $1",
      [id]
    );
    return res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
    return res.status(500).json("error en la consulta a la base de datos");
  }
};
// funcion de  metodo **POST** que crea un usario en la base de datos
export const postUsuario = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { nombre, apellido, email, telefono } = req.body;
    const response: QueryResult = await pool.query(
      "INSERT INTO usuarios (nombre,apellido,email,telefono) VALUES($1,$2,$3,$4)",
      [nombre, apellido, email, telefono]
    );
    return res.json({
      message: "Usuario creado correctamente",
      user: {
        nombre,
        apellido,
        email,
        telefono,
      },
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json("Error al creal el usuario");
  }
};
//funcion de metodo ***UPDATE** para editar datos de la base de datos
export const updateUsuario = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const { nombre, apellido, email, telefono } = req.body;
    const response: QueryResult = await pool.query(
      "UPDATE usuarios set nombre = $1, apellido = $2,email =  $3 ,telefono = $4   WHERE id = $5",
      [nombre, apellido, email, telefono, id]
    );
    return res.status(500).json(`usuario ${id} actualizado correctamente`);
  } catch (e) {
    console.log(e);
    return res.status(500).json("usuario no actualizo Error");
  }
};
// funcion de  metodo ***DELETE*** para borrar un usuario
export const deleteUsuario = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query(
      "DELETE FROM usuarios WHERE id = $1",
      [id]
    );
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Error");
  }
};
