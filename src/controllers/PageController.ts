import { Request, Response } from 'express';
import { getPagesService, insertPage } from '../services/Page.services';
import { handleHttp } from '../utils/error.handler';

export const postCreatePage = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertPage(body);
        res.send(responseItem);
    } catch (e) {
        handleHttp(res, `ERROR_POST_ITEM: ${e}`);
    }
};

export const getPages = async (req: Request, res: Response) => {
    try {
        const response = await getPagesService();
        res.send(response);
    } catch (e) {
        handleHttp(res, `ERROR_GET_ITEMS: ${e}`);
    }
};
