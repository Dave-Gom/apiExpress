import { Router } from 'express';
import { getFile } from '../controllers/UploadController';
import { checkSession } from '../middlewares/Session';
import multerMiddleware from '../middlewares/file';

const router = Router();

router.post('/', checkSession, multerMiddleware.single('myFile'), checkSession, getFile);

export { router };
