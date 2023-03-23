import { Model } from 'sequelize-typescript';
import { PageInteface } from './Pages.interface';
import { HeroSection } from './Section.interface';

export interface HeroInstance extends Model<HeroSection> {
    addPages?: (obj: PageInstance) => Promise<HeroInstance>;
}

export interface PageInstance extends Model<PageInteface> {
    addHero?: (obj: HeroInstance) => Promise<PageInstance>;
}
