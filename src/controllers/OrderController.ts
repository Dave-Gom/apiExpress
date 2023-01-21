import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";


export const getItems = async (req: Request, res: Response) => {
    try {
        res.send({ data: "Esto solo lo ven las persona con sesion activa" });
    } catch (error) {
        handleHttp(res, `${error}`)
    }

};