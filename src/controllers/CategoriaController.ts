import { Request, Response } from 'express';
import { Model } from 'sequelize';
import { UserInterface } from '../interfaces/user.interface';
import User from '../models/user';
import { postCategoria } from '../services/Categoria.services';
import { handleHttp } from '../utils/error.handler';

export const createCategoria = async ({ body }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        if (user) {
            const responseItem = await postCategoria(body, user.dataValues.id);
            res.send(responseItem);
        } else throw new Error(`Usuario no existe ${body.user}`);
    } catch (e) {
        handleHttp(res, `ERROR_POST_CATEGORY: ${e}`);
    }
};
