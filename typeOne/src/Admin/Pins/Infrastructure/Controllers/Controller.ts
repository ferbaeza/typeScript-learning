import { Request, Response } from "express"
import PinModel from "../Model/PinModel";
import { handlerHttp, handlerHttpError } from "../../../../Kernel/Http/HandlerHttp";



const getAllPins = async (req: Request, res: Response) => {
    try {
        const pins = await PinModel.find();
        handlerHttp(res, pins, `All Pins saved`);
    } catch (error) {
        
    }
}

const getPin = async (req: Request, res: Response) => {
    try {
        const pins = await PinModel.find();
        res.send(pins);
        handlerHttp(res, pins, `All Pins saved`);
    } catch (error) {

    }
}

const newPin = async (req: Request, res: Response) => {
    try {
        const pin = await new PinModel(req.body);
        pin.save();
        handlerHttp(res, pin, `Pin ${pin.titulo} saved`);
    } catch (error) {
        console.log(error);
        handlerHttpError(res, "Error en newPin ");
    }

}

export { getAllPins, newPin, getPin };