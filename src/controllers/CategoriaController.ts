import { Request, Response } from 'express';
import { Model } from 'sequelize-typescript';
import { User } from '../database/models/user';
import { UserInterface } from '../interfaces/User.interface';
import {
    getCategoria,
    getCategorias,
    postCategoria,
    putCategoria,
    softDeleteCategoria,
} from '../services/Categoria.services';
import { handleHttp } from '../utils/error.handler';

export const createCategoria = async ({ body }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        if (user) {
            const responseItem = await postCategoria(body, user.dataValues.id);
            if (responseItem) {
                res.send(responseItem);
            } else {
                throw new Error(`No se crear la categoria`);
            }
        } else throw new Error(`Usuario no existe ${body.user}`);
    } catch (e) {
        handleHttp(res, `ERROR_POST_CATEGORY: ${e}`);
    }
};

export const readCategorias = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await getCategorias();
        if (responseItem) {
            res.send(responseItem);
        } else {
            throw new Error(`No se pudo obtener las categorias`);
        }
    } catch (e) {
        handleHttp(res, `ERROR_GET_CATEGORIES: ${e}`);
    }
};

export const readCategoria = async ({ body, params }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        if (user) {
            const responseItem = await getCategoria(params.id);
            if (responseItem) {
                res.send(responseItem);
            } else {
                throw new Error(`No se pudo obtener la categoria con id ${params.id}`);
            }
        } else throw new Error(`Usuario no existe ${body.user}`);
    } catch (e) {
        handleHttp(res, `ERROR_GET_CATEGORY: ${e}`);
    }
};

export const updateCategoria = async ({ body, params }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        if (user) {
            const responseItem = await putCategoria(body, params.id, user.dataValues.id);
            if (responseItem) {
                res.send(responseItem);
            } else {
                throw new Error(`No se pudo actualizar la categoria con id ${params.id}`);
            }
        } else throw new Error(`Usuario no existe ${body.user}`);
    } catch (e) {
        handleHttp(res, `ERROR_PUT_CATEGORY: ${e}`);
    }
};

export const deleteCategoria = async ({ body, params }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        if (user) {
            const responseItem = await softDeleteCategoria(params.id, user.dataValues.id);
            if (responseItem) {
                res.send(responseItem);
            } else {
                throw new Error(`No se pudo eliminar la categoria con id ${params.id}`);
            }
        } else throw new Error(`Usuario no existe ${body.user}`);
    } catch (e) {
        handleHttp(res, `ERROR_DELETE_CATEGORY: ${e}`);
    }
};
