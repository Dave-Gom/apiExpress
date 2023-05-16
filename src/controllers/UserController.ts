import { Request, Response } from 'express';
import { Model } from 'sequelize-typescript';
import { User } from '../database/models/user';
import { UserInterface } from '../interfaces/User.interface';
import { readUsers } from '../services/User.services';
import { handleHttp } from '../utils/error.handler';

export const getUsers = async ({ body }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        if (user) {
            const response = await readUsers();
            if (response) {
                res.send(response);
            }
        } else throw new Error(`Usuario no existe ${body.user}`);
    } catch (e) {
        handleHttp(res, `ERROR_GET_USER:: ${e}`);
    }
};
