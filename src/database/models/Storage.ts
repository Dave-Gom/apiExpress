import { DataTypes } from 'sequelize';
import { Model } from 'sequelize-typescript';
import { StorageInterface } from '../../interfaces/Storage.interface';
import { sequelize } from '../database';

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
