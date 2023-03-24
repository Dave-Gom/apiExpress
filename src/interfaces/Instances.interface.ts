import { Model } from 'sequelize-typescript';
import { PageInteface } from './Pages.interface';
import { HeroSection, OfertaSectionInterface } from './Section.interface';

export interface HeroInstance extends Model<HeroSection> {
    addPages?: (obj: PageInstance) => Promise<HeroInstance>;
}

export interface PageInstance extends Model<PageInteface> {
    addHero?: (obj: HeroInstance) => Promise<PageInstance>;
    addOfertaSection?: (obj: OfertaInstance) => Promise<PageInstance>;
}

export interface OfertaInstance extends Model<OfertaSectionInterface> {
    addPages?: (obj: PageInstance) => Promise<OfertaInstance>;
}
