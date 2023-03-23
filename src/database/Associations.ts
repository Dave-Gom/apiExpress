import { Model } from 'sequelize-typescript';
import { PageInteface } from '../interfaces/Pages.interface';
import { HeroSection as HeroSectionInterface } from '../interfaces/Section.interface';
import { Page } from './models/Pages';
import { HeroSection } from './models/Sectionables/HeroSection';
import { User } from './models/user';

export interface HeroInstance extends Model<HeroSectionInterface> {
    addPages?: (obj: PageInstance) => Promise<HeroInstance>;
}

export interface PageInstance extends Model<PageInteface> {
    addHero?: (obj: HeroInstance) => Promise<PageInstance>;
}

// uno a muchos
User.hasMany(Page, {
    foreignKey: 'author',
    as: 'pages',
});
User.hasMany(Page, {
    foreignKey: 'updatedBy',
    as: 'updatedPages',
});

Page.belongsTo(User, {
    as: 'authorDetails',
    foreignKey: 'author',
});
Page.belongsTo(User, {
    as: 'updatedByDetails',
    foreignKey: 'updatedBy',
});

Page.belongsToMany(HeroSection, {
    through: 'pageHero',
    as: 'hero',
});

HeroSection.belongsToMany(Page, {
    through: 'pageHero',
    as: 'pages',
});
