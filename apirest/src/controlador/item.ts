import { Request, Response } from "express"
import { handlerHttp } from "../utils/errorHandler";
import { QueryResult } from "pg";

const getItem =(req:Request, res:Response)=>{
    try {
        res.send({ data: `Info de getItem n=> ${req.params.id}` });
        
    } catch (error) {
        handlerHttp(res, "Error en getItem ");
    }
}

const getAllItems = (req: Request, res: Response) => {
    try {
      res.send({ data: "Info de getAllItems" });
  } catch (error) {
    handlerHttp(res, "Error en getAllItems ");
  }
}

const postItem =(req:Request, res:Response)=>{
    try {
        
    } catch (error) {
        handlerHttp(res, "Error en postItem ");
    }
}

const updateItem =(req:Request, res:Response)=>{
    try {
        
    } catch (error) {
        handlerHttp(res, "Error en updateItem ");
    }
}

const deleteItem =(req:Request, res:Response)=>{
    try {
        
    } catch (error) {
        handlerHttp(res, "Error en deleteItem ");
    }
}

export { getItem, getAllItems, postItem, updateItem, deleteItem };