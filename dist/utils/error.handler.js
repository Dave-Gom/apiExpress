"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttp = void 0;
const handleHttp = (res, error) => {
    // res.sendStatus(500);
    res.send({ error: error });
};
exports.handleHttp = handleHttp;
