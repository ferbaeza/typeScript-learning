import { Response } from "express";

const handlerHttp = (res:Response, error: string)=>{
    res.status(500)
    res.send({error})
}

const handlerError = (code: number, error: string) => {
  console.log(code);
  console.log({ error });
};
export { handlerHttp, handlerError };