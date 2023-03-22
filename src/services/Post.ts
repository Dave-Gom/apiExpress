import { Model } from 'sequelize';
import { Post } from '../database/models/Post';
import { PostInterface } from '../interfaces/Post.interface';

export const insertPost = async (data: PostInterface, user: number) => {
    try {
        const responseInsert = await Post.create<Model<PostInterface>>({ ...data, author: user, updatedBy: user });
        if (responseInsert) return responseInsert;
        return null;
    } catch (error) {
        console.error('Error al crear la publicacion ', error);
        return null;
    }
};

export const getPosts = async () => {
    try {
        const posts = await Post.findAll<Model<PostInterface>>({ where: { deletedAt: null } });
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

export const putPost = async ({ content, image, title }: PostInterface, id: string, user: number) => {
    try {
        const posts = await Post.update<Model<PostInterface>>(
            { content, image, title, updatedBy: user },
            { where: { id, deletedAt: null } }
        );
        if (posts) return posts;
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
