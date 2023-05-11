import { Request, Response } from 'express';

import { Model } from 'sequelize-typescript';
import { User } from '../database/models/user';
import { UserInterface } from '../interfaces/User.interface';

import { PostInterface } from '../interfaces/Post.interface';
import { delPost, getPost, getPosts, insertPost, putPost } from '../services/Post';
import { handleHttp } from '../utils/error.handler';

export const createPost = async ({ body, params }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        if (user) {
            const responseItem = await insertPost(
                {
                    active: body.active,
                    brief: body.brief,
                    image: body.image,
                    longDesc: body.longDesc,
                    title: body.title,
                    content: body.content,
                } as PostInterface,
                user.dataValues.id,
                body.categorias ? body.categorias : undefined
            );
            res.send(responseItem);
        } else throw new Error(`Usuario no existe ${body.user}`);
    } catch (e) {
        handleHttp(res, `ERROR_POST_POST: ${e}`);
    }
};

export const readPosts = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await getPosts();
        res.send(responseItem);
    } catch (e) {
        handleHttp(res, `ERROR_GET_POST: ${e}`);
    }
};

export const readPost = async ({ body, params }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        if (user) {
            const responseItem = await getPost(params.id);
            res.send(responseItem);
        } else throw new Error(`Usuario no existe ${body.user}`);
    } catch (e) {
        handleHttp(res, `ERROR_GET_POST: ${e}`);
    }
};

export const updatePost = async ({ body, params }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        if (user) {
            const responseItem = await putPost(
                {
                    active: body.active,
                    brief: body.brief,
                    image: body.image,
                    longDesc: body.longDesc,
                    title: body.title,
                    content: body.content,
                } as PostInterface,
                params.id,
                user.dataValues.id,
                body.categorias
            );
            res.send(responseItem);
        } else throw new Error(`Usuario no existe ${body.user}`);
    } catch (e) {
        handleHttp(res, `ERROR_GET_POST: ${e}`);
    }
};

export const deletePost = async ({ body, params }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        if (user) {
            const responseItem = await delPost(params.id, user.dataValues.id);
            res.send(responseItem);
        } else throw new Error(`Usuario no existe ${body.user}`);
    } catch (e) {
        handleHttp(res, `ERROR_GET_POST: ${e}`);
    }
};
