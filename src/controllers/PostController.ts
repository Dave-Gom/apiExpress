import { Request, Response } from 'express';
import { Model } from 'sequelize';
import { UserInterface } from '../interfaces/user.interface';
import User from '../models/user';
import { getPosts, insertPost } from '../services/Post';
import { handleHttp } from '../utils/error.handler';

export const createPost = async ({ body }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        if (user) {
            const responseItem = await insertPost(body, user.dataValues.id);
            res.send(responseItem);
        } else throw new Error(`Usuario no existe ${body.user}`);
    } catch (e) {
        handleHttp(res, `ERROR_POST_POST: ${e}`);
    }
};

export const readPosts = async ({ body }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        if (user) {
            const responseItem = await getPosts();
            res.send(responseItem);
        } else throw new Error(`Usuario no existe ${body.user}`);
    } catch (e) {
        handleHttp(res, `ERROR_GET_POST: ${e}`);
    }
};
