import { DataType, Model } from 'sequelize-typescript';
import { HeroSection } from '../../../interfaces/Section.interface';
import { sequelize } from '../../database';
import { User } from '../user';

const HeroSection = sequelize.define<Model, HeroSection>(
    'heroSection',
    {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        image: {
            type: DataType.STRING,
            allowNull: true,
        },
        title: {
            type: DataType.STRING,
            allowNull: true,
        },
        content: {
            type: DataType.STRING,
            allowNull: true,
        },
        opacity: {
            type: DataType.TINYINT,
            defaultValue: 1,
            allowNull: true,
        },
        author: {
            type: DataType.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
        },
        position: {
            type: DataType.INTEGER,
            allowNull: true,
        },
        updatedBy: {
            type: DataType.INTEGER,
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

export { HeroSection };
