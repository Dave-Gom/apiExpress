import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/database';
import { OfertaSection } from '../../interfaces/Section.interface';
import { Page } from '../Pages';
import User from '../user';
import { OfertasSectionPages } from './OfertaSectionPages';

const OfertaSection = sequelize.define<Model, OfertaSection>(
    'ofertaSection',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        author: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
            allowNull: false,
        },
        leftImage: {
            type: DataTypes.STRING,
        },
        navegate: {
            type: DataTypes.STRING,
        },
        pageId: {
            type: DataTypes.INTEGER,
            references: {
                model: Page,
                key: 'id',
            },
        },
        position: {
            type: DataTypes.INTEGER,
        },
        principalImage: {
            type: DataTypes.STRING,
        },
        rigthImage: {
            type: DataTypes.STRING,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        updatedBy: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

OfertaSection.belongsTo(User, {
    foreignKey: 'author',
});

OfertaSection.belongsToMany(Page, {
    through: OfertasSectionPages,
});

export { OfertaSection };
