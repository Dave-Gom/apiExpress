import { Request, Response } from "express";
import { deleteCar, getCar, getICars as getCars, insertCar, updateCar } from "../services/Item";
import { handleHttp } from "../utils/error.handler";

export const getItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getCar(id);
        if (response) {
            res.send(response);
        }
        else
            throw "No se pudieron optener el auto con id" + id;
    } catch (error) {
        handleHttp(res, `${error}`)
    }

};

export const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars();
        if (response) {
            res.send(response)
        }
        else
            throw "No se pudieron optener los autos";
    } catch (error) {
        handleHttp(res, `${error}`)
    }

};

export const updateItem = async ({ body, params }: Request, res: Response) => {
    try {
        const { id } = params;

        const response = await updateCar(id, body);
        if (response) {
            res.send(response)
        }
        else
            throw "No se pudieron optener los autos";
    } catch (error) {
        handleHttp(res, `${error}`)
    }

}

export const postItem = async (req: Request, res: Response,) => {
    try {
        const datos = await insertCar(req.body);
        if (datos)
            res.send(datos);
        else
            throw "Error al crear el registro";

    } catch (error) {
        handleHttp(res, `${error}`)
    }

}

export const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const deleteResponse = await deleteCar(id);
        if (deleteResponse)
            res.send(deleteResponse);
        else
            throw "Error al al eliminar el registro";

    } catch (error) {
        handleHttp(res, `${error}`)
    }

}