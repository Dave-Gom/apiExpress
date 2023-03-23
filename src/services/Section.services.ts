import { Model } from 'sequelize-typescript';
import { HeroSection } from '../database/models/Sectionables/HeroSection';
import { OfertaSection } from '../database/models/Sectionables/OfertaSection';
import { TextSection } from '../database/models/Sectionables/TextSection';
import {
    HeroSection as HeroSectionInterface,
    OfertaSection as OfertaSectionInterface,
    TextSection as TextSectionInterface,
} from '../interfaces/Section.interface';

export const insertHeroSection = async (section: HeroSectionInterface, page: number, user: number) => {
    try {
        const responseInsert = await HeroSection.create<Model<HeroSectionInterface>>({
            ...section,
            author: user,
            updatedBy: user,
        });
        if (responseInsert) {
            return responseInsert;
        }
        return null;
    } catch (error) {
        console.error('Error al insertar la pagina ', error);
        return null;
    }
};

export const insertOfertaSection = async (section: OfertaSectionInterface, page: number, user: number) => {
    try {
        const responseInsert = await OfertaSection.create<Model<OfertaSectionInterface>>({
            ...section,
            author: user,
            updatedBy: user,
        });
        if (responseInsert) {
            return responseInsert;
        }
        return null;
    } catch (error) {
        console.error('Error al insertar la pagina ', error);
        return null;
    }
};

export const insertTextSection = async (section: TextSectionInterface, page: number, user: number) => {
    try {
        const responseInsert = await TextSection.create<Model<TextSectionInterface>>({
            ...section,
            author: user,
            updatedBy: user,
        });
        if (responseInsert) {
            return responseInsert;
        }
        return null;
    } catch (error) {
        console.error('Error al insertar la pagina ', error);
        return null;
    }
};
