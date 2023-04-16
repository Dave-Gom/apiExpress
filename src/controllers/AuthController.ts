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

export const LoginController = async ({ body }: Request, res: Response) => {
    try {
        const dato = await loginUser(body);
        if (dato.token) {
            res.send(dato);
        } else {
            handleHttp(res, dato, 401);
        }
    } catch (error) {
        handleHttp(res, `${error}`);
    }
};
