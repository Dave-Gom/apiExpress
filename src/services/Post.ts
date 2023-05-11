import { Model } from 'sequelize-typescript';
import { Categoria } from '../database/models/Categorias';
import { Post } from '../database/models/Post';
import { User } from '../database/models/user';
import { CategoriaInstance, PostInstance } from '../interfaces/Instances.interface';
import { PostInterface } from '../interfaces/Post.interface';

export const insertPost = async (data: PostInterface, user: number, categorias?: number[]) => {
    //probar si puedo recibir arrays de CategoriaInstance
    try {
        const responseInsert = await Post.create<PostInstance>(
            { ...data, author: user, updatedBy: user },
            { include: [Categoria] }
        );
        if (responseInsert) {
            if (categorias) {
                for (const categoriaId of categorias) {
                    const categoria = await Categoria.findByPk<CategoriaInstance>(categoriaId, { include: [Post] });
                    console.log(`Categoria No. ${categoriaId}`, categoria);
                    if (categoria && categoria.addPost && responseInsert && responseInsert.addCategoria) {
                        await categoria.addPost(responseInsert);
                        await responseInsert.addCategoria(categoria);
                    }
                }
            }
            return responseInsert;
        }
        return null;
    } catch (error) {
        console.error('Error al crear la publicacion ', error);
        return null;
    }
};

export const getPosts = async () => {
    try {
        const posts = await Post.findAll<PostInstance>({
            where: { deletedAt: null },
            include: [
                {
                    model: User,
                    foreignKey: 'author',
                    as: 'postAuthor',
                    attributes: {
                        exclude: ['password', 'createdAt', 'updatedAt'],
                    },
                },
                {
                    model: User,
                    foreignKey: 'updatedBy',
                    as: 'editor',
                    attributes: {
                        exclude: ['password', 'createdAt', 'updatedAt'],
                    },
                },
                Categoria,
            ],
        });
        if (posts) return posts;
        return null;
    } catch (error) {
        console.error('Error al leer las publicaciones ', error);
        return null;
    }
};

export const getPost = async (id: string) => {
    try {
        const posts = await Post.findOne<Model<PostInterface>>({ where: { id, deletedAt: null } });
        if (posts) return posts;
        return null;
    } catch (error) {
        console.error('Error al leer las publicaciones ', error);
        return null;
    }
};

export const putPost = async (postData: PostInterface, id: string, user: number, categorias?: number[]) => {
    try {
        const posts = await Post.update<Model<PostInterface>>(
            { ...postData, updatedBy: user },
            { where: { id, deletedAt: null } }
        );
        if (posts) {
            const response = await Post.findOne<PostInstance>({
                where: { id, deletedAt: null },
                include: [Categoria],
            });
            if (categorias) {
                for (const categoriaId of categorias) {
                    const categoria = await Categoria.findByPk<CategoriaInstance>(categoriaId, { include: [Post] });
                    console.log(`Categoria No. ${categoriaId}`, categoria);
                    if (categoria && categoria.addPost && response && response.addCategoria) {
                        await categoria.addPost(response);
                        await response.addCategoria(categoria);
                    }
                }
            }
            return posts;
        }
        return null;
    } catch (error) {
        console.error('Error al leer las publicaciones ', error);
        return null;
    }
};

export const delPost = async (id: string, user: number) => {
    try {
        const posts = await Post.update<Model<PostInterface>>(
            { deletedAt: new Date(), updatedBy: user },
            { where: { id } }
        );
        if (posts) return posts;
        return null;
    } catch (error) {
        console.error('Error al leer las publicaciones ', error);
        return null;
    }
};
