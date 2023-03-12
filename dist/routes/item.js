"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const ItemController_1 = require("../controllers/ItemController");
const log_1 = require("../middlewares/log");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', log_1.logMiddleware, ItemController_1.getItems);
router.get('/:id', ItemController_1.getItem);
router.post('/', ItemController_1.postItem);
router.put('/:id', ItemController_1.updateItem);
router.delete('/:id', ItemController_1.deleteItem);
