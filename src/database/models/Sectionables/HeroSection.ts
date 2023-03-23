import { DataTypes } from 'sequelize';
import { Model } from 'sequelize-typescript';
import { HeroSection } from '../../../interfaces/Section.interface';
import { sequelize } from '../../database';
import { Page } from '../Pages';
import { User } from '../user';

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
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
        },
        position: {
            type: DataTypes.INTEGER,
            allowNull: true,
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

HeroSection.belongsTo(User, {
    as: 'User',
    foreignKey: 'author',
    constraints: false,
});

HeroSection.belongsToMany(Page, {
    as: 'Page',
    through: 'heroSectionPages',
});

export { HeroSection };
