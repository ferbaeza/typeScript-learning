import { Response } from "express";

const handlerHttpError = (res:Response, error: string)=>{
    res.status(500)
    res.json({error})
}

const handlerHttp = (res:Response, data: any, mensaje : string)=>{
    res.status(200)
    const response ={
        "mensaje": mensaje,
        "data": data,
        "code": 200
    }
    res.json(response)

}


export { 
    handlerHttp,
    handlerHttpError
};