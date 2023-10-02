import { DataType, Model } from 'sequelize-typescript';
import { SocialMediaInterface } from '../../interfaces/SocialMedia';
import { sequelize } from '../database';
import { User } from './user';

const SocialMedia = sequelize.define<Model, SocialMediaInterface>(
    'media',
    {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        enlace: {
            type: DataType.STRING,
            allowNull: false,
            unique: true,
        },
        media: {
            type: DataType.STRING,
            allowNull: false,
            unique: true,
        },
        username: {
            type: DataType.STRING,
            allowNull: true,
            unique: true,
        },
        updatedBy: {
            type: DataType.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
            allowNull: false,
        },
        author: {
            type: DataType.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
            allowNull: false,
        },
    },
    {
        timestamps: true,
        deletedAt: true,
    }
);

export { SocialMedia };
