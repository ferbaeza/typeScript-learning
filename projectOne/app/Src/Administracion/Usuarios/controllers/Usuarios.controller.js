import { getUsuarios, getItem, editItem, deleteItem, createItem } from "../models/Usuarios.model.js";
import query from "../models/Usuarios.query.js";
import { pool } from "../../../../Config/DataBase/psqlDatabase.js";

export const listarUsuarios = (req, res) => {
    try {
      pool.connect();
      const results = pool.query(query.query, (error, results) => {
        if (error) {
          console.log(error);
        }
        console.log("Controlador");
        res.status(200).json(results.rows);
      });
      // const response = getUsuarios();
      // console.log(response, "desde el controlador");
      // res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}
export const listarUsuario = async (req, res) => {
    try {
      let id = parseInt(req.params.id);
      pool.connect();
      const results = pool.query(query.listarUsuario, [id], (error, results) => {
        if (error) {
          console.log(error);
        }
        console.log(results.rows);
        console.log("Controlador");
        res.status(200).json(results.rows);
      });
    // const response = getItem(parseInt(req.params.id));
    // res.status(200).json({
    //   data: response,
    // });
  } catch (error) {
    console.log(error);
     res.status(500).send(error);
  }
}

export const editarUsuario = async (req, res) => {
  try {
    const response = editItem(parseInt(req.params.id));
    res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.log(error);
     res.status(500).send(error);
  }
};

export const eliminarUsuario = async (req, res) => {
  try {
    const response = deleteItem(parseInt(req.params.id));
    res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.log(error);
     res.status(500).send(error);
  }
};

export const crearUsuario = async (req, res) => {
  try {
    const response = createItem(parseInt(req.body));
    res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.log(error);
     res.status(500).send(error);
  }
};