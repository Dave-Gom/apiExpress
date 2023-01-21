import { Router } from "express";
import { getItems } from "../controllers/OrderController";
import { checkJWT } from "../middlewares/Session";

/**
 * A esta ruta solamente pueden acceder usuarios con sesion activa
 */
const router = Router();

router.get('/', checkJWT, getItems);

export { router };
