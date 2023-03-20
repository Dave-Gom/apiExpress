import { Model } from 'sequelize';
import {
    HeroSection as HeroSectionInterface,
    HeroSections,
    OfertaSection as OfertaSectionInterface,
    OfertaSections,
    TextSection as TextSectionInterface,
    TextSections,
} from '../interfaces/Section.interface';
import { HeroSection } from '../models/Sectionables/HeroSection';
import { HeroSectionsPages } from '../models/Sectionables/HeroSectionsPages';
import { OfertaSection } from '../models/Sectionables/OfertaSection';
import { OfertasSectionPages } from '../models/Sectionables/OfertaSectionPages';
import { TextSection } from '../models/Sectionables/TextSection';
import { PageTextSections } from '../models/Sectionables/TextSectionsPages';

export const insertHeroSection = async (section: HeroSectionInterface, page: number, user: number) => {
    try {
        const responseInsert = await HeroSection.create<Model<HeroSectionInterface>>({
            ...section,
            author: user,
            updatedBy: user,
        });
        if (responseInsert) {
            const asignatePage = await HeroSectionsPages.create<Model<HeroSections>>({
                pageId: page,
                heroSectionId: responseInsert.dataValues.id,
            });
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
            const asignatePage = await OfertasSectionPages.create<Model<OfertaSections>>({
                pageId: page,
                ofertaSectionId: responseInsert.dataValues.id,
            });
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
            const asignatePage = await PageTextSections.create<Model<TextSections>>({
                pageId: page,
                textSectionId: responseInsert.dataValues.id,
            });
            return responseInsert;
        }
        return null;
    } catch (error) {
        console.error('Error al insertar la pagina ', error);
        return null;
    }
};
