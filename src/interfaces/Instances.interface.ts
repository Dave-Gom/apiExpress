import { Model } from 'sequelize-typescript';
import { PageInteface } from './Pages.interface';
import { HeroSection, OfertaSectionInterface, TextSectionInterface } from './Section.interface';

export interface PageInstance extends Model<PageInteface> {
    addHero?: (obj: HeroInstance) => Promise<PageInstance>;
    addOfertaSection?: (obj: OfertaInstance) => Promise<PageInstance>;
    addTextSection?: (obj: TextSectionInstance) => Promise<PageInstance>;
}

export interface HeroInstance extends Model<HeroSection> {
    addPages?: (obj: PageInstance) => Promise<HeroInstance>;
}
export interface OfertaInstance extends Model<OfertaSectionInterface> {
    addPages?: (obj: PageInstance) => Promise<OfertaInstance>;
}

export interface TextSectionInstance extends Model<TextSectionInterface> {
    addPages?: (obj: PageInstance) => Promise<TextSectionInstance>;
}
