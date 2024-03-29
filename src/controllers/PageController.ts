import { Request, Response } from 'express';
import { Model } from 'sequelize-typescript';
import { User } from '../database/models/user';
import { UserInterface } from '../interfaces/User.interface';
import { detelePageService, getPageById, getPagesService, insertPage, updatePage } from '../services/Page.services';
import { handleHttp } from '../utils/error.handler';

export const postCreatePage = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        if (user) {
            const responseItem = await insertPage(body, user.dataValues.id);
            res.send(responseItem);
        } else throw new Error(`Usuario no existe ${body.user}`);
    } catch (e) {
        handleHttp(res, `ERROR_POST_PAGE: ${e}`);
    }
};

export const getPages = async ({ params }: Request, res: Response) => {
    try {
        const response = await getPagesService(params.condition);
        res.send(response);
    } catch (e) {
        handleHttp(res, `ERROR_GET_PAGE:: ${e}`);
    }
};

export const getActivePages = async (req: Request, res: Response) => {
    try {
        const response = await getPagesService();
        res.send(response);
    } catch (e) {
        handleHttp(res, `ERROR_GET_PAGE:: ${e}`);
    }
};

export const getPage = async (req: Request, res: Response) => {
    try {
        const response = await getPageById(parseInt(req.params.id, 10));
        res.send(response);
    } catch (e) {
        handleHttp(res, `ERROR_GET_PAGE:: ${e}`);
    }
};

export const putPages = async ({ params: { id }, body }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        if (user) {
            const response = await updatePage(id, body, user.dataValues.id);
            res.send(response);
        } else throw `Usuario no existe ${body.user}`;
    } catch (e) {
        handleHttp(res, `ERROR_PUT_PAGE:: ${e}`);
    }
};

export const deletePage = async ({ params: { id }, body }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        if (user) {
            const response = await detelePageService(id, user.dataValues.id);
            res.send(response);
        } else throw `Usuario no existe ${body.user}`;
    } catch (e) {
        handleHttp(res, `ERROR_DELETE_PAGE:: ${e}`);
    }
};
