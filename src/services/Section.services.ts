import { Model } from 'sequelize';
import { HeroSection as HeroSectionInterface, HeroSections } from '../interfaces/Section.interface';
import { HeroSection } from '../models/Sectionables/HeroSection';
import { HeroSectionsPages } from '../models/Sectionables/HeroSectionsPages';

export const insertHeroSectionSection = async (section: HeroSectionInterface, page: number, user: number) => {
    try {
        const responseInsert = await HeroSection.create<Model<HeroSectionInterface>>({
            ...section,
            pageId: page,
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
