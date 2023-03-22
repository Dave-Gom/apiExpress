import { DataTypes, Model } from 'sequelize';
import { TextSections } from '../../../interfaces/Section.interface';
import { sequelize } from '../../database';
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
                key: 'id',
            },
        },
    },
    {
        timestamps: true,
    }
);

export { PageTextSections };
