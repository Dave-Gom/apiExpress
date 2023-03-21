import { Model } from 'sequelize';
import { CategoriaInterface } from '../interfaces/Categoria.interface';
import { Categoria } from '../models/Categorias';

export const postCategoria = async (data: CategoriaInterface, user: number) => {
    try {
        const responseInsert = await Categoria.create<Model<CategoriaInterface>>({
            ...data,
            author: user,
            updatedBy: user,
        });
        if (responseInsert) return responseInsert;
        throw 'No se pudo crear la catgoria';
    } catch (error) {
        return new Error(`Error al crear la Categoria, ${error})`);
    }
};
