"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const OrderController_1 = require("../controllers/OrderController");
const Session_1 = require("../middlewares/Session");
/**
 * A esta ruta solamente pueden acceder usuarios con sesion activa
 */
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', Session_1.checkJWT, OrderController_1.getItems);
