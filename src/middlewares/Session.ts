import { NextFunction, Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface UserRequest extends Request {
    user?: string | JwtPayload;
}

export const checkSession = (req: UserRequest, res: Response, next: NextFunction) => {
    try {
        console.log('hola');

        if (!req) {
            res.statusCode = 401;
            res.send('Session invalida');
        } else {
            next();
        }
        /* 
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = virifyToken(`${jwt}`);

        if (!isUser) {
            res.statusCode = 401;
            res.send('Invalid JWT');
        } else {
            req.body.user = isUser;
            next();
        } */
    } catch (error) {
        res.statusCode = 401;
        res.send('Sesion no valida');
    }
};
