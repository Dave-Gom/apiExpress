import { Model } from 'sequelize';
import { SocialMedia } from '../database/models/SocialMedia';
import { SocialMediaInterface } from '../interfaces/SocialMedia';

export const postSocialMedia = async (data: SocialMediaInterface, user: number) => {
    try {
        const responseInsert = await SocialMedia.create<Model<SocialMediaInterface>>({
            ...data,
            author: user,
            updatedBy: user,
        });
        if (responseInsert) {
            return responseInsert;
        }
        return null;
    } catch (error) {
        console.error('Error al crear la publicacion ', error);
        return null;
    }
};

export const getSocialMedia = async (user: number) => {
    try {
        const response = await SocialMedia.findAll<Model<SocialMediaInterface>>();
        if (response) {
            return response;
        }
        return null;
    } catch (error) {
        console.error('Error al crear la publicacion ', error);
        return null;
    }
};

export const putSocialMedia = async (data: SocialMediaInterface, id: number, user: number) => {
    try {
        const response = await SocialMedia.update<Model<SocialMediaInterface>>(
            {
                ...data,
                updatedBy: user,
            },
            { where: { id } }
        );
        if (response) {
            const data = await SocialMedia.findByPk<Model<SocialMediaInterface>>(id);
            return data;
        }
        return null;
    } catch (error) {
        console.error('Error al crear la publicacion ', error);
        return null;
    }
};

export const deleteSocialMedia = async (id: number, user: number) => {
    try {
        const response = await SocialMedia.update<Model<SocialMediaInterface>>(
            {
                updatedBy: user,
            },
            { where: { id } }
        );
        if (response.length > 0) {
            const deleteResponse = await SocialMedia.destroy<Model<SocialMediaInterface>>({ where: { id } });
            return deleteResponse;
        }
        return null;
    } catch (error) {
        console.error('Error al crear la publicacion ', error);
        return null;
    }
};
