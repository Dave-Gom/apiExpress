import { CarInterface } from "../interfaces/car.interface";
import { Item } from "../models/Item";


export const insertCar = async (Car: CarInterface) => {
    try {
        const responseInsert = await Item.create({ ...Car });

        if (responseInsert)
            return responseInsert;

        return null;
    } catch (error) {
        console.error("Error al insertar el dato ");
        return null;
    }
}

export const getICars = async () => {
    try {
        const responseGet = await Item.findAll();

        if (responseGet) {
            return responseGet;
        }

        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getCar = async (id: string) => {
    try {
        const responseGet = await Item.findOne({ where: { id } });

        if (responseGet) {
            return responseGet;
        }
        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const updateCar = async (id: string, data: CarInterface) => {
    try {
        const responseUpdate = await Item.update(data, { where: { id } });

        if (responseUpdate) {
            return responseUpdate;
        }
        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const deleteCar = async (id: string) => {
    try {
        console.log(id);

        const responseDelete = await Item.destroy({ where: { id: parseInt(id, 10) } });
        if (responseDelete) {
            return responseDelete;
        }
        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}