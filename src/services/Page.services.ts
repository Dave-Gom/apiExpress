import { PageInteface } from '../interfaces/Pages.interface';
import { Page } from '../models/Pages';

export const insertPage = async (page: PageInteface) => {
    try {
        const responseInsert = await Page.create({ ...page });
        if (responseInsert) return responseInsert;
        return null;
    } catch (error) {
        console.error('Error al insertar la pagina ');
        return null;
    }
};

export const getPagesService = async () => {
    try {
        const responseInsert = await Page.findAll();
        if (responseInsert) return responseInsert;
        return null;
    } catch (error) {
        console.error('Error al optener las paginas');
        return null;
    }
};
