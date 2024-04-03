import query from "./Usuarios.query.js";
import {pool} from "../../../../Config/DataBase/psqlDatabase.js";

export const getUsuarios = () => {
  try {
    pool.connect();
    const resultado = pool.query(query.query, (error, resultado) => {
      if (error) {
        console.log(error);
      }
      const response = { data: resultado.rows };
      // console.log({ "desde el modelo": response.data });
      return response;
      // const response = Promise.resolve(results.rows);
    });
    
  } catch (error) {
    console.log("Catch--error", error);
  }
}

export const getItem = async (id) => {};
export const editItem = async (id) => {};
export const deleteItem = async (id) => {};
export const createItem = async (id) => {};
