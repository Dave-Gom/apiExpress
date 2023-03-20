import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/database';
import { HeroSections } from '../../interfaces/Section.interface';
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
