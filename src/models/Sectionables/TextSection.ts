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
            autoIncrement: true,
            primaryKey: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
            allowNull: false,
        },
        position: {
            type: DataTypes.INTEGER,
        },
        updatedBy: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
        },
    },
    {
        timestamps: true,
    }
);

TextSection.belongsTo(User, {
    foreignKey: 'author',
});

TextSection.belongsToMany(Page, {
    through: PageTextSections,
});

export { TextSection };
