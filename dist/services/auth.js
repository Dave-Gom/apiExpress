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
exports.loginUser = exports.registerNewUser = void 0;
const user_1 = require("../models/user");
const jdt_handler_1 = require("../utils/jdt.handler");
const password_handler_1 = require("../utils/password.handler");
const registerNewUser = ({ email, password, name }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const check = yield user_1.User.findOne({ where: { email } });
        if (check)
            throw "Usuario ya existe";
        else {
            const passwordHash = yield (0, password_handler_1.encript)(password);
            const registerNewUser = yield user_1.User.create({ email, password: passwordHash, name });
            if (registerNewUser) {
                return registerNewUser;
            }
            else
                throw "No se pudo crear el usuario";
        }
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.registerNewUser = registerNewUser;
const loginUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const check = yield user_1.User.findOne({ where: { email } });
        if (check && check.dataValues) {
            const isCorrect = yield (0, password_handler_1.verify)(password, check.dataValues.password);
            if (isCorrect) {
                const token = yield (0, jdt_handler_1.generateToken)(check.dataValues.email);
                const data = { token, user: check.dataValues };
                return data;
            }
            return "Contraseña incorrecta";
        }
        else
            throw "No existe usuario";
    }
    catch (error) {
        return error;
    }
});
exports.loginUser = loginUser;
