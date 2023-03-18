import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database';
import { StorageInterface } from '../interfaces/Storage.interface';

export const Storage = sequelize.define<Model, StorageInterface>(
    'storage',
    {
        fileName: {
            type: DataTypes.STRING,
        },
        idUser: {
            type: DataTypes.STRING,
        },
        path: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: true,
    }
);
