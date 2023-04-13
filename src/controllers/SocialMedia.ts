import { Request, Response } from 'express';
import { Model } from 'sequelize-typescript';
import { User } from '../database/models/user';
import { UserInterface } from '../interfaces/User.interface';
import { deleteSocialMedia, getSocialMedia, postSocialMedia, putSocialMedia } from '../services/SocialMedia.services';
import { handleHttp } from '../utils/error.handler';

export const createSocialMedia = async ({ body }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        if (user) {
            const responseItem = await postSocialMedia(body, user.dataValues.id);
            res.send(responseItem);
        } else throw new Error(`Usuario no existe ${body.user}`);
    } catch (e) {
        handleHttp(res, `ERROR_SMEDIA_POST: ${e}`);
    }
};

export const readSocialMedia = async ({ body }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        if (user) {
            const responseItem = await getSocialMedia(user.dataValues.id);
            res.send(responseItem);
        } else throw new Error(`Usuario no existe ${body.user}`);
    } catch (e) {
        handleHttp(res, `ERROR_SMEDIA_POST: ${e}`);
    }
};

export const updateSocialMedia = async ({ body, params }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        if (user) {
            const responseItem = await putSocialMedia(body, parseInt(params.id, 10), user.dataValues.id);
            res.send(responseItem);
        } else throw new Error(`Usuario no existe ${body.user}`);
    } catch (e) {
        handleHttp(res, `ERROR_SMEDIA_POST: ${e}`);
    }
};

export const removeSocialMedia = async ({ body, params }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        if (user) {
            const responseItem = await deleteSocialMedia(parseInt(params.id, 10), user.dataValues.id);
            res.send(responseItem);
        } else throw new Error(`Usuario no existe ${body.user}`);
    } catch (e) {
        handleHttp(res, `ERROR_SMEDIA_POST: ${e}`);
    }
};
