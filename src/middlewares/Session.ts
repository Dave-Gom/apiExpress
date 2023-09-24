import { NextFunction, Request, Response } from 'express';
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
            req.sessionStore.get(req.sessionID, (err, sessionData) => {
                if (err) {
                    throw 'Error en la sesion';
                } else if (sessionData) {
                    // La sesión se ha encontrado en Redis
                    req.body.user = isUser;
                    console.log('Datos de sesión en Redis:', sessionData);
                    next();
                } else {
                    throw 'Sesion expirada';
                }
            });
        }
    } catch (error) {
        console.log(error);

        res.statusCode = 401;
        res.send('Sesion no valida');
    }
};
