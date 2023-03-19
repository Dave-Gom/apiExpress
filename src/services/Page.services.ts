import { PageInteface } from '../interfaces/Pages.interface';
import { Page } from '../models/Pages';

export const insertPage = async (page: PageInteface) => {
    try {
        const responseInsert = await Page.create({ ...page });
        if (responseInsert) return responseInsert;
        return null;
    } catch (error) {
        console.error('Error al insertar la pagina ', error);
        return null;
    }
};

export const getPagesService = async () => {
    try {
        const responseInsert = await Page.findAll({ where: { deletedAt: null } });
        if (responseInsert) return responseInsert;
        return null;
    } catch (error) {
        console.error('Error al optener las paginas');
        return null;
    }
};

export const updatePage = async (id: string, { active, name }: PageInteface, user: number) => {
    try {
        const responseInsert = await Page.update({ active, name, updatedBy: user }, { where: { id } });
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
