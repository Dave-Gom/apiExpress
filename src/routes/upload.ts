import { Router } from 'express';
import { getFile } from '../controllers/UploadController';
import { checkJWT } from '../middlewares/Session';
import multerMiddleware from '../middlewares/file';

const router = Router();

router.post('/', checkJWT, multerMiddleware.single('myFile'), checkJWT, getFile);

export { router };
