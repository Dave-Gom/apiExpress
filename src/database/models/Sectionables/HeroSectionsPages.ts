import { DataTypes, Model } from 'sequelize';
import { HeroSections } from '../../../interfaces/Section.interface';
import { sequelize } from '../../database';
import { Page } from '../Pages';
import { HeroSection } from './HeroSection';

const HeroSectionsPages = sequelize.define<Model, HeroSections>(
    'heroSectionPages',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        pageId: {
            type: DataTypes.INTEGER,
            references: {
                model: Page,
                key: 'id',
            },
        },
        heroSectionId: {
            type: DataTypes.INTEGER,
            references: {
                model: HeroSection,
                key: 'id',
            },
        },
    },
    {
        timestamps: true,
    }
);

export { HeroSectionsPages };
