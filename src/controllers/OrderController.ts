import { Request, Response } from "express";
import { UserRequest } from "../middlewares/Session";
import { handleHttp } from "../utils/error.handler";


export const getItems = async (req: UserRequest, res: Response) => {
    try {
        res.send({ data: "Esto solo lo ven las persona con sesion activa", user: req.user });
    } catch (error) {
        handleHttp(res, `${error}`)
    }

};