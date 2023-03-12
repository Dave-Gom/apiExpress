"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const AuthController_1 = require("../controllers/AuthController");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/login', AuthController_1.LoginController);
router.post('/register', AuthController_1.RegisterController);
