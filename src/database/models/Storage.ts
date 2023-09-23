import { DataType, Model } from 'sequelize-typescript';
import { StorageInterface } from '../../interfaces/Storage.interface';
import { sequelize } from '../database';
import { User } from './user';

export const Storage = sequelize.define<Model, StorageInterface>(
    'storage',
    {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fileName: {
            type: DataType.STRING,
        },
        idUser: {
            type: DataType.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            },
        },
        path: {
            type: DataType.STRING,
        },
    },
    {
        timestamps: true,
    }
);
