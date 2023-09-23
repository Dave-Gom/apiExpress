import { Request, Response } from 'express';
import { loginUser, registerNewUser } from '../services/auth';
import { handleHttp } from '../utils/error.handler';

export const RegisterController = async ({ body }: Request, res: Response) => {
    try {
        const responseRegister = await registerNewUser(body);
        if (responseRegister) {
            res.send(responseRegister);
        } else throw 'No se pudo crear el usuaro';
    } catch (error) {
        handleHttp(res, `${error}`);
    }
};

export const LoginController = async (req: Request, res: Response) => {
    try {
        let { body } = req;
        const dato = await loginUser(body);
        if (dato.token) {
            res.send({ dato: dato.data });
        } else {
            handleHttp(res, dato, 401);
        }
    } catch (error) {
        handleHttp(res, `${error}`);
    }
};

// export const SessionController = async (req: Request, res: Response) => {
//     try {
//         if (req && req.session.id) {
//             res.send(req.session.id);
//         } else {
//             handleHttp(res, false, 401);
//         }
//     } catch (error) {
//         handleHttp(res, `${error}`);
//     }
// };
