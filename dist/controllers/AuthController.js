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
exports.LoginController = exports.RegisterController = void 0;
const auth_1 = require("../services/auth");
const error_handler_1 = require("../utils/error.handler");
const RegisterController = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseRegister = yield (0, auth_1.registerNewUser)(body);
        if (responseRegister) {
            res.send(responseRegister);
        }
        else
            throw "No se pudo crear el usuaro";
    }
    catch (error) {
        (0, error_handler_1.handleHttp)(res, `${error}`);
    }
});
exports.RegisterController = RegisterController;
const LoginController = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dato = yield (0, auth_1.loginUser)(body);
        res.send(dato);
    }
    catch (error) {
    }
});
exports.LoginController = LoginController;
