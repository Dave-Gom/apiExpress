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
exports.registerUpload = void 0;
const Storage_1 = require("../models/Storage");
const registerUpload = ({ fileName, idUser, path }) => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield Storage_1.Storage.create({ fileName, idUser, path });
    return responseItem;
});
exports.registerUpload = registerUpload;
