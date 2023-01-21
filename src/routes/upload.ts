import {Router} from 'express';
import { getFile } from '../controllers/UploadController';
import multerMiddleware from '../middlewares/file';

const router = Router();

router.post('/', multerMiddleware.single('myFile'), getFile);

export {router};