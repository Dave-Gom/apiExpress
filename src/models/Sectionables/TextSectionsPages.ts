import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/database';
import { TextSections } from '../../interfaces/SectionInterface';
import { Page } from '../Pages';
import { TextSection } from './TextSection';

const PageTextSections = sequelize.define<Model, TextSections>(
    'textSectionPages',
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
        textSectionId: {
            type: DataTypes.INTEGER,
            references: {
                model: TextSection,
            },
        },
    },
    {
        timestamps: true,
    }
);

export { PageTextSections };
