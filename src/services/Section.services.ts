import { Model } from 'sequelize-typescript';
import { Page } from '../database/models/Pages';
import { HeroSection } from '../database/models/Sectionables/HeroSection';
import { OfertaSection } from '../database/models/Sectionables/OfertaSection';
import { TextSection } from '../database/models/Sectionables/TextSection';
import { HeroInstance, PageInstance } from '../interfaces/Instances.interface';
import {
    HeroSection as HeroSectionInterface,
    OfertaSection as OfertaSectionInterface,
    TextSection as TextSectionInterface,
} from '../interfaces/Section.interface';

export const insertHeroSection = async (section: HeroSectionInterface, page: number, user: number) => {
    try {
        const responseInsert = await HeroSection.create<HeroInstance>(
            {
                ...section,
                author: user,
                updatedBy: user,
            },
            {
                include: 'pages',
            }
        );
        const pagina = await Page.findByPk<PageInstance>(page, { include: 'hero' });
        if (responseInsert && responseInsert.addPages && pagina && pagina.addHero) {
            //Puercaso, ver para cambiar en el futuro
            await responseInsert.addPages(pagina);
            await pagina.addHero(responseInsert);
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

export const getHeros = async (type: string) => {
    try {
        const herosWithPage = await HeroSection.findAll<Model<HeroInstance>>({ include: 'pages' });
        if (herosWithPage) {
            return herosWithPage;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
};
