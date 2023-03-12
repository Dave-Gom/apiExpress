"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.virifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const clientSecret = process.env.CLIENT_SECRET || "clientSecret";
const generateToken = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const jwt = (0, jsonwebtoken_1.sign)({ id }, clientSecret);
    return jwt;
});
exports.generateToken = generateToken;
const virifyToken = (jwt) => {
    const isOk = (0, jsonwebtoken_1.verify)(jwt, clientSecret);
    return isOk;
};
exports.virifyToken = virifyToken;
