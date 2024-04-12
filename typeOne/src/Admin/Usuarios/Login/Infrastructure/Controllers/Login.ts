import { Request, Response } from "express";
import  bcrypt  from "bcrypt";

import UsuariosModel from "../../../Shared/Infrastructure/Model/UsuariosModel";
import { handlerHttp, handlerHttpError } from "../../../../../Kernel/Http/HandlerHttp";

const login = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        // const user = await UsuariosModel.find({email, password});
        const salt = await bcrypt.genSaltSync(10);
        const hash = await bcrypt.hashSync(password, salt);

        const isMMatch = await bcrypt.compare(password, hash);
        const responseHash = {
            "password": password,
            "hash": hash,
            "isMatch": isMMatch,
        }
        handlerHttp(res, responseHash, `User ${email} logged`);

    } catch (error) {
        handlerHttpError(res, "Error en login ");
    }
}

export { login };