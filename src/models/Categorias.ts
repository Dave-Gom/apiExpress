import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database';
import { CategoriaInterface } from '../interfaces/Categoria.interface';
import User from './user';

const Categoria = sequelize.define<Model, CategoriaInterface>(
    'categorias',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        author: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
        },
        nombre: {
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
        deletedAt: {
            type: DataTypes.DATE,
            defaultValue: null,
        },
    },
    {
        timestamps: true,
    }
);

Categoria.belongsTo(User, {
    as: 'User',
    foreignKey: 'author',
});

export { Categoria };
