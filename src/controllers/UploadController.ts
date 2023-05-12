import { Request, Response } from 'express';
import { StorageInterface } from '../interfaces/Storage.interface';

import { Model } from 'sequelize-typescript';
import { User as UserModel } from '../database/models/user';
import { UserInterface } from '../interfaces/User.interface';
import { registerUpload } from '../services/Storage';
import { handleHttp } from '../utils/error.handler';

const getFile = async (req: Request, res: Response) => {
    try {
        const { body, file } = req;
        console.log(req);

        const userInstance = await UserModel.findOne<Model<UserInterface>>({ where: { email: body.user.id } });

        if (userInstance) {
            if (file) {
                const dataToRegister: StorageInterface = {
                    fileName: `${file?.filename}`,
                    idUser: userInstance.dataValues.id,
                    path: `${file?.path}`,
                };
                const response = await registerUpload(dataToRegister);
                if (response) {
                    res.send(response);
                } else {
                    throw new Error('Error al registrar la subida');
                }
            } else {
                throw new Error('No File');
            }
        } else {
            throw new Error('No user');
        }
    } catch (e) {
        handleHttp(res, 'ERROR_GET_BLOG' + e);
    }
};

export { getFile };
