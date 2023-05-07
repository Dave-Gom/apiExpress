import { NextFunction, Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { virifyToken } from '../utils/jdt.handler';

export interface UserRequest extends Request {
    user?: string | JwtPayload;
}

export const checkJWT = (req: UserRequest, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = virifyToken(`${jwt}`);

        if (!isUser) {
            res.statusCode = 401;
            res.send('Invalid JWT');
        } else {
            req.body.user = isUser;
            next();
        }
    } catch (error) {
        res.statusCode = 401;
        res.send('Sesion no valida');
    }
};
