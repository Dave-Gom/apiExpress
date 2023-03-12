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
exports.deleteItem = exports.postItem = exports.updateItem = exports.getItems = exports.getItem = void 0;
const Item_1 = require("../services/Item");
const error_handler_1 = require("../utils/error.handler");
const getItem = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, Item_1.getCar)(id);
        if (response) {
            res.send(response);
        }
        else
            throw "No se pudieron optener el auto con id" + id;
    }
    catch (error) {
        (0, error_handler_1.handleHttp)(res, `${error}`);
    }
});
exports.getItem = getItem;
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, Item_1.getICars)();
        if (response) {
            res.send(response);
        }
        else
            throw "No se pudieron optener los autos";
    }
    catch (error) {
        (0, error_handler_1.handleHttp)(res, `${error}`);
    }
});
exports.getItems = getItems;
const updateItem = ({ body, params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, Item_1.updateCar)(id, body);
        if (response) {
            res.send(response);
        }
        else
            throw "No se pudieron optener los autos";
    }
    catch (error) {
        (0, error_handler_1.handleHttp)(res, `${error}`);
    }
});
exports.updateItem = updateItem;
const postItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const datos = yield (0, Item_1.insertCar)(req.body);
        if (datos)
            res.send(datos);
        else
            throw "Error al crear el registro";
    }
    catch (error) {
        (0, error_handler_1.handleHttp)(res, `${error}`);
    }
});
exports.postItem = postItem;
const deleteItem = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const deleteResponse = yield (0, Item_1.deleteCar)(id);
        if (deleteResponse)
            res.send(deleteResponse);
        else
            throw "Error al al eliminar el registro";
    }
    catch (error) {
        (0, error_handler_1.handleHttp)(res, `${error}`);
    }
});
exports.deleteItem = deleteItem;
