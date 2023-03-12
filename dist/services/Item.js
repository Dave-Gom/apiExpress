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
exports.deleteCar = exports.updateCar = exports.getCar = exports.getICars = exports.insertCar = void 0;
const Item_1 = require("../models/Item");
const insertCar = (Car) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseInsert = yield Item_1.Item.create(Object.assign({}, Car));
        if (responseInsert)
            return responseInsert;
        return null;
    }
    catch (error) {
        console.error("Error al insertar el dato ");
        return null;
    }
});
exports.insertCar = insertCar;
const getICars = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseGet = yield Item_1.Item.findAll();
        if (responseGet) {
            return responseGet;
        }
        return null;
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.getICars = getICars;
const getCar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseGet = yield Item_1.Item.findOne({ where: { id } });
        if (responseGet) {
            return responseGet;
        }
        return null;
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.getCar = getCar;
const updateCar = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseUpdate = yield Item_1.Item.update(data, { where: { id } });
        if (responseUpdate) {
            return responseUpdate;
        }
        return null;
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.updateCar = updateCar;
const deleteCar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(id);
        const responseDelete = yield Item_1.Item.destroy({ where: { id: parseInt(id, 10) } });
        if (responseDelete) {
            return responseDelete;
        }
        return null;
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.deleteCar = deleteCar;
