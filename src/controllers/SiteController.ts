import { Request, Response } from 'express';
import { Model } from 'sequelize';
import { User } from '../database/models/user';
import { UserInterface } from '../interfaces/User.interface';
import { readSiteInfo, storeSiteInfo } from '../services/Site.services';
import { handleHttp } from '../utils/error.handler';

export const getCompleteSiteInfo = async ({ body }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        if (user) {
            const responseItem = await readSiteInfo();
            if (responseItem) {
                console.log('Responseitem', responseItem);

                res.send(responseItem);
            } else {
                console.log('no resp');

                res.send(null);
            }
        }
    } catch (error) {
        handleHttp(res, `ERROR_GET_SITE: ${error}`);
    }
};

export const postSiteInfo = async ({ body }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        if (user) {
            const responseItem = await storeSiteInfo({
                author: user.dataValues.id,
                name: body.name,
                about: body.about,
                since: body.since,
                logo: body.logo,
                brand: body.brand,
                description: body.description,
            });
            if (responseItem) {
                res.send(responseItem);
            } else {
                res.send(null);
            }
        }
    } catch (error) {
        handleHttp(res, `ERROR_POST_SITE: ${error}`);
    }
};
