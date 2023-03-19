import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/database';
import { TextSection } from '../../interfaces/Section.interface';
import { Page } from '../Pages';
import User from '../user';
import { PageTextSections } from './TextSectionsPages';

const TextSection = sequelize.define<Model, TextSection>(
    'textSections',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        position: {
            type: DataTypes.NUMBER,
        },
        pageId: {
            type: DataTypes.NUMBER,
            references: {
                model: Page,
                key: 'id',
            },
        },
        updatedBy: {
            type: DataTypes.NUMBER,
            references: {
                model: User,
                key: 'id',
            },
        },
        author: {
            type: DataTypes.NUMBER,
            references: {
                model: User,
                key: 'id',
            },
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

TextSection.belongsTo(User, {
    foreignKey: 'author',
    constraints: false,
});

TextSection.belongsToMany(Page, {
    through: PageTextSections,
    foreignKey: 'pageId',
});

export { TextSection };
