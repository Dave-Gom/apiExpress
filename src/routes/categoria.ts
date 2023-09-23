import { Router } from 'express';
import {
    createCategoria,
    deleteCategoria,
    readCategoria,
    readCategorias,
    updateCategoria,
} from '../controllers/CategoriaController';
import { checkSession } from '../middlewares/Session';

const router = Router();

router.post('/', checkSession, createCategoria);
router.get('/', readCategorias);
router.get('/:id', checkSession, readCategoria);
router.put('/:id', checkSession, updateCategoria);
router.delete('/:id', checkSession, deleteCategoria);

export { router };
