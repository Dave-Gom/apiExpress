import { Router } from 'express';
import { readdir } from 'fs/promises';
import { cleanFileName } from '../utils/helpers';

export const loadRoutes = async () => {
    const router = Router();
    const PATH_ROUTER = `${__dirname}`;
    const files = await readdir(PATH_ROUTER);
    for (const file of files) {
        const cleanName = cleanFileName(file);
        import(`./${cleanName}`).then(moduleRouter => {
            router.use(`/${cleanName}`, moduleRouter.router);
        });
    }

    return router;
};
