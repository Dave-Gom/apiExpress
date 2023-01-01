import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/ItemController";
import { logMiddleware } from "../middlewares/log";

const router = Router();

router.get('/', logMiddleware, getItems);
router.get('/:id', getItem);
router.post('/', postItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export { router };
