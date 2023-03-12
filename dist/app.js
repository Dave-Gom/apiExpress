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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const database_1 = require("./database/database");
const index_1 = require("./routes/index");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const PORT = process.env.PORT || 3000;
        const app = (0, express_1.default)();
        app.use(express_1.default.urlencoded({
            extended: true
        }));
        app.use(express_1.default.json());
        app.use((0, cors_1.default)());
        app.use(index_1.router);
        const bd = yield database_1.sequelize.sync();
        if (bd)
            console.log("Se la bd se ha conectado y actualizado exitosamente");
        else
            console.log("Ha ocurrido un error con la bd", bd);
        app.listen(PORT, () => {
            console.log(`listo por el puerto ${PORT}`);
        });
    }
    catch (error) {
        console.error('Ha ocurrido un error', error);
    }
});
main();
