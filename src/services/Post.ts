import { Model } from 'sequelize';
import { PostInterface } from '../interfaces/Post.interface';
import { Post } from '../models/Post';

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
