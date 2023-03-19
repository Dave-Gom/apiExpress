import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/database';
import { HeroSection } from '../../interfaces/Section.interface';
import { Page } from '../Pages';
import User from '../user';

const HeroSection = sequelize.define<Model, HeroSection>(
    'heroSection',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        opacity: {
            type: DataTypes.TINYINT,
            defaultValue: 1,
            allowNull: true,
        },
        author: {
            type: DataTypes.NUMBER,
            references: {
                model: User,
                key: 'id',
            },
        },
        pageId: {
            type: DataTypes.NUMBER,
            references: {
                model: Page,
                key: 'id',
            },
        },
        position: {
            type: DataTypes.NUMBER,
            allowNull: true,
        },
        updatedBy: {
            type: DataTypes.NUMBER,
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

HeroSection.belongsTo(User, {
    as: 'User',
    foreignKey: 'author',
    constraints: false,
});

HeroSection.belongsToMany(Page, {
    as: 'Page',
    through: 'heroSectionPages',
    foreignKey: 'pageId',
});

export { HeroSection };
