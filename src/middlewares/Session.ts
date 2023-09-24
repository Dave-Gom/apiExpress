import { NextFunction, Request, Response } from 'express';
import { Session } from 'express-session';
import { virifyToken } from '../utils/jdt.handler';

export const checkSession = (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = virifyToken(`${jwt}`);

        if (!isUser) {
            res.statusCode = 401;
            res.send('Invalid JWT');
        } else {
            req.sessionStore.get(req.sessionID, (sesion: Session | null | undefined) => {
                if (sesion) {
                    req.body.user = isUser;
                    next();
                } else {
                    console.log('No hay sesion');
                    res.statusCode = 401;
                    res.send('Sesion no valida');
                }
            });
        }
    } catch (error) {
        console.log(error);

        res.statusCode = 401;
        res.send('Sesion no valida');
    }
};
