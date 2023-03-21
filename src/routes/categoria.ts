import { Router } from 'express';
import { createCategoria } from '../controllers/CategoriaController';
import { checkJWT } from '../middlewares/Session';

const router = Router();

router.post('/', checkJWT, createCategoria);

export { router };
