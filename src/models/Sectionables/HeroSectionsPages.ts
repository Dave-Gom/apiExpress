import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/database';
import { HeroSections } from '../../interfaces/SectionInterface';
import User from '../user';

const HeroSectionsPages = sequelize.define<Model, HeroSections>(
    'heroSectionPages',
    {
        id: {
            type: DataTypes.NUMBER,
            autoIncrement: true,
            primaryKey: true,
        },
        pageId: {
            type: DataTypes.NUMBER,
            references: {
                model: User,
                key: 'id',
            },
        },
        heroSectionId: {
            type: DataTypes.NUMBER,
        },
    },
    {
        timestamps: true,
    }
);

export { HeroSectionsPages };
