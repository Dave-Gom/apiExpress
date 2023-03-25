import { Model } from 'sequelize-typescript';
import { Page } from '../database/models/Pages';
import { ListSection } from '../database/models/Sectionables/List.section';
import { OfertaSection } from '../database/models/Sectionables/OfertaSection';
import { TextSection } from '../database/models/Sectionables/TextSection';
import { PageInteface } from '../interfaces/Pages.interface';

export const insertPage = async (page: PageInteface, user: number) => {
    try {
        const responseInsert = await Page.create(user ? { ...page, author: user, updatedBy: user } : { ...page });
        if (responseInsert) return responseInsert;
        return null;
    } catch (error) {
        console.error('Error al insertar la pagina ', error);
        return null;
    }
};

export const getPagesService = async () => {
    try {
        const responseInsert = await Page.findAll({
            where: { deletedAt: null },
            include: [
                'authorDetails',
                'hero',
                TextSection,
                OfertaSection,
                {
                    model: ListSection,
                    attributes: { include: ['title', 'description', 'limit', 'author'] },
                },
            ],
        });
        if (responseInsert) return responseInsert;
        return null;
    } catch (error) {
        console.error('Error al optener las paginas');
        return null;
    }
};

export const updatePage = async (id: string, { active, name }: PageInteface, user: number) => {
    try {
        const responseInsert = await Page.update<Model<PageInteface>>(
            { active, name, updatedBy: user },
            { where: { id } }
        );
        if (responseInsert) return responseInsert;
        return null;
    } catch (error) {
        console.error('Error al insertar la pagina ');
        return null;
    }
};

export const detelePageService = async (id: string, user: number) => {
    try {
        const responseInsert = await Page.update({ updatedBy: user, deletedAt: new Date() }, { where: { id } });
        if (responseInsert) return responseInsert;
        return null;
    } catch (error) {
        console.error('Error al insertar la pagina ', error);
        return null;
    }
};
