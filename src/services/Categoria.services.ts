import { Model } from 'sequelize';
import { Categoria } from '../database/models/Categorias';
import { Post } from '../database/models/Post';
import { PostCategorias } from '../database/models/PostCategorias';
import { CategoriaInterface, PostCategoriasInterface } from '../interfaces/Categoria.interface';

export const postCategoria = async (data: CategoriaInterface, user: number) => {
    try {
        const responseInsert = await Categoria.create<Model<CategoriaInterface>>({
            ...data,
            author: user,
            updatedBy: user,
        });
        if (responseInsert) return responseInsert;
        return null;
    } catch (error) {
        return null;
    }
};

export const getCategorias = async () => {
    try {
        const responseInsert = await Categoria.findAll<Model<CategoriaInterface>>({ where: { deletedAt: null } });
        if (responseInsert) return responseInsert;
        return null;
    } catch (error) {
        return null;
    }
};

export const getCategoria = async (id: string) => {
    try {
        const categoria = await Categoria.findOne<Model<CategoriaInterface>>({ where: { id, deletedAt: null } });
        if (categoria !== null) return categoria;
        return null;
    } catch (error) {
        return null;
    }
};

export const putCategoria = async ({ active, nombre }: CategoriaInterface, id: string, user: number) => {
    try {
        const categoria = await Categoria.update<Model<CategoriaInterface>>(
            { active, nombre, updatedBy: user },
            {
                where: { id },
            }
        );
        if (categoria !== null) return 'Actualizado exitosamente';
        return null;
    } catch (error) {
        return null;
    }
};

export const softDeleteCategoria = async (id: string, user: number) => {
    try {
        const categoria = await Categoria.update<Model<CategoriaInterface>>(
            { updatedBy: user, deletedAt: new Date() },
            {
                where: { id },
            }
        );
        if (categoria !== null) return { status: 'ok' };
        return null;
    } catch (error) {
        return null;
    }
};

export const attachPost = async (idCategoria: number, idPost: number) => {
    try {
        const categoria = await Categoria.findByPk<Model<CategoriaInterface>>(idCategoria);
        const post = await Post.findByPk<Model<CategoriaInterface>>(idPost);

        if (categoria && post) {
            const relacion = await PostCategorias.create<Model<PostCategoriasInterface>>({
                idCategoria: categoria.dataValues.id,
                idPost: post.dataValues.id,
            });
            console.log(relacion);

            if (relacion) {
                return relacion;
            }
        }
        return null;
    } catch (error) {
        console.log('Hubo un error', error);
        return null;
    }
};
