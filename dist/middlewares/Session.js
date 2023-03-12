"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJWT = void 0;
const jdt_handler_1 = require("../utils/jdt.handler");
const checkJWT = (req, res, next) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = (0, jdt_handler_1.virifyToken)(`${jwt}`);
        if (!isUser) {
            res.status(401);
            res.send("Invalid JWT");
        }
        else {
            req.user = isUser;
            next();
        }
    }
    catch (error) {
        res.status(402);
        res.send("Sesion no valida");
    }
};
exports.checkJWT = checkJWT;
