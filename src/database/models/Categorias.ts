import { DataType, Model } from 'sequelize-typescript';
import { CategoriaInterface } from '../../interfaces/Categoria.interface';
import { sequelize } from '../database';
import { User } from './user';

const Categoria = sequelize.define<Model, CategoriaInterface>(
    'categorias',
    {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        active: {
            type: DataType.BOOLEAN,
            defaultValue: false,
        },
        author: {
            type: DataType.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
        },
        nombre: {
            type: DataType.STRING,
            allowNull: false,
        },
        updatedBy: {
            type: DataType.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
        },
        deletedAt: {
            type: DataType.DATE,
            defaultValue: null,
        },
    },
    {
        timestamps: true,
    }
);

export { Categoria };
