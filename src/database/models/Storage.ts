import { DataType, Model } from 'sequelize-typescript';
import { StorageInterface } from '../../interfaces/Storage.interface';
import { sequelize } from '../database';

export const Storage = sequelize.define<Model, StorageInterface>(
    'storage',
    {
        fileName: {
            type: DataType.STRING,
        },
        idUser: {
            type: DataType.STRING,
        },
        path: {
            type: DataType.STRING,
        },
    },
    {
        timestamps: true,
    }
);
