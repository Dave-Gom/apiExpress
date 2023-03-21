import { Response } from 'express';

export const handleHttp = (res: Response, error: string) => {
    res.statusCode = 500;
    res.send({ error: error });
};
