import { NextFunction, Request, Response } from "express";
import { virifyToken } from "../utils/jdt.handler";

export const checkJWT = (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isOk = virifyToken(`${jwt}`);
        
        if (!isOk) {
            res.status(401);
            res.send("Invalid JWT");
        }
        else {
            console.log("Is ok", isOk);
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(402);
        res.send("Sesion no valida");
    }
}